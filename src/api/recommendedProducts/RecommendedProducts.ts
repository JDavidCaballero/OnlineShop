export interface RecommendedProduct {
  _id: string;
  productID: string;
  nombre: string;
  descripcion: string;
  categoria: string;
  precio: number;
  image: string;
  review: number;
  stars: number;
}

async function getRecommendedProducts(): Promise<RecommendedProduct[] | Error> {
  try {
    const response = await fetch("http://localhost:3000/api/products", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Failed to fetch recommended products");
    }
    const data = await response.json();
    console.warn(data);
    return data as RecommendedProduct[];
  } catch (error) {
    console.error(error);
    return new Error("An error occurred while fetching recommended products");
  }
}

export default getRecommendedProducts;
