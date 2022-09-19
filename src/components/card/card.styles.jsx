import styled from 'styled-components';

export const CardStyles = styled.div`
  width: 16.875rem;
  height: auto;
  box-shadow: rgb(0 0 0 / 8%) 0px 0px 4px 4px;
  border-radius: 5px;
  background-color: var(--bg);
  font-size: 0.875rem;

  @media (min-width: 1350px) {
    font-size: 1rem;
  }

  .card-information {
    padding: 1rem;
    display: flex;
    flex-direction: column;

    gap: 1.5rem;
  }

  p {
    font-weight: 600;
  }

  p span {
    font-weight: 800;
  }

  img {
    height: 9.375rem;
    max-width: 100%;
    width: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
`;
