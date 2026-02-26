import { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import API from "../services/api";
import logo from "../assets/logo.png";

const ResetPassword = () => {
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  //  NEW: States for toggling password visibility
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  // Get email from URL parameters
  const email = searchParams.get("email");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation: Check OTP length
    if (!otp || otp.length !== 6) {
      alert("Please enter a valid 6-digit OTP!");
      return;
    }

    // Validation: Check passwords match
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Validation: Check password length
    if (password.length < 6) {
      alert("Password must be at least 6 characters!");
      return;
    }

    // Validation: Check email exists
    if (!email) {
      alert("Email is missing! Please go back and try again.");
      return;
    }

    setLoading(true);

    try {
      // API call to reset password
      const res = await API.post("/auth/reset-password", {
        email,
        otp,
        newPassword: password,
      });

      alert(res.data.message || "Password reset successful!");
      navigate("/signin");

    } catch (error: any) {
      console.error("Reset password error:", error);

      if (error.response) {
        alert(error.response.data.message || "Failed to reset password!");
      } else {
        alert("Failed to reset password. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

        <div className="flex justify-center mb-6">
          <img
            src={logo}
            alt="Orato Logo"
            className="w-20 h-20 rounded-xl shadow-md"
          />
        </div>

        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Reset Password
        </h2>

        <p className="text-center text-gray-500 mb-6">
          Enter the OTP sent to {email || "your email"}
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* OTP Input Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              OTP Code
            </label>
            <input
              type="text"
              value={otp}
              // Only allow digits and limit to 6 characters
              onChange={(e) =>
                setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))
              }
              required
              maxLength={6}
              disabled={loading}
              placeholder="Enter 6-digit OTP"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-center text-2xl font-mono tracking-widest focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/*  NEW PASSWORD FIELD WITH EYE ICON */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              New Password
            </label>
            {/* Relative container for positioning the eye icon */}
            <div className="relative">
              <input
                //  Toggle between hidden and visible
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
                disabled={loading}
                placeholder="Minimum 6 characters"
                // pr-12 adds right padding for the icon
                className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              {/*  EYE ICON BUTTON */}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none transition-colors"
                tabIndex={-1}
                disabled={loading}
              >
                {showPassword ? (
                  // Open eye - password visible
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                ) : (
                  // Closed eye - password hidden
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/*  CONFIRM PASSWORD FIELD WITH EYE ICON */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Confirm New Password
            </label>
            {/* Separate container with its own toggle state */}
            <div className="relative">
              <input
                //  Independent toggle for confirm password
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                disabled={loading}
                placeholder="Re-enter your password"
                className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              {/*  SEPARATE EYE ICON */}
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none transition-colors"
                tabIndex={-1}
                disabled={loading}
              >
                {showConfirmPassword ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-lg text-white font-semibold 
                       bg-gradient-to-r from-green-500 to-emerald-600
                       hover:from-green-600 hover:to-emerald-700 transition-all
                       ${loading ? "opacity-50 cursor-not-allowed" : "hover:shadow-lg"}`}
          >
            {loading ? "Resetting Password..." : "Reset Password"}
          </button>
        </form>

        <div className="mt-6 text-center">
          <Link
            to="/signin"
            className="text-sm text-green-600 hover:underline"
          >
            ← Back to Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;