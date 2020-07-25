import { App } from "./components/App";
import { domRenderer } from "./utils/deact";
// import "./styles/reset.scss";

domRenderer(new App({}, {}), document.querySelector("#App"));
