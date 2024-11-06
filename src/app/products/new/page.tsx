import React from "react";
import ProductForm from "./product-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getProduct } from "../product.api";

interface Props {
  params: {
    id: string;
  };
}

const ProductsNew = async ({ params }: Props) => {
  const { id } = await params;
  const product = await getProduct(id);

  return (
    <div className="h-screen flex justify-center items-center">
      <Card>
        <CardHeader>
          <CardTitle>{id ? "Edit Product" : "New Product"}</CardTitle>
        </CardHeader>
        <CardContent>
          <ProductForm product={product} />
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductsNew;
