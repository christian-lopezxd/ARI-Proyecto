import React from "react";
import TxtToJsonForm from "../Components/txtToJsonForm";


const TxtToJson = () => {
    return (
        <section className="min-h-screen bg-jsonimage bg-cover flex flex-col justify-center items-center gap-5  ">
            <h1 className="text-white font-MontBold text-6xl drop-shadow-md" >Txt to Json converter</h1>
            <TxtToJsonForm />
        </section>
    );
};

export default TxtToJson;