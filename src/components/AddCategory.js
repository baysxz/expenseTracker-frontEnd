import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const AddCategory = (props) => {
  const { onCloseModal } = props;
  const [category, setCategory] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [description, setDescription] = useState("");

  const handleCategoryName = (e) => {
    setCategoryName(e.target.value);
  };
  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleAddCategory = async () => {
    if (!categoryName) {
      toast("neree bichne vv");
      return;
    }
    if (!description) {
      toast("description bichne vv");
      return;
    }
    await axios
      .post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/category/addCategory`, {
        name: categoryName,
        description: description,
      })
      .then(function (response) {
        setCategoryName("");
        setDescription("");
        setCategoryImg("");
        console.log(response);
      })
      .catch(function (error) {
        setCategoryName("");
        setDescription("");
        setCategoryImg("");
        console.log(error);
      });
  };

  const buttonColor = "#16A34A";
  console.log(buttonColor);

  return (
    <>
      <div className="flex flex-col gap-2">
        <h3>Add Category</h3>
        <div className="flex flex-col">
          <p>Name</p>
          <textarea
            onChange={handleCategoryName}
            type="text"
            placeholder="Name"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="flex flex-col">
          <p className="text-[#1F2937]">Description</p>
          <textarea
            onChange={handleDescription}
            placeholder="Write here"
            className="bg-[#F3F4F6] pt-4 pl-4 border border-[#D1D5DB] w-full h-full rounded-lg"
          />
        </div>
        <button
          onClick={handleAddCategory}
          className={`bg-[${buttonColor}] flex items-center justify-center py-2 rounded-3xl text-white`}
          style={{ backgroundColor: buttonColor }}>
          Add Category
        </button>
      </div>
    </>
  );
};

export default AddCategory;
