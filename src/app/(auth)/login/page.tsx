"use client";
import React, { useState } from "react";
import FormField from "@/components/AuthForm/FormField";

import { CiUnlock, CiLock, CiUser } from "react-icons/ci";
import Link from "next/link";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email, password);
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
        </div>
        <button className="max-w-40 h-12 bg-[#00C29F] text-white">
          Sing in
        </button>
      </div>
      <p className="text-center mt-9">
        Don’t have an account yet?
        <Link href="/auth/register" className="text-[#00C29F]">
          {"  "}
          Sign up
        </Link>
      </p>
    </form>
  );
};

export default Login;
