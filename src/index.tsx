import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store/store";
//theme
import "primereact/resources/themes/tailwind-light/theme.css";
//core
import "primereact/resources/primereact.min.css";
//icons
import "primeicons/primeicons.css";

const el: HTMLElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(el);

root.render(
	<Provider store={store}>
		<App />
	</Provider>
);
