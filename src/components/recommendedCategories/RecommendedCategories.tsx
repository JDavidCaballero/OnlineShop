import React from "react";

interface RecommendedCategoriesProps {
  username: string;
  categories: string[];
}

const RecommendedCategories: React.FC<RecommendedCategoriesProps> = ({
  username,
  categories,
}) => {
  return (
    <div className="flex recommended-categories bg-orange-100 items-center rounded-md p-5 space-x-[70px]">
      <div className="profile-container flex items-center space-x-4">
        <img
          src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Profile Photo"
          className="profile-photo h-20 w-20 rounded-full object-cover"
        />
        <span className="greeting text-black">
          Hi {username}, recommendations for you:
        </span>
      </div>
      <div className="recommendations h-20 ">
        <div className="category-list flex h-20 items-center space-x-12">
          {categories.map((category, index) => (
            <div
              key={index}
              className="category-item  items-center flex flex-row"
            >
              <img
                src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Profile Photo"
                className="category-photo h-[50px] w-13 rounded-md"
              />
              <div className="category-name flex flex-col items-start space-y-2">
                <span className="category-name text-black">{category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecommendedCategories;
