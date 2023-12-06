import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DefaultLayout } from "../layout/defaultLayout";
import { Home } from "../pages/home/Home";
import { Login } from "../pages/login/Login";
import { Product } from "../pages/product/Product";
import { Products } from "../pages/products/Products";
import { User } from "../pages/user/User";
import { Users } from "../pages/users/Users";

export function AppRouter() {
    return (
        <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<DefaultLayout />}
          >
            <Route path="/" element={<Home />} />
            <Route path="users" element={<Users />} />
            <Route path="products" element={<Products />} />
            <Route path="users/:id" element={<User />} />
            <Route path="products/:id" element={<Product />} />
          </Route>
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    )
}