"use client";

import { useEffect } from "react";
import { X, CheckCircle, XCircle } from "lucide-react";
import { useLanguage } from "@/context/language-context";

interface ToastProps {
  show: boolean;
  type: "success" | "error";
  message: string;
  onClose: () => void;
}

export default function Toast({ show, type, message, onClose }: ToastProps) {
  const { t } = useLanguage();
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div className="fixed top-4 right-4 z-50 animate-in slide-in-from-top-2 duration-300">
      <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-xl shadow-2xl p-4 max-w-sm">
        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0">
            {type === "success" ? (
              <CheckCircle className="w-6 h-6 text-green-600" />
            ) : (
              <XCircle className="w-6 h-6 text-red-600" />
            )}
          </div>
          <div className="flex-1">
            <p
              className={`text-sm font-medium ${
                type === "success" ? "text-green-800" : "text-red-800"
              }`}
            >
              {type === "success" ? t("common.success") : t("common.error")}
            </p>
            <p className="text-sm text-gray-700 mt-1">{message}</p>
          </div>
          <button
            onClick={onClose}
            className="flex-shrink-0 bg-white/20 hover:bg-white/30 rounded-full p-1 transition-colors duration-200"
          >
            <X className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
}
