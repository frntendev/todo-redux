import { css } from "@emotion/react";

const styles = {
  root: css`
    margin-top: 3rem;
    display: flex;
    flex-wrap: wrap;
    font-family: "Quicksand", sans-serif;
  `,
  label: css`
    color: #fff;
    min-width: 100%;
    margin-bottom: 0.5rem;
    font-size: 1.3rem;
    text-align: left;
  `,
  inputContainer: css`
    display: flex;
    width: 100%;
  `,
  input: css`
    height: 3rem;
    flex: 1;
    flex-grow: 1;
    border: none;
    background: #f7f1f1;
    padding: 0 1.5em;
    font-size: initial;
    outline: none;
  `,
  btn: css`
    height: 3rem;
    padding: 0 1.3rem;
    border: none;
    background: #ff6666;
    color: white;
    text-transform: uppercase;
    font-weight: bold;
    border: 1px solid rgba(255, 255, 255, 0.3);
    margin-left: 5px;
    cursor: pointer;
    transition: background 0.2s ease-out;
  `
};

export default styles;
