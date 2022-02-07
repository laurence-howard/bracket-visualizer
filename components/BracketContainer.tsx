/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { BracketConfig } from "../interfaces";
import Brackets from "./Brackets";

type Props = {
  data: BracketConfig[];
};

const BracketContainer = (props: Props) => {
  const { data } = props;
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
      <TransformWrapper maxScale={2} centerOnInit={true}>
        <TransformComponent wrapperStyle={{ width: "100%", height: "80vh" }}>
          <div
            css={css`
              display: flex;
              flex-direction: row;
              flex-wrap: wrap;
              align-content: flex-start;
              background-color: green;
            `}
          >
            <Brackets data={data} />
          </div>
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
};

export default BracketContainer;
