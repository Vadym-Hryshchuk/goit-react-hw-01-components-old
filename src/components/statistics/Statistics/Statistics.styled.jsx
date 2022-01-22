import styled from 'styled-components';

export const Section = styled.section`
  width: 50vw;
  margin: 20px auto;
  padding: 20px;
  font-family: sans-serif;

  background-color: rgba(228, 216, 215, 1);
`;
export const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  height: 100px;

  text-transform: uppercase;
  background-color: rgb(255, 255, 255);
`;
export const StatsList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  margin: 0;
  padding: 0;
  list-style: none;
`;
export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 0;
  padding: 10px;
  height: 50px;
  flex-basis: calc(100% / 5);
`;
export const StatsLabel = styled.span`
  display: block;
  flex-basis: calc(100% / 2);
  color: #fff;
`;
export const StatsValue = styled(StatsLabel)`
  font-size: 24px;
`;
export const createRendomColor = () => {
  const red = Math.floor(Math.random() * (256 - 0)) + 0;
  const green = Math.floor(Math.random() * (256 - 0)) + 0;
  const blue = Math.floor(Math.random() * (256 - 0)) + 0;
  return `rgb(${red},${green},${blue})`;
};
