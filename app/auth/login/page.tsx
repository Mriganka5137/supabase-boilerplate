import { auth } from "@/actions/auth.action";
import { LogInForm } from "@/components/auth/login-form";
import { redirect } from "next/navigation";
import React from "react";

const LogInPage = async () => {
  const { data } = await auth();
  if (data.session) {
    redirect("/dashboard");
  }
  return <LogInForm />;
};

export default LogInPage;
