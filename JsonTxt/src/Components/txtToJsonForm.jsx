import React from "react";

import TxtSelector from "./txtSelector";

const TxtToJsonForm = () => {
    return (
        <form encType="multipart/form-data ">
            <div className="flex flex-col ">
                <div className="flex flex-row"> 
                    <TxtSelector />
                </div> 

            </div>

        </form>
    );
}

export default TxtToJsonForm;