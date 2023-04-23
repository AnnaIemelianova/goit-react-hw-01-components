import PropTypes from 'prop-types';
import { StatisticsSection, StatItem, StatList, Title, Label, Percentage } from './Statistics.styled';
    
export const Statistics = ({ title, stats }) => {
    return (
        <StatisticsSection>
            {title && <Title>{title}</Title>}
        
            <StatList>
                {stats.map(item => (
                    <StatItem key={item.id}>
                        <Label>{item.label}</Label>
                        <Percentage>{item.percentage}%</Percentage>
                    </StatItem>
                ))}
            </StatList>
        </StatisticsSection>
    );
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    })).isRequired,
};
