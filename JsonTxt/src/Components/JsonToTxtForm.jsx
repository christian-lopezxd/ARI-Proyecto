import React from "react";
import JsonSelector from "./jsonSelector";

const JsonToTxtForm = () => {
    return (
        <form encType="multipart/form-data ">
            <div className="flex flex-col ">
                <div className="flex flex-row"> 
                    <JsonSelector />
                </div> 

            </div>

        </form>
    );
};

export default JsonToTxtForm;