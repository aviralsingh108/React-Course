import { render } from "@testing-library/react";
import Footer from "../Footer";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";

test("The footer should be present", () => {
  const footer = render(
    <StaticRouter>
      <Provider store={store}>
        <Footer />
      </Provider>
    </StaticRouter>
  );

  const footerContent = footer.getByTestId("footer");
  expect(footerContent.innerHTML).toBe(
    "This site is made with ❤ by dummy name"
  );
});
