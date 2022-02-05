/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Brackets from "./Brackets";

const BracketContainer = () => {
  var rows = [];
  for (var i = 0; i < 200; i++) {
    // note: we are adding a key prop here to allow react to uniquely identify each
    // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
    rows.push(<div />);
  }
  return (
    <div
      css={css`
        overflow: auto;
        border: 2px solid red;
        margin: 0 10px;
        max-width: 100%;
        max-height: 100vh;
      `}
    >
      <TransformWrapper>
        <TransformComponent wrapperStyle={{ width: "100%", height: "100vh" }}>
          <div
            css={css`
              height: 2000px;
              width: 2000px;
              display: flex;
              flex-direction: row;
              flex-wrap: wrap;
              align-content: flex-start;
              background-color: green;

              div {
                height: 100px;
                width: 100px;
                background-color: blue;
                margin: 5px;
              }
            `}
          >
            <Brackets />
          </div>
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
};

export default BracketContainer;
