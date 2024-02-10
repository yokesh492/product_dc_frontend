"use client"
import { Dialog, DialogContent } from "@/components/ui/dialog";
import Image from "next/image";
import { CircleNotch } from "phosphor-react";
import React from "react";

const LoadingSpinner = ({color = "white"}) => {
  return (

    <CircleNotch size={32} color = {color} className="animate-spin mx-auto"/>
  );
};

export default LoadingSpinner;
