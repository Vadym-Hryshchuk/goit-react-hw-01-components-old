import PropTypes from "prop-types";
import { Section, Title, StatsList, StatsItem, StatsLabel, StatsValue } from "./Statistics.styled";

const createRendomColor = () => {
    const red = Math.floor(Math.random() * (256 - 0)) + 0;
    const green = Math.floor(Math.random() * (256 - 0)) + 0;
    const blue = Math.floor(Math.random() * (256 - 0)) + 0;
    return `rgb(${red},${green},${blue})`;
};

const Statistics = ({title,stats}) => {
    return (
<Section>
    {title && <Title style={{backgroundColor:createRendomColor()}}>{title}</Title>}
            
  <StatsList>
    {stats.map(stat => 
        (<StatsItem key={stat.id} style={{backgroundColor:createRendomColor()}}>
            <StatsLabel>{stat.label}</StatsLabel>
            <StatsValue>{stat.percentage}%</StatsValue>
        </StatsItem>)
                )}
  </StatsList>
</Section>)
}
export default Statistics;

Statistics.propTypes = {
    "title": PropTypes.string,
    "stats": PropTypes.array.isRequired,
}