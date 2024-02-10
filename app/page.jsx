import Image from "next/image";
import ProductPage from "./product-page/main";
export const revalidate = 0;

export default function Home() {
  return (
   <ProductPage/>
  );
}
