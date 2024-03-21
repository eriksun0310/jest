import { act, render, fireEvent, screen } from "@testing-library/react";
import Button from "../../exercise/04";

test("Button onclick", async () => {
  // 準備
  jest.useFakeTimers()
  // 執行(Act)
  render(<Button />)
  //點擊Btn 的行為
  fireEvent.click(screen.getByText('你好'))


  //驗證(Assert)

  
  // 一開始先 你好的Btn 先disabled
  expect(screen.getByText('你好')).toHaveAttribute("disabled")
  expect(screen.getByText('你好')).toBeDisabled()
  
  //act 等待所有side effect 都執行完 才去執行後續的動作 
  act(()=>{
    // jest.runAllTimers() // 等待所有timer 都結束後才往下跑
    jest.advanceTimersByTime(3000)
  })

  // 你好的Btn 不是disabled
  expect(screen.getByText('你好')).not.toHaveAttribute("disabled")
  expect(screen.getByText('你好')).not.toBeDisabled()

});
