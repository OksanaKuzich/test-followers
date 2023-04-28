import { useEffect, useState } from "react";
import { getPopularTweets } from "../../services/api";
import { getAll } from "../../helpers/filterTweets";
import pony from "../../images/pony.png";
import { Preloader } from "../../components/Preloader/Preloader";
import { Filter } from "../../components/Filter/Filter";
import { TweetsList } from "../../components/Tweet/TweetsList";
import { ButtonMore } from "../../components/ButtonMore/ButtonMore";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { Container } from "../../components/Container/Container.styled";
import { PonySt } from "./Tweets.styled";

const body = document.getElementsByTagName("body")[0];

interface ITweet {
  avatar: string;
  id: string;
  user: string;
  tweets: number;
  followers: number;
}

const Tweets: React.FC = () => {
  const collectionTweets = JSON.parse(
    localStorage.getItem("collectionYoursTweets") ?? "[]"
  );
  const [list, setList] = useState<ITweet[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedTweets, setSelectedTweets] =
    useState<string[]>(collectionTweets);
  const [page, setPage] = useState<number>(1);
  const [isHandleBtnMore, setIsHandleBtnMore] = useState<boolean>(false);
  const [isFetchMore, setIsFetchMore] = useState<boolean>(true);
  const [lengthCollection, setLengthCollection] = useState<number>(0);
  const [btnFilter, setBtnFilter] = useState<string>("");

  useEffect(() => {
    localStorage.setItem(
      "collectionYoursTweets",
      JSON.stringify(selectedTweets)
    );
  }, [page, selectedTweets]);

  useEffect(() => {
    setIsLoading(true);
    disableBodyScroll(body);
    getAll(
      setLengthCollection,
      btnFilter,
      selectedTweets,
      setList,
      setIsLoading
    );
  }, [btnFilter, selectedTweets]);

  useEffect(() => {
    if (!isFetchMore) return;
    if (lengthCollection === list.length) return;
    setIsLoading(true);
    disableBodyScroll(body);
    const getPopular = async (page: number): Promise<void> => {
      const popular: any[] = await getPopularTweets(page);
      setList([...list, ...popular]);
      setIsLoading(false);
      enableBodyScroll(body);
    };
    getPopular(page);
    setIsFetchMore(false);
  }, [isFetchMore, isHandleBtnMore, lengthCollection, list, page]);

  return (
    <main>
      <Container>
        <Filter setBtnFilter={setBtnFilter} btnFilter={btnFilter} />
        {list.length !== 0 ? (
          <TweetsList
            list={list}
            setSelectedTweets={setSelectedTweets}
            selectedTweets={selectedTweets}
          />
        ) : (
          <PonySt src={pony} alt="pony" />
        )}
        {lengthCollection !== list.length && (
          <ButtonMore
            setIsFetchMore={setIsFetchMore}
            setIsHandleBtnMore={setIsHandleBtnMore}
            setPage={setPage}
          />
        )}
      </Container>
      {isLoading && <Preloader />}
    </main>
  );
};

export default Tweets;
