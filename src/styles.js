import styled from "styled-components";

export const ContainerHome = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 800px;
  margin: 20px auto;
  gap: 2rem;
`;

export const DivCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  border-radius: 10px;
  border: 2px solid black;
  padding: 2rem 0;
  box-shadow: 5px 8px 5px 0px #e6e6e6;
  width: calc(100% / 4);
  color: pink;
`;
