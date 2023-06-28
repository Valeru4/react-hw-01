import styled from 'styled-components';

export const SectiionStatistics = styled.section`
  padding: 15px 5px;
  margin: auto;
  background-color: #d3d3d3;
`;

export const Title = styled.h2`
  font-size: 24px;
  margin: 0;
  margin-bottom: 18px;
  color: #000000;
  text-align: center;
  margin-bottom: 15px;
`;

export const StatisticsList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;
  background-color: #d3d3d3;
`;

export const StatisticsItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 19px;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

export const LabelStatistics = styled.span`
  font-family: 'Raleway', sans-serif;
  color: grey;
  font-weight: 400;
  font-size: 22px;
  text-align: center;
  margin-bottom: 10px;
`;

export const PercentageStatistics = styled.span`
  font-family: 'Raleway', sans-serif;
  color: black;
  font-weight: 800;
  font-size: 15px;
  text-align: center;
`;
