import { ButtonFilter } from "components/Filter/Filter.styled";

export const ButtonMore = ({ setIsFetchMore, setIsHandleBtnMore, setPage }) => {
  const handleClickMore = () => {
    setIsFetchMore(true);
    setIsHandleBtnMore(true);
    setPage(prevState => prevState + 1);
    setIsHandleBtnMore(false);
  };

  return (
    <ButtonFilter type="button" onClick={handleClickMore}>
      Load more
    </ButtonFilter>
  );
};
