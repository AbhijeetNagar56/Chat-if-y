const NavBar = () => {
  return (
    <div className="navbar bg-primary text-primary-content">
      <div className="flex-1 px-4 text-lg font-bold">Chat-if-y @Username</div>
      <div className="flex-none">
        <button className="btn btn-sm btn-secondary">Logout</button>
      </div>
    </div>
  );
};

export default NavBar;
