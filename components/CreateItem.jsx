"use client";
import { categories } from "@/data";
import React, { useEffect, useState } from "react";
import { TiDelete } from "react-icons/ti";
import { BiImageAdd } from "react-icons/bi";
import { MdDownloadDone } from "react-icons/md";
import { CldUploadButton } from "next-cloudinary";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";
const CreateItem = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [creator, setCreator] = useState("");
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [images, setImages] = useState([]);
  const [publicIds, setPublicIds] = useState([]);

  useEffect(() => {
    setCreator(session?.user?._id);
  }, [session]);

  const handleImageUpload = (result) => {
    // console.log(result);
    const info = result.info;
    if ("secure_url" in info && "public_id" in info) {
      const url = info.secure_url;
      const public_id = info.public_id;
      setImages((prevImages) => [...prevImages, url]);
      setPublicIds((prevPublicIds) => [...prevPublicIds, public_id]);
    } else {
      // Handle the case when the image limit is reached (display a message, etc.)
      console.log("Image upload fail");
    }
  };

  //For delete image
  const handleRemoveImage = async (index) => {
    try {
      const res = await fetch(`/api/removeImage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ publicId: publicIds[index] }),
      });

      if (res.ok) {
        const updatedImageUrls = [...images];
        const updatedPublicIds = [...publicIds];

        updatedImageUrls.splice(index, 1);
        updatedPublicIds.splice(index, 1);

        setImages(updatedImageUrls);
        setPublicIds(updatedPublicIds);
      }
    } catch (error) {
      console.log(error);
    }
  };

  //Code for handling submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!title || !description || !price) {
        toast.error(
          "Please ensure all fields are completed before submitting the form!"
        );
        return;
      }
      if (!category) {
        toast.error("Please select any category for your product!");
        return;
      }
      if (!images.length > 0) {
        toast.error("Please upload some images of your product!");
        return;
      }

      const res = await fetch(`/api/work/new`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          creator,
          category,
          title,
          description,
          price,
          images,
        }),
      });

      if (res.ok) {
        toast.success("Congratulations! Product published successfully.");
        router.push("/dashboard");
        return;
      }
    } catch (error) {
      console.log("Failed to publish product.");
    }
  };
  return (
    <>
      {" "}
      <section className=" flex gap-10 flex-col">
        <h1 className="  font-bold text-3xl  sm:text-4xl text-blue-700 text-center sm:text-start">
          Publish Your Own Product!
        </h1>
        <div className=" flex flex-col gap-5  py-6  border-y-2 border-gray-500  ">
          <h6 className=" flex items-center gap-2 sm:ml-3 text-lg font-semibold text-center sm:text-start ">
            Q : Which of these categories best describe your product ?
          </h6>
          <div className=" flex flex-wrap  justify-center sm:justify-start gap-4 sm:gap-6  ">
            {categories.map((item, index) => (
              <span
                key={index}
                onClick={() => {
                  setCategory(item);
                }}
                className={`hover:scale-[.99] py-[6px] px-5 w-fit rounded-full transition-all duration-300 cursor-pointer
             hover:bg-blue-800 text-base  font-medium ${
               category === item
                 ? " bg-blue-700 hover:bg-blue-800 text-white"
                 : "text-gray-700 dark:text-gray-400 border-2  border-gray-500   hover:text-white "
             }`}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
        <form className=" flex flex-col gap-5" onSubmit={handleSubmit}>
          <div className=" ">
            <h6 className=" flex items-center gap-2  justify-center sm:justify-start mb-6 mt-2 text-lg font-semibold ">
              Add some photos of your product!
            </h6>

            <div
              className={`${
                images.length > 0
                  ? "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5"
                  : " flex"
              }     rounded-md gap-5  mr-1 sm:mr-0`}
            >
              {images.length > 0 &&
                images &&
                images?.map((image, index) => (
                  <div
                    key={index}
                    className="  col-span-1 rounded-md border-1 border-gray-200 dark:border-gray-800 "
                  >
                    <div className="relative border-2 rounded-md">
                      <img
                        src={image}
                        alt="Image"
                        width={100}
                        height={100}
                        className=" cursor-pointer h-32 w-full  object-cover object-center"
                      />
                      <span
                        className=" cursor-pointer absolute bg-white text-black p-[1px] rounded-full -top-2 -right-2"
                        onClick={() => handleRemoveImage(index)}
                      >
                        <TiDelete size={18} />
                      </span>
                    </div>
                  </div>
                ))}
              <div
                className={`${
                  images.length < 1 ? " w-[100%] " : "col-span-1"
                }    flex  justify-center items-center rounded-md border-2 border-gray-300 dark:border-gray-800 shadow-sm focus-within:border-2`}
              >
                <CldUploadButton
                  uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_PRESET}
                  onUpload={handleImageUpload}
                  className={`${
                    images.length < 1 ? "  py-20" : "py-[28px]"
                  } flex flex-col gap-1 items-center`}
                >
                  <BiImageAdd size={30} />
                  <h3 className="   text-sm font-medium text-gray-700 dark:text-gray-300 ">
                    Upload Image
                  </h3>
                </CldUploadButton>
              </div>
            </div>
          </div>

          <h6 className=" flex items-center gap-2  justify-center sm:justify-start mt-4 mb-2  text-lg font-semibold ">
            What makes your product attractive?
          </h6>
          <div>
            <label
              htmlFor="title"
              className="relative block rounded-md border-2 border-gray-300 dark:border-gray-800 shadow-sm focus-within:border-2-blue-600 "
            >
              <input
                type="text"
                id="title"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className=" p-2 w-full peer border-2-none bg-transparent placeholder-transparent focus:border-2-transparent focus:outline-none focus:ring-0"
                placeholder="Title"
              />

              <span
                className=" py-1 px-3  font-medium text-gray-700 dark:text-gray-300 pointer-events-none bg-[#f8f9fa] dark:bg-black absolute start-2.5 top-0 -translate-y-1/2  p-0.5 text-xs 
                     transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0  peer-focus:text-xs"
              >
                Title
              </span>
            </label>
          </div>
          <div>
            <label
              htmlFor="desc"
              className="relative block rounded-md border-2 border-gray-300 dark:border-gray-800 shadow-sm focus-within:border-2-blue-600 "
            >
              <textarea
                type="text"
                id="desc"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className=" resize-none p-2 w-full peer border-2-none bg-transparent placeholder-transparent focus:border-2-transparent focus:outline-none focus:ring-0"
                placeholder="Description"
                rows={7}
              />

              <span
                className="  py-1 px-3  font-medium text-gray-700 dark:text-gray-300 pointer-events-none bg-[#f8f9fa] dark:bg-black absolute start-2.5 top-0 -translate-y-1/2  p-0.5 text-xs 
                     transition-all peer-placeholder-shown:top-[22px] peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
              >
                Description
              </span>
            </label>
          </div>
          <div>
            <label
              htmlFor="price"
              className="relative block rounded-md border-2 border-gray-300 dark:border-gray-800 shadow-sm focus-within:border-2-blue-600 "
            >
              <input
                type="number"
                id="price"
                name="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className=" resize-none p-2 w-full peer border-2-none bg-transparent placeholder-transparent focus:border-2-transparent focus:outline-none focus:ring-0"
                placeholder="Price"
              />

              <span
                className="  py-1 px-3  font-medium text-gray-700 dark:text-gray-300 pointer-events-none bg-[#f8f9fa] dark:bg-black absolute start-2.5 top-0 -translate-y-1/2  p-0.5 text-xs 
                     transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
              >
                Price (in $)
              </span>
            </label>
          </div>

          <button
            type="submit"
            className="  flex items-center gap-1 hover:scale-[.99] py-2 px-4 w-fit rounded-md transition-all duration-300 cursor-pointer text-white bg-blue-700 hover:bg-blue-800 "
          >
            {" "}
            <MdDownloadDone size={20} />{" "}
            <span className=" font-medium text-sm  ">Publish</span>
          </button>
        </form>
      </section>
    </>
  );
};

export default CreateItem;
