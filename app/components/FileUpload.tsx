"use client";
import React, { useState } from "react";
const FileUpload: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };
  const handleUpload = () => {
    if (file) {
      alert(`File uploaded: ${file.name}`);
      // Handle the file upload process here
    }
  };
  return (
    <div className="flex flex-col items-center  justify-center ">
    <div className="border-dashed border-2 border-gray-300 rounded-lg p-8 w-[600px] h-[300px] flex flex-col items-center justify-center">
      <img src="/excel.png" alt="Excel Icon" className="h-12 w-12 mb-4" />
      <input
        type="file"
        id="file-upload"
        accept=".xlsx, .xls"
        onChange={handleFileChange}
        className="hidden"
      />
      
      <label
        htmlFor="file-upload"
        className="cursor-pointer hover:underline w-full text-center"
      >
        Drop your excel sheet here or
        <span className="text-blue-500 w-full text-center mt-2"> browse</span>
      </label>
    </div>
    <button
      className="bg-blue-600 text-white rounded py-2 px-4 mt-4 hover:bg-blue-700 w-full  flex items-center justify-center"
      onClick={handleUpload}
      style={{ backgroundColor: "#605BFF" }}
      disabled={!file}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="h-5 w-5 mr-2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
        />
      </svg>
      Upload
    </button>
  </div>
  
  );
};

export default FileUpload;
