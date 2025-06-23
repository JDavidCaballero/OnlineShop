import { useState } from "react"
import getRecommendedProducts, {
  RecommendedProduct,
} from "../../api/recommendedProducts/RecommendedProducts"
import { useQuery } from "react-query"
import getProductsCategories, {
  ProductCategory,
} from "../../api/categories/Categories"

export const useLandingPage = () => {
  const [recommendedProducts, setRecommendedProducts] = useState<
    RecommendedProduct[]
  >([])
  const [categories, setCategories] = useState<ProductCategory[]>([])

  useQuery("getProductsCategories", async () => {
    const response = await getProductsCategories()
    if (response !== null) {
      console.warn("categories", response)
      setCategories(response as ProductCategory[])
      return
    }
    return [""]
  })

  useQuery("getRecommendedProducts", async () => {
    const response = await getRecommendedProducts()

    if (response !== null) {
      setRecommendedProducts(response as RecommendedProduct[])
      return
    }
    return {
      _id: 0,
      productID: "",
      nombre: "",
      descripcion: "",
      categoria: "",
      precio: 0,
      image: "",
    }
  })

  return {
    recommendedProducts,
    categories,
  }
}
