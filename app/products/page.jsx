import Categories from "@/components/Categories";

export const metadata = {
  title: "Popular Products",
  description: "Discover, Shop and Sell!",
};
const Categorypage = () => {
  return (
    <div>
      <div className="mb-16 ">
        <h1 className="sm:text-3xl text-3xl font-bold  mb-2 text-blue-700">
          Popular Products
        </h1>
        <div className="h-[3px] w-32 bg-blue-700 rounded"></div>
      </div>
      <Categories />
    </div>
  );
};

export default Categorypage;
