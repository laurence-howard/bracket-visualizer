/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/react";
import { Match, Round } from "../interfaces";
import SingleMatch from "./SingleMatch";

const generateBrackets = (data: Round[]) =>
  data.map(({ round, matches }) => (
    <div
      className="round-outer-container"
      css={css`
        min-width: 200px;
        margin-right: 40px;
        display: flex;
        flex-direction: column;
        :last-child {
          margin-right: 0;
        }
      `}
    >
      <p
        css={css`
          text-align: center;
        `}
      >
        {round}
      </p>
      <div
        css={css`
          flex-grow: 1;
          display: flex;
          align-items: center;
          justify-content: space-around;
          flex-direction: column;
        `}
      >
        {matches.map((singleMatch: Match) => (
          <SingleMatch {...singleMatch} />
        ))}
      </div>
    </div>
  ));
type Props = {
  data: Round[];
};
const Brackets = (props: Props) => {
  const { data } = props;
  return (
    <div
      css={css`
        display: flex;
        height: 100%;

        .match-container {
          height: 100px;
          width: 100px;
          background-color: blue;
          margin: 5px;
        }
      `}
    >
      {generateBrackets(data)}
    </div>
  );
};

export default Brackets;
