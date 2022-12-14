/// <reference types="vite/client" />

import { Router, Routes, Route, A } from "@solidjs/router";
import { render } from "solid-js/web";

import type { Component } from "solid-js";

const Home: Component = () => "👋 home";

const Page: Component = () => "✌️ page";

const App: Component = () => (
  <Router>
    <nav>
      <ul>
        <li>
          <A href="/">Home</A>
        </li>
        <li>
          <A href="/page">Page</A>
        </li>
      </ul>
    </nav>
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page" element={<Page />} />
      </Routes>
    </main>
  </Router>
);

const appRoot = document.getElementById("app-root");

if (!appRoot) throw new Error("#app-root not found");

render(() => <App />, appRoot);
