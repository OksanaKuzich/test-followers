import { Tweet } from "./Tweet";
import { TweetsListStyle } from "./TweetsList.styled";

export const TweetsList = ({ list, setSelectedTweets, selectedTweets }) => {
  return (
    <TweetsListStyle>
      {list.map(tweet => (
        <Tweet
          tweet={tweet}
          key={tweet.user}
          setSelectedTweets={setSelectedTweets}
          selectedTweets={selectedTweets}
        />
      ))}
    </TweetsListStyle>
  );
};
