import dynamic from "next/dynamic";
const CreateItem = dynamic(() => import("@/components/CreateItem"));

export const metadata = {
  title: "Publish Product",
  description: "Discover, Shop and Sell!",
};
const CreateItemPage = async () => {
  return (
    <div>
      <CreateItem />
    </div>
  );
};

export default CreateItemPage;
