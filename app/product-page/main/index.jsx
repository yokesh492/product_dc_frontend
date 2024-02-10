import React from 'react'
import ProductList from '../components/products/product-list'
import {Notepad } from 'phosphor-react'
import PageTitle from '@/app/shared/page-title'
import AddProducts from '../components/add-products-button'
import { productTitle } from '@/app/shared/utils/lang'
import { addProductButton } from "@/app/shared/utils/lang";

import LoadingPopup from '@/app/shared/loading/loading-popup'

const ProductPage = () => {
  return (
    <main className='bg-[#EEEEEE] min-h-screen relative'>
      <PageTitle title = {productTitle()} icon = {"Product"}/>
        <ProductList/>
        <div className='fixed bottom-5 w-full left-1/2 transform -translate-x-1/2 max-w-[500px]'>
        <AddProducts addProductButtonContent={addProductButton()}/>
        </div>
    </main>
  )
}

export default ProductPage