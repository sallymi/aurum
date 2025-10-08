// 测试email发送功能的简单脚本
const nodemailer = require('nodemailer');

// 从环境变量或直接配置读取SMTP设置
const config = {
  host: 'smtp.126.com',
  port: 465,
  secure: true, // 465端口使用SSL
  auth: {
    user: '***@126.com',
    pass: '***'
  }
};

async function testEmail() {
  try {
    console.log('正在创建邮件传输器...');
    const transporter = nodemailer.createTransport(config);

    console.log('正在验证SMTP连接...');
    await transporter.verify();
    console.log('✅ SMTP连接验证成功！');

    console.log('正在发送测试邮件...');
    const info = await transporter.sendMail({
      from: config.auth.user,
      to: config.auth.user, // 发送给自己进行测试
      subject: '测试邮件 - Athena Academia',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0ea5e9;">邮件发送测试</h2>
          <p>这是一封来自 Athena Academia 网站的测试邮件。</p>
          <p>如果您收到这封邮件，说明email发送功能配置正确。</p>
          <p style="color: #666; font-size: 14px;">
            发送时间：${new Date().toLocaleString('zh-CN')}
          </p>
        </div>
      `,
      text: '这是一封来自 Athena Academia 网站的测试邮件。如果您收到这封邮件，说明email发送功能配置正确。'
    });

    console.log('✅ 邮件发送成功！');
    console.log('邮件ID:', info.messageId);
    console.log('响应:', info.response);

  } catch (error) {
    console.error('❌ 邮件发送失败:', error.message);
    if (error.code) {
      console.error('错误代码:', error.code);
    }
    if (error.response) {
      console.error('服务器响应:', error.response);
    }
  }
}

// 运行测试
testEmail();