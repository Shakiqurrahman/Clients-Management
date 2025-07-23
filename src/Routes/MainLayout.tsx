import { Outlet, ScrollRestoration } from "react-router";
import Header from "../components/Header";

const MainLayout = () => {
  return (
    <main>
      <Header />
      <Outlet />
      <ScrollRestoration />
    </main>
  );
};

export default MainLayout;
