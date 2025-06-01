import { customFetch } from "../utils/customFetch"

export type ProductCategory = {
  name: string
  image: string
}

async function getProductsCategories(): Promise<ProductCategory[] | Error> {
  try {
    const response = await customFetch("/categories", {
      method: "GET",
    })

    if (!response.ok) {
      throw new Error("Failed to fetch products categories")
    }
    const data = await response.json()
    const mappedCategories: ProductCategory[] = data.map((category: any) => ({
      name: category.categoria,
      image: category.image,
    }))

    return mappedCategories
  } catch (error) {
    return new Error("An error occurred while fetching products categories")
  }
}

export default getProductsCategories
