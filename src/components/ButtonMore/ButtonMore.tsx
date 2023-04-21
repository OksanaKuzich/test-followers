import React from "react";
import { ButtonFilter } from "../Filter/Filter.styled";

interface IProps {
  setIsFetchMore: (isFetchMore: boolean) => void;
  setIsHandleBtnMore: (isHandleBtnMore: boolean) => void;
  setPage: (page: any) => void;
}

export const ButtonMore: React.FC<IProps> = ({
  setIsFetchMore,
  setIsHandleBtnMore,
  setPage,
}) => {
  const handleClickMore = () => {
    setIsFetchMore(true);
    setIsHandleBtnMore(true);
    setPage((prevState: any) => prevState + 1);
    setIsHandleBtnMore(false);
  };

  return (
    <ButtonFilter type="button" onClick={handleClickMore}>
      Load more
    </ButtonFilter>
  );
};
