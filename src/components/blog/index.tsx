import React from "react";
import { BlogType } from "../../types";
import { ThemeContext } from "../../ThemeContext";
import {ImBlog} from "react-icons/im";

type Props = {
  key: number;
  blog: BlogType;
};

const BlogCard = ({ key, blog }: Props) => {
  const { theme } = React.useContext(ThemeContext);
  // border border-gray-100 hover:shadow-md hover:shadow-white shadow-white shadow-sm rounded-lg

  return (
    <article
      key={key}
      className={theme === "dark" ? "lg:w-[49%] xl:w-[32%] xxs:w-[100%] bg-[#1F2938] border border-[#1F2938] hover:shadow-md hover:shadow-[#1F2938]  shadow-[#1F2938] shadow-sm rounded-lg px-6 py-4 cursor-pointer" : "lg:w-[49%] xl:w-[32%] xxs:w-[100%] bg-white border border-gray-300 hover:shadow-md hover:shadow-gray-300  shadow-gray-300 shadow-sm rounded-lg px-6 py-4 cursor-pointer  "}
    >
      <div className="flex items-start sm:gap-8">
        <div
          className="hidden sm:grid sm:h-14 sm:w-14 sm:shrink-0 sm:place-content-center sm:rounded-full sm:border sm:border-[#1DA1F2] my-auto"
          aria-hidden="true"
        >
          <div >
            <span className="text-3xl text-[#1DA1F2]">
              <ImBlog/>
            </span>
          </div>
        </div>

        <div>
          <h3 className="mt-2 text-lg font-normal sm:text-lg">
            <a href={`${blog.url}`} className="hover:underline text-[#1DA1F2]">
              {" "}
              {blog.title}{" "}
            </a>
          </h3>

          <p className={theme === "dark" ? "mt-1 text-base text-white font-thin" : "mt-1 text-base text-gray-500 font-thin"}>{blog.description}</p>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
