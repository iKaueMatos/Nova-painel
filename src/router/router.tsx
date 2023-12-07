import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MenuNavigation } from "../components/navbar/components/menu";
import { DefaultLayout } from "../layout/DefaultLayout";
import { Home } from "../pages/home";
import { User } from "../pages/home/components/user";
import { Login } from "../pages/login";
import { Product } from "../pages/product";
import { Products } from "../pages/products";
import { Users } from "../pages/users";

export function AppRouter() {
  return (
    <BrowserRouter>
      <MenuNavigation />
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="users" element={<Users />} />
          <Route path="products" element={<Products />} />
          <Route path="users/:id" element={<User />} />
          <Route path="products/:id" element={<Product />} />
        </Route>
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
