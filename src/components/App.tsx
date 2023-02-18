import { motion } from "framer-motion";
import { HandRaisedIcon } from "@heroicons/react/24/solid";

function App() {
  return (
    <div className="font-poppins">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-blue-color mt-5 text-3xl flex justify-center items-center">
          Hello world!
          <HandRaisedIcon className="icon" />
        </h1>
      </motion.div>
    </div>
  );
}

export default App;
