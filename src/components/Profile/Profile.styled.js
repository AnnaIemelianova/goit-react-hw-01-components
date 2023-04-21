import styled from 'styled-components';

export const ProfileCard = styled.div`
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.3;

    margin: 0 auto;
    padding-top: 40px;
    margin-bottom: 100px;
    
    width: 350px;
    max-width: 100%;

    border: 2px solid ${p => p.theme.colors.accentProfile};
    border-radius: ${p => p.theme.radii.lgTop};
    background-color: ${p => p.theme.colors.backgroundProfile};
`;

export const ProfileDescription = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
    padding-bottom: 40px;
`;

export const Avatar = styled.img`
    display: block;
    width: 120px;
    height: 120px;
    padding: 4px;
    border-radius: ${p => p.theme.radii.round};
    border: 2px solid ${p => p.theme.colors.accentProfile};
    background-color: white;
`;

export const Name = styled.p`
    font-weight: 700;
    font-size: 20px;
`;

export const Stats = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: ${p => p.theme.colors.backgroundAccent};
`;

export const StatsItem = styled.li`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-right: 30px;
    padding-top: 30px;
    padding-bottom: 30px;

    &:not(:last-child)::after {
        position: absolute;
        top: 0;
        right: 0;
        content: '';
        width: 1px;
        height: 100%;
        display: block;
        background-color: ${p => p.theme.colors.white};
    }
    
`;

export const Label = styled.span`
    font-size: 14px;
    color: ${p => p.theme.colors.white};
`;

export const Quantity = styled.span`
    font-size: 12px;
    color: ${p => p.theme.colors.white};
`;
