import { useEffect, useState } from "react";
import logo from "../../images/logo.png";
import image from "../../images/picture.png";
import { Button } from "./Button";
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

interface TweetData {
  followers: number,
  id: number,
  avatar: string,
  user: string,
  tweets: number,
}

interface IProps {
  tweet: TweetData;
  selectedTweets: any[];
  setSelectedTweets: (selectedTweets: string[]) => void;
}

export const Tweet: React.FC<IProps> = ({ tweet, selectedTweets, setSelectedTweets }) => {
  const [isButtonClick, setIsButtonClick] = useState<boolean>(false);
  const [followers, setFollowers] = useState<any>(tweet.followers);

  useEffect(() => {
    if (selectedTweets.includes(tweet.id)) {
      return setFollowers(tweet.followers + 1);
    } else if (isButtonClick) {
      return setFollowers(tweet.followers + 1);
    }
    return;
  }, [followers, isButtonClick, selectedTweets, tweet.followers, tweet.id]);

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
          {(followers / 1000).toFixed(3).toString().split(".").join(",")}{" "}
          FOLLOWERS
        </Content>
        <Button
          setIsButtonClick={setIsButtonClick}
          selectedTweets={selectedTweets}
          setSelectedTweets={setSelectedTweets}
          id={tweet.id}
          setFollowers={setFollowers}
        />
      </ContentWrapper>
    </TweetCard>
  );
};
