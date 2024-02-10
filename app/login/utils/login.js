"use server";

import axios from "axios";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
import { NextResponse } from "next/server";

export const login = async (formData) => {
  const cookieStore = cookies();
  const username = formData.get("username");
  const password = formData.get("password");
  const lang = formData.get("lang");

  const { data } = await axios.post(
    "https://ondchackathon-production.up.railway.app/login",
    {
      username,
      password,
    }
  );
  if (data) {
    cookieStore.set("username", username);
    cookieStore.set("password", password);
    cookieStore.set("uid", data?.user_id);
    cookieStore.set("lang", lang);

    redirect("/");
  } else {
    throw new Error("Something went wrong");
  } // throw new Error(err.message);

  // redirect("/")
};
