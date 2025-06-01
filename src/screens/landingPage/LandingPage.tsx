import React, { useState } from "react"
import MainBanner from "../../components/mainBanner/MainBanner"
import RecommendedCategories from "../../components/recommendedCategories/RecommendedCategories"
import CategoryCard from "../../components/categoryCard/CategoryCard"
import InterestCard from "../../components/interestCard/InterestCard"
import SignInBanner from "../../components/signInBanner/SignInBanner"
import ProductCard from "../../components/productCard/ProductCard"
import getRecommendedProducts, {
  RecommendedProduct,
} from "../../api/recommendedProducts/RecommendedProducts"
import { useQuery } from "react-query"
import getProductsCategories, {
  ProductCategory,
} from "../../api/categories/Categories"
import { useSelector } from "react-redux"
import { UserState } from "../../store/userSlice"

const LandingPage: React.FC = () => {
  const interestItems = [
    {
      title: "Explore the Outdoors",
      description: "Discover the best trails, parks, and outdoor activities.",
      imagePath:
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    },
    {
      title: "Culinary Delights",
      description:
        "Experience the best dining and cuisine from around the world.",
      imagePath:
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    },
  ]

  const user = useSelector((state: { user: UserState }) => state.user)

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

  return (
    <div className="flex-col space-y-5 ">
      <MainBanner products={recommendedProducts} />
      <div className="flex space-x-1 ">
        {user.isLoggedIn && categories.length > 0 && (
          <RecommendedCategories username={user.name} categories={categories} />
        )}
      </div>
      <div className="space-y-5">
        <h2 className="font-bold text-black text-left">
          Categories to explore
        </h2>
        <div className="flex space-x-1 ">
          {categories.length > 0 &&
            categories.map((category, index) => (
              <CategoryCard
                key={`${category.name}${index}`}
                name={category.name}
                imagePath={category.image}
              />
            ))}
        </div>
      </div>
      {/* this will be last 2 products visited*/}
      <div className="flex space-x-2 ">
        {interestItems.map((interest) => (
          <InterestCard
            key={interest.title}
            title={interest.title}
            description={interest.description}
            imagePath={interest.imagePath}
          />
        ))}
      </div>
      {user.email === "" && <SignInBanner />}
      <div className="space-y-5">
        <h2 className="font-bold text-black text-left">Trending Products</h2>
        <div className="flex space-x-2">
          {recommendedProducts.length > 0 &&
            recommendedProducts.map((product) => (
              <ProductCard
                key={product.nombre}
                image={product.image}
                category={product.categoria}
                title={product.nombre}
                stars={product.stars}
                reviewCount={product.review}
                price={product.precio}
              />
            ))}
        </div>
      </div>
    </div>
  )
}

export default LandingPage
