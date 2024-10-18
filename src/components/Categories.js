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
          const categories = response.data?.category.map((category) => {
            return {
              ...category,
              selected: true,
            };
          });
          setCategories(categories);
        });
    };
    getCategories();
  }, []);

  const onChange = (selectedCategory) => {
    const checkedCategories = categories.map((category) => {
      if (category.categoryid === selectedCategory.categoryid) {
        return {
          ...category,
          selected: !category?.selected,
        };
      }
      return category;
    });
    return setCategories(checkedCategories);
  };

  return (
    <div>
      <h1>Categories</h1>
      {categories.map((category) => (
        <Category
          key={category.categoryid}
          categoryName={category.name}
          ischecked={category.selected}
          onChange={() => onChange(category)}
        />
      ))}
    </div>
  );
};
