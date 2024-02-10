"use client";
import LoadingSpinner from "@/app/shared/loading/loading-spinner";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { DotsThreeVertical } from "phosphor-react";
import React, { useState } from "react";

const PopupButton = ({ product_id, catalog_id }) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter()
  const handleDelte = async (id) => {
    setIsLoading(true);
    try {
      await axios.delete(
        `https://ondchackathon-production.up.railway.app/product/${id}`
      );
      router.refresh();
    } catch (err) {
      console.log(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="absolute top-4 right-2">
      <Popover>
        <PopoverTrigger>
          <DotsThreeVertical size={25} />
        </PopoverTrigger>
        <PopoverContent className="w-fit flex flex-col" align="end">
          <Link href={`/duplicate/${catalog_id}`}>Duplicate</Link>
          <Dialog>
            <DialogTrigger className="text-left">Delete</DialogTrigger>
            <DialogContent>
              <DialogTitle>Do you want to delete?</DialogTitle>
              {isLoading ? (
                <LoadingSpinner  color="green"/>
              ) : (
                <div className="flex justify-center gap-5 items-center">
                  <DialogClose className="bg-primary px-4 py-2 rounded-md text-white">
                    No
                  </DialogClose>
                  <Button
                    variant="outline"
                    onClick={() => handleDelte(product_id)}
                  >
                    Delete
                  </Button>
                </div>
              )}
            </DialogContent>
          </Dialog>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default PopupButton;
