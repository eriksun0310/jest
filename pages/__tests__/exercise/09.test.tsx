import { screen, render } from "@testing-library/react";
import { renderHook, act } from "@testing-library/react-hooks";
import Demo from "../../exercise/09";

jest.mock("../../exercise/09/Trade", () => () => "FakeTradeComponent");

test("Demo", () => {
  render(<Demo />);

  expect(
    screen.getByRole("heading", {
      name: /100個木頭可以做什麼？/i,
    })
  ).toBeInTheDocument();

  screen.debug();
  // 因為 trade 這個component 要分開測
  expect(screen.getByText(/FakeTradeComponent/i)).toBeInTheDocument();

  // expect(
  //   screen.getByRole("heading", {
  //     name: /50個木頭拿去交易/i,
  //   })
  // ).toBeInTheDocument();

  // 😱
  // expect(screen.getByText(/賣完，得到 \$ 7233/i)).toBeInTheDocument();

  expect(
    screen.getByRole("heading", {
      name: /50個木頭拿去裝飾/i,
    })
  ).toBeInTheDocument();
  expect(screen.getByText(/拿去裝飾小花園的圍籬/i)).toBeInTheDocument();

  const { container } = render(<Demo />);
  expect(container).toMatchInlineSnapshot(`
<div>
  <div>
    <div
      class="eb-p-2 eb-border eb-border-green-600"
    >
      <h3>
        100
        個木頭可以做什麼？
      </h3>
      <button
        class="eb-bg-green-500 hover:eb-bg-green-700 eb-text-white eb-font-bold eb-py-2 eb-px-4 eb-rounded"
      >
        加點木頭
      </button>
    </div>
    <div
      class="eb-flex"
    >
      <div
        class="eb-p-2 eb-flex-1 eb-border eb-border-indigo-600"
      >
        FakeTradeComponent
      </div>
      <div
        class="eb-p-2 eb-flex-1 eb-border eb-border-red-600"
      >
        <div>
          <h3>
            50
            個木頭拿去裝飾
          </h3>
          <div>
            拿去裝飾小花園的圍籬
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`)
});
