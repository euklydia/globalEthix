import { Outlet } from "react-router-dom";
import { Footer } from "./footer";
import { Header } from "./header";
import { NewsLetter } from "./newsLetter/NewsLetter";
import { Divider } from "../components";
import { JoinAsAssociate } from "./joinAsAssociate/JoinAsAssociate";
export const MainLayout = () => {
  return (
    <>
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <NewsLetter />
      <Divider />
      <JoinAsAssociate />
      <Divider />
      <Footer />
    </>
  );
};
