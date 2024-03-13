"use client";
import React from "react";
import Link from "next/link";
import FormField from "@/components/AuthForm/FormField";
import { CiUnlock, CiLock, CiUser } from "react-icons/ci";

const Register = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email, password, confirmPassword);
  };

  const [showPassword, setShowPassword] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white container max-w-[589px] px-12 py-10 rounded-xl shadow-2xl "
    >
      <div className="flex flex-col gap-6">
        <div className="font-bold text-2xl">Sign in</div>
        <div className="flex flex-col gap-4">
          <FormField
            placeholder="Email address"
            type="email"
            icon={<CiUser />}
            set={setEmail}
          />
          <FormField
            placeholder="Password"
            type={showPassword ? "text" : "password"}
            set={setPassword}
            icon={showPassword ? <CiUnlock /> : <CiLock />}
            handleShowPassword={handleShowPassword}
          />
          <FormField
            placeholder="Confirm Password"
            type={showPassword ? "text" : "password"}
            set={setConfirmPassword}
            icon={showPassword ? <CiUnlock /> : <CiLock />}
            handleShowPassword={handleShowPassword}
          />
        </div>

        <button className="max-w-40 h-12 bg-[#00C29F] text-white">
          Sing up
        </button>
      </div>
      <p className="text-center mt-9">
        I have an account already?
        <Link href="/auth/login" className="text-[#00C29F]">
          {"  "}
          Sign in
        </Link>
      </p>
    </form>
  );
};

export default Register;
