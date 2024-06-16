import React, { useState, useEffect } from "react";
import jsonServices from "../Services/jsonService"; // Asegúrate de que este servicio esté correctamente configurado

const JsonToTxtForm = () => {

  const [jsonContent, setJsonContent] = useState(null);
  const [error, setError] = useState(null);
  const [jsonFile, setJsonFile] = useState(null);
  const [key, setKey] = useState("");
  const [delim, setDelim] = useState("");

  useEffect(() => {
    console.log(key);
    console.log(jsonFile);
    console.log(delim);
  }, [jsonFile, key, delim]);

  const transform = (e) => {
    e.preventDefault();

    if (!jsonFile) {
      setError("No se ha seleccionado ningún archivo.");
      return;
    }

    const formData = new FormData();
      formData.append("file", jsonFile);
      formData.append("key", key);
      formData.append("delim", delim);
      formData.append("savePath", "/documents/test/");

    jsonServices.transform(formData)
    .then(response => {
        const transformedData = response;
        downloadTxtFile(transformedData, "transformed.txt");
      })
      .catch(err => {
        console.error("Error al transformar:", err);
        setError("Error durante la transformación.");
      });
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setJsonFile(file);

    if (file && file.type === "application/json") {
      const reader = new FileReader();
      reader.onload = (e) => {
        setJsonContent(e.target.result);
        setError(null);
      };
      reader.readAsText(file);
    } else {
      setJsonContent(null);
      setError("Por favor selecciona un archivo JSON válido");
    }
  };

  const downloadTxtFile = (content, filename) => {
    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url); // Libera la URL del Blob
  };

  return (
    <form encType="multipart/form-data" onSubmit={transform}>
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
              value={key}
              onChange={(e) => setKey(e.target.value)}
              className="rounded-lg text-gray-700 bg-gray-200 w-80 h-12
                         focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-opacity-50
                         px-4 py-2"
              placeholder="Key"
            />
          </div>

          {/* Input para ingresar el delimitador */}
          <div className="flex flex-col">
            <label className="text-white font-sans font-semibold mb-2">Delimiter</label>
            <input
              type="text"
              value={delim}
              onChange={(e) => setDelim(e.target.value)}
              className="rounded-lg text-gray-700 bg-gray-200 w-80 h-12
                         focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-opacity-50
                         px-4 py-2"
              placeholder="Delimiter"
            />
          </div>
        </div>
        {error && <p className="text-red-500 mt-4">{error}</p>}
        {jsonContent && (
          <pre className="text-white bg-gray-700 p-4 rounded-lg w-full max-w-6xl h-64 overflow-auto mt-4">
            {jsonContent}
          </pre>
        )}

        <button
          type="submit"
          className="mt-4 bg-violet-500 hover:bg-violet-600 text-white font-sans font-semibold
                     rounded-lg px-6 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500
                     focus:ring-opacity-50"
        >
          CONVERT
        </button>
      </div>
    </form>
  );
};

export default JsonToTxtForm;

