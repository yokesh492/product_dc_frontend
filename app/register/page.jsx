import React from 'react'
import ErrorLogin from './error'
import RegisterForm from './componetns/RegisterForm'
import { registerPage } from "@/app/shared/utils/lang";
const LoginPage = () => {
  return (
    <section className='h-screen flex flex-col justify-center items-center'>
        <RegisterForm registerPage = {registerPage()}/>
    </section>
  )
}

export default LoginPage