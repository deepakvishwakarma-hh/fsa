"use client";

import { useEffect } from "react";

interface NotificationPopupProps {
  isVisible: boolean;
  message: string;
  type: "success" | "error";
  onClose: () => void;
  duration?: number;
}

const NotificationPopup = ({
  isVisible,
  message,
  type,
  onClose,
  duration = 4000,
}: NotificationPopupProps) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-lightblack backdrop-blur-sm">
      <div className="bg-white rounded-xl shadow-2xl p-8 mx-4 max-w-md w-full transform transition-all duration-300 ease-in-out border border-linegrey">
        <div className="flex items-center justify-center mb-6">
          {type === "success" ? (
            <div className="w-16 h-16 bg-[#10B981] rounded-full flex items-center justify-center shadow-lg">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          ) : (
            <div className="w-16 h-16 bg-[#EF4444] rounded-full flex items-center justify-center shadow-lg">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          )}
        </div>

        <h3
          className={`text-2xl font-bold text-center mb-4 ${
            type === "success" ? "text-[#10B981]" : "text-[#EF4444]"
          }`}
        >
          {type === "success" ? "Success!" : "Error!"}
        </h3>

        <p className="text-darkgrey text-center mb-8 text-base leading-relaxed">
          {message}
        </p>

        <div className="flex justify-center">
          <button
            onClick={onClose}
            className={`px-8 py-3 rounded-full font-semibold transition-all duration-200 transform hover:scale-105 ${
              type === "success"
                ? "bg-[#10B981] hover:bg-[#059669] text-white shadow-lg"
                : "bg-[#EF4444] hover:bg-[#DC2626] text-white shadow-lg"
            }`}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotificationPopup;
