import styled from 'styled-components';

export const ItemOfFriends = styled.li`
  padding: 5px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Status = styled.span`
  display: block;
  background-color: ${({ status }) => (status ? 'green' : 'red')};
  border-radius: 50%;
  width: 12px;
  height: 12px;
  margin-left: 15px;
`;

export const Image = styled.img`
  display: block;
  width: 50px;
  height: 100%;
  margin-left: 15px;
  border: 3px solid rgba(0, 0, 0, 0.1);
`;

export const Text = styled.p`
  font-family: 'Raleway', sans-serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 0.5;
  letter-spacing: 0.03em;
  text-align: center;
  margin-left: 15px;
`;
