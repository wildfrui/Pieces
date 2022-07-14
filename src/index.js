import { createRoot } from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers";

const container = document.getElementById("root");
const root = createRoot(container);
const store = createStore(reducers);

root.render(
  <Provider store={store}>
    <App></App>
  </Provider>
);
