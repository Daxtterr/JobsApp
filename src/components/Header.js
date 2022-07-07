import "../styles/header.css";
import sun from "../Images/icon-sun.svg";
import moon from "../Images/icon-moon.svg";
import { useEffect } from "react";

const header = () => {

const darkk = () =>{
  
  document.documentElement.classList.toggle('dark')

}



  return (
    <div >
      <div className="bg-blue-900 h-28 md:rounded-bl-[82px]">
        <div className="w-4/5 flex justify-between mx-auto">
          <h2 className="text-white text-2xl font-semibold pt-5">devjobs</h2>
          <div className="pt-6 flex space-x-4 ">
            <img className="h-5" src={sun}></img>
            <label htmlFor="toggle-switch">
              <input
              onClick={darkk}
                type="checkbox"
                id="toggle-switch"
                className="cursor-pointer h-5 w-10 rounded-full appearance-none bg-white checked:bg-white transition duration-200 relative"
              />
            </label>
            <img className="h-4 mt-0.5" src={moon}></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default header;
