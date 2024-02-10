"use client"
import React from 'react'

const ErrorLogin = ({error}) => {
  return (
    <div>{error.message}</div>
  )
}

export default ErrorLogin