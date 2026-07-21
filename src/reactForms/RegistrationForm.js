import React, { useState } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";
// import { FiEye, FiEyeOff } from "react-icons/fi";

function RegistrationForm() {
  // --- Form Data State ---
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // --- Error State ---
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // --- Password Visibility ---
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // --- Password Strength ---
  const [passwordStrength, setPasswordStrength] = useState("");

  // --- Calculate Password Strength ---
  const getPasswordStrength = (password) => {
    let strength = 0;

    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;

    if (strength <= 2) return "Weak";
    if (strength === 3 || strength === 4) return "Medium";

    return "Strong";
  };

  // --- Validate Single Field ---
  const validateField = (name, value) => {
    switch (name) {
      case "firstName":
        if (!value.trim()) {
          return "First Name is required";
        }
        return "";

      case "lastName":
        if (!value.trim()) {
          return "Last Name is required";
        }
        return "";

      case "email":
        if (!value.trim()) {
          return "Email is required";
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          return "Please enter a valid email";
        }

        return "";

      case "password":
        if (!value) {
          return "Password is required";
        }

        if (value.length < 8) {
          return "Password must be at least 8 characters";
        }

        if (!/[A-Z]/.test(value)) {
          return "Password must contain at least one uppercase letter";
        }

        if (!/[a-z]/.test(value)) {
          return "Password must contain at least one lowercase letter";
        }

        if (!/[0-9]/.test(value)) {
          return "Password must contain at least one number";
        }

        if (!/[^A-Za-z0-9]/.test(value)) {
          return "Password must contain at least one special character";
        }

        return "";

      case "confirmPassword":
        if (!value) {
          return "Confirm Password is required";
        }

        if (value !== formData.password) {
          return "Passwords do not match";
        }

        return "";

      default:
        return "";
    }
  };

  // --- Handle Input Change ---
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Update Form Data
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Realtime Validation
    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, value),

      // Revalidate confirm password if password changes
      ...(name === "password" && {
        confirmPassword: validateField(
          "confirmPassword",
          formData.confirmPassword,
        ),
      }),
    }));

    // Password Strength
    if (name === "password") {
      setPasswordStrength(getPasswordStrength(value));
    }
  };

  // --- Handle Form Submit ---
  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {
      firstName: validateField("firstName", formData.firstName),
      lastName: validateField("lastName", formData.lastName),
      email: validateField("email", formData.email),
      password: validateField("password", formData.password),
      confirmPassword: validateField(
        "confirmPassword",
        formData.confirmPassword,
      ),
    };

    setErrors(newErrors);

    // Stop if validation fails
    if (Object.values(newErrors).some((error) => error !== "")) {
      return;
    }

    // Success
    console.log(formData);

    // Save to Local Storage
    localStorage.setItem("user", JSON.stringify(formData));

    // Reset Form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

    // Reset Errors
    setErrors({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

    // Reset Password Strength
    setPasswordStrength("");
  };

  return (
    <div className="max-w-5xl mx-auto mt-10 p-10">
      <h1 className="App text-2xl font-bold">React Form</h1>
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* First Name */}
        <div>
          <label
            htmlFor="firstName"
            className="mb-2 inline-block text-sm font-medium text-slate-900"
          >
            First Name
          </label>

          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Enter your first name"
            autoComplete="off"
            className={`w-full rounded-md border p-3 text-sm focus:outline-none ${
              errors.firstName ? "border-red-500" : "border-slate-300"
            }`}
          />

          {errors.firstName && (
            <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>
          )}
        </div>

        {/* Last Name */}
        <div>
          <label
            htmlFor="lastName"
            className="mb-2 inline-block text-sm font-medium text-slate-900"
          >
            Last Name
          </label>

          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Enter your last name"
            autoComplete="off"
            className={`w-full rounded-md border p-3 text-sm focus:outline-none ${
              errors.lastName ? "border-red-500" : "border-slate-300"
            }`}
          />

          {errors.lastName && (
            <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="mb-2 inline-block text-sm font-medium text-slate-900"
          >
            Email
          </label>

          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            autoComplete="off"
            className={`w-full rounded-md border p-3 text-sm focus:outline-none ${
              errors.email ? "border-red-500" : "border-slate-300"
            }`}
          />

          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email}</p>
          )}
        </div>

        {/* Password */}
        <div>
          <label
            htmlFor="password"
            className="mb-2 inline-block text-sm font-medium text-slate-900"
          >
            Password
          </label>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              autoComplete="off"
              className={`w-full rounded-md border p-3 pr-12 text-sm focus:outline-none ${
                errors.password ? "border-red-500" : "border-slate-300"
              }`}
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500"
            >
              {showPassword ? <HiEyeOff size={20} /> : <HiEye size={20} />}
            </button>
          </div>

          {errors.password && (
            <p className="mt-1 text-sm text-red-600">{errors.password}</p>
          )}

          {/* Password Strength */}
          {formData.password && (
            <p
              className={`mt-2 text-sm font-medium ${
                passwordStrength === "Weak"
                  ? "text-red-600"
                  : passwordStrength === "Medium"
                    ? "text-yellow-600"
                    : "text-green-600"
              }`}
            >
              Password Strength: {passwordStrength}
            </p>
          )}
        </div>

        {/* Confirm Password */}
        <div>
          <label
            htmlFor="confirmPassword"
            className="mb-2 inline-block text-sm font-medium text-slate-900"
          >
            Confirm Password
          </label>

          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
              autoComplete="off"
              className={`w-full rounded-md border p-3 pr-12 text-sm focus:outline-none ${
                errors.confirmPassword ? "border-red-500" : "border-slate-300"
              }`}
            />

            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500"
            >
              {showConfirmPassword ? (
                <HiEyeOff size={20} />
              ) : (
                <HiEye size={20} />
              )}
            </button>
          </div>

          {errors.confirmPassword && (
            <p className="mt-1 text-sm text-red-600">
              {errors.confirmPassword}
            </p>
          )}
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full p-3 text-sm rounded-md font-semibold cursor-pointer tracking-wide text-white border border-blue-600 bg-blue-600 hover:bg-blue-700 transition-all focus:outline-none"
        >
          Sign in
        </button>
      </form>
    </div>
  );
}
export default RegistrationForm;
