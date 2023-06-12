import React from 'react'
import BlogCard from '../../components/blog'
import { blogInfo } from '../../portfolio'


const Blog = () => {
    const blogSectionStyle = "flex flex-col my-24"
    const blogHeaderStyle = "text-2xl font-light text-[#1DA1F2]"
    const blogCardContainerStyle = "flex flex-wrap justify-between pt-5 gap-y-9"
  return (blogInfo.display) ? (
    <section className={blogSectionStyle} id="musings">
        <div className="w-auto">
          <h1 className={blogHeaderStyle}>{blogInfo.title}</h1>
        </div>
      <div className={blogCardContainerStyle}>
          {blogInfo.blogs.map((blog, index) => (
            <BlogCard key={index} blog={blog}/>
          ))}
        </div>
    </section>
  ) : null
}

export default Blog