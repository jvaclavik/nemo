import React from 'react';

import {Layout} from "./components/Layout"
import PropertiesContext from './contexts/PropertiesContext';

function App() {
  return (
    <PropertiesContext.Provider value={{
      activePropertyId: undefined,
      setActivePropertyId: ()=>
    }}>
      <Layout />
    </PropertiesContext.Provider>
  );
}

export default App;
