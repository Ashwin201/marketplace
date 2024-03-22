import dynamic from "next/dynamic";
const Home = dynamic(() => import("@/components/Home"));
const Categories = dynamic(() => import("@/components/Categories"));
const HomePage = () => {
  return (
    <>
      <Home />
      <Categories />
    </>
  );
};

export default HomePage;
