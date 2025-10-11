import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const {
      title,
      firstName,
      surname,
      email,
      telephone,
      address1,
      address2,
      postcode,
      country,
      studentName,
      schoolYear,
      currentSchool,
      goal,
      servicesRequired,
      tutoringRequirements,
      datesAndTimes,
      additionalInfo
    } = await request.json()

    // Validate required fields
    const requiredFields = {
      title: 'Title',
      firstName: 'First Name',
      surname: 'Surname',
      email: 'Email',
      telephone: 'Telephone',
      servicesRequired: 'Services Required'
    }

    for (const [field, label] of Object.entries(requiredFields)) {
      if (!eval(field) || eval(field).trim() === '') {
        return NextResponse.json(
          { error: `${label} is a required field` },
          { status: 400 }
        )
      }
    }

    // Validate tutoring requirements
    if (!tutoringRequirements || !Array.isArray(tutoringRequirements) || tutoringRequirements.length === 0) {
      return NextResponse.json(
        { error: 'Please select at least one tutoring requirement' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      )
    }

    // 创建邮件传输器
    const smtpPort = parseInt(process.env.SMTP_PORT || '587')
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: smtpPort,
      secure: smtpPort === 465, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER, // 您的邮箱
        pass: process.env.SMTP_PASS, // 您的邮箱密码或应用密码
      },
    })

    // 格式化地址
    const fullAddress = [address1, address2, postcode, country].filter(Boolean).join(', ')
    
    // 格式化辅导要求
    const formattedRequirements = tutoringRequirements.join(', ')

    // Format date and time
    const formattedDateTime = datesAndTimes ? new Date(datesAndTimes).toLocaleString('en-US') : 'Not specified'

    // Mail options
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL || process.env.SMTP_USER, // Email to receive inquiries
      subject: `New Tutoring Application - ${title} ${firstName} ${surname}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 700px; margin: 0 auto; background-color: #f8f9fa; padding: 20px;">
          <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #0ea5e9; text-align: center; margin-bottom: 30px; border-bottom: 2px solid #0ea5e9; padding-bottom: 10px;">
              New Tutoring Application and Consultation Request
            </h2>
            
            <!-- Personal Information -->
            <div style="margin-bottom: 25px;">
              <h3 style="color: #374151; margin-bottom: 15px; background-color: #f3f4f6; padding: 10px; border-radius: 5px;">
                👤 Personal Information
              </h3>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-left: 15px;">
                <p><strong>Title:</strong> ${title}</p>
                <p><strong>Name:</strong> ${firstName} ${surname}</p>
                <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #0ea5e9;">${email}</a></p>
                <p><strong>Telephone:</strong> ${telephone}</p>
              </div>
              ${fullAddress ? `<p style="margin-left: 15px;"><strong>Address:</strong> ${fullAddress}</p>` : ''}
            </div>

            <!-- Student Information -->
            ${studentName || schoolYear || currentSchool ? `
            <div style="margin-bottom: 25px;">
              <h3 style="color: #374151; margin-bottom: 15px; background-color: #f3f4f6; padding: 10px; border-radius: 5px;">
                🎓 Student Information
              </h3>
              <div style="margin-left: 15px;">
                ${studentName ? `<p><strong>Student Name:</strong> ${studentName}</p>` : ''}
                ${schoolYear ? `<p><strong>School Year:</strong> ${schoolYear}</p>` : ''}
                ${currentSchool ? `<p><strong>Current School:</strong> ${currentSchool}</p>` : ''}
              </div>
            </div>
            ` : ''}

            <!-- Service Requirements -->
            <div style="margin-bottom: 25px;">
              <h3 style="color: #374151; margin-bottom: 15px; background-color: #f3f4f6; padding: 10px; border-radius: 5px;">
                📚 Service Requirements
              </h3>
              <div style="margin-left: 15px;">
                <p><strong>Services Required:</strong> <span style="color: #0ea5e9; font-weight: bold;">${servicesRequired}</span></p>
                <p><strong>Tutoring Requirements:</strong></p>
                <div style="background-color: #e0f2fe; padding: 15px; border-radius: 5px; margin: 10px 0;">
                  ${formattedRequirements}
                </div>
                <p><strong>Preferred Time:</strong> ${formattedDateTime}</p>
              </div>
            </div>

            <!-- Goals and Additional Information -->
            ${goal || additionalInfo ? `
            <div style="margin-bottom: 25px;">
              <h3 style="color: #374151; margin-bottom: 15px; background-color: #f3f4f6; padding: 10px; border-radius: 5px;">
                🎯 Goals and Additional Information
              </h3>
              <div style="margin-left: 15px;">
                ${goal ? `
                <p><strong>Learning Goals:</strong></p>
                <div style="background-color: #f0f9ff; padding: 15px; border-radius: 5px; border-left: 4px solid #0ea5e9; margin: 10px 0;">
                  ${goal.replace(/\n/g, '<br>')}
                </div>
                ` : ''}
                ${additionalInfo ? `
                <p><strong>Additional Information:</strong></p>
                <div style="background-color: #fef3c7; padding: 15px; border-radius: 5px; border-left: 4px solid #f59e0b; margin: 10px 0;">
                  ${additionalInfo.replace(/\n/g, '<br>')}
                </div>
                ` : ''}
              </div>
            </div>
            ` : ''}

            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
              <p style="color: #6b7280; font-size: 14px; margin: 0;">
                📧 This email is from the Aurum Education website tutoring application form<br>
                🕒 Submission time: ${new Date().toLocaleString('en-US')}
              </p>
            </div>
          </div>
        </div>
      `,
      text: `
        New Tutoring Application and Consultation Request
        
        === Personal Information ===
        Title: ${title}
        Name: ${firstName} ${surname}
        Email: ${email}
        Telephone: ${telephone}
        ${fullAddress ? `Address: ${fullAddress}` : ''}
        
        ${studentName || schoolYear || currentSchool ? `
        === Student Information ===
        ${studentName ? `Student Name: ${studentName}` : ''}
        ${schoolYear ? `School Year: ${schoolYear}` : ''}
        ${currentSchool ? `Current School: ${currentSchool}` : ''}
        ` : ''}
        
        === Service Requirements ===
        Services Required: ${servicesRequired}
        Tutoring Requirements: ${formattedRequirements}
        Preferred Time: ${formattedDateTime}
        
        ${goal || additionalInfo ? `
        === Goals and Additional Information ===
        ${goal ? `Learning Goals: ${goal}` : ''}
        ${additionalInfo ? `Additional Information: ${additionalInfo}` : ''}
        ` : ''}
        
        This email is from the Aurum Education website tutoring application form.
        Submission time: ${new Date().toLocaleString('en-US')}
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { message: 'Application submitted successfully, we will reply to you soon!' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Email sending failed:', error)
    return NextResponse.json(
      { error: 'Email sending failed, please try again later' },
      { status: 500 }
    )
  }
}