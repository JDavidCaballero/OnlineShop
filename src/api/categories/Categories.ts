async function getProductsCategories(): Promise<string[] | Error> {
  try {
    const response = await fetch("http://localhost:3000/api/categories", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Failed to fetch products categories");
    }
    const data = await response.json();
    return data as string[];
  } catch (error) {
    return new Error("An error occurred while fetching recommended products");
  }
}

export default getProductsCategories;
