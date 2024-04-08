import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Today from "./components/Today";

// adedd router only for today's page using react-router-dom
const router = createBrowserRouter([
  {
    path: '',
    element: <Today />
  }
]);

function App() {
  return (
    <div className="w-100 bg-gray-50">
      {/* Navbar */}
      <Navbar />
      <div className="mt-[60px] px-24 py-10">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
