import styled from 'styled-components';

export const CountryDetails = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  gap: 2.5rem;
  font-size: 1rem;
  color: var(--text);

  @media (min-width: 1350px) {
    font-size: 1.25rem;
  }
  @media (max-width: 600px) {
    flex-wrap: wrap;
  }

  p {
    line-height: 1.7;
    span {
      font-weight: 800;
    }
  }

  img {
    width: 31.25rem;
    max-width: 100%;
    height: 18.75rem;
    -o-object-fit: cover;
    object-fit: cover;
    box-shadow: rgb(0 0 0 / 4%) 0px 0px 4px 4px;
  }

  .country-information {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(18.75rem, 1fr));
    gap: 1.5rem;

    .title {
      grid-column: 1 / 3;

      @media (max-width: 600px) {
        grid-column: auto;
      }
    }
  }
`;
