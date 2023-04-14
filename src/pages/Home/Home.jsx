import { useEffect, useState } from "react";
import avatar1 from "../../images/1.png";
import logo from "../../images/logo.png";
import { avatarData } from "./data";
import {
  Avatar,
  Ellipse,
  EllipseDark,
  TweetCard,
} from "components/Tweet/Tweet.styled";
import { Container } from "components/Container/Container.styled";
import {
  ContentWrapper,
  HomeTitle,
  HomeList,
  HomeAvatar,
} from "./HomePage.styled";

const Home = () => {
  const [avatar, setAvatar] = useState(avatar1);
  const randomData = arr => {
    const rand = Math.floor(Math.random() * arr.length);
    console.log(arr[rand]);
    return arr[rand];
  };

  useEffect(() => {
    setAvatar(randomData(avatarData));
  }, []);

  return (
    <>
      <main>
        <Container>
          <HomeList>
            <TweetCard>
              <img src={logo} alt="logo" />
              <ContentWrapper>
                <HomeTitle>Hi!</HomeTitle>
                <p>Let's go watch tweets together!</p>
                <HomeAvatar>
                  <Ellipse>
                    <EllipseDark>
                      <Avatar src={avatar1} alt="avatar" />
                    </EllipseDark>
                  </Ellipse>
                </HomeAvatar>
              </ContentWrapper>
            </TweetCard>
          </HomeList>
        </Container>
      </main>
    </>
  );
};

export default Home;
