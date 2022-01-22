import PropTypes from 'prop-types';
import {
  Section,
  Title,
  StatsList,
  StatsItem,
  StatsLabel,
  StatsValue,
  createRendomColor,
} from './Statistics.styled';

const Statistics = ({ title, stats }) => {
  return (
    <Section>
      {title && (
        <Title style={{ backgroundColor: createRendomColor() }}>{title}</Title>
      )}

      <StatsList>
        {stats.map(stat => (
          <StatsItem
            key={stat.id}
            style={{ backgroundColor: createRendomColor() }}
          >
            <StatsLabel>{stat.label}</StatsLabel>
            <StatsValue>{stat.percentage}%</StatsValue>
          </StatsItem>
        ))}
      </StatsList>
    </Section>
  );
};
export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};
