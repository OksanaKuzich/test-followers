import { ButtonStyle } from "./Button.styled";

interface IProps {
  setIsButtonClick: (isButtonClick: boolean) => void;
  selectedTweets: any[];
  setSelectedTweets: (selectedTweets: string[]) => void;
  id: number;
  setFollowers: (followers: any) => void;
}

export const Button: React.FC<IProps> = ({
  setIsButtonClick,
  selectedTweets,
  setSelectedTweets,
  id,
  setFollowers,
}) => {
  const handleButtonClick = (): void => {
    if (selectedTweets && selectedTweets.includes(id)) {
      const newSelected: any = selectedTweets.filter(tweet => tweet !== id);
      setSelectedTweets([...newSelected]);
      setFollowers((prevState: any) => prevState - 1);
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
