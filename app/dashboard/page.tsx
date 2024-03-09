import { auth } from "@/actions/auth.action";
import { redirect } from "next/navigation";
import React from "react";

const Dashboard = async () => {
  const { data } = await auth();
  if (!data.session) {
    return redirect("/auth/login");
  }
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
};

export default Dashboard;
