import img from "@/public/no-product.webp";
import EditWork from "@/components/EditWork";
import EmptyField from "@/components/EmptyField";

export const metadata = {
  title: "Edit Product",
  description: "Discover, Shop and Sell!",
};
const getData = async (id) => {
  try {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/work/new/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      const work = await res.json();
      return work;
    }
  } catch (error) {
    console.log("Error fetching data for editing => ", error);
  }
};

const EditWorkPage = async ({ params }) => {
  const { id } = params;
  const work = await getData(id);
  return (
    <div>
      {work ? (
        <EditWork work={work} workId={id} />
      ) : (
        <EmptyField
          img={img}
          title={`No product available with this id : ${id}`}
        />
      )}
    </div>
  );
};

export default EditWorkPage;
