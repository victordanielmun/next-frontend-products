import React from "react";
import { getProduct } from "../product.api";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

interface Props {
  params: {
    id: string;
  };
}

const ProductDetailPage = async ({ params }: Props) => {
  const { id } = await params;
  const product = await getProduct(id);
  console.log(product);
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex justify-between">
          Product Details: {id}
        </CardTitle>
        <Link href="/" className={buttonVariants()}>
          Go Back
        </Link>
      </CardHeader>
      <CardContent>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p>{product.price}</p>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover"
        />
      </CardContent>
    </Card>
  );
};

export default ProductDetailPage;
