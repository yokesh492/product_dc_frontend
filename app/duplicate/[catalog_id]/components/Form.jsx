"use client";
import { useProductStore } from "@/app/zustand/store";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { KeyReturn, PaperPlaneRight, Trash, X } from "phosphor-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { formSubmission } from "../utils/form-submission";
import axios from "axios";
import SubmitButton from "./SubmitButton";
import { useRouter } from "next/navigation";

const FormSection = ({ product_data }) => {
  const router = useRouter();
  // const { product_store } = useProductStore((state) => state);

  const { product, catalog } = product_data;
  const product_store = { ...product, ...catalog };

  const [subCategoryList, setSubCategoryList] = useState(
    product_store?.sub_categories
  );
  const [subCategory, setSubCategory] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [variantsOptions, setVariantsOptions] = useState([
    "Kgs",
    "Grams",
    "Flavours",
  ]);
  const [currentVariant, setCurrentVariant] = useState("");

  const [finalVariants, setFinalVariants] = useState(
    product_store?.variants
  );
  console.log({ finalVariants });
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const addVariants = (variant) => {
    setFinalVariants((prev) => [...prev, { [variant]: "" }]);
  };
  const updateVariant = (e, variantKey) => {
    const variants = finalVariants.map((data) => {
      if (Object.keys(data)[0] === variantKey) {
        return { ...data, [Object.keys(data)]: e.target.value };
      } else {
        return { ...data };
      }
    });

    setFinalVariants(variants);
  };

  const onSubmit = async (data) => {
    setIsLoading(true);

    const formData = {
      ...data,
      sub_categories: subCategoryList,
      variants: finalVariants,
      image: product_store?.image,
      price: Number(data.price),
      discount_price: Number(data.discount_price),
      inv: Number(data.inv),
      pid : product_store.id
    };
    console.log(formData);
    //     try{

    //     const {data : res_data} = await axios.post("https://ondchackathon-production.up.railway.app/add_to_catalog/",
    //         formData

    //     )
    //     if(res_data){
    //       router.refresh()
    //       router.push("/")
    //     }
    // }
    // catch(err){
    //     console.log(err.message)
    //     setError(err.message)
    // }

    await formSubmission(formData);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="center-section flex flex-col gap-5"
    >
      <Image
        src={product_store?.image || "/default-product.png"}
        width={200}
        height={200}
        alt={product_store?.name}
        className="mx-auto object-cover aspect-square"
      />
      <label>
        <span className="mb-2 block font-semibold">Item Name</span>
        <div className="border border-gray-400 w-full h-14 px-3 rounded-lg flex items-center">
          <input
            type="text"
            defaultValue={product_store?.name}
            placeholder="Item Name"
            className="w-9/12 outline-none"
            maxLength={100}
            {...register("name", {
              required: { value: true, message: "Items Name is required" },
              maxLength: {
                value: 100,
                message: "Item name should have less than 100 Chars",
              },
            })}
          />
          <p className="w-3/12 text-right text-[#33373B]">
            {watch("name") ? watch("name")?.length : 0} / 100
          </p>
        </div>
        {errors?.name?.type === "required" && (
          <p className="text-red-500 font-semibold">{errors?.name?.message}</p>
        )}
        {errors?.name?.type === "maxLength" && (
          <p className="text-red-500 font-semibold">{errors?.name?.message}</p>
        )}
      </label>
      <label>
        <span className="mb-2 block font-semibold">SKU id</span>
        <input
          type="text"
          placeholder="SKU ID"
          defaultValue={product_store?.sku}
          className="border border-gray-400 w-full h-14 px-3 rounded-lg"
          {...register("sku_id", {
            required: { value: true, messsage: "SKU ID is required" },
          })}
        />
        {errors?.price?.type === "required" && (
          <p className="text-red-500 font-semibold">{errors?.name?.message}</p>
        )}
      </label>
      <label>
        <span className="mb-2 block font-semibold">Description</span>
        <textarea
          type="text"
          defaultValue={product_store?.description}
          placeholder="Description"
          className="border border-gray-400 w-full h-32 pt-3 px-3 rounded-lg"
          {...register("description", { required: true })}
        />
      </label>
      <label>
        <span className="mb-2 block font-semibold">Qunatity</span>
        <input
          type="number"
          placeholder="Quantity"
          className="border border-gray-400 w-full h-14 px-3 rounded-lg"
          {...register("inv", { required: true })}
        />
      </label>
      <label>
        <span className="mb-2 block font-semibold">Price</span>
        <input
          type="number"
          placeholder="Price"
          defaultValue={product_store?.price}
          className="border border-gray-400 w-full h-14 px-3 rounded-lg"
          {...register("price", { required: true })}
        />
      </label>

      <label>
        <span className="mb-2 block font-semibold">Discount Price</span>
        <input
          type="text"
          defaultValue={product_store?.discount_price}
          placeholder="Discount Price"
          className="border border-gray-400 w-full h-14 px-3 rounded-lg"
          {...register("discount_price", { required: true })}
        />
      </label>
      <label>
        <span className="mb-2 block font-semibold">Category</span>
        <input
          type="text"
          placeholder="Category"
          defaultValue={product_store?.category}
          className="border border-gray-400 w-full h-14 px-3 rounded-lg"
          {...register("category", { required: true })}
        />
      </label>
      <div>
        <span className="mb-2 block font-semibold">Sub Categories</span>
        <label className="border border-gray-400 w-full h-14 px-3 rounded-lg flex justify-between items-center">
          <input
            type="text"
            placeholder="Type Category"
            className="outline-none border-none w-10/12"
            value={subCategory}
            onChange={(e) => setSubCategory(e.target.value)}
          />
          <PaperPlaneRight
            size={20}
            onClick={() => {
              setSubCategoryList((prev) =>
                subCategory.length > 0 ? [...prev, subCategory] : [...prev]
              );
              setSubCategory("");
            }}
          />
        </label>
        <div className="mt-5 flex flex-wrap gap-2">
          {subCategoryList &&
            subCategoryList?.length > 0 &&
            subCategoryList.map((list) => (
              <Badge
                variant="outline"
                className="px-4 py-3 text-md flex items-center gap-2"
                key={list}
              >
                <span>{list}</span>
                <X
                  size={15}
                  color="red"
                  onClick={() =>
                    setSubCategoryList(
                      subCategoryList?.filter((sub) => list !== sub && sub)
                    )
                  }
                />
              </Badge>
            ))}
        </div>
      </div>
      <label>
        <span className="mb-2 block font-semibold">Variants</span>
        <div className="border border-gray-400 w-full h-14 px-3 rounded-lg flex items-center space-between">
          <input
            type="text"
            placeholder="Variant"
            //   defaultValue={product_store?.variant}
            className="w-10/12 outline-none"
            // {...register("variant")}
            value={currentVariant}
            onChange={(e) => setCurrentVariant(e.target.value)}
          />

          {currentVariant?.length > 0 && (
            <PaperPlaneRight
              size={20}
              className="ml-auto"
              onClick={() => addVariants(currentVariant)}
            />
          )}
        </div>
        <div className="my-5 flex flex-wrap gap-2">
          {variantsOptions &&
            variantsOptions?.length > 0 &&
            variantsOptions.map((list, i) => (
              <Badge
                variant="outline"
                className="px-4 py-2 font-normal text-md cursor-pointer"
                key={i}
                onClick={() => addVariants(list)}
              >
                {list}{" "}
              </Badge>
            ))}
        </div>
        <span>
          {finalVariants.map((variant, i) => (
            <React.Fragment key={i}>
              <label className="font-semibold mt-3">
                {Object.keys(variant)[0]}
              </label>
              <div className="border border-gray-400 mb-3 w-full h-14 px-3 rounded-lg flex justify-between items-center">
                <input
                  className="w-10/12 outline-none"
                  onChange={(e) => updateVariant(e, Object.keys(variant)[0])}
                  required
                />
                <Trash
                  color="red"
                  size={20}
                  className="ml-5"
                  onClick={(item) => {
                    if (finalVariants.length === 1) setFinalVariants([]);
                    setFinalVariants(
                      finalVariants.filter(
                        (final) =>
                          Object.keys(final)[0] !== Object.keys(variant)[0] && {
                            ...final,
                          }
                      )
                    );
                  }}
                />
              </div>
            </React.Fragment>
          ))}
        </span>
      </label>

      {/* {JSON.stringify(product_store)} */}
      {error && <p>{error}</p>}
      <SubmitButton isLoading={isLoading} />
    </form>
  );
};

export default FormSection;
