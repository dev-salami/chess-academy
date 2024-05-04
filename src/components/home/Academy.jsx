import React from "react";
import academyPic1 from "../../../public/images/academy/academyPic1.svg";
import academyPic2 from "../../../public/images/academy/academyPic2.svg";
import academyPic3 from "../../../public/images/academy/academyPic3.svg";
import academyPic4 from "../../../public/images/academy/academyPic4.svg";
import academyPic5 from "../../../public/images/academy/academyPic5.svg";
import academyPic6 from "../../../public/images/academy/academyPic6.svg";
import academyPic7 from "../../../public/images/academy/academyPic7.svg";
import academyPic8 from "../../../public/images/academy/academyPic8.svg";
import academyPic9 from "../../../public/images/academy/academyPic9.svg";
import academyPic10 from "../../../public/images/academy/academyPic10.svg";
import academyPic11 from "../../../public/images/academy/academyPic11.svg";
import academyPic12 from "../../../public/images/academy/academyPic12.svg";
import academyPic13 from "../../../public/images/academy/academyPic13.svg";
import academyPic14 from "../../../public/images/academy/academyPic14.svg";
import academyPic15 from "../../../public/images/academy/academyPic15.svg";
import academyPic16 from "../../../public/images/academy/academyPic16.svg";
import Image from "next/image";

function Academy() {
  return (
    <section id="academy" className="bg-[#F5EFE7] my-14">
      <div className="mx-auto container py-10">
        <p className="text-4xl font-semibold mb-6  text-center">Our Academy</p>
        <main className="flex flex-wrap justify-center gap-x-6 gap-y-8 p-6  md:grid-cols-3">
          <Image
            alt="academyPic"
            className="rounded-full "
            src={academyPic1}
            width={70}
            height={70}
          ></Image>
          <Image
            alt="academyPic"
            className="rounded-full "
            src={academyPic2}
            width={70}
            height={70}
          ></Image>
          <Image
            alt="academyPic"
            className="rounded-full "
            src={academyPic3}
            width={70}
            height={70}
          ></Image>{" "}
          <Image
            alt="academyPic"
            className="rounded-full "
            src={academyPic4}
            width={70}
            height={70}
          ></Image>{" "}
          <Image
            alt="academyPic"
            className="rounded-full "
            src={academyPic5}
            width={70}
            height={70}
          ></Image>{" "}
          <Image
            alt="academyPic"
            className="rounded-full "
            src={academyPic6}
            width={70}
            height={70}
          ></Image>{" "}
          <Image
            alt="academyPic"
            className="rounded-full "
            src={academyPic7}
            width={70}
            height={70}
          ></Image>{" "}
          <Image
            alt="academyPic"
            className="rounded-full "
            src={academyPic8}
            width={70}
            height={70}
          ></Image>{" "}
          <Image
            alt="academyPic"
            className="rounded-full "
            src={academyPic9}
            width={70}
            height={70}
          ></Image>{" "}
          <Image
            alt="academyPic"
            className="rounded-full "
            src={academyPic10}
            width={70}
            height={70}
          ></Image>{" "}
          <Image
            alt="academyPic"
            className="rounded-full "
            src={academyPic11}
            width={70}
            height={70}
          ></Image>{" "}
          <Image
            alt="academyPic"
            className="rounded-full "
            src={academyPic12}
            width={70}
            height={70}
          ></Image>{" "}
          <Image
            alt="academyPic"
            className="rounded-full "
            src={academyPic13}
            width={70}
            height={70}
          ></Image>{" "}
          <Image
            alt="academyPic"
            className="rounded-full "
            src={academyPic14}
            width={70}
            height={70}
          ></Image>{" "}
          <Image
            alt="academyPic"
            className="rounded-full "
            src={academyPic15}
            width={70}
            height={70}
          ></Image>{" "}
          <Image
            alt="academyPic"
            className="rounded-full "
            src={academyPic16}
            width={70}
            height={70}
          ></Image>
        </main>
      </div>
    </section>
  );
}

export default Academy;
