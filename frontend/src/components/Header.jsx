import AddTaskIcon from "@mui/icons-material/AddTask";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useContext } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { AuthContext } from "../context/AuthContext.jsx";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const MotionLink = motion.create(Link);
  const motionLinkProps = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
  };
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <header>
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1 items-center">
          <MotionLink
            to="/"
            {...motionLinkProps}
            className="-m-1.5 p-1.5 mr-6 text-lg flex items-center gap-1"
          >
            <span className="sr-only">Logo da empresa</span>
            <span className="font-semibold">Todo List</span>
            <AddTaskIcon className="text-green-500" />
          </MotionLink>
          <div className="hidden lg:flex lg:justify-items-center lg:space-x-6">
            <MotionLink
              to="/about"
              {...motionLinkProps}
              className="-m-1.5 p-1.5 flex gap-1 mx-1 hover:text-green-600"
            >
              <span className="font-semibold">Sobre</span>
            </MotionLink>
            <MotionLink
              to="/contact"
              {...motionLinkProps}
              className="-m-1.5 p-1.5 flex gap-1 mx-1 hover:text-green-600"
            >
              <span className="font-semibold">Contato</span>
            </MotionLink>
          </div>
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center space-x-4">
          {user ? (
            <div className="flex items-center gap-2">
              <span className="font-light">Olá, {user.name}</span>
              <AccountCircleIcon className="text-gray-300" fontSize="large" />
              <motion.button
                onClick={() => {
                  logout();
                  navigate("/");
                }}
                {...motionLinkProps}
                className="font-semibold cursor-pointer text-red-400 ml-4"
              >
                Sair
              </motion.button>
            </div>
          ) : (
            <>
              <MotionLink
                to="/login"
                {...motionLinkProps}
                className="font-semibold px-4 py-2 rounded-xl hover:text-green-600"
              >
                Entrar
              </MotionLink>
              <MotionLink
                to="/register"
                {...motionLinkProps}
                className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl shadow-md"
              >
                Criar conta
              </MotionLink>
            </>
          )}
        </div>

        <div className="flex lg:hidden">
          <div className="-m-2.5 inline-flex mr-3">
            {user && (
              <div className="flex items-center gap-2">
                <span className="font-light">Olá, {user.name}</span>
                <AccountCircleIcon className="text-gray-300" fontSize="large" />
              </div>
            )}
          </div>
          <motion.button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            {...motionLinkProps}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 cursor-pointer hover:text-green-500"
          >
            <span className="sr-only">Abre o menu principal</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </motion.button>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel
          role="navigation"
          aria-label="Menu de navegação mobile"
          className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto text-gray-600 bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
        >
          <div className="flex items-center justify-between">
            <div className="flex lg:flex-1">
              <MotionLink
                to="/"
                {...motionLinkProps}
                className="-m-1.5 p-1.5 text-lg flex items-center gap-1"
              >
                <span className="sr-only">Logo da empresa</span>
                <span className="font-semibold">Todo List</span>
                <AddTaskIcon className="text-green-500" />
              </MotionLink>
            </div>

            <div className="flex">
              <div className="-m-2.5 inline-flex mr-3">
                {user && (
                  <div className="flex items-center gap-2">
                    <span className="font-light">Olá, {user.name}</span>
                    <AccountCircleIcon
                      className="text-gray-300"
                      fontSize="large"
                    />
                  </div>
                )}
              </div>
              <motion.button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                {...motionLinkProps}
                className="-m-2.5 rounded-md p-2.5 text-gray-700 cursor-pointer hover:text-green-500"
              >
                <span className="sr-only">Fechar menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </motion.button>
            </div>
          </div>

          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <MotionLink
                  to="#"
                  {...motionLinkProps}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold hover:bg-gray-50 hover:text-green-600"
                >
                  <span className="font-semibold">Sobre</span>
                </MotionLink>

                <MotionLink
                  to="#"
                  {...motionLinkProps}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold hover:bg-gray-50 hover:text-green-600"
                >
                  <span className="font-semibold">Contato</span>
                </MotionLink>
              </div>
              <div className="py-6">
                {user ? (
                  <MotionLink
                    onClick={() => {
                      logout();
                      navigate("/");
                    }}
                    {...motionLinkProps}
                    className="font-semibold -mx-3 block rounded-lg px-3 py-2 text-base/7 hover:bg-gray-50 cursor-pointer text-red-400"
                  >
                    Sair
                  </MotionLink>
                ) : (
                  <div>
                    <MotionLink
                      to="/login"
                      onClick={() => setMobileMenuOpen(false)}
                      {...motionLinkProps}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold hover:bg-gray-50 hover:text-green-600"
                    >
                      Entrar
                    </MotionLink>
                    <MotionLink
                      to="/register"
                      onClick={() => setMobileMenuOpen(false)}
                      {...motionLinkProps}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold hover:bg-gray-50 hover:text-green-600"
                    >
                      Criar conta
                    </MotionLink>
                  </div>
                )}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
export default Header;
