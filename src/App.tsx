import React, { useState, useEffect } from "react";
import useWebSocket from "react-use-websocket";
import { IResult, Nullable } from "./types";
import "./App.css";
import Navbar from "./components/Navbar";
import PersonList from "./components/PersonList";
import PersonDetail from "./components/PersonDetail";

const App = () => {
  //Public API that will echo messages sent to it back to the client
  const [socketUrl] = useState(
    "wss://wunder-provider.herokuapp.com/socket.io/?EIO=3&transport=websocket"
  );
  const [results, setResults] = useState<IResult[]>([]);
  const [selectedPerson, setSelectedPerson] = useState<Nullable<IResult>>();

  const { lastMessage } = useWebSocket(socketUrl);

  useEffect(() => {
    if (lastMessage && lastMessage.data && lastMessage.data.startsWith("42")) {
      const message = JSON.parse(lastMessage.data.substr(2));
      const results = message[1]?.results;
      results && setResults((prevResults) => [...prevResults, ...results]);
    }
  }, [lastMessage]);

  const handleClick = (person: IResult) => {
    setSelectedPerson(person);
  };
  const handleBack = () => {
    setSelectedPerson(null);
  };

  return (
    <div className="container">
      <Navbar isDetail={!!selectedPerson} onBack={handleBack} />
      {!!selectedPerson ? (
        <PersonDetail person={selectedPerson} />
      ) : (
        <PersonList persons={results} onClick={handleClick} />
      )}
    </div>
  );
};

export default App;
