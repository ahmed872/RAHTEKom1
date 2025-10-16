# 📧 EmailJS Setup Instructions

Follow these steps to set up EmailJS for the contact form:

## 1. Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Add Email Service

1. Go to **Email Services** in the dashboard
2. Click **Add New Service**
3. Choose **Gmail** (or your preferred email provider)
4. Connect your email: `rahatekom12@gmail.com`
5. Copy the **Service ID** (example: `service_abc123`)

## 3. Create Email Template

1. Go to **Email Templates**
2. Click **Create New Template**
3. Use this template structure:

```
Subject: New Contact Form Message: {{subject}}

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Copy the **Template ID** (example: `template_xyz789`)

## 4. Get Public Key

1. Go to **Account** → **General**
2. Copy your **Public Key** (example: `abc123XYZ`)

## 5. Update the Code

Open `src/app/contact/page.tsx` and replace:

```typescript
const serviceID = "YOUR_SERVICE_ID"; // Replace with your Service ID
const templateID = "YOUR_TEMPLATE_ID"; // Replace with your Template ID
const publicKey = "YOUR_PUBLIC_KEY"; // Replace with your Public Key
```

## 6. Test the Form

1. Run your development server: `npm run dev`
2. Go to the contact page
3. Fill out and submit the form
4. Check your email: `rahatekom12@gmail.com`

## 🎉 Done!

Now your contact form will send emails directly without opening email clients!

## 📊 Free Plan Limits

- 200 emails/month
- Perfect for a portfolio site

Need help? Check [EmailJS Documentation](https://www.emailjs.com/docs/)
