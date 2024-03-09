import { auth } from "@/actions/auth.action";
import { RegisterForm } from "@/components/auth/register-form";
import { redirect } from "next/navigation";
import React from "react";

const RegisterPage = async () => {
  const { data } = await auth();
  if (data.session) {
    redirect("/dashboard");
  }
  return <RegisterForm />;
};

export default RegisterPage;
