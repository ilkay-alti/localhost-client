import React, { FC } from "react";

interface FormFieldProps {
  placeholder: string;
  type: string;
  icon: React.ReactNode;
  set: (value: string) => void;
  handleShowPassword?: () => void;
}

const FormField: FC<FormFieldProps> = ({
  placeholder,
  icon,
  type,
  set,
  handleShowPassword,
}) => {
  return (
    <div className="relative">
      <label className="w-5 h-5 absolute right-3 top-3">
        {handleShowPassword ? (
          <div onClick={handleShowPassword}>{icon}</div>
        ) : (
          icon
        )}
      </label>
      <input
        onChange={(e) => set(e.target.value)}
        placeholder={placeholder}
        type={type}
        className="border border-gray-300 rounded-md w-full py-2 px-3"
      />
    </div>
  );
};

export default FormField;
