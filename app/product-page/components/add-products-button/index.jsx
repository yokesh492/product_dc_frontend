"use client";

import LoadingPopup from "@/app/shared/loading/loading-popup";
import { useProductStore } from "@/app/zustand/store";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Camera,
  CircleNotch,
  Microphone,
  Plus,
  UploadSimple,
} from "phosphor-react";
import React, { useEffect, useState } from "react";

const AddProducts = ({addProductButtonContent}) => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();

  const { product_store, addProduct } = useProductStore((state) => state);

  const handleChange = async (e) => {
    try {
      setLoading(true);
      setError(null);
      const uploaded_file = e.target.files[0];
      console.log(uploaded_file);
      if (uploaded_file) {
        const formData = new FormData();
        formData.append("uploaded_file", uploaded_file, uploaded_file.name);
        const { data } = await axios.post(
          "https://ondchackathon-production.up.railway.app/process_image/",

          formData
        );
        console.log(data);
        if (data) {
          router.push("/add-product-page");
        }
        console.log(data);
        addProduct(data);
      }
    } catch (err) {
      console.log({ err });
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <>
      {isLoading && <LoadingPopup />}

      <Popover className="flex justify-center items-center gap-3 ">
        <PopoverTrigger className="flex items-center justify-center gap-3 text-white h-12 bg-primary border w-8/12  px-5 py-2 mx-auto rounded-full">
          <>
            <span>{addProductButtonContent}</span>
            <Plus size={20} color="white" />{" "}
          </>
        </PopoverTrigger>
        {!isLoading && (
          <PopoverContent className="ml-auto w-fit" align="end">
            <div className="relative h-8 flex gap-2 items-center">
              <Camera size={20} />
              <p className="">Capture Image</p>
              <input
                type="file"
                id="cam"
                onChange={handleChange}
                accept="image/*"
                capture="capture"
                className="w-full border opacity-0 absolute top-0  left-0 z-30"
              />
            </div>
            <div className="relative h-8 flex items-center gap-2">
              <UploadSimple size={20} />

              <p className="">Choose File</p>
              <input
                type="file"
                id="cam"
                onChange={handleChange}
                accept="image/*"
                // capture="capture"
                className="w-full border  top-0  left-0 opacity-0 absolute z-30"
              />
            </div>
            <Link href="/voice-input" className="flex items-center gap-2 h-8">
              <Microphone size={20} />
              <span>Voice Input</span>
            </Link>
          </PopoverContent>
        )}
      </Popover>
      {error && (
        <p className="text-center text-red-400 font-semibold">{error}</p>
      )}
    </>
  );
};

export default AddProducts;
