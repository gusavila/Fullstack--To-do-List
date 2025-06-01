import imagem from "../assets/images/greenpaper.png";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <main className="place-items-center px-6 py-24 sm:pt-30 lg:px-2">
        <div className="text-center bg-[url('../assets/images/greenpaper.png')]">
          <p className="text-base font-semibold text-green-600">404</p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
            Página não encontrada
          </h1>
          <p className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
            Desculpa, não conseguimos achar a página que você está procurando.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/todos"
              className="rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-green-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:bg-green-500 focus-visible:outline-green-600"
            >
              Voltar ao início
            </Link>
          </div>
          <div className="w-full flex items-center justify-center">
            <img className="w-70" src={imagem} alt="" />
          </div>
        </div>
      </main>
    </>
  );
}

export default NotFound;
