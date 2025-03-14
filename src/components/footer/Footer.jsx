import React from 'react'
import logo from '/site-logo-white-2.png'

const Footer = () => {
  return (
    <footer className='bg-[#111] text-white font-kanit'>
      <div className="">
        <div className="md:px-12 grid grid-cols-1 lg:grid-cols-[40%_20%_40%] xl:grid-cols-[30%_10%_60%] gap-6 md:place-items-center">
          <div className="p-8">
            <img src={logo} alt="Footer Logo" className='mb-8' />
            <p className='max-w-[350px] text-lg text-[#999] font-[500]'>When do they work well, and when do they on us and finally, when do we actually need how can we avoid them.</p>
          </div>
          <div className="border-l border-r border-[#666] h-full w-full">
            <ul className=''>
              <li><a className='block py-8 hover:bg-white hover:text-black transition-all duration-200 ease-in-out text-xl font-semibold text-center border-b border-t border-[#666]' href="#">Facebook</a></li>
              <li><a className='block py-8 hover:bg-white hover:text-black transition-all duration-200 ease-in-out text-xl font-semibold text-center border-b border-t border-[#666]' href="#">Twitter</a></li>
              <li><a className='block py-8 hover:bg-white hover:text-black transition-all duration-200 ease-in-out text-xl font-semibold text-center border-b border-t border-[#666]' href="#">Linkedin</a></li>
              <li><a className='block py-8 hover:bg-white hover:text-black transition-all duration-200 ease-in-out text-xl font-semibold text-center border-b border-t border-[#666]' href="#">Instagram</a></li>
            </ul>
          </div>
          <div className="">
            <p className='text-6xl text-center py-10 font-semibold uppercase bg-clip-text text-transparent bg-gradient-to-r from-[#FFC107] to-[#ff00f7]'>Let’s talk</p>
          </div>
        </div>
      </div>
        <hr className='text-[#666]' />
        {/* Footer Bottom */}
        <div className="p-8 md:px-20 md:py-18">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6 md:gap-4">
            <p className='order-2 lg:order-1 text-lg font-semibold'>&copy; 2022 - 2025 | Alrights reserved by <a className='hover:text-gray-400 duration-300 transition-all ease-in-out' href="#">Wealcoder</a></p>
              <ul className='order-1 lg:order-2 flex justify-end gap-6 lg:gap-16 text-lg font-semibold uppercase'>
                  <li>About Us</li>
                  <li>Contact</li>
                  <li>Career</li>
                  <li>FAQS</li>
              </ul>
          </div>
        </div>
    </footer>
  )
}

export default Footer