import dynamic from "next/dynamic";
const Orders = dynamic(() => import("@/components/Orders"));

export const metadata = {
  title: "Your Orders",
  description: "Discover, Shop and Sell!",
};
const OrderPage = async () => {
  return (
    <>
      <Orders />
    </>
  );
};

export default OrderPage;
