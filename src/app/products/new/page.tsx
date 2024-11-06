import React from "react";
import ProductForm from "./product-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ProductsNew = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <Card>
        <CardHeader>
          <CardTitle>New Product</CardTitle>
        </CardHeader>
        <CardContent>
          <ProductForm />
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductsNew;
