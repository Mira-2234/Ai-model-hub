const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="flex items-center gap-1 font-bold text-zinc-700 text-xl">
          <img className="w-10" src="/logo.png" /> Ai Hub
        </div>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal gap-10 text-zinc-700 px-1 text-lg">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Services</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-5">
        <a className="btn bg-blue-700 rounded-full text-white bg-blue-900 hover:bg-blue-800 transition-all shadow-lg shadow-blue-500/30 ">Get in Touch</a>
      </div>
    </div>
  );
};

export default NavBar;