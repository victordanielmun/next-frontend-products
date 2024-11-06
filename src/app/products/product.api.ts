export async function getProducts() {
  const res = await fetch("http://localhost:4000/api/products");
  const data = await res.json();
  return data;
}

export async function getProduct(id: string) {
  const res = await fetch(`http://localhost:4000/api/products/${id}`);
  const data = await res.json();
  return data;
}

export async function createProduct(productData: any) {
  const res = await fetch("http://localhost:4000/api/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      cache: "no-cache",
    },
    body: JSON.stringify(productData),
  });

  const data = await res.json();

  return data;
}

export async function updateProduct(id: string, productData: any) {
  const res = await fetch(`http://localhost:4000/api/products/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      cache: "no-cache",
    },
    body: JSON.stringify(productData),
  });

  const data = await res.json();

  return data;
}

export async function deleteProduct(id: number) {
  const res = await fetch(`http://localhost:4000/api/products/${id}`, {
    method: "DELETE",
  });
  const data = await res.json();

  return data;
}
