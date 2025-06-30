import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

function ToggleSwitch({ toggleTheme }) {
  return (
     <label className="relative inline-block w-[45px] h-[28px]">
      <input
        type="checkbox"
        className="sr-only peer"
        onChange={toggleTheme}
      />
      
      <div className="w-full h-full bg-gray-300 dark:bg-gray-600 rounded-full peer-checked:bg-gray-200 dark:peer-checked:bg-gray-700 transition-colors duration-300 ease-in-out" />
      <div className="absolute top-1 left-1 w-[20px] h-[20px] bg-white dark:bg-gray-100 rounded-full shadow-md transition-transform duration-300 ease-in-out peer-checked:translate-x-[17px]" > <SunIcon className="h-5 w-5 text-yellow-400" /> </div>
    </label>
  );
}

export default ToggleSwitch;
