import { ses } from "../config/ses.js";

export const sendOtp = async (req, res) => {
  const { email } = req.body;
  const otp = Math.floor(100000 + Math.random() * 900000);

  const params = {
    Source: "no-reply@yourdomain.com",
    Destination: { ToAddresses: [email] },
    Message: {
      Subject: { Data: "Your OTP Code" },
      Body: {
        Text: { Data: `Your OTP is: ${otp}` },
      },
    },
  };

  try {
    await ses.sendEmail(params).promise();
    res.json({ message: "OTP sent successfully ✅", otp }); // remove otp later
  } catch (err) {
    res.status(500).json({ error: "Email failed" });
  }
};
