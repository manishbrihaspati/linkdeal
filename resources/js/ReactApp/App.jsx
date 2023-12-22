import React from 'react';

import ReactDOM from 'react-dom/client';


import {
  BrowserRouter
} from "react-router-dom";


import Content from './pages/Layout/Content';
import './styles/common.css';


const App = () => {
  return (
    <BrowserRouter basename="/">
    <Content/>
    </BrowserRouter>
  )
}

if (document.getElementById('root')) {
  const Index = ReactDOM.createRoot(document.getElementById("root"));

  Index.render(
      <React.StrictMode>
          <App/>
      </React.StrictMode>
  )
}
export default App
