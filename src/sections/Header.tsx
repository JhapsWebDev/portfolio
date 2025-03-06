const Header = () => {
  return (
    <header className="w-full h-[80px] leading-[80px] flex items-center">
      <div className="container">
         <div className="flex items-center justify-between">
            <div className="flex items-center gap-[10px]">
               <span className="w-[35px] h-[35px] bg-primary text-white text-[18px] font-[500px] rounded-full flex items-center justify-center">😎</span>
               <div className="leading-[20px] flex flex-col items-center">
                <h2 className="text-xl text-primary text-[16px] font-[700]">Jhaps</h2>
                <p className=" text-primary text-[12px] font-[500]">Web-Dev</p>
               </div>
            </div>
            <div className="menu ">
              <ul className="flex items-center gap-10">
                <li><a className="text-smallTextColor font-[600]" href="#about">About</a></li>
                <li><a className="text-smallTextColor font-[600]" href="#projects">Projects</a></li>
                <li><a className="text-smallTextColor font-[600]" href="#services">Services</a></li>
                <li><a className="text-smallTextColor font-[600]" href="#contact">Contact</a></li>
              </ul>
            </div>
            {/* Menu Right */}
              <div className="flex items-center gap-4">
                <button className="flex items-center justify-evenly gap-2 text-smallTextColor font-[600] border border-solid border-smallTextColor py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-smallTextColor hover:text-white hover:font-[500] ease-in duration-700 hover:cursor-pointer">
                  <i className="ri-send-plane-line"></i>Let's Talk
                </button>
              </div>

              <span className="text-2xl text-smallTextColor cursor-pointer md:hidden">
                <i className="ri-menu-line"></i>
              </span>
            {/* Menu Right End */}
         </div>
      </div>
    </header>
  );
};

export default Header;
