import axios from "axios";
import { useEffect, useState } from "react";
import Category from "./Category";

export const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      await axios.get("http://localhost:8888/category").then((response) => {
        setCategories(response.data?.category);
      });
    };
    getCategories();
  }, []);

  return (
    <div>
      <h1>Categories</h1>
      {categories.map((category) => (
        <Category
          key={category.categoryid}
          categoryName={category.name}
          ischecked={true}
        />
      ))}
    </div>
  );
};

// const categoryIconsMap = {
//   food: <di>food icon</di>,
//   taxi: <di>food icon</di>,
// };

// const recordIcon = categoryIconsMap[category.name] || <div>record icon </div>

// <div>
//   {recordIcon}
// </div>
