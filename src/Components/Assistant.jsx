import React, { useState } from "react";

const Assistant = () => {
  const [showMessage, setShowMessage] = useState(true);

  return (
    <div className="fixed bottom-10 right-7 z-50 flex items-end space-x-2">
      {showMessage && (
        <div className="relative bg-white shadow-lg rounded-lg px-4 py-2 max-w-[250px]">
          <button
            className="absolute -top-2 -left-2 w-4 h-4 bg-red-600 text-white rounded-full text-xs font-bold"
            onClick={() => setShowMessage(false)}
          >
            <div className="w-full h-full flex items-center justify-center">
              x
            </div>
          </button>

          <p className="text-sm text-gray-800">
            <strong>Hey! I am Niaa...</strong> <br />
            Your Admission Assistant.
          </p>
        </div>
      )}

      <div
        className="w-[4vw] h-[4vw] min-w-[50px] min-h-[50px] bg-white rounded-full border-2
       border-green-500 overflow-hidden flex items-center justify-center"
      >
        <img
          className="w-full h-full object-cover"
          src="https://chatbot.in5.nopaperforms.com/media/uploads/niaa_icon/e2d0f40b45944e40a4d2a55799523d85.png"
          alt="Niaa"
        />
      </div>
    </div>
  );
};

export default Assistant;
