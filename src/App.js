import DarkModeToggle from "./components/DarkModeToggle";
import Header from "./components/Header";
import HeadLiners from "./components/Headliners";
import "./styles/output.css";

function App() {
  return (
    <main className="bg-zinc-200 dark:bg-zinc-900">
      <Header />
      <DarkModeToggle/>
      <HeadLiners />
    </main>
  );
}

export default App;
