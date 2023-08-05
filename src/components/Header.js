import React from "react";

const Header = () => {
  return (
    <div className="flex justify-end md:mx-2">
      <ul className="flex justify-between w-1/2 md:w-1/5">
        <a href="" target="_blank">
          <li className=" text-base text-zinc-500 hover:text-zinc-700 cursor-pointer hover:underline-offset-4 hover:underline">
            Home
          </li>
        </a>
        <a href="https://codingpirates.hashnode.dev/" target="_blank">
          <li className=" text-base text-zinc-500 hover:text-zinc-700 cursor-pointer hover:underline-offset-4 hover:underline">
            Blogs
          </li>
        </a>
        <li className=" text-base text-zinc-500 hover:text-zinc-700 cursor-pointer hover:underline-offset-4 hover:underline">
          Projects
        </li>
      </ul>
    </div>
  );
};

export default Header;
