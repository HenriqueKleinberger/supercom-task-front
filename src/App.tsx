import React from "react";
import { Toaster } from "react-hot-toast";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import { Provider } from "react-redux";
import { store } from "./app/store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

function App() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <Toaster />
        <RouterProvider router={router} />
      </Provider>
    </React.StrictMode>
  );
}

export default App;
