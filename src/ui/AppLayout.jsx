import { Outlet, useNavigation } from "react-router-dom";
import { Loader } from "./Loader";
import Navbar from "./Navbar";
import Footer from "./Footer";

const AppLayout = () => {
  const navigation = useNavigation();
  //   const isLoading = true;
  const isLoading = navigation.state === "loading";

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto] bg-stone-200">
      {isLoading && <Loader />}

      <Navbar />

      <div className="overflow-y-auto overflow-x-hidden">
        <main className="mx-auto">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default AppLayout;
