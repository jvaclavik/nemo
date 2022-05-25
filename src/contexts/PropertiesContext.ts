import React from 'react';

type PropertiesContextType = {
  activePropertyId?: number
}

const PropertiesContext = React.createContext<PropertiesContextType>({
  activePropertyId: undefined
});

export default PropertiesContext;
