import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import PlusSign from "../../public/icons/PlusSign";
import { FaChevronLeft, FaSearchengin } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import AddRecord from "@/components/AddRecord";
import { Categories } from "@/components/Categories";
import { Records } from "@/components/Records";
import { useRouter } from "next/router";
import axios from "axios";
import AddCategory from "@/components/AddCategory";

const categories = [
  "Food & Drinks",
  "Lending & Renting",
  "Shopping",
  "Housing",
  "Transportation",
  "Vehicle",
  "Life & Entertainment",
  "Communication, PC",
  "Financial expenses",
  "Investments",
  "Income",
  "Others",
];

let checked = [
  "true",
  "true",
  "true",
  "true",
  "true",
  "true",
  "true",
  "true",
  "true",
  "true",
  "true",
  "true",
];

const Home = () => {
  const router = useRouter();
  const [showAdd, setShowAdd] = useState(false);

  const [showAddCategory, setShowAddCategory] = useState(false);

  const [selected, setSelected] = useState("All");
  // const [myRecords, setRecords] = useState(records);

  const [selectedCategories, setSelectedCategories] = useState(categories);
  const [selectedEyes, setSelectedEyes] = useState(checked);

  const [checkedCategories, setCheckedCategories] = useState(categories);

  const [records, setRecords] = useState([]);
  const [filteredRecords, setFilteredRecords] = useState([]);

  useEffect(() => {
    const getRecords = async () => {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/record`
      );
      setRecords(data.record);
      setFilteredRecords(data.record);
    };
    getRecords();
  }, []);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      router.push("/signIn");
    }
  }, []);

  const handleCategory = (input, index) => {
    let myCategories = [...selectedEyes];
    if (input == "true") {
      myCategories[index] = "false";
    } else {
      myCategories[index] = "true";
    }
    setSelectedEyes(myCategories);
    let filteredCategories = [];
    for (let i = 0; i < categories.length; i++) {
      if (selectedEyes[i] == "true") {
        filteredCategories.push(selectedCategories[i]);
      }
    }
    setCheckedCategories();
  };

  const handleExpense = () => {
    const filtered = records.filter((oneRecord) =>
      oneRecord.transaction.includes("Expense")
    );

    setFilteredRecords(filtered);
  };
  const handleIncome = () => {
    const filtered = records.filter((oneRecord) =>
      oneRecord.transaction.includes("Income")
    );

    setFilteredRecords(filtered);
  };
  const handleAll = () => {
    setFilteredRecords(records);
  };
  const handleChange = (option) => {
    setSelected(option);
  };

  const handleAdd = () => {
    setShowAdd(!showAdd);
  };

  const handleAddCategory = () => {
    setShowAddCategory(!showAddCategory);
  };
  return (
    <div>
      {showAdd && (
        <div className="z-30 fixed top-0 left-0 right-0 bottom-0 bg-gray-400 flex justify-center items-center">
          <AddRecord onCloseModal={handleAdd} />
        </div>
      )}
      <div className={`bg-[#F3F4F6] flex flex-col gap-8 items-center relative`}>
        <Navbar />
        <div className="flex gap-6">
          <div className="bg-white flex flex-col px-6 py-4 w-[282px] gap-6 rounded-xl h-fit border border-[#E5E7EB]">
            <div className="flex flex-col gap-6">
              <p> Records </p>
              <button
                onClick={() => handleAdd()}
                className="flex gap-1 w-[225px] bg-[#0166FF] rounded-3xl text-white items-center justify-center">
                <PlusSign color="white" /> Add
              </button>
            </div>
            <input
              placeholder="Search"
              className="border border-[#D1D5DB] rounded-lg px-4 py-1"
            />
            <div className="flex flex-col gap-1">
              <p className="font-semibold text-base text-[#1F2937] mb-3">
                Types
              </p>
              <div className="flex items-center gap-2 px-3 py-1.5">
                <input
                  type="checkbox"
                  checked={"All" === selected}
                  className="checkbox"
                  onChange={() => handleChange("All")}
                  onClick={() => handleAll()}
                />
                All
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5">
                <input
                  type="checkbox"
                  checked={"Income" === selected}
                  className="checkbox"
                  onChange={() => handleChange("Income")}
                  onClick={() => handleIncome()}
                />
                Income
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5">
                <input
                  type="checkbox"
                  checked={"Expense" === selected}
                  className="checkbox"
                  onChange={() => handleChange("Expense")}
                  onClick={() => handleExpense()}
                />
                Expense
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex justify-between">
                <p className="font-semibold text-base">Category</p>
                <p className="font-normal text-base opacity-20"> Clear </p>
              </div>
              <div className="flex flex-col gap-2">
                <Categories />
              </div>

              <div className="flex flex-col gap-2 py-1.5 pl-3 items-center">
                <div>
                  {showAddCategory && (
                    <div>
                      <AddCategory onCloseModal={handleAddCategory} />
                    </div>
                  )}
                </div>
                <div className="flex flex-row">
                  <button onClick={handleAddCategory}>
                    <PlusSign color={"#0166FF"} />
                  </button>
                  <p>Add category </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[894px] flex flex-col gap-4">
            <div className="flex justify-between">
              <div className="flex gap-4 items-center">
                <div className="w-8 h-8 rounded-lg p-1.5 bg-[#E5E7EB]">
                  <FaChevronLeft />
                </div>
                <p className="font-normal text-base"> Last 30 Days</p>
                <div className="w-8 h-8 rounded-lg p-1.5 bg-[#E5E7EB]">
                  <FaAngleRight />
                </div>
              </div>
              <select className="w-[180px] py-3 px-4 rounded-lg font-semibold text-base text-[#1F2937] border border-[#D1D5DB]">
                <option selected>Newest First</option>
                <option> Latest First </option>
              </select>
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-semibold text-base"> Today </p>
              <div className="flex flex-col gap-3 mb-3">
                <Records records={filteredRecords} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
