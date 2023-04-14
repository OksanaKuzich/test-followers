import { useState } from "react";
import logo from "../../images/logo.png";
import image from "../../images/picture.png";
import avatar from "../../images/hansel.png";
import {
  TweetCard,
  AvatarWrapper,
  Avatar,
  DecoreImg,
  Ellipse,
  ContentWrapper,
  Content,
  EllipseDark,
} from "./Tweet.styled";
import { Button } from "./Button";

export const Tweet = ({ tweet, selectedTweets, setSelectedTweets }) => {
  const [isButtonClick, setIsButtonClick] = useState(false);

  return (
    <TweetCard>
      <img src={logo} alt="logo" />
      <DecoreImg src={image} alt="decore" />
      <AvatarWrapper>
        <Ellipse>
          <EllipseDark>
            <Avatar src={tweet.avatar} alt={tweet.user} />
          </EllipseDark>
        </Ellipse>
      </AvatarWrapper>
      <ContentWrapper>
        <Content>{tweet.tweets} TWEETS</Content>
        <Content>
          {(tweet.followers / 1000).toFixed(3).toString().split(".").join(",")}{" "}
          FOLLOWERS
        </Content>
        <Button
          setIsButtonClick={setIsButtonClick}
          selectedTweets={selectedTweets}
          setSelectedTweets={setSelectedTweets}
          id={tweet.id}
        />
      </ContentWrapper>
    </TweetCard>
  );
};
