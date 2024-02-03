"use client";

import Image from "next/image";
import { Triangle } from "react-loader-spinner";

const LoadingPage = () => {
  return (
    <div className="flex items-center justify-center gap-4 flex-col fixed top-0 w-screen h-screen bg-background z-50">
      <Image
        src={"/assets/images/logo.png"}
        alt="logo"
        width={1920}
        height={1080}
        className="object-cover object-center w-72 h-72 animate-pulse "
      />
      <Triangle
        visible={true}
        height="80"
        width="80"
        color={"#6D28D9"}
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default LoadingPage;
