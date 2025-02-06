import bellIcon from "../../assets/bellIcon.png";
import UserIcon from "../../assets/UserIcon.png";
import searchIcon from "../../assets/searchIcon.png";
const Navbar = () => {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
      <div className="flex items-center gap-5 bg-white text-zinc-700 rounded-b-md border-b border-transparent hover:border-b-blue-400 p-2">
  <input className="p-2 flex-1 outline-none" placeholder="Search..." />
  <img
    src={searchIcon}
    alt="Search Icon"
    width="30"
    height="30"
    className="h-6 w-6 object-contain text-gray-600"
  />
</div>

      <div className="flex items-center space-x-6">
        <button className="relative p-2 bg-gray-100 rounded-full hover:bg-gray-200">
          <img
            src={bellIcon}
            alt="Icon"
            width="30"
            height="30"
            className="h-6px w-6px object-cover text-gray-600"
          />
          <span className="absolute top-0 right-0 inline-block w-3 h-3 bg-red-500 rounded-full"></span>
        </button>
        <div className="flex items-center space-x-2 cursor-pointer">
          <img
            src={UserIcon}
            alt="Icon"
            width="50"
            height="50"
            className="h-8 w-8 text-gray-600"
          />
          <span className="text-gray-700 font-medium">Admin</span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
