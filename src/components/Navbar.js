import Link from "next/link";
import Logo from "../../public/icons/Logo";
import AddRecord from "./AddRecord";
import { useState } from "react";

const Navbar = (props) => {
  const [showAdd, setShowAdd] = useState(false);

  const handleAdd = () => {
    setShowAdd(!showAdd);
  };

  return (
    <div className="bg-white w-full px-[120px] py-4 flex justify-between max-w-screen-xl">
      {showAdd && (
        <div className="z-30 fixed top-0 left-0 right-0 bottom-0 bg-gray-400 flex justify-center items-center">
          <AddRecord onCloseModal={handleAdd} />
        </div>
      )}
      <div className="flex gap-6 items-center">
        <Link href="/">
          {" "}
          <Logo />
        </Link>
        <Link href="/dashboard">
          <p> Dashboard </p>
        </Link>
        <Link href="/records">
          <p> Records</p>
        </Link>
      </div>
      <div className="flex items-center gap-6">
        <button
          onClick={() => handleAdd()}
          className="bg-[#0166FF] py-1.5 px-3 text-white rounded-3xl text-base">
          + Record
        </button>
        <div>
          <img className="rounded-full w-10 h-10 " src="/images/Profile.jpeg" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
