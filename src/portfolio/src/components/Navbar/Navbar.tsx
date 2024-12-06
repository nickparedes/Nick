import React from "react";
import { GrSolaris } from "react-icons/gr";
import { LuMoon } from "react-icons/lu";
import './Navbar.css';
import logo from  "../../assets/logo.svg";
// const CONSTANTS = {
//   colors: {
//     background:"",
//     primary: "[#313c46]", //rgba(49,60,70,255)
//     secondary: "[#fdfcfc]", //rgba(253,252,252,255)
//   }

// }

const Navbar = () => {

  const [dark, setDark] = React.useState(false)

  const navbarLink:{
    name: string,
    href: string
  }[] = [
    {
      name: "Home",
      href: "#"
    },
    {
      name: "Backend",
      href: "#"
    },
    {
      name: "Frontend",
      href: "#"
    },
    {
      name: "About me",
      href: "#"
    }
  ]


  const handleDarkMode = () =>{
    console.log(dark)
    setDark(() => !dark)
  }

  return (
    <header 
      className={`fixed w-full flex items-center  justify-between px-8 py-4  max-w-screen-2xl mx-auto`}>
        <a href="#"  className="flex items-center text-xl z-10">
            <img src={logo} alt="Logo" className="text-red- w-20 h-20" />
        </a>
      
        <ul className="flex items-center  space-x-3">
          {navbarLink.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className={`text-[#313c46]  rounded-sm p-1 text-xl`}
              >
                {link.name}
              </a>
            </li>
          ))}
          <button
            onClick={handleDarkMode}
            className={`flex items-center justify-center p-2 rounded-full transition-all duration-300 ease-in-out 
              ${dark ? 'bg-[#313c46] text-white shadow-lg' : 'bg-yellow-500 text-[#313c46]'}
              hover:${dark ? 'bg-[#313c46]' : 'bg-yellow-400'}
              transform hover:scale-105`}
          >
            {dark ? (
              <GrSolaris className="text-xl transition-transform duration-500 transform rotate-180" />
            ) : (
              <LuMoon className="text-xl transition-transform duration-500 transform rotate-0" />
            )}
          </button>
        </ul>
    </header>

  );
};

export default Navbar;
