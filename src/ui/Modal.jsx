import React from "react";
import { motion } from "framer-motion";

export default function Modal({ open, onClose, children }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6">
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white rounded-lg overflow-hidden max-w-4xl w-full"
      >
        <div className="p-4 flex justify-end">
          <button onClick={onClose} className="px-3 py-1 rounded bg-slate-100">
            Close
          </button>
        </div>
        <div className="p-4">{children}</div>
      </motion.div>
    </div>
  );
}
