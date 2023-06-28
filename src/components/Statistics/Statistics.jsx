import {
  SectiionStatistics,
  Title,
  StatisticsList,
  StatisticsItem,
  LabelStatistics,
  PercentageStatistics,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <SectiionStatistics>
      {title && <Title>{title}</Title>}

      <StatisticsList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <StatisticsItem>
              <LabelStatistics>{label}</LabelStatistics>
              <PercentageStatistics>{percentage}</PercentageStatistics>
            </StatisticsItem>
          );
        })}
      </StatisticsList>
    </SectiionStatistics>
  );
};
