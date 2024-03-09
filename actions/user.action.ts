"use server";
import { LoginSchema, RegisterSchema } from "@/schemas";

import { createClient } from "@/utils/supabase/server";
import { z } from "zod";

export const loginUser = async (values: z.infer<typeof LoginSchema>) => {
  const supabase = await createClient();
  const { error, data } = await supabase.auth.signInWithPassword({
    email: values.email,
    password: values.password,
  });

  if (error) {
    return { error: error.message };
  }
  if (data.user) {
    return { success: "Logged in!" };
  }
};

export const registerUser = async (
  values: z.infer<typeof RegisterSchema>,
  callbackUrl?: string
) => {
  const supabase = await createClient();
  const { error, data } = await supabase.auth.signUp({
    email: values.email,
    password: values.password,
    options: {
      data: {
        name: values.name,
      },
      emailRedirectTo: callbackUrl || "/",
    },
  });

  if (error) {
    return { error: error.message };
  }

  return { success: "User created!" };
};
