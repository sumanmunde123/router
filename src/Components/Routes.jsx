import { Navbar } from "./Navbar";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./HomePage";
import { ProductsPage } from "./ProductsPage";
import { ProductsDetailsPage } from "./ProductsDetailsPage";
import { NotFoundPage } from "./NotFoundPage";





export const Routes1 = () => {
  return (
    <>
      <Navbar />
      {/* Add Routes here */}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductsDetailsPage />} />
        <Route path="/notfound" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};
