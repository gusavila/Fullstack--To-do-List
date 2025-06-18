import imagem from "../assets/images/greenpaper.png";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <main className="place-items-center px-6 py-24 sm:pt-30 lg:px-2">
        <div className="relative isolate overflow-hidden px-6 py-2 sm:py-4 lg:overflow-visible lg:px-0">
        <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          aria-hidden="true"
          className="absolute top-0 left-[max(50%,25rem)] h-256 w-512 -translate-x-1/2 mask-[radial-gradient(64rem_64rem_at_top,white,transparent)] stroke-gray-200"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
            width="100%"
            height="100%"
            strokeWidth={0}
          />
        </svg>
      </div>
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
              to="/"
              className="rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-green-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:bg-green-500 focus-visible:outline-green-600"
            >
              Voltar ao início
            </Link>
          </div>
          <div className="w-full flex items-center justify-center">
            <img className="w-70" src={imagem} alt="" />
          </div>
        </div>
        </div>
      </main>
    </>
  );
}

export default NotFound;
