import dynamic from "next/dynamic";

import WorkDetail from "@/components/WorkDetail";

import img from "@/public/no-product.webp";
import EmptyField from "@/components/EmptyField";

export async function generateMetadata({ params }) {
  const data = await getData(params.id);
  return {
    title: data?.title,
    description: "Discover, Shop and Sell!",
  };
}
const getData = async (id) => {
  try {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/work/new/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

const WorkDetailPage = async ({ params }) => {
  const id = params.id;

  const work = await getData(id);
  return (
    <div>
      {work && work?._id === id ? (
        <WorkDetail work={work} workId={id} />
      ) : (
        <EmptyField
          img={img}
          title={`No product available with this id : ${id}`}
        />
      )}
    </div>
  );
};

export default WorkDetailPage;
