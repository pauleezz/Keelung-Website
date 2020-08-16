import React from 'react';
import { route } from "./Route.jsx";
import './App.css';

const routes = route();

function App() {
  return <div className="app">{routes}</div>;
}

export default App;
