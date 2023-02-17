import React, { createContext, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
// import About from "./components/About";
import Header from "./components/Header";
import { OrderSummary } from "./components/OrderSummary";
import { NoMatch } from "./components/NoMatch";
import { Products } from "./components/Products";
import { Featured } from "./components/Featured";
import { NewProducts } from "./components/NewProducts";
import { Users } from "./components/Users";
import { UserDetails } from "./components/UserDetails";
import { Admin } from "./components/Admin";
import LifeCycleA from "./components/LifeCycleA";
const LazyAbout = React.lazy(() => import("./components/About"));

export const ColorContext = createContext();

export const DarkModeContext = createContext();

function App() {
  const [color, setColor] = useState("red");
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkModel = () => {
    setDarkMode(!darkMode);
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkModel }}>
      <ColorContext.Provider value={color}>
        <Header toggleDarkModel={toggleDarkModel} />
        <LifeCycleA />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/about"
            element={
              <React.Suspense fallback="Loading...">
                <LazyAbout />
              </React.Suspense>
            }
          />
          <Route path="/order-summary" element={<OrderSummary />} />
          <Route path="/products" element={<Products />}>
            <Route index element={<Featured />} />
            <Route path="featured" element={<Featured />} />
            <Route path="new" element={<NewProducts />} />
          </Route>
          <Route path="users" element={<Users />}>
            <Route path="/users/:userId" element={<UserDetails />} />
            <Route path="/users/admin" element={<Admin />} />
          </Route>
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </ColorContext.Provider>
    </DarkModeContext.Provider>
  );
}

export default App;
