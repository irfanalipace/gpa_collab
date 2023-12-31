import { render } from "@testing-library/react";
import { Provider } from "react-redux";

import App from "../App";
import store from "~/store";

describe("<App />", () => {
  it("renders without crashing", async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });
});
