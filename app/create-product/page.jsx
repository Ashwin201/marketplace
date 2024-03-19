import CreateItem from "@/components/CreateItem";
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
