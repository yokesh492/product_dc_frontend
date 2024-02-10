"use client"
import { useRouter } from 'next/navigation'
import { SignOut } from 'phosphor-react'
import React, { useState } from 'react'
import LoadingSpinner from '../loading/loading-spinner'
import { logout } from '../utils/logout'

const Logout = () => {
    const router = useRouter()
    const [isLoading, setIsLoading ] = useState(false)
    const handleLogout = () => {
        setIsLoading(true)
      const hasLoggedOut = logout()
      if(hasLoggedOut){
        router.push("/login")
      }
    }
  return (
    <button className="ml-auto" onClick={handleLogout}>
    {isLoading ? <LoadingSpinner/> : <SignOut size={32} color = "white" />}
    </button>
  )
}

export default Logout