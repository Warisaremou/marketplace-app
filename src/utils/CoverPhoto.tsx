import React from "react";

function CoverPhoto() {
  return (
    <>
      <div className="mt-1 rounded-md border-2 border-dashed border-gray-300 p-3 lg:p-2">
        <div className="space-y-1 text-center">
          <svg
            className="mx-auto h-12 w-12 text-gray-400"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 48 48"
            aria-hidden="true"
          >
            <path
              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className="flex justify-center text-gray-500 pb-1">
            <label
              htmlFor="file-upload"
              className="text-[11px] relative cursor-pointer rounded focus-within:outline-none focus-within:ring-1 focus-within:ring-blue-color focus-within:ring-offset-2"
            >
              <input
                id="file-upload"
                name="file-upload"
                type="file"
                className="text-gray-500 focus:ring-0"
              />
            </label>
          </div>
          <p className="text-xs text-gray-500">PNG, jPG jusqu'à 5 Mo</p>
        </div>
      </div>
    </>
  );
}

export default CoverPhoto;