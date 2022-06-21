import Topbar from "./components/topbar/topbar";
import Sidebar from "./components/sidebar/sidebar";
import "./app.css";

function App() {
  return (
    <div>
      <Topbar/>
      <div className="container">
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
