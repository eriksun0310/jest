import { render, screen } from "@testing-library/react";
import Button from "../../exercise/01";

// snapshot快照功能
test("Button displays hi", async () => {
  //gogo
  const { container, debug } = render(<Button />);
  // toMatchInlineSnapshot: 會將原本的Btn 快照起來,如果有更改過, 測試則不會過
  expect(container).toMatchInlineSnapshot(
  `
    <div>
      <button
        class="eb-bg-green-500 hover:eb-bg-green-700 eb-text-white eb-font-bold eb-py-2 eb-px-4 eb-rounded"
      >
        Hi
      </button>
    </div>
  `
  );
// toMatchSnapshot:產生新的檔案快照
expect(container).toMatchSnapshot()
});
