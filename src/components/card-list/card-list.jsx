import styled from 'styled-components';

export const CardListStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  justify-items: center;
  gap: 2.25rem;

  @media (max-width: 1200px) {
    gap: 3rem;
  }

  @media (min-width: 1350px) {
    gap: 5.5rem;
  }
`;
