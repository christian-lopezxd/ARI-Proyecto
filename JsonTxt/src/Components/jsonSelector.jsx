import React, { useState } from "react";

const JsonSelector = () => {
  const [jsonContent, setJsonContent] = useState(null);
  const [error, setError] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type === "application/json") {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const content = JSON.parse(e.target.result);
          setJsonContent(content);
          setError(null);
        } catch (err) {
          setJsonContent(null);
          setError("Error al leer el archivo JSON");
        }
      };
      reader.readAsText(file);
    } else {
      setJsonContent(null);
      setError("Por favor selecciona un archivo JSON válido");
    }
  };

  return (
    <div className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg">
      <div className="flex flex-row items-start space-x-6">
        {/* Input para seleccionar archivo JSON */}
        <div className="flex flex-col">
          <label className="text-white font-sans font-semibold mb-2">Json File</label>
          <input
            type="file"
            name="jsonFile"
            accept=".json"
            className="file:py-3 file:px-6 file:rounded-lg file:border-0
                       file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700
                       hover:file:bg-violet-100 focus:outline-none focus:ring-2
                       focus:ring-violet-500 focus:ring-opacity-50 rounded-lg
                       text-gray-700 bg-gray-200 w-100 h-12 pr-4"
            onChange={handleFileChange}
          />
        </div>

        {/* Input para ingresar la clave */}
        <div className="flex flex-col">
          <label className="text-white font-sans font-semibold mb-2">Key</label>
          <input
            type="text"
            className="rounded-lg text-gray-700 bg-gray-200 w-80 h-12
                       focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-opacity-50
                       px-4 py-2"
            placeholder="Key"
          />
        </div>
      </div>
      {error && <p className="text-red-500 mt-4">{error}</p>}
      {jsonContent && (
        <pre className="text-white bg-gray-700 p-4 rounded-lg w-full max-w-6xl h-64 overflow-auto mt-4">
          {JSON.stringify(jsonContent, null, 2)}
        </pre>
      )}

      <button type="submit" className="mt-4 bg-violet-500 hover:bg-violet-600 text-white font-sans font-semibold
                       rounded-lg px-6 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500
                       focus:ring-opacity-50">
        CONVERT
        </button>
    </div>
  );
};

export default JsonSelector;