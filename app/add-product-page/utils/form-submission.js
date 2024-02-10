"use server";

import axios from "axios";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export const formSubmission = async (formData) => {
  const cookieStore = cookies();
  const user_id = cookieStore.get("uid");
  const is_user_id = cookieStore.has("uid");
  console.log(formData)
  if (is_user_id) {
    const { data } = await axios.post(
      `https://ondchackathon-production.up.railway.app/add_to_catalog/${user_id?.value}`,
      
        formData,
      
    );
    if(data){
        redirect("/")
    }
  }
};
