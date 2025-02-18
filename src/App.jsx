import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./HomePage";
import CompletedPage from "./CompletedPage";
import PendingPage from "./PendingPage";
import RootLayout from "./RootLayout";
import './App.css';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/completed", element: <CompletedPage /> },
        { path: "/pending", element: <PendingPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;


