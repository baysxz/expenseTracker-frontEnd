import moment from "moment";
import FoodExpense from "../../public/icons/FoodExpenseIcon";
import Shopping from "../../public/icons/Shopping";
import RentIcon from "../../public/icons/RentIcon";
import Taxi from "../../public/icons/Taxi";
import Drink from "../../public/icons/Drink";
import Housing from "../../public/icons/Housing";
import { FaCarRear } from "react-icons/fa6";
import { FaLaptopCode } from "react-icons/fa";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { SiRemedyentertainment } from "react-icons/si";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { CiGift } from "react-icons/ci";

const OneRecord = (props) => {
  const { text, image, time, color, money, iconColor } = props;
  const icon = categoryIconByCategoryName(props);

  return (
    <div className="w-full px-6 py-3 border bg-white border-[#E5E7EB] items-center justify-between flex rounded-xl">
      <div className="flex gap-4">
        <div
          className={`flex justify-center items-center w-10 h-10 rounded-full bg-black`}
          style={{
            backgroundColor: iconColor,
          }}>
          {icon?.icon}
        </div>
        <div className="flex flex-col">
          <p className="font-normal text-base">{text}</p>
          <p className="font-normal text-xs text-[#6B7280]">
            {" "}
            {moment(time).format("LT")}{" "}
          </p>
        </div>
      </div>
      <p className={`font-semibold text-base text-[${color}]`}> {money} </p>
    </div>
  );
};

export default OneRecord;

const categoryIcons = [
  {
    name: "Food & Beverages",
    icon: <FoodExpense />,
  },
  { name: "Shopping", icon: <Shopping /> },
  { name: "Housing", icon: <Housing /> },
  { name: "Transportation", icon: <Taxi /> },
  { name: "Vihecle", icon: <FaCarRear /> },
  { name: "Life & Entertainment", icon: <SiRemedyentertainment /> },
  { name: "Communication, PC", icon: <FaLaptopCode /> },
  { name: "Investments", icon: <FaFileInvoiceDollar /> },
  { name: "Financial expenses", icon: <FaMoneyBill1Wave /> },
  { name: "Income", icon: <CiGift /> },
];

const categoryIconByCategoryName = (props) => {
  const icon = categoryIcons.find((name) => name.name === props.text);

  return icon;
};
