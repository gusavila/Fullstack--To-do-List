import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import useTheme from "../hooks/useTheme";

function ToggleSwitch() {
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === "dark";

  return (
    <label className="relative inline-block w-[42px] h-[25px] cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        onChange={toggleTheme}
        checked={isDark}
      />

      <div className="w-full h-full bg-gray-200 dark:bg-gray-600 rounded-full transition-colors duration-300 ease-in-out" />

      <div className="absolute top-0.5 left-0.5 w-[21px] h-[21px] flex items-center justify-center bg-white dark:bg-gray-700 rounded-full shadow-md transition-transform duration-300 ease-in-out peer-checked:translate-x-[18px]">
        {isDark ? (
          <MoonIcon className="h-4 w-4 text-gray-100" />
        ) : (
          <SunIcon className="h-5 w-5 text-yellow-400" />
        )}
      </div>
    </label>
  );
}

export default ToggleSwitch;
