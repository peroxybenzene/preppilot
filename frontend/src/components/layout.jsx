import { Link, useLocation } from "react-router-dom";

function Layout({ children }) {
  const location = useLocation();

  const navItem = (path, label) => (
    <Link
      to={path}
      className={`px-4 py-3 rounded-xl transition ${
        location.pathname === path
          ? "bg-black text-white"
          : "hover:bg-gray-100"
      }`}
    >
      {label}
    </Link>
  );

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <aside className="w-72 bg-white border-r p-6">
        <h1 className="text-3xl font-bold mb-10">
          PrepPilot
        </h1>

        <nav className="flex flex-col gap-2">
          {navItem("/", "Dashboard")}
          {navItem("/goals", "Goals")}
          {navItem("/roadmap", "Roadmap")}
        </nav>
      </aside>

      <main className="flex-1 p-10">
        {children}
      </main>
    </div>
  );
}

export default Layout;