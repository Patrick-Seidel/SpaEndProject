import Style from './App.module.scss';
import BaseLayout from "./Components/BaseLayout";
import { HashRouter } from 'react-router-dom';
import Home from "./Components/Home";
import React from 'react';


function App() {
  return (
      <HashRouter>
          <div className={Style.app}>
              <BaseLayout>
                  <Home />
              </BaseLayout>
          </div>
      </HashRouter>
  );
}



export default App;
