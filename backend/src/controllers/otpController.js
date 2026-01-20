import otpStore from "../utils/otpStore.js";

// Generate 6-digit OTP
const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

// SEND OTP (logic only)
export const sendOTP = (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  const otp = generateOTP();
  const expiresAt = Date.now() + 5 * 60 * 1000; // 5 minutes

  otpStore.set(email, { otp, expiresAt });

  console.log("OTP for", email, "is", otp); // TEMP (for testing)

  res.status(200).json({
    message: "OTP generated successfully",
  });
};

// VERIFY OTP
export const verifyOTP = (req, res) => {
  const { email, otp } = req.body;

  if (!email || !otp) {
    return res.status(400).json({ message: "Email and OTP required" });
  }

  const storedData = otpStore.get(email);

  if (!storedData) {
    return res.status(400).json({ message: "OTP not found" });
  }

  if (Date.now() > storedData.expiresAt) {
    otpStore.delete(email);
    return res.status(400).json({ message: "OTP expired" });
  }

  if (storedData.otp !== otp) {
    return res.status(400).json({ message: "Invalid OTP" });
  }

  otpStore.delete(email);

  res.status(200).json({ message: "OTP verified successfully" });
};
