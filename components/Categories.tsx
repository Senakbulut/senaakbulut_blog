import Link from "next/link";
import React, { useEffect, useState } from "react";
import { getCategories } from "../services";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((result) => setCategories(result));
  }, []);
  const headerStyle = {
    color: "#265073",
  };
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 mb-8 pb-12">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4" style={headerStyle}>Categories</h3>
      {categories.map((category: { slug: ""; name: "" }) => (
        <Link key={category.slug} href={`/category/${category.slug}`}>
          <span className="category-name cursor-pointer block pb-3 mb-3 font-medium">
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
