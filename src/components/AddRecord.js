import { IoClose } from "react-icons/io5";
import { useEffect, useState } from "react";
import axios from "axios";
import OneRecord from "./OneRecord";

const AddRecord = (props) => {
  const { onCloseModal } = props;
  const [incomeExpense, setIncomeExpense] = useState("Expense");
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [text, setText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [id, setId] = useState(0);
  const [categories, setCategories] = useState([]);
  console.log("id", id);

  useEffect(() => {
    async function getUser() {
      try {
        const response = await axios.get(" http://localhost:8888/category");
        setCategories(response.data.category);
      } catch (error) {
        console.error(error);
      }
    }
    getUser();
  }, []);

  const handleIncomeOrExpense = (props) => {
    const { name } = props;
    setIncomeExpense(name);
    if (incomeExpense === "Expense") {
      setIncomeExpense("Income");
    } else {
      setIncomeExpense("Expense");
    }
  };
  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleAmount = (e) => {
    setAmount(e.target.value);
  };

  const handleText = (e) => {
    setText(e.target.value);
  };
  const handleSelectChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleAdd = async () => {
    await axios
      .post("http://localhost:8888/record/addRecord", {
        userId: "1",
        name: name,
        amount: amount,
        transaction: incomeExpense,
        description: text,
        categoryid: selectedCategory,
      })
      .then(function (response) {
        setAmount(0);
        setIncomeExpense("Expense");
        setText("");
        setSelectedCategory("");
        console.log(response);
      })
      .catch(function (error) {
        setAmount(0);
        setIncomeExpense("Expense");
        setText("");
        setSelectedCategory("");
        console.log(error);
      });
  };

  const Expensebackground = incomeExpense === "Expense" ? "#0166FF" : "#F3F4F6";
  const Incomebackground = incomeExpense === "Income" ? "#16A34A" : "#F3F4F6";
  const buttonColor = incomeExpense === "Income" ? "#16A34A" : "#0166FF";
  console.log(buttonColor);
  const textColorIncome =
    incomeExpense === "Income" ? "text-white" : "text-base";
  const textColorExpense =
    incomeExpense === "Expense" ? "text-white" : "text-base";

  const today = new Date();
  const day = String(today.getDate());
  const year = String(today.getFullYear());
  const month = "0" + String(today.getMonth());
  const hour = String(today.getHours());
  const minutes = String(today.getMinutes());
  return (
    <div className="w-[792px] flex flex-col rounded-xl  border-b border-[#E2E8F0] bg-slate-200">
      <div className="py-5 px-6 flex justify-between">
        <p className="font-semibold text-xl">Add Record</p>
        <IoClose size={24} onClick={onCloseModal} />
      </div>
      <div className="flex w-full">
        <div className="px-6 pt-5 pb-6 flex flex-col gap-5">
          <div className="rounded-[100px] bg-[#F3F4F6] flex gap-1">
            <div
              onClick={() => handleIncomeOrExpense("Expense")}
              className={`py-2 px-[55.5px] ${textColorExpense} font-normal text-base rounded-3xl bg-[${Expensebackground}]`}
              style={{ backgroundColor: Expensebackground }}>
              Expense
            </div>
            <div
              onClick={() => handleIncomeOrExpense("Income")}
              className={`py-2 px-[55.5px] ${textColorIncome} font-normal text-base rounded-3xl bg-[${Incomebackground}]`}
              style={{ backgroundColor: Incomebackground }}>
              Income
            </div>
          </div>

          <div className="flex flex-col mb-3 gap-[22px]">
            <div className="flex flex-col py-3 px-4 bg-[#F3F4F6] border border-[#D1D5DB] rounded-xl">
              <p className="font-normal text-base"> Name </p>
              <textarea
                onChange={handleName}
                placeholder="Write here"
                className="bg-[#F3F4F6] pt-4 pl-4 border border-[#D1D5DB] w-full h-full rounded-lg"
              />
            </div>
            <div className="flex flex-col py-3 px-4 bg-[#F3F4F6] border border-[#D1D5DB] rounded-xl">
              <p className="font-normal text-base"> Amount </p>
              <input
                onChange={handleAmount}
                type="number"
                placeholder="₮ 000.00"
                className="font-normal text-xl bg-[#F3F4F6]"
              />
            </div>
            <div className="flex flex-col gap-2">
              <p> Category </p>
              <select
                onChange={handleSelectChange}
                className="bg-[#F9FAFB] py-3 px-4 text-base font-normal border border-[#D1D5DB] rounded-lg">
                <option defaultChecked> Find or choose category</option>
                {categories.map((category) => {
                  return (
                    <option
                      key={category.categoryid}
                      value={category.categoryid}>
                      {category.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="flex gap-2">
              <div className="flex flex-col gap-2 w-full">
                <p>Date</p>
                <input
                  type="date"
                  defaultValue={`${year}-${month}-${day}`}
                  className="py-3 px-4 bg-[#F9FAFB] border border-[#D1D5DB] rounded-lg"
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <p>Time</p>
                <input
                  type="time"
                  defaultValue={`${hour}:${minutes}`}
                  className="py-3 px-4 bg-[#F9FAFB] border border-[#D1D5DB] rounded-lg"
                />
              </div>
            </div>
          </div>
          <button
            onClick={handleAdd}
            className={`bg-[${buttonColor}] flex items-center justify-center py-2 rounded-3xl text-white`}
            style={{ backgroundColor: buttonColor }}>
            Add Record
          </button>
        </div>
        <div className="flex flex-col gap-2 px-6 pb-6 pt-[18px] w-full ">
          <p className="text-[#1F2937]">Description</p>
          <textarea
            onChange={handleText}
            placeholder="Write here"
            className="bg-[#F3F4F6] pt-4 pl-4 border border-[#D1D5DB] w-full h-full rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default AddRecord;
