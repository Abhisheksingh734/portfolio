import React from "react";

const ContactSocials = () => {
  return (
    <div className="flex flex-col ">
      <p className="text-zinc-700 font-bold ">contact, socials.</p>
      <div className="p-2 m-5">
        <ul>
          <li className="font-semibold text-zinc-600 mb-5 text-sm ">
            Github :{" "}
            <a href={"https://github.com/Abhisheksingh734"} target="_blank">
              <span className=" text-[14px] ml-2">
                {" "}
                <button className="hover:text-zinc-800">
                  @Abhisheksingh734{" "}
                  <i
                    class="fa fa-external-link hover:scale-105"
                    aria-hidden="true"
                  ></i>
                </button>
              </span>
            </a>
          </li>

          <li className="font-semibold text-zinc-600 mb-5 text-sm">
            LinkedIn :{" "}
            <a
              href={"https://www.linkedin.com/in/abhisheksingh734/"}
              target="_blank"
            >
              <span className=" text-[14px] ml-2">
                {" "}
                <button className="hover:text-zinc-800">
                  @abhisheksingh734{" "}
                  <i
                    class="fa fa-external-link hover:scale-105"
                    aria-hidden="true"
                  ></i>
                </button>
              </span>
            </a>
          </li>

          <li className="font-semibold text-zinc-600 mb-5 text-sm">
            Twitter :{" "}
            <a href={"https://twitter.com/AbhiSingh734"} target="_blank">
              <span className=" text-[14px] ml-2">
                {" "}
                <button className="hover:text-zinc-800">
                  @abhisingh{" "}
                  <i
                    class="fa fa-external-link hover:scale-105"
                    aria-hidden="true"
                  ></i>
                </button>
              </span>
            </a>
          </li>

          <li className="font-semibold text-zinc-600 mb-5 text-sm">
            instagram :{" "}
            <a href={"https://www.instagram.com/abhi1_shekk/"} target="_blank">
              <span className=" text-[14px] ml-2">
                {" "}
                <button className="hover:text-zinc-800">
                  @abhiii_shekk{" "}
                  <i
                    class="fa fa-external-link hover:scale-105"
                    aria-hidden="true"
                  ></i>
                </button>
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactSocials;
