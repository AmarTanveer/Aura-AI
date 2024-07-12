import { useState } from "react";
import { createContext } from "react";
import run from "../config/auraai";

export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompts, setPrevPrompts] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  // Word Typing Animation
  const delayPara = (index, nextWord) => {
    setTimeout(function () {
      setResultData((prev) => prev + nextWord);
    }, 50 * index);
  };

  // Function to fire off the New Chat button
  const newChat = () => {
    setLoading(false);
    setShowResult(false);
  };

  // Giving result from the input
  const onSent = async (prompt) => {
    setResultData("");
    setLoading(true);
    setShowResult(true);
    let result;
    if (prompt !== undefined) {
      result = await run(prompt);
      setRecentPrompt(prompt);
    } else {
      setPrevPrompts((prev) => [...prev, input]);
      setRecentPrompt(input);
      result = await run(input);
    }

    let responseArray = result.split("**");
    let newResponse = "";
    for (let i = 0; i < responseArray.length; i++) {
      if (
        responseArray[i].startsWith(" ") ||
        responseArray[i].endsWith(" ") ||
        responseArray[i].endsWith(".")
      ) {
        newResponse += responseArray[i];
      } else {
        newResponse += "<b>" + responseArray[i] + "</b>";
      }
    }

    let newResponse2 = newResponse.split("\n").join("<br>");
    let newResponse3 = newResponse2.split("*").join("");

    // Applying Typing animation effect
    let newResponseArray = newResponse3.split(" ");
    for (let i = 0; i < newResponseArray.length; i++) {
      const nextWord = newResponseArray[i];
      delayPara(i, nextWord + " ");
    }

    setLoading(false);
    setInput("");
  };

  const contextValue = {
    prevPrompts,
    setPrevPrompts,
    onSent,
    recentPrompt,
    setRecentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
    newChat,
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
