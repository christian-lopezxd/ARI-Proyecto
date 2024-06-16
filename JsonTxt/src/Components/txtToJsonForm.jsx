import React, { useState, useEffect } from "react";
import txtServices from "../Services/txtServices";

const TxtToJsonForm = () => {

  const [textContent, setTextContent] = useState(null);
  const [error, setError] = useState(null);
  const [txtFile, setTxtFile] = useState(null);
  const [key, setKey] = useState("");
  const [delim, setDelim] = useState("");

  useEffect(() => {
    console.log(key);
    console.log(txtFile);
    console.log(delim);
  }, [txtFile, key, delim]);

  const transform = (e) => {

    
    e.preventDefault();

    if (!txtFile) {
      setError("No se ha seleccionado ningún archivo.");
      return;
    }

    const formData = new FormData();
    formData.append("file", txtFile);
    formData.append("key", key);
    formData.append("delim", delim);
    formData.append("savePath", "/documents/test/");

    txtServices.transform(formData)
      .then(response => {
        const transformedData = response;
        downloadJsonFile(transformedData, "transformed.json");
      })
      .catch(err => {
        console.error("Error al transformar:", err);
        setError("Error durante la transformación.");
      });

  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setTxtFile(file);

    if (file && file.type === "text/plain") {
      const reader = new FileReader();
      reader.onload = (e) => {
        setTextContent(e.target.result);
        setError(null);
      };
      reader.readAsText(file);
    } else {
      setTextContent(null);
      setError("Por favor selecciona un archivo de texto (.txt) válido");
    }
  };

  const downloadJsonFile = (content, filename) => {
    const jsonString = JSON.stringify(content, null, 2); // Formatea JSON con indentación
    const blob = new Blob([jsonString], { type: "application/json" });
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
          {/* Input para seleccionar archivo de texto */}
          <div className="flex flex-col">
            <label className="text-white font-sans font-semibold mb-2">Text File</label>
            <input
              type="file"
              name="textFile"
              accept=".txt"
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
        {textContent && (
          <pre className="text-white bg-gray-700 p-4 rounded-lg w-full max-w-6xl h-64 overflow-auto mt-4">
            {textContent}
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
}

export default TxtToJsonForm;