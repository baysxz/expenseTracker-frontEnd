import { useState } from "react";
import Logo from "../../public/icons/Logo";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import { toast } from "sonner";

const SignIn = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const logIn = () => {
    axios
      .post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/`, {
        email: email,
        password: password,
      })
      .then(function (response) {
        if (response.data.user.length === 1) {
          localStorage.setItem("user", response.data.user[0].userid);
          console.log(response.data.user[0]);
        } else {
          toast.error("error");
        }
        console.log(response);

        router.push("/");
      })
      .catch(function (error) {
        console.log(error);
        toast.error("unsuccessful");
      })
      .finally(function () {});
  };
  return (
    <div className="flex w-screen h-screen">
      <div className="w-3/5 bg-[#FFFFFF] flex  justify-center items-center">
        <div className="flex flex-col gap-10 items-center justify-center">
          <div className="flex gap-[10px] items-center justify-center">
            <Logo />
            <p className="text-black font-bold text-xl"> Geld</p>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <p className="text-[#0F172A] font-semibold text-2xl">
              Welcome Back
            </p>
            <p className="text-[#334155] font-normal text-base">
              Welcome back, Please enter your details
            </p>
          </div>
          <div className="flex flex-col gap-4 w-full">
            <input
              onChange={handleEmail}
              className="px-4 py-3 w-full rounded-lg bg-[#F3F4F6] border border-[#D1D5DB]"
              placeholder="Email"
            />
            <input
              onChange={handlePassword}
              className="px-4 py-3 w-full rounded-lg bg-[#F3F4F6] border border-[#D1D5DB]"
              placeholder="Password"
            />
            <button
              onClick={logIn}
              className="bg-[#0166FF] justify-center font-normal text-xl flex items-center text-white text-center py-2.5 w-full rounded-3xl">
              Log in
            </button>
          </div>
          <div className="flex items-center justify-center gap-3">
            <p className="text-[#0F172A] font-normal text-base">
              Do not have account?
            </p>
            <Link href={"./signUp"}>
              <p className="text-[#0166FF] font-normal text-base">Sign up</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-2/5 bg-[#0166FF]"> </div>
    </div>
  );
};

export default SignIn;
