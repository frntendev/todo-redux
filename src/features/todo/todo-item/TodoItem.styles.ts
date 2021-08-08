import { css, keyframes } from "@emotion/react";

const done = keyframes`
  to {
    width: calc(100% + 1rem)
  }
`;

const styles = {
  root: css`
    display: flex;
    margin: 0 -3rem 4px;
    padding: 1.1rem 3rem;
    justify-content: space-between;
    align-items: center;
    background: rgba(255, 255, 255, 0.1);
  `,
  label: css`
    color: #fff;
    position: relative;
    transition: opacity 0.2s linear;
    font-family: "Quicksand", sans-serif;
  `,
  done: css`
    opacity: 0.6;
    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: -0.5rem;
      display: block;
      width: 0%;
      height: 1px;
      background: #fff;
      animation: ${done} 0.3s ease-out 0s forwards;
    }
  `,
  actions: css`
    flex-shrink: 0;
    padding-left: 0.7em;
  `,
  btn: css`
    border: none;
    background: none;
    -webkit-appearance: none;
    cursor: pointer;
    color: #fff;
  `
};

export default styles;
