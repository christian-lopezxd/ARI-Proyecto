import React from "react";
import { NavLink } from "react-router-dom";


const Lobby = () => {
    return (
        <section className="min-h-screen bg-jsonimage bg-cover flex flex-col justify-center items-center gap-5  " >
          <h1 className="text-white font-MontBold text-6xl drop-shadow-2xl"> Converter between Json and Txt </h1>
          <div className="flex flex-row gap-5 text-white">
         <NavLink to="/jsonToTxt">  <button className="font-monserrat font-semibold text-black bg-white hover:bg-slate-200 h-[100px] w-[300px] py-2 px-4 rounded-2xl text-center text-2xl"> Json to Txt</button></NavLink>
          <NavLink to="/txtToJson"> <button className="font-monserrat font-semibold text-black bg-white hover:bg-slate-200 h-[100px] w-[300px] py-2 px-4 rounded-2xl text-center text-2xl"> Txt to Json</button></NavLink>
            

          </div>
        </section>
    );
};

export default Lobby;