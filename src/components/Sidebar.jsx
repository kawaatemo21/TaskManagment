function Sidebar() {
  return (
    <aside className="w-64 bg-[#3b302a] text-white p-6">
      <h2 className="text-2xl font-bold mb-10">TaskManager</h2>

      <nav className="space-y-4">
        <p>Dashboard</p>
        <p>My Tasks</p>
        <p>Completed</p>
        <p>Settings</p>
      </nav>
    </aside>
  );
}

export default Sidebar;
