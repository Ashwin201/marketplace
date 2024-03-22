import dynamic from "next/dynamic";
const Wishlist = dynamic(() => import("@/components/Wishlist"));

export const metadata = {
  title: "Wishlist",
  description: "Discover, Shop and Sell!",
};
const WishList = () => {
  return (
    <div>
      <Wishlist />
    </div>
  );
};

export default WishList;
