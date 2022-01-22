import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  &:not(:last-child) {
    margin-bottom: 15px;
  }
  padding: 5px;
  align-items: center;
  justify-content: space-evenly;
  box-shadow: 10px 5px 5px rgb(170 105 105);
  background-color: rgba(228, 216, 215, 1);
`;
export const Span = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => (props['data-action'] ? 'green' : 'red')};
`;
export const Avatar = styled.img`
  border-radius: 5px;
`;
export const Name = styled.p`
  font-size: 24px;
`;
