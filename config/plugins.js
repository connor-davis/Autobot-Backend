module.exports = ({ env }) => ({
  email: {
    config: {
      provider: "nodemailer",
      providerOptions: {
        host: env("SMTP_HOST", "bl7n8.zadns.co.za"),
        port: env("SMTP_PORT", 465),
        secure: true,
        auth: {
          user: env("SMTP_USERNAME"),
          pass: env("SMTP_PASSWORD"),
        },
        pool: true,
        logger: true,
        debug: true,
        maxConnections: 10000,
      },
      settings: {
        defaultFrom: "noreply@auto-bot.co.za",
        defaultReplyTo: "noreply@auto-bot.co.za",
      },
    },
  },
});