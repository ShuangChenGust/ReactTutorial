import React from 'react'

const userContext = React.createContext();

const UserProvider = userContext.Provider;
const UserConsumer = userContext.Consumer;

export {UserConsumer, UserProvider }


//step3:1 create usercontext; 2:Provide a context value; 3Consume the context value;