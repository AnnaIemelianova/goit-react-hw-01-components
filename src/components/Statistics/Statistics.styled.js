import styled from 'styled-components';

export const StatisticsSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    width: 350px;
    max-width: 100%;
    border: 2px solid ${p => p.theme.colors.backgroundAccent};
    background-color: ${p => p.theme.colors.white};
`;

export const Title = styled.h2`
    text-transform: uppercase;
    font-size: 24px;
    color: ${p => p.theme.colors.backgroundAccent};
`;

export const StatList = styled.ul`
    display: flex;
    width: 100%;
    justify-content: space-between;
`;

export const StatItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: ${getRandomHexColor};
`;

export const Label = styled.span`
color: ${p => p.theme.colors.white};
`;

export const Percentage = styled.span`
color: ${p => p.theme.colors.white};
`;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
};
