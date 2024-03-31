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
import "react-loading-skeleton/dist/skeleton.css";
import Context from './Pages/website/context/Context.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Context>
      <WindowContext>
        <MenuContext>
          <R>
            <App />
          </R>
        </MenuContext>
      </WindowContext>
    </Context>
  </React.StrictMode>
);
