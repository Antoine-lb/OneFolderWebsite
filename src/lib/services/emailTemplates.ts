export function getNewsletterConfirmationEmail(email: string): string {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Newsletter Subscription Confirmed</title>
        <style>
            body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                background-color: #f9f9f9;
            }
            .container {
                background-color: white;
                padding: 40px;
                border-radius: 12px;
                box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            }
            .header {
                text-align: center;
                margin-bottom: 30px;
            }
            .logo {
                font-size: 24px;
                font-weight: bold;
                color: #44316d;
                margin-bottom: 10px;
            }
            .title {
                font-size: 28px;
                font-weight: bold;
                background: linear-gradient(135deg, #44316d, #6b4e9d);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                margin-bottom: 20px;
            }
            .content {
                font-size: 16px;
                margin-bottom: 20px;
            }
            .highlight {
                background-color: #fff3cd;
                padding: 15px;
                border-radius: 8px;
                border-left: 4px solid #ff5643;
                margin: 20px 0;
            }
            .footer {
                text-align: center;
                margin-top: 40px;
                padding-top: 30px;
                border-top: 1px solid #eee;
                color: #666;
                font-size: 14px;
            }
            .button {
                display: inline-block;
                padding: 12px 24px;
                background: linear-gradient(135deg, #ff5643, #ff4030);
                color: white;
                text-decoration: none;
                border-radius: 8px;
                font-weight: bold;
                margin: 20px 0;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <div class="logo">📁 OneFolder</div>
                <h1 class="title">Welcome to our newsletter! ✨</h1>
            </div>
            
            <div class="content">
                <p>Hi there!</p>
                
                <p>Thanks for subscribing to the OneFolder newsletter with <strong>${email}</strong>. You're now part of our community of people who want to organize their digital files better!</p>
                
                <div class="highlight">
                    <strong>📧 Important:</strong> Please check your spam/junk folder if you don't see future emails from us. Mark them as "not spam" to ensure they land in your inbox.
                </div>
                
                <p>Here's what you can expect from us:</p>
                <ul>
                    <li>📝 Tips and tricks for organizing your digital files</li>
                    <li>🚀 Updates about new OneFolder features</li>
                    <li>📚 Insights from our research on digital organization</li>
                    <li>💡 Best practices from our community</li>
                </ul>
                
                <p>We only send emails every ~2 months, so you won't be overwhelmed with messages.</p>
                
                <p>In the meantime, feel free to explore our blog or download OneFolder if you haven't already!</p>
                
                <div style="text-align: center;">
                    <a href="https://onefolder.app/blog" class="button">📖 Read our blog</a>
                </div>
            </div>
            
            <div class="footer">
                <p>Got questions? Just reply to this email - I read and respond to every message personally.</p>
                <p>Best regards,<br>
                <strong>Antoine</strong><br>
                OneFolder maintainer</p>
                
                <p style="margin-top: 30px; color: #999; font-size: 12px;">
                    OneFolder Newsletter • If you didn't sign up for this, you can safely ignore this email
                </p>
            </div>
        </div>
    </body>
    </html>
  `;
}
