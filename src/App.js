import { RouterProvider } from "react-router-dom";
import router from "./components/Route";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <RouterProvider router={router} />
      </header>
    </div>
  );
}

export default App;
