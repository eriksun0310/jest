import { render, fireEvent, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import Button from "../../exercise/03";



// mock function、 
test("Button onclick", async () => {
  // 準備
  const content = "Click";
  const handleClick = jest.fn();

  // 執行
  render(<Button content={content} onClick={handleClick} />);
  // fireEvent: 只能用 onClick 
  // fireEvent.click(screen.getByText(/click/i));


  // userEvent: onClick 、onMouseDown
  userEvent.click(screen.getByText(/click/i));

  // 驗證
  //斷言 handleClick 的這個函式被調用了一次
  expect(handleClick).toHaveBeenCalledTimes(1);


  
});
