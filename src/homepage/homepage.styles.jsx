import styled from 'styled-components';

export const HomeStyles = styled.div`
  background-color: var(--bg);
  .home-header {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 2rem;
    gap: 1rem;
  }

  .region {
    box-shadow: rgb(0 0 0 / 8%) 0px 0px 4px 4px;
    background: var(--elements);
    color: var(--text);
    padding: 1rem;
    border: 1px solid transparent;
    border-radius: 5px;
    font-size: 0.875rem;

    @media (max-width: 767) {
      padding: 1rem 3rem 1rem 1rem;
    }
  }
`;
