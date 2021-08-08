import { css } from "@emotion/react";

const styles = {
  root: css`
    margin: 4rem auto;
    padding: 2rem 3rem 3rem;
    max-width: 500px;
    background: #ff6666;
    color: #fff;
    box-shadow: -20px -20px 0px 0px rgb(100 100 100 / 10%);
    font-family: "Quicksand", sans-serif;

    @media (max-width: 480px) {
      box-shadow: none;
      margin: 0;
    }
  `,
  title: css`
    font-weight: normal;
    font-size: 2.6rem;
    letter-spacing: 0.05em;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  `,
  error: css`
    text-align: center;
  `,
  subtitle: css`
    display: block;
    font-size: 0.8rem;
    margin-bottom: 0.7rem;
    margin-left: 3px;
    margin-top: 0.2rem;
  `
};

export default styles;
