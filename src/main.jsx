import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './Css/base/media.css'
import './Css/components/btnGoogle.css'
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as R } from "react-router-dom";
import MenuContext from './Context/MenuContext.jsx'
import WindowContext from './Context/WindowContext.jsx'
import './custom.css'
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <WindowContext>
      <MenuContext>
        <R>
          <App />
        </R>
      </MenuContext>
    </WindowContext>
  </React.StrictMode>
);
