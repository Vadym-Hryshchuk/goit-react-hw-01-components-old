import styled from 'styled-components';

export const ContainerProfile = styled.div`
  margin: 5vh auto;
  width: 25vw;
  font-family: sans-serif;
`;

export const Description = styled.div`
  padding: 5px;
  text-align: center;
  background-color: rgba(221, 221, 221, 0.3);
`;

export const Avatar = styled.img`
  width: 50%;
  height: 50%;
  margin-top: 40px;
  border-radius: 50%;
  background-color: rgba(128, 128, 128, 1);
`;

export const UserName = styled.p`
  margin: 10px 0;
  padding: 0;
  font-size: 26px;
  color: rgb(0 0 0);
`;

export const UserDescription = styled(UserName)`
  font-size: 16px;
  color: rgba(128, 128, 128, 1);
`;

export const StatsList = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
  background-color: rgba(210, 210, 210, 0.5);
`;
export const StatsItem = styled.li`
  flex-basis: calc(100% / 3);
  text-align: center;
  padding: 5px;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;
export const StatsText = styled.span`
  display: block;
  color: rgba(128, 128, 128, 1);
`;
export const StatsValue = styled(StatsText)`
  margin-top: 5px;
  font-size: 18px;
  color: rgba(0, 0, 0, 1);
`;
