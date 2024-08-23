import React from "react";
import Papa from "papaparse";
import fs from "fs";
import path from "path";

interface Product {
  Title: string;
  "Product Category": string;
  "Cost per item": string;
}

const Home = async () => {
  const filePath = path.join(process.cwd(), "public", "ProductList.csv");
  const fileContents = fs.readFileSync(filePath, "utf8");
  const results = Papa.parse<Product>(fileContents, { header: true });
  const products = results.data;

  return (
    <div>
      <h1>Product List</h1>
      {products.map((product, index) => (
        <div key={index} className="product-item">
          <p>
            <strong>Product Name:</strong> {product.Title}
          </p>
          <p>
            <strong>Category:</strong> {product["Product Category"]}
          </p>
          <p>
            <strong>Price:</strong> ${product["Cost per item"]}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Home;
