import React from "react";
import FormSection from "./components/Form";
import PageTitle from "../shared/page-title";
import { formPage } from "../shared/utils/lang";

const AddProductPage = () => {
    
  
  return (
    <main className="">
      <PageTitle title={formPage().title} icon={"Product"} />
    <div className="mt-10">
      <FormSection formPage = {formPage()} />
      </div>
    </main>
  );
};

export default AddProductPage;
