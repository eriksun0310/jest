import { render, screen } from "@testing-library/react";

import Button from "../../exercise/01";
//  測試 btn 的文字是不是hi
test("Button displays hi", async () => {
  // gogo
  // render(<Button/>)
  // screen.debug()

  // toHaveTextContent:檢查元素是否包含指定的內容
  expect(screen.getByRole("button")).toHaveTextContent(/^hi$/i)

  // toBeInTheDocument: 確保元素正確的渲染在DOM中
  expect(screen.getByRole("button", {name:/hi/i})).toBeInTheDocument()

  render(<Button/>)
});
