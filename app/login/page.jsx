import React from 'react'
import LoginForm from './componetns/LoginForm'
import ErrorLogin from './error'
import { loginPage } from "@/app/shared/utils/lang";


const LoginPage = () => {
console.log(loginPage())
  return (
    <section className='h-screen flex flex-col justify-center items-center'>
        <LoginForm loginPage={loginPage()}/>
    </section>
  )
}

export default LoginPage