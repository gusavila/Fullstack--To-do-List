import AddTaskIcon from "@mui/icons-material/AddTask";

function Header() {

  return (
    <header className="bg-white">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a href="/todos" className="-m-1.5 p-1.5">
            <span className="sr-only">Company Logo</span>
            <span className="font-semibold">To Do List </span>
            <AddTaskIcon className="text-green-500" />
          </a>
        </div>
        
        <div className="lg:flex lg:flex-1 lg:justify-end">
          <a href="/" className="text-lg font-semibold px-4 py-2 text-green-600 rounded-xl hover:text-green-500 transition">
            Entrar <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;