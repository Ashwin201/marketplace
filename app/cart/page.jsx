import dynamic from "next/dynamic";
const Cart = dynamic(() => import("@/components/Cart"));

export const metadata = {
  title: "Cart",
  description: "Discover, Shop and Sell!",
};
const CartPage = async () => {
  return (
    <div>
      <Cart />
    </div>
  );
};

export default CartPage;
