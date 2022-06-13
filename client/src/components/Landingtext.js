import styled from "styled-components";

export default function Landingtext() {
  return (
    <Wrapper>
      <Title>Welcome to Collabor||8</Title>
      <Description>
      Find the designers abd developers you need to make it work bla bla bla
      </Description>
    </Wrapper>
  );
}

//styling for the landing page textbox that contains title & description
const Wrapper = styled.div`
  position: relative;
  max-width: 500px;
  display: grid;
  gap: 50px;
  text-align: center;
  margin: 0 auto;
  padding: 140px 20px 100px;
`;

const Title = styled.h1`
  color: rgba(255, 255, 255, 1);
  font-weight: bold;
  font-size: 50px;
`;

const Description = styled.p`
  max-width: 300px;
  color: rgba(255, 255, 255, 0.7);
  font-weight: normal;
  font-size: 17px;
  line-height: 130%;
  margin: 0 auto;
`;