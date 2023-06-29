import React from "react";
import { createRoot } from 'react-dom/client';
import App from "./components/App";

const rootElement = createRoot(document.querySelector('#root'));
rootElement.render(<App />);
