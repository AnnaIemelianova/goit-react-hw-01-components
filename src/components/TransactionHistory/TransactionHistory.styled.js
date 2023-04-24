import styled from 'styled-components';

export const Table = styled.table`
border-collapse: collapse;
`;

export const Th = styled.th`
padding: 20px;
color: ${p => p.theme.colors.white};
background-color: ${p => p.theme.colors.backgroundAccent};
border: 2px solid ${p => p.theme.colors.white};
`;

export const Tr = styled.tr`
&:nth-child(odd) {
    background-color: ${p => p.theme.colors.background};
};
&:nth-child(even) {
    background-color: ${p => p.theme.colors.yellow};
}
`;

export const Td = styled.td`
padding: 10px 20px;
border: 2px solid ${p => p.theme.colors.white};
`;


