import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Housing from "../pages/Housing/Housing";
import Error from "../pages/Error/Error";
import Layout from "../layout/Layout";

export default function Router() {
  return (
    <Routes>
        <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/housing/:id" element={<Housing />} />
        <Route path="*" element={<Error />} />
      </Route>
        <Route path="*" element={<Error />} />

    </Routes>
  );
}