import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./HomePage";
import CompletedPage from "./CompletedPage";
import PendingPage from "./PendingPage";
import RootLayout from "./RootLayout";
import './App.css';

function App() {
  const router = createBrowserRouter([
    {
      path: "/a-to-do-list-app/",
      element: <RootLayout />,
      children: [
        { path: "/a-to-do-list-app/", element: <HomePage /> },
        { path: "/a-to-do-list-app/completed", element: <CompletedPage /> },
        { path: "/a-to-do-list-app/pending", element: <PendingPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;


