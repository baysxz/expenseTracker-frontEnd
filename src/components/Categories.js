import axios from "axios";
import { useEffect, useState } from "react";
import Category from "./Category";

export const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      await axios
        .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/category`)
        .then((response) => {
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
