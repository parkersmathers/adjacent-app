import styled from "styled-components";

const StyledForm = styled.form`
  max-width: 550px;
  padding: 30px 75px;
  margin: 0 auto;
  background-color: rgb(255, 248, 250);
  border-left: 1px solid lightblue;
  border-right: 1px solid lightblue;

  section h2 {
    border-bottom: 1px solid lightgray;
    margin: 5px 0;
  }

  label {
    font-weight: 100px;
    margin: 18px 0 8px;
    text-align: left;
    padding-left: 8px;
  }

  input {
    padding: 12px 8px;
    font-size: calc(10px + 0.8vmin);
    border: none;
  }

  input::placeholder {
    color: lightgray;
  }

  input:last-child,
  p:last-child {
    margin-bottom: 40px;
  }

  button {
    font-size: calc(10px + 1vmin);
    background-color: ghostwhite;
    border-radius: 5px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
    color: midnightblue;
    padding: 10px;
    margin-bottom: 20px;
    width: 100%;
  }

  p {
    background-color: #fff;
    text-align: left;
    padding-left: 8px;
  }
`;

export default StyledForm;
