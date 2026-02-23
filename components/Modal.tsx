import React from 'react';
import { X, CheckCircle, AlertCircle } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string; 
  type?: 'success' | 'error';
}

export function Modal({ isOpen, onClose, title, message, type = 'success' }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-md bg-white rounded-lg shadow-xl overflow-hidden transform transition-all animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className={`px-6 py-4 flex items-center justify-between ${
          type === 'success' ? 'bg-[#064E3B]/10' : 'bg-red-50'
        }`}>
          <h3 className={`text-xl font-playfair font-bold flex items-center gap-2 ${
            type === 'success' ? 'text-[#064E3B]' : 'text-red-600'
          }`}>
            {type === 'success' ? (
              <CheckCircle className="w-6 h-6" />
            ) : (
              <AlertCircle className="w-6 h-6" />
            )}
            {title}
          </h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors focus:outline-none"
          >
            <X size={24} />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-6">
          <p className="text-gray-600 font-montserrat leading-relaxed">
            {message}
          </p>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-gray-50 flex justify-end">
          <button
            onClick={onClose}
            className={`px-6 py-2 rounded-md font-montserrat font-semibold text-white transition-all shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              type === 'success' 
                ? 'bg-[#064E3B] hover:bg-[#053d2e] focus:ring-[#064E3B]' 
                : 'bg-red-600 hover:bg-red-700 focus:ring-red-600'
            }`}
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
}
