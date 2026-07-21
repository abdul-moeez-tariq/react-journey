import React, { useState } from "react";

function RealtimeFormValidation() {
  // --- Form Data State ---
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  // --- Error State ---
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

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

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(value)) {
          return "Please enter a valid email";
        }

        return "";

      default:
        return "";
    }
  };

  // --- Handle Input Change ---
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Update form values
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Realtime validation
    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, value),
    }));
  };

  // --- Handle Form Submit ---
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields
    const newErrors = {
      firstName: validateField("firstName", formData.firstName),
      lastName: validateField("lastName", formData.lastName),
      email: validateField("email", formData.email),
    };

    // Update errors
    setErrors(newErrors);

    // Stop submission if any error exists
    if (newErrors.firstName || newErrors.lastName || newErrors.email) {
      return;
    }

    // Success
    console.log(formData);

    // Save data into Local Storage
    localStorage.setItem("user", JSON.stringify(formData));

    // Reset Form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
    });

    // Reset Errors
    setErrors({
      firstName: "",
      lastName: "",
      email: "",
    });
  };

  return (
    <div className="max-w-5xl mx-auto mt-10 p-10">
      <h1 className="mb-8 text-3xl text-center font-bold">Realtime Form Validation</h1>

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

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full rounded-md border border-blue-600 bg-blue-600 p-3 text-sm font-semibold tracking-wide text-white transition-all hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default RealtimeFormValidation;
