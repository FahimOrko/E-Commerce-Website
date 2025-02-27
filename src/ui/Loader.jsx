import { motion } from "framer-motion";

export const Loader = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-slate-200/20 backdrop-blur-sm">
      <motion.div
        className="h-16 w-16 rounded-full border-4 border-b-amber-500 border-l-amber-600 border-r-amber-400 border-t-amber-300"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      />
    </div>
  );
};
