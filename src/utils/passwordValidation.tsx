import { useState, useEffect } from "react";

type PasswordRequirement = {
  label: string;
  validator: (password: string) => boolean;
  met: boolean;
};

type PasswordValidatorProps = {
  password: string;
  onValidationChange: (isValid: boolean) => void;
};

export function PasswordValidator({ password, onValidationChange }: PasswordValidatorProps) {
  const [requirements, setRequirements] = useState<PasswordRequirement[]>([
    {
      label: "At least 8 characters long",
      validator: (password) => password.length >= 8,
      met: false,
    },
    {
      label: "Contains at least one uppercase letter",
      validator: (password) => /[A-Z]/.test(password),
      met: false,
    },
    {
      label: "Contains at least one lowercase letter",
      validator: (password) => /[a-z]/.test(password),
      met: false,
    },
    {
      label: "Contains at least one number",
      validator: (password) => /[0-9]/.test(password),
      met: false,
    },
    {
      label: "Contains at least one special character",
      validator: (password) => /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password),
      met: false,
    },
  ]);

  useEffect(() => {
    // Update the status of each requirement
    const updatedRequirements = requirements.map((req) => ({
      ...req,
      met: req.validator(password),
    }));
    
    setRequirements(updatedRequirements);
    
    // Check if all requirements are met
    const isValid = updatedRequirements.every((req) => req.met);
    onValidationChange(isValid);
  }, [password, onValidationChange]);

  // Calculate the password strength
  const metCount = requirements.filter((req) => req.met).length;
  const strengthPercentage = (metCount / requirements.length) * 100;
  
  let strengthColor = "bg-red-500";
  let strengthLabel = "Weak";
  
  if (strengthPercentage >= 80) {
    strengthColor = "bg-green-500";
    strengthLabel = "Strong";
  } else if (strengthPercentage >= 60) {
    strengthColor = "bg-yellow-500";
    strengthLabel = "Medium";
  }

  return (
    <div className="mt-2">
      {/* Password strength indicator */}
      <div className="mb-2">
        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className={`h-full ${strengthColor} transition-all duration-300 ease-in-out`}
            style={{ width: `${strengthPercentage}%` }}
          ></div>
        </div>
        <p className="text-xs text-gray-600 mt-1">
          Password strength: <span className="font-medium">{strengthLabel}</span>
        </p>
      </div>
      
      {/* Requirements list */}
      <ul className="space-y-1">
        {requirements.map((req, index) => (
          <li key={index} className="flex items-center text-xs">
            <span className={`mr-2 ${req.met ? "text-green-500" : "text-gray-400"}`}>
              {req.met ? "✓" : "○"}
            </span>
            <span className={req.met ? "text-gray-700" : "text-gray-500"}>
              {req.label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}