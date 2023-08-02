import { styled } from "styled-components";

const MainConatiner = styled.div`
  max-width: 1440px;
  width: 90%;
  margin: 0 auto;

  .header {
    display: flex;
    justify-content: space-between;

    h1 {
      a {
        color: #000;
        text-decoration: none;
        transition: 0.2s;
      }

      &:hover {
        a {
          text-decoration: underline;
        }
      }
    }

    .header-right {
      display: flex;
      gap: 15px;
      justify-content: space-between;
      align-items: center;

      ul {
        padding: 0;
        display: flex;

        li {
          width: 22px;
          height: 22px;
          border: 1px solid;
          border-radius: 50%;
          margin-left: -4px;
          background-color: #00ffff;
          text-align: center;
          list-style: none;
        }
      }

      div {
        cursor: pointer;
        text-transform: capitalize;

        a {
          padding: 10px 12px;
          border: 1px solid transparent;
          border-radius: 10px;
          background-color: #5242ff;
          color: #fff;
          text-decoration: none;
          transition: 0.2s;
        }

        &:hover {
          a {
            border: 1px solid #5242ff;
            background-color: #fff;
            color: #5242ff;
          }
        }
      }
    }
  }
`;

const BodyContainer = styled.div`
  padding: 120px 0 90px;
  text-align: center;
  font-style: normal;
  font-family: Inter;

  .heading {
    width: 50%;
    margin: 0 auto;

    & > span {
      color: #7366fe;
      font-size: 12px;

      font-weight: 500;
      line-height: 16px;
      letter-spacing: 2px;
      text-transform: uppercase;
    }

    h2 {
      margin: 15px 0 27px;
      color: #333;
      font-size: 62px;
      font-weight: 700;
      line-height: 64px;
    }

    p {
      width: 54%;
      margin: 0 auto;
    }
  }

  .banner-images {
    width: 100%;
    position: relative;

    figure {
      margin: 0;

      &:first-child {
        img {
          width: 85%;
        }

      }

      &:last-child {
        position: absolute;
        top: 48%;
        left: 50%;
        transform: translate(-50%, -50%);

        img {
          width: 80%;
          border-radius: 20px;
          box-shadow: 0px 1px 4px 2px rgb(42 28 18 / 17%), 0px 16px 20px 0px rgb(0 0 0 / 36%);
        }
      }
    }
  }
`;

export { MainConatiner, BodyContainer };
