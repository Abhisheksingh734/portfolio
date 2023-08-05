import React from "react";

const HeroSection = () => {
  return (
    <>
      <div className=" flex justify-start p-2">
        <img
          className="h-32 rounded-full"
          src="https://media.licdn.com/dms/image/D4D03AQHN7bl20vvoew/profile-displayphoto-shrink_200_200/0/1669960800983?e=1696464000&v=beta&t=3N7zp8g2rhFL2NNzAjMwumSudNdUIXNIsSBaOMQ2MJ4"
          alt=""
        />
        <div className="container m-2 p-2">
          <div className="font-bold text-3xl text-zinc-700">
            Hi, I am Abhishek
          </div>
          <div className="mt-3 font-semibold text-zinc-500">
            Web Developer from India
          </div>
          <div className=" font-semibold text-zinc-500">20, he/him</div>
        </div>
      </div>
      <section className="about my-9 p-2">
        <h1 className="text-zinc-700 font-bold my-2">about me.</h1>
        <p className="text-zinc-500 mt-2 text-base font-medium text-[14px] mb-4 leading-7">
          As a knowledge-driven engineer, I strive to excel in web development,
          specializing in building and designing scalable websites and
          applications. My goal is to learn and apply knowledge effectively,
          ensuring a successful career in this dynamic field.
        </p>
        <div className="p-1 py-4 mt-4 bg-yellow-100 rounded-lg ">
          <p className="text-zinc-500 mt-2 text-base font-medium text-[14px] ml-3 leading-8">
            I am currently open for full-time engineering roles, which involves
            user interface and experience design, frontend engineering as the
            core. A collaborative team of engineers and designers, who are
            building great products.
            <br /> Interested in working together? Feel free to schedule a meet
          </p>
          <a href="">
            <button className="bg-zinc-700 p-1 text-white px-1 text-sm rounded-md font-sans ml-3 mt-3">
              Check my resume
            </button>
          </a>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
