import React from "react";
import  Router from "./router";

function App() {
  return (
    <React.Suspense>
      <main>
        <Router />
      </main>
    </React.Suspense>
  );
}

export default App;
