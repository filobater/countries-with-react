import styled from 'styled-components';

export const Back = styled.button`
  color: var(--text);

  width: -webkit-fit-content;

  width: -moz-fit-content;

  width: fit-content;
  padding: 1.25rem 2rem;

  height: 1.8125rem;
  background: var(--elements);
  border: 0;
  box-shadow: rgb(0 0 0 / 34%) 0px 0px 4px;
  border-radius: 3px;
  margin-bottom: 3rem;

  text-transform: capitalize;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  svg {
    fill: var(--text);
  }
`;
