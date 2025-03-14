import React from "react";
import BlogImage from "../../assets/images/blog/1.jpg";

const Blog = () => {
  return (
    <div className="border-t border-gray-300 mb-20">
      <div className="py-14 px-6 mb-20">
        <div className="flex flex-col items-start md:items-center">
          <div className="">
            <h5 className="uppercase text-[#555] text-xl font-[500] mb-4">
              Recent Blog
            </h5>
            <h2 className="uppercase text-black text-4xl font-[700] mb-10">
              Read Updated Journal
            </h2>
          </div>
          <p className="max-w-[400px] text-xl text-[#555] font-[500] md:pl-50  min-w-xl">
            Read our blog and try to see everything from every perspective. Our
            passion lies in making everything accessible and aesthetic for
            everyone.
          </p>
        </div>
      </div>

    <div className="flex flex-col md:flex-row justify-center gap-4">
        <div className="mb-10 min-w-xl">
          <div className="p-6 relative group">
              <img src={BlogImage} alt="" srcset="" className="group-hover:scale-x-200 group-hover:blur-sm transition-all duration-300 ease-in-out"/>
              <div className="absolute top-6/12 left-20 max-w-[500px] bg-white rounded-xl px-6 py-10">
                  <h5 className="uppercase text-[#555] font-[500] mb-5">
                  UI Design . 02 May 2019
                  </h5>
                  <h1 className="text-black text-3xl font-[700] pb-14 border-b border-[#BBB] hover:text-[#555] transition-all duration-300 ease-in-out">
                  How to bring fold to your startup company with Axtra</h1>
                  <a href="#" className="text-[#555] font-[500] text-lg py-4 block">Read More &nbsp; <i class="fa-solid fa-arrow-up rotate-30"></i></a>
              </div>
          </div>
        </div>
        <div className="mb-10 min-w-xl">
          <div className="p-6 relative group">
              <img src={BlogImage} alt="" srcset="" className="group-hover:scale-x-200 group-hover:blur-sm transition-all duration-300 ease-in-out"/>
              <div className="absolute top-6/12 left-20 max-w-[500px] bg-white rounded-xl px-6 py-10">
                  <h5 className="uppercase text-[#555] font-[500] mb-5">
                  UI Design . 02 May 2019
                  </h5>
                  <h1 className="text-black text-3xl font-[700] pb-14 border-b border-[#BBB] hover:text-[#555] transition-all duration-300 ease-in-out">
                  How to bring fold to your startup company with Axtra</h1>
                  <a href="#" className="text-[#555] font-[500] text-lg py-4 block">Read More &nbsp; <i class="fa-solid fa-arrow-up rotate-30"></i></a>
              </div>
          </div>
        </div>
    </div>
    </div>
  );
};

export default Blog;
