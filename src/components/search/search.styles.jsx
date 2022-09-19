import styled from 'styled-components';

export const FormControl = styled.div`
  position: relative;
  width: 35%;
  max-width: 100%;

  @media (max-width: 767px) {
    width: 100%;
  }

  svg {
    position: absolute;
    width: 17px;
    height: 17px;
    top: 15px;
    left: 17px;
    fill: var(--input);
  }

  input {
    width: 100%;
    padding: 1rem 3rem;
    border-radius: 5px;
    background-color: var(--elements);
    color: var(--input);
    border: 1px solid transparent;
    box-shadow: rgb(0 0 0 / 8%) 0px 0px 4px 4px;

    ::placeholder {
      color: var(--input);
    }
  }
`;
