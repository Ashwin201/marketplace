import dynamic from "next/dynamic";
const SearchItem = dynamic(() => import("@/components/SearchItem"));
export const metadata = {
  title: "Search Products",
  description: "Discover, Shop and Sell!",
};
const SearchPage = () => {
  return (
    <>
      <SearchItem />
    </>
  );
};

export default SearchPage;
