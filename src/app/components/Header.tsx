import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between my-5">
      <h1 className="text-3xl font-bold">Next - Nest - SQlite</h1>
      <Link href="/products/new" className={buttonVariants()}>
        Añadir Producto
      </Link>
    </div>
  );
};

export default Header;
