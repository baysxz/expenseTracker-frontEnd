import Link from "next/link";
import Logo from "../../public/icons/Logo";
import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { useRouter } from "next/router";

const SignUp = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);

  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleRePassword = (event) => {
    setRePassword(event.target.value);
  };

  const clickSignUp = async () => {
    if (!name) {
      toast("neree bichne vv");
      return;
    }
    if (password !== rePassword) {
      toast("password-oo shalgana uu");
      return;
    }
    try {
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/users`,
        {
          name: name,
          email: email,
          password: password,
          avatarImg: "https://i.pravatar.cc/300",
          rePassword: rePassword,
        }
      );

      localStorage.setItem("user", JSON.stringify(data.user));

      toast("amjilttai nevterlee");
      router.push("/");
    } catch (error) {
      toast(error);
    }
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
              Create Geld account
            </p>
            <p className="text-[#334155] font-normal text-base">
              Sign up below to create your Wallet account
            </p>
          </div>
          <div className="flex flex-col gap-4 w-full">
            <input
              onChange={handleName}
              value={name}
              className="px-4 py-3 w-full rounded-lg bg-[#F3F4F6] border border-[#D1D5DB]"
              placeholder="Name"
            />
            <input
              onChange={handleEmail}
              value={email}
              className="px-4 py-3 w-full rounded-lg bg-[#F3F4F6] border border-[#D1D5DB]"
              placeholder="Email"
            />
            <input
              value={password}
              onChange={handlePassword}
              type="password"
              className="px-4 py-3 w-full rounded-lg bg-[#F3F4F6] border border-[#D1D5DB]"
              placeholder="Password"
            />
            <input
              value={rePassword}
              onChange={handleRePassword}
              type="password"
              className="px-4 py-3 w-full rounded-lg bg-[#F3F4F6] border border-[#D1D5DB]"
              placeholder="Re-password"
            />
            <button
              onClick={clickSignUp}
              className="bg-[#0166FF] justify-center font-normal text-xl flex items-center text-white text-center py-2.5 w-full rounded-3xl">
              Sign up
            </button>
          </div>
          <div className="flex items-center justify-center gap-3">
            <p className="text-[#0F172A] font-normal text-base">
              Already have account?
            </p>
            <Link href={"./signIn"}>
              <p className="text-[#0166FF] font-normal text-base">Sign in</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-2/5 bg-[#0166FF]"> </div>
    </div>
  );
};

export default SignUp;
