import React from "react";
import { Link } from "react-router-dom"; 
import TxtToJsonForm from "../Components/txtToJsonForm";


const TxtToJson = () => {
    return (
        <section className="min-h-screen bg-jsonimage bg-cover flex flex-col justify-center items-center gap-5  relative">
            <Link
                to="/"
                className="absolute font-montserrat top-5 left-5 bg-gray-800 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
                Back to Home
            </Link>
            <h1 className="text-white font-MontBold text-6xl drop-shadow-md" >Txt to Json converter</h1>
            <TxtToJsonForm />
        </section>
    );
};

export default TxtToJson;