import { Outlet } from "@tanstack/react-router";

function App() {
  return (
    <main>
      <div className="layout">
        <Outlet />
      </div>
    </main>
  );
}

export default App;
