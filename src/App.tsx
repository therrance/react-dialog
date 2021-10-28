import { useEffect, useState } from "react";

import Dialog from "./components/Dialog";
import Sender from "./components/Sender";
import Header from "./components/Header";

import { AppContext, IContext } from "./context";
import { getTheme, setTheme } from "./helpers/theme";
import { IServerMessage } from "./types";

const App = () => {
  const [message, addMessage] = useState<IServerMessage | null>(null);
  const [theme, toggleTheme] = useState<IContext["theme"]>(getTheme());

  useEffect(() => {
    setTheme(theme);
  }, [theme]);

  return (
    <AppContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      <div className="container">
        <Header />
        <Dialog newMessage={message} />
        <Sender onAddMessage={addMessage} />
      </div>
    </AppContext.Provider>
  );
};

export default App;
