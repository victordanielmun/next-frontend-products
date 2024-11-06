"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import { deleteProduct } from "../products/product.api";
import { useRouter } from "next/navigation";

const ProductCard = ({ product }: any) => {
  const router = useRouter();
  const handleRemove = async (id: number) => {
    await deleteProduct(id);
    router.refresh();
  };

  return (
    <Card key={product.id}>
      <CardHeader>
        <CardTitle className="flex justify-between">{product.name}</CardTitle>
        <span className="text-sm font-bold text-gray-500">
          ${product.price}
        </span>
      </CardHeader>
      <img src={product.image} alt={product.name} />
      <CardContent>
        <p>{product.description}</p>
      </CardContent>
      <CardFooter>
        <Button className="m-5">Comprar</Button>
        <Button
          className="mt5"
          variant="destructive"
          onClick={() => handleRemove(product.id)}
        >
          Borrar
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
