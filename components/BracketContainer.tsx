/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import * as R from "ramda";
import { Config } from "../interfaces";
import Brackets from "./Brackets";
import { injectTeamsIntoMatches } from "./utils/teamsAndMatches";

type Props = {
  data: Config;
};

const BracketContainer = (props: Props) => {
  const { data } = props;
  const { teams, rounds } = data;
  const roundsWithTeams = injectTeamsIntoMatches(teams, rounds);
  return (
    <div
      css={css`
        overflow: auto;
        border: 2px solid #e8e8e8;
        margin: 0 10px;
        max-width: 100%;
        max-height: 100vh;
        border-radius: 2px;
      `}
    >
      <TransformWrapper minScale={0.5} centerOnInit={true}>
        <TransformComponent wrapperStyle={{ width: "100%", height: "80vh" }}>
          <div
            css={css`
              display: flex;
              flex-direction: row;
              flex-wrap: wrap;
              align-content: flex-start;
            `}
          >
            <Brackets data={roundsWithTeams} />
          </div>
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
};

export default BracketContainer;
