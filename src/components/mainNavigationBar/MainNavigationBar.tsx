import React from "react";

interface NavigationItem {
  title: string;
  path: string;
}

interface MainNavigationBarProps {
  navigationItems: NavigationItem[];
}

const MainNavigationBar: React.FC<MainNavigationBarProps> = ({
  navigationItems,
}) => {
  return (
    <nav>
      <ul className="flex space-x-4">
        {navigationItems.map((item, index) => (
          <li key={index} className="list-none">
            <a href={item.path} className="text-black hover:text-yellow">
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MainNavigationBar;
