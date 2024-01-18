import  React from 'react';
import  ReactDOM  from 'react-dom/client';

const parent = React.createElement("div",{id:"parent"},"i'm parent tag")

const root = ReactDOM.createRoot(document.querySelector(".root"))
root.render(parent)