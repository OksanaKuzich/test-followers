import { ButtonStyle } from "./Button.styled";

export const Button = ({
  setIsButtonClick,
  selectedTweets,
  setSelectedTweets,
  id,
  setFollowers,
}) => {
  const handleButtonClick = () => {
    if (selectedTweets && selectedTweets.includes(id)) {
      const newSelected = selectedTweets.filter(tweet => tweet !== id);
      setSelectedTweets([...newSelected]);
      setFollowers(prevState => prevState - 1);
      setIsButtonClick(false);
      return;
    }
    setIsButtonClick(true);
    setSelectedTweets([...selectedTweets, id]);
  };

  return (
    <ButtonStyle type="button" onClick={handleButtonClick}>
      {selectedTweets.includes(id) ? "following" : "follow"}
    </ButtonStyle>
  );
};
