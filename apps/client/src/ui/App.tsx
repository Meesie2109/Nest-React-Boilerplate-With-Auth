import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

function App() {
  return (
    <React.Suspense>
      <main>
        <RouterProvider router={router} />
      </main>
    </React.Suspense>
  );
}

export default App;
