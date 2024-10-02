import React from "react";
import { createRoot } from "react-dom/client";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";

import configureStore from "../store";
import RouteWrapper from "./Routes";
import "./index.css";

export const App = () => {
  const store = configureStore();

  return (
    <React.StrictMode>
      <Provider store={store}>
        <MemoryRouter>
          <Routes>
            <Route path="/*" element={<RouteWrapper />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    </React.StrictMode>
  );
};

const root = createRoot(document.getElementById("sidepanel-root")!);

root.render(<App />);
