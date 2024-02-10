import React from "react";
import FormSection from "./components/Form";
import PageTitle from "@/app/shared/page-title";
import axios from "axios";

const AddProductPage = async({ params }) => {
  const { catalog_id } = params;

  const getData = async () => {
    try {
      const { data } = await axios.get(
        `https://ondchackathon-production.up.railway.app/catalog_detail/${catalog_id}`
      );
      if (data) {
        return data;
      }
    } catch (err) {
      // throw new Error(err.message);
      console.log(err.message)
    }
  };
  const data = await getData();
console.log(data)
  return (
    <main className="">
      <PageTitle title={"Add Items"} icon={"Product"} />
      <div className="mt-10"><FormSection product_data = {data} /></div>
    </main>
  );
};

export default AddProductPage;
