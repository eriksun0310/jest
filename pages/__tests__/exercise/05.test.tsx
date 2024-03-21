import { render, screen } from "@testing-library/react";
import "jest-styled-components";
import Button from "../../exercise/05";

test("StyledButton", async () => {
  // gogo

  const {container, debug} = render(<Button/>)
  // screen.debug()
  // debug(container)
  // debug(container.firstChild)

  expect(container).toMatchInlineSnapshot(`
.c0 {
  color: #ffac27;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #ffac27;
  border-radius: 5px;
}

<div>
  <button
    class="c0"
  >
    Hi
  </button>
</div>
`)
});
