import React from "react";
import { ProductCategory } from "../../api/categories/Categories";

interface RecommendedCategoriesProps {
  username: string;
  categories: ProductCategory[];
}

const RecommendedCategories: React.FC<RecommendedCategoriesProps> = ({
  username,
  categories,
}) => {
  return (
    <div className="flex recommended-categories w-full bg-orange-100 items-center justify-between rounded-md p-5">
      <div className="profile-container flex items-center space-x-4">
        <img
          src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Profile"
          className="profile-photo h-20 w-20 rounded-full object-cover"
        />
        <span className="greeting text-black text-left">
          Hi {username}, recommendations for you:
        </span>
      </div>
      <div className="recommendations h-20">
        <div className="category-list flex h-20 items-center space-x-10">
          {categories.map((category, index) => (
            <div
              key={category.name + index}
              className="category-item-container flex flex-row items-center justify-center"
            >
              <div className="category-item flex flex-col items-center justify-center">
                <img
                  src={category.image}
                  alt="recommended category"
                  className="category-photo h-[70px] w-[80px] rounded-md"
                />
                <div className="category-name flex flex-col items-start space-y-2">
                  <span className="category-name text-black font-bold text-left">
                    {category.name}
                  </span>
                </div>
              </div>
              {index < categories.length - 1 && (
                <div className="w-[1px] h-20 bg-black mx-3"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecommendedCategories;
