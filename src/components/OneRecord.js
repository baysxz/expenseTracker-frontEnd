import moment from "moment";
import { FaCarRear } from "react-icons/fa6";
import { FaLaptopCode } from "react-icons/fa";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { SiRemedyentertainment } from "react-icons/si";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { FaHouseChimneyUser } from "react-icons/fa6";
import { BsTaxiFrontFill } from "react-icons/bs";
import { ImSpoonKnife } from "react-icons/im";
import { HiMiniShoppingCart } from "react-icons/hi2";
import { FaGift } from "react-icons/fa6";
import { BiSolidCarMechanic } from "react-icons/bi";
import { useEffect, useState } from "react";

const OneRecord = (props) => {
  const { text, time, color, money, type } = props;
  const icon = categoryIconByCategoryName(props);
  const expenseSymbol = type === "Income" ? "+" : "-";
  const iconColor = type === "Expense" ? "#0166FF" : "#16A34A";

  return (
    <div className="w-full px-6 py-3 border bg-white border-[#E5E7EB] items-center justify-between flex rounded-xl">
      <div className="flex gap-4">
        <div
          className={`flex justify-center items-center w-10 h-10 rounded-full`}
          style={{
            backgroundColor: iconColor,
          }}
        >
          {icon?.icon}
        </div>
        <div className="flex flex-col">
          <p className="font-normal text-base">{text}</p>
          <p className="font-normal text-xs text-[#6B7280]">
            {" "}
            {moment(time).format("LLL")}
          </p>
        </div>
      </div>
      <p
        className={`font-semibold text-base ${
          type === "Income" ? "text-green-500" : "text-blue-500"
        } `}
      >
        {expenseSymbol}
        {money}
      </p>
    </div>
  );
};

export default OneRecord;

const categoryIcons = [
  { name: "Food & Beverages", icon: <ImSpoonKnife /> },
  { name: "Shopping", icon: <HiMiniShoppingCart /> },
  { name: "Housing", icon: <FaHouseChimneyUser /> },
  { name: "Transportation", icon: <BsTaxiFrontFill /> },
  { name: "Vehicle", icon: <BiSolidCarMechanic /> },
  { name: "Life & Entertainment", icon: <SiRemedyentertainment /> },
  { name: "Communication, PC", icon: <FaLaptopCode /> },
  { name: "Investments", icon: <FaFileInvoiceDollar /> },
  { name: "Financial expenses", icon: <FaMoneyBill1Wave /> },
  { name: "Income", icon: <FaGift /> },
];

const categoryIconByCategoryName = (props) => {
  const icon = categoryIcons.find((name) => name.name === props.text);

  return icon;
};
