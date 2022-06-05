import { Web3ReactProvider } from '@web3-react/core'
import { Web3Provider } from "@ethersproject/providers";
import React from "react";
import ReactDOM from "react-dom/client";
import render from "react-dom";
import { App, Video, Leaderboard } from './App.js'

function getLibrary(provider) {
  return new Web3Provider(provider);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Web3ReactProvider getLibrary={getLibrary}>
        <App />
        <Video />
        <Leaderboard />
    </Web3ReactProvider>
  </React.StrictMode>
);