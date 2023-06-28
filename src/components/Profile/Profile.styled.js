import styled from 'styled-components';

export const ContainerProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: auto;
  margin-top: 35px;
  background-color: #808080;
`;

export const DescriptionProfile = styled.div`
  background-color: white;
  margin: auto;
  padding-left: 49px;
  padding-right: 49px;
  padding-top: 30px;
  padding-bottom: 30px;

  border: 1px solid rgba(0, 0, 0, 0.1);
`;

export const Image = styled.img`
  display: block;
  width: 100px;
  height: 100%;
  margin: auto;
`;

export const TextName = styled.p`
  font-family: 'Raleway', sans-serif;
  font-weight: 800;
  font-size: 22px;
  line-height: 0.5;
  letter-spacing: 0.03em;
  text-align: center;
`;
export const Text = styled.p`
  font-family: 'Raleway', sans-serif;
  font-weight: 600;
  font-size: 15px;
  line-height: 0.5;
  letter-spacing: 0.03em;
  text-align: center;
  color: grey;
`;

export const ListProfile = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  margin: auto;
  padding: 0;
  background-color: #d3d3d3;
`;

export const ItemProfile = styled.li`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

export const ItemLabel = styled.span`
  font-family: 'Raleway', sans-serif;
  color: grey;
  font-weight: 400;
  font-size: 15px;
  text-align: center;
  margin-bottom: 10px;
`;

export const ItemQuantity = styled.span`
  font-family: 'Raleway', sans-serif;
  color: black;
  font-weight: 800;
  font-size: 18px;
  text-align: center;
`;
