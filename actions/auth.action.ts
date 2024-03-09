"use server";

import { createClient } from "@/utils/supabase/server";

export async function auth() {
  const supabase = await createClient();
  return supabase.auth.getSession();
}

export async function user() {
  const supabase = await createClient();
  return supabase.auth.getUser();
}
