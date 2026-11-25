import { Link } from "@tanstack/react-router";

function DashboardPage() {
  return (
    <div className="p-6">
      <h2>Dashboard</h2>

      <p>Welcome to your TaskManager!</p>

      <Link to="/tasks">Go to My Tasks →</Link>
    </div>
  );
}

export default DashboardPage;
