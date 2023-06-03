/* This code is creating a React context called `UserContext` with a default value of "Subham". It then
creates a `UserProvider` and `UserConsumer` component using the `Provider` and `Consumer` properties
of the `UserContext`. Finally, it exports the `UserProvider` and `UserConsumer` components for use
in other parts of the application. */
import React from "react";

const UserContext = React.createContext("Subham");

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer };
