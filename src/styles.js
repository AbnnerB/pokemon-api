import styled from "styled-components";

export const ContainerHome = styled.main`
  background-color: brown;
  height: 100%;
  padding: 20px 0px;
  h1 {
    text-align: center;
    margin-bottom: 10px;
    color: #002b44;
  }
`;

export const ContainerCards = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 900px;
  margin: 20px auto;
  gap: 1.5rem;
`;

export const DivCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  border-radius: 10px;
  border: 2px solid #002b44;
  padding: 2rem 0;
  /* box-shadow: 5px 8px 5px 0px #e6e6e6; */
  width: calc(100% / 4);
  min-width: 200px;
  color: #121163;

  background-color: #f9ff52;

  a {
    text-decoration: none;
    /* color: #121163; */
    color: gray;
  }
`;
