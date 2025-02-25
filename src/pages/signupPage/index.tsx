import { useForm, type SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PasswordValidator } from "../../utils/passwordValidation";

type FormData = {
  name: string;
  industry: string;
  taxId: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export default function SignupPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<FormData>({
    mode: "onChange",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const navigate = useNavigate();
  
  // Watch the password field value
  const password = watch("password", "");

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    // Navigate to OTP page
    navigate("/otp");
  };

  // Handle password validation change
  const handlePasswordValidationChange = (isValid: boolean) => {
    setIsPasswordValid(isValid);
  };

  return (
    <div className="flex h-screen">
      {/* Image Container */}
      <div className="w-[55%] h-full overflow-hidden hidden md:block">
        <img
          src="/images/bipay.webp"
          alt="bipay"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Form Container */}
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-3xl">
          <div className="text-center">
            <h1 className="text-3xl font-extrabold text-gray-900">
              Welcome to BIPAY
            </h1>
            <h2 className="mt-3 text-xl font-extrabold text-gray-800">
              Your AI-Powered Payroll Management System
            </h2>
          </div>

          <div className="mt-8">
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Grid layout for form fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <div className="mt-1">
                    <input
                      id="name"
                      type="text"
                      placeholder="Enter your full name"
                      {...register("name", { required: "Name is required" })}
                      className="appearance-none block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                    {errors.name && (
                      <p className="mt-2 text-sm text-red-600">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Industry Field */}
                <div>
                  <label
                    htmlFor="industry"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Industry
                  </label>
                  <div className="mt-1">
                    <input
                      id="industry"
                      type="text"
                      placeholder="Enter the name of your industry"
                      {...register("industry", { required: "Industry is required" })}
                      className="appearance-none block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                    {errors.industry && (
                      <p className="mt-2 text-sm text-red-600">
                        {errors.industry.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Tax ID Field */}
                <div>
                  <label
                    htmlFor="taxId"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Tax ID
                  </label>
                  <div className="mt-1">
                    <input
                      id="taxId"
                      type="text"
                      placeholder="Enter your tax ID"
                      {...register("taxId", { required: "Tax ID is required" })}
                      className="appearance-none block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                    {errors.taxId && (
                      <p className="mt-2 text-sm text-red-600">
                        {errors.taxId.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email address
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      type="email"
                      placeholder="Enter a valid email address"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      })}
                      className="appearance-none block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                    {errors.email && (
                      <p className="mt-2 text-sm text-red-600">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Password Field */}
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <div className="mt-1">
                    <input
                      id="password"
                      type="password"
                      placeholder="Create a strong password"
                      {...register("password", { 
                        required: "Password is required",
                      })}
                      className="appearance-none block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                    {errors.password && (
                      <p className="mt-2 text-sm text-red-600">
                        {errors.password.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Confirm Password Field */}
                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Confirm Password
                  </label>
                  <div className="mt-1">
                    <input
                      id="confirmPassword"
                      type="password"
                      placeholder="Confirm your password"
                      {...register("confirmPassword", {
                        required: "Please confirm your password",
                        validate: (value) => 
                          value === password || "Passwords do not match"
                      })}
                      className="appearance-none block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                    {errors.confirmPassword && (
                      <p className="mt-2 text-sm text-red-600">
                        {errors.confirmPassword.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Password Validator - Full width */}
              {password && (
                <div className="mt-6">
                  <PasswordValidator 
                    password={password} 
                    onValidationChange={handlePasswordValidationChange} 
                  />
                </div>
              )}

              {/* Submit button - Full width */}
              <div className="mt-8">
                <button
                  type="submit"
                  disabled={isSubmitting || !isValid || !isPasswordValid}
                  className="w-1/2 mx-auto flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#212143] hover:bg-[#2a2a57] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#212143] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Signing up..." : "Sign up"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}