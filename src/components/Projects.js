import React from "react";

const Projects = () => {
  return (
    <>
      <h1 className="text-zinc-700 font-bold ">projects.</h1>
      <div className="border-l-2 my-12 hover:border-l-orange-300 ">
        <div className="text-zinc-500 mt-2 text-base font-normal text-[14px] ml-4 leading-7">
          <h1 className="text-zinc-700  font-normal  text-[19px] ">
            My Pokemon Generator
          </h1>

          <ul className="flex mb-4">
            <a className="flex" href="https://my-pokemongenerator.netlify.app/">
              <li className="text-xs mr-1">Live</li>
              <i class="fa fa-external-link" aria-hidden="true"></i>
            </a>

            <a
              className="flex mx-3"
              href="https://github.com/Abhisheksingh734/PokemonGenerator"
              target="_blank"
            >
              <li className="text-xs mx-1">GitHub</li>
              <i class="fa fa-external-link" aria-hidden="true"></i>
            </a>
          </ul>
          <p className="mt-2 text-[14px]">
            {" "}
            This is a web application that allows you to search and view
            information about Pokémon using PokeAPI.
          </p>
          <div className="mt-2">
            <span className="text-zinc-700 font-semibold text-[15px]">
              Tech Stack :
            </span>
            <span className="ml-2">
              React, HTML, CSS, JavaScript (and Parcel bundler)
            </span>
          </div>

          <p className="text-zinc-700 font-semibold text-[15px] mt-2">
            Features :
          </p>
          <ul className="mt-3">
            <li className="list-disc list-inside"> Search Pokémon by name.</li>
            <li className="list-disc list-inside">
              Display Pokémon information, including image and stats
            </li>
            <li className="list-disc list-inside">
              Responsive layout for optimal viewing on different devices.
            </li>
          </ul>
        </div>
      </div>

      {/** project 2
       */}

      <div className="border-l-2 my-12 hover:border-l-orange-300">
        <div className="text-zinc-500 mt-2 text-base font-normal text-[14px] ml-4 leading-7">
          <h1 className="text-zinc-700 font-normal  text-[19px]">
            My Youtube Clone
          </h1>
          <ul className="flex mb-4">
            <a className="flex" href="https://my-ytclone.netlify.app/">
              <li className="text-xs mr-1">Live</li>
              <i class="fa fa-external-link" aria-hidden="true"></i>
            </a>

            <a
              className="flex mx-3"
              href="https://github.com/Abhisheksingh734/my-youtubeClone"
              target="_blank"
            >
              <li className="text-xs mx-1">GitHub</li>
              <i class="fa fa-external-link" aria-hidden="true"></i>
            </a>
          </ul>
          <p className="mt-2 text-[14px]">
            {" "}
            This is a web application that allows you to search and view
            information about Pokémon using PokeAPI.
          </p>
          <div className="mt-2">
            <span className="text-zinc-700 font-semibold text-[15px]">
              Tech Stack :
            </span>
            <span className="ml-2">
              React, HTML, CSS, JavaScript (and Parcel bundler)
            </span>
          </div>

          <p className="text-zinc-700 font-semibold text-[15px] mt-2">
            Features :
          </p>
          <ul className="mt-3">
            <li className="list-disc list-inside"> Search Pokémon by name.</li>
            <li className="list-disc list-inside">
              Display Pokémon information, including image and stats
            </li>
            <li className="list-disc list-inside">
              Responsive layout for optimal viewing on different devices.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Projects;
