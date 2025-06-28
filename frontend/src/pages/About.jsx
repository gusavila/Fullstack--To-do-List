import {
  CloudArrowUpIcon,
  LockClosedIcon,
  DevicePhoneMobileIcon,
} from "@heroicons/react/20/solid";
import todoImage from "../assets/images/todo-image.jpg";

function About() {
  return (
    <div className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0 dark:text-gray-300">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          aria-hidden="true"
          className="absolute top-0 left-[max(50%,25rem)] h-256 w-512 -translate-x-1/2 mask-[radial-gradient(64rem_64rem_at_top,white,transparent)] stroke-gray-200 dark:stroke-gray-700"
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
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50 dark:fill-gray-700">
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
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base/7 font-semibold text-green-600 dark:text-green-400">
                Organize sua rotina com facilidade
              </p>
              <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty sm:text-5xl">
                Um gerenciador de tarefas simples e eficaz
              </h1>
              <p className="mt-6 text-xl/8">
                Este projeto é uma aplicação web de <strong className="font-semibold text-gray-800 dark:text-white">To-Do List</strong>{" "}
                que permite que usuários adicionem, editem e removam tarefas com
                praticidade. Com um fluxo de autenticação via{" "}
                <strong className="font-semibold text-gray-800 dark:text-white">JWT</strong>, cada usuário possui sua própria lista,
                tornando a experiência personalizada e segura.
              </p>
            </div>
          </div>
        </div>
        <div className="-mt-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            alt="Imagem da página de tarefas"
            src={todoImage}
            className="w-3xl max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-228"
            loading="lazy"
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base/7 lg:max-w-lg">
              <p>
                A interface foi construída com foco na usabilidade e no design
                responsivo. Tudo foi pensado para facilitar a organização do seu
                dia a dia — seja no desktop ou no celular.
              </p>
              <ul role="list" className="mt-8 space-y-8">
                <li className="flex gap-x-3">
                  <DevicePhoneMobileIcon
                    aria-hidden="true"
                    className="mt-1 size-5 flex-none text-green-600 dark:text-green-400"
                  />
                  <span>
                    <strong className="font-semibold text-gray-800 dark:text-white">
                      Experiência do Usuário:
                    </strong>{" "}
                    Interface responsiva e tela adptada para screen readers.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <LockClosedIcon
                    aria-hidden="true"
                    className="mt-1 size-5 flex-none text-green-600 dark:text-green-400"
                  />
                  <span>
                    <strong className="font-semibold text-gray-800 dark:text-white">
                      Segurança:
                    </strong>{" "}
                    Senhas são criptografadas utilizando Bycript e sessões são
                    mantidas com JWT.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <CloudArrowUpIcon
                    aria-hidden="true"
                    className="mt-1 size-5 flex-none text-green-600 dark:text-green-400"
                  />
                  <span>
                    <strong className="font-semibold text-gray-800 dark:text-white">
                      Deploy amigável:
                    </strong>{" "}
                    estrutura pronta para produção
                  </span>
                </li>
              </ul>
              <p className="mt-8">
                O projeto oferece cadastro e login de usuários com autenticação segura via JWT, possibilita a criação, edição e exclusão de tarefas com feedback visual e mensagens de boas-vindas personalizadas. Todas as informações são armazenadas em um banco de dados PostgreSQL, com integração completa entre o backend em Node.js e o frontend em React.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight">
                Pronto para escalar
              </h2>
              <p className="mt-6">
                Mesmo sendo um projeto pessoal, a estrutura é pensada com boas
                práticas de mercado. Ideal para quem deseja gerenciar tarefas de
                forma prática ou expandir o sistema com novos recursos como
                categorias, prioridades ou lembretes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
