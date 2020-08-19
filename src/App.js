import React from 'react';
import { route } from "./Route.jsx";
import './App.css';

const routes = route();

function App() {
  return <div>{routes}</div>;
}

export default App;
