
const Navbar = () => {
  return (
    <nav>
        <div className="flex justify-between items-center px-12 py-6 font-kanit fixed w-full">
            <div className="">
                <img src="/logo-black.png" width="150" alt="" srcset="" />
            </div>
            <div className="">
                <ul className="flex text-xl gap-14 font-light uppercase">
                    <li>Home</li>
                    <li>About</li>
                    <li>Pages</li>
                    <li>Services</li>
                    <li>Team</li>
                    <li>Blog</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="flex items-center gap-20 text-2xl font-light">
            <i class="fa-solid fa-magnifying-glass"></i>
            <i class="fa-solid fa-align-right"></i>
            </div>
        </div>
    </nav>
  )
}

export default Navbar