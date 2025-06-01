import AddTaskIcon from "@mui/icons-material/AddTask";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const MotionLink = motion(Link); 

function Header() {
  return (
    <header className="bg-white">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <Link to="/todos" className="-m-1.5 p-1.5">
            <span className="sr-only">Company Logo</span>
            <span className="font-semibold">To Do List </span>
            <AddTaskIcon className="text-green-500" />
          </Link>
        </div>

        <div className="lg:flex lg:flex-1 lg:justify-end">
          <MotionLink
            to="/"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-lg font-semibold px-4 py-2 rounded-xl hover:text-green-500 transition"
          >
            Entrar
          </MotionLink>

          <MotionLink
            to="/register"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl shadow-md transition"
          >
            Criar conta
          </MotionLink>
        </div>
      </nav>
    </header>
  );
}

export default Header;
