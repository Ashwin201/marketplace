import Categories from "@/components/Categories";
import Home from "@/components/Home";
import dynamic from "next/dynamic";
const HomePage = () => {
  return (
    <>
      <Home />
      <Categories />
    </>
  );
};

export default HomePage;
