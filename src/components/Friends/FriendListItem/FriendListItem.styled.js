import styled from 'styled-components';

export const FriendItem = styled.li`
border: 2px solid ${p => p.theme.colors.backgroundAccent};
display: flex;
align-items: center;
padding: 10px;
background-color: ${p => p.theme.colors.background};
box-shadow: 10px 10px 15px ${p => p.theme.colors.backgroundAccent};
`;

export const Status = styled.span`
width: 20px;
height: 20px;
display: block;
margin-right: 30px;
border-radius: ${p => p.theme.radii.round};
background-color: ${({ isOnline }) => {
   return isOnline === true ? 'green' : 'red';
}};
`;

export const Avatar = styled.img`
display: block;
padding: 2px;
margin-right: 30px;
border: 1px solid ${p => p.theme.colors.backgroundAccent};
border-radius: ${p => p.theme.radii.sm};
background-color: ${p => p.theme.colors.white};
`;
export const Name = styled.p`
text-shadow: 2px 2px 6px ${p => p.theme.colors.backgroundAccent};
`;