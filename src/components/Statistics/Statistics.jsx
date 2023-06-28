import data from 'data/statistic.json';

export const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      {title && <h2>{title}</h2>}

      <ul className="stat-list">
        {stats.map(({ id, label, percentage }) => {
          return (
            <li className="item">
              <span className="label">{label}</span>
              <span className="percentage">{percentage}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
