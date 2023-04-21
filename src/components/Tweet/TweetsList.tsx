import { Tweet } from "./Tweet";
import { TweetsListStyle } from "./TweetsList.styled";

interface IProps {
  list: any[];
  setSelectedTweets: (selectedTweets: string[]) => void;
  selectedTweets: string[];
}

export const TweetsList: React.FC<IProps> = ({
  list,
  setSelectedTweets,
  selectedTweets,
}) => {
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
