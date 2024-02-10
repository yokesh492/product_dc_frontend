import React from "react";
import { product_list } from "@/app/temp/dataset";
import ProductItem from "../product-item";
import { cookies } from "next/headers";
import axios from "axios";


const ProductList = async () => {
  const getData = async () => {
    try {
      const cookieStore = cookies();
      const user_id = cookieStore.get("uid");
      const { data: product_list_data } = await axios.get(
        `https://ondchackathon-production.up.railway.app/catalogue/${user_id.value}`
      ,{cache : false});
      console.log({ product_list_data });
      return { product_list_data, error: null };
    } catch (err) {
      console.log(err.message);
      return { product_list_data: null, error: err.message };
    }
  };

  const { product_list_data, error } = await getData();
  const product_list_v1 =Array.isArray(product_list_data) ? product_list_data.map(product_item => {
    const {product, catalog} = product_item
      const catalog_list = catalog.map(cat => {
        return {
          ...product,
          ...cat
        }
      })

      return [...catalog_list]
  }) : []

const final_product_list = product_list_v1.flatMap(product => product)
  return (
    <section className="center-section mt-5 pb-16">
      <div className="grid grid-cols-1 gap-5">
        {error}
        <p className="text-primary text-center">
        {product_list_data?.message}
        </p>
        {Array.isArray(final_product_list) && final_product_list?.map((product,i) => {
          return (
            <ProductItem data={product} key={i} />
          );
        })}
      </div>
    </section>
  );
};

export default ProductList;
