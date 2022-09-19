import styled from 'styled-components';

export const HeaderStyles = styled.div`
  background-color: var(--elements);
  box-shadow: rgb(0 0 0 / 3%) 0px 2px 4px 4px;
  padding: 2.2rem 1.2rem;
  margin-bottom: 2rem;

  @media (max-width: 600px) {
    padding: 1.75rem 0;
  }

  .header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;

    gap: 0.4rem;

    h1 {
      font-size: 1.25rem;
      @media (max-width: 600px) {
        font-size: 1rem;
      }
    }

    .icon {
      margin-top: 0.3rem;
    }

    .theme {
      display: flex;
      gap: 0.2rem;
      align-items: center;
      text-transform: capitalize;
      background: none;
      border: 0;
      cursor: pointer;
      font-size: 1rem;
      color: var(--text);
    }
  }
`;
