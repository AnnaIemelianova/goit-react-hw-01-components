import { GlobalStyle } from './GlobalStyle';

import user from './Profile/user.json';
import { Profile } from './Profile/Profile';

import data from './Statistics/data.json';
import { Statistics } from './Statistics/Statistics';

import { Container } from './Container/Container.styled';

import friends from './Friends/friends.json'
import { FriendList } from './Friends/FriendList/FriendList';



export const App = () => {
  return (
    <Container
    >
      <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends}/>

      <GlobalStyle></GlobalStyle>
    </Container>
  );
};
