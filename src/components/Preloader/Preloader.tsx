import {
  Loader,
  LoaderInner,
  LoaderLineWrap,
  LoaderLine,
} from "./Preloader.styled";

export const Preloader: React.FC = () => {
  return (
    <Loader>
      <LoaderInner>
        <LoaderLineWrap>
          <LoaderLine />
        </LoaderLineWrap>
        <LoaderLineWrap>
          <LoaderLine />
        </LoaderLineWrap>
        <LoaderLineWrap>
          <LoaderLine />
        </LoaderLineWrap>
        <LoaderLineWrap>
          <LoaderLine />
        </LoaderLineWrap>
        <LoaderLineWrap>
          <LoaderLine />
        </LoaderLineWrap>
      </LoaderInner>
    </Loader>
  );
};
