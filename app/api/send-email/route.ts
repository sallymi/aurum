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

    // 验证必填字段
    const requiredFields = {
      title: '称谓',
      firstName: '名字',
      surname: '姓氏',
      email: '邮箱',
      telephone: '电话',
      servicesRequired: '所需服务'
    }

    for (const [field, label] of Object.entries(requiredFields)) {
      if (!eval(field) || eval(field).trim() === '') {
        return NextResponse.json(
          { error: `${label}是必填字段` },
          { status: 400 }
        )
      }
    }

    // 验证辅导要求
    if (!tutoringRequirements || !Array.isArray(tutoringRequirements) || tutoringRequirements.length === 0) {
      return NextResponse.json(
        { error: '请至少选择一项辅导要求' },
        { status: 400 }
      )
    }

    // 验证邮箱格式
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: '请输入有效的邮箱地址' },
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

    // 格式化日期时间
    const formattedDateTime = datesAndTimes ? new Date(datesAndTimes).toLocaleString('zh-CN') : '未指定'

    // 邮件选项
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL || process.env.SMTP_USER, // 接收咨询的邮箱
      subject: `新的导师申请 - ${title} ${firstName} ${surname}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 700px; margin: 0 auto; background-color: #f8f9fa; padding: 20px;">
          <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #0ea5e9; text-align: center; margin-bottom: 30px; border-bottom: 2px solid #0ea5e9; padding-bottom: 10px;">
              新的导师申请和咨询请求
            </h2>
            
            <!-- 个人信息 -->
            <div style="margin-bottom: 25px;">
              <h3 style="color: #374151; margin-bottom: 15px; background-color: #f3f4f6; padding: 10px; border-radius: 5px;">
                👤 个人信息
              </h3>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-left: 15px;">
                <p><strong>称谓：</strong> ${title}</p>
                <p><strong>姓名：</strong> ${firstName} ${surname}</p>
                <p><strong>邮箱：</strong> <a href="mailto:${email}" style="color: #0ea5e9;">${email}</a></p>
                <p><strong>电话：</strong> ${telephone}</p>
              </div>
              ${fullAddress ? `<p style="margin-left: 15px;"><strong>地址：</strong> ${fullAddress}</p>` : ''}
            </div>

            <!-- 学生信息 -->
            ${studentName || schoolYear || currentSchool ? `
            <div style="margin-bottom: 25px;">
              <h3 style="color: #374151; margin-bottom: 15px; background-color: #f3f4f6; padding: 10px; border-radius: 5px;">
                🎓 学生信息
              </h3>
              <div style="margin-left: 15px;">
                ${studentName ? `<p><strong>学生姓名：</strong> ${studentName}</p>` : ''}
                ${schoolYear ? `<p><strong>学年：</strong> ${schoolYear}</p>` : ''}
                ${currentSchool ? `<p><strong>当前学校：</strong> ${currentSchool}</p>` : ''}
              </div>
            </div>
            ` : ''}

            <!-- 服务需求 -->
            <div style="margin-bottom: 25px;">
              <h3 style="color: #374151; margin-bottom: 15px; background-color: #f3f4f6; padding: 10px; border-radius: 5px;">
                📚 服务需求
              </h3>
              <div style="margin-left: 15px;">
                <p><strong>所需服务：</strong> <span style="color: #0ea5e9; font-weight: bold;">${servicesRequired}</span></p>
                <p><strong>辅导要求：</strong></p>
                <div style="background-color: #e0f2fe; padding: 15px; border-radius: 5px; margin: 10px 0;">
                  ${formattedRequirements}
                </div>
                <p><strong>期望时间：</strong> ${formattedDateTime}</p>
              </div>
            </div>

            <!-- 目标和其他信息 -->
            ${goal || additionalInfo ? `
            <div style="margin-bottom: 25px;">
              <h3 style="color: #374151; margin-bottom: 15px; background-color: #f3f4f6; padding: 10px; border-radius: 5px;">
                🎯 目标和其他信息
              </h3>
              <div style="margin-left: 15px;">
                ${goal ? `
                <p><strong>学习目标：</strong></p>
                <div style="background-color: #f0f9ff; padding: 15px; border-radius: 5px; border-left: 4px solid #0ea5e9; margin: 10px 0;">
                  ${goal.replace(/\n/g, '<br>')}
                </div>
                ` : ''}
                ${additionalInfo ? `
                <p><strong>其他信息：</strong></p>
                <div style="background-color: #fef3c7; padding: 15px; border-radius: 5px; border-left: 4px solid #f59e0b; margin: 10px 0;">
                  ${additionalInfo.replace(/\n/g, '<br>')}
                </div>
                ` : ''}
              </div>
            </div>
            ` : ''}

            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
              <p style="color: #6b7280; font-size: 14px; margin: 0;">
                📧 此邮件来自 Aurum Education 网站的导师申请表单<br>
                🕒 提交时间：${new Date().toLocaleString('zh-CN')}
              </p>
            </div>
          </div>
        </div>
      `,
      text: `
        新的导师申请和咨询请求
        
        === 个人信息 ===
        称谓：${title}
        姓名：${firstName} ${surname}
        邮箱：${email}
        电话：${telephone}
        ${fullAddress ? `地址：${fullAddress}` : ''}
        
        ${studentName || schoolYear || currentSchool ? `
        === 学生信息 ===
        ${studentName ? `学生姓名：${studentName}` : ''}
        ${schoolYear ? `学年：${schoolYear}` : ''}
        ${currentSchool ? `当前学校：${currentSchool}` : ''}
        ` : ''}
        
        === 服务需求 ===
        所需服务：${servicesRequired}
        辅导要求：${formattedRequirements}
        期望时间：${formattedDateTime}
        
        ${goal || additionalInfo ? `
        === 目标和其他信息 ===
        ${goal ? `学习目标：${goal}` : ''}
        ${additionalInfo ? `其他信息：${additionalInfo}` : ''}
        ` : ''}
        
        此邮件来自 Aurum Education 网站的导师申请表单。
        提交时间：${new Date().toLocaleString('zh-CN')}
      `,
    }

    // 发送邮件
    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { message: '申请提交成功，我们会尽快回复您！' },
      { status: 200 }
    )

  } catch (error) {
    console.error('邮件发送失败:', error)
    return NextResponse.json(
      { error: '邮件发送失败，请稍后重试' },
      { status: 500 }
    )
  }
}