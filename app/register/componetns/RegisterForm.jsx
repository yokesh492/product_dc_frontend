"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import SubmitButton from "./SubmitButton";
import { register } from "../utils/register";
import Link from "next/link";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";

const RegisterForm = ({registerPage}) => {

    

  return (
    <section className="center-section">
      <h2 className="text-xl mb-4 text-center">{registerPage.title}</h2>
      <form
        action={register}
        className="flex flex-col gap-5 justify-center items-center w-full"
      >
        <input
          type="text"
          name="username"
          placeholder={registerPage.name_field}
          className="border border-black h-12 w-full px-2 rounded-md"
          lang="tam"
          required
        />
        <input
          type="password"
          name="password"
          placeholder={registerPage.pass_field}
          className="border border-black h-12 w-full px-2 rounded-md"
          required
        />
                <label className="font-semibold text-left text-sm w-full -mb-3">{registerPage.choose}</label>
       <Select defaultValue="eng">
      <SelectTrigger className="border-black">
        <SelectValue placeholder="Choose your language" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Language</SelectLabel>
          <SelectItem value="eng">English</SelectItem>
          <SelectItem value="tam">Tamil</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
      
      <SubmitButton registerPage = {registerPage}/>
      </form>
      <p className="text-center mt-5">{registerPage.isNew} <Link href = "/login" className="text-primary underline">{registerPage.login}</Link></p>

    </section>
  );
};

export default RegisterForm;
