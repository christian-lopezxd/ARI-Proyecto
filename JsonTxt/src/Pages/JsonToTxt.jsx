import React from "react";
import JsonToTxtForm from "../Components/JsonToTxtForm";

const JsonToTxt = () => {
    return (
        <section className="min-h-screen bg-jsonimage bg-cover flex flex-col justify-center items-center gap-5  ">
            <h1 className="text-white font-MontBold text-6xl drop-shadow-md" >Json to Txt converter</h1>
            <JsonToTxtForm />
        </section>
    );
};

export default JsonToTxt;