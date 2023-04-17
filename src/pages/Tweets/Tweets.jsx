import { useEffect, useState } from "react";
import { getPopularTweets } from "services/api";
import { getAll } from "helpers/filterTweets";
import pony from "../../images/pony.png";
import { Preloader } from "components/Preloader/Preloader";
import { Filter } from "components/Filter/Filter";
import { TweetsList } from "components/Tweet/TweetsList";
import { ButtonMore } from "components/ButtonMore/ButtonMore";
import { Container } from "components/Container/Container.styled";
import { PonySt } from "./Tweets.styled";

const Tweets = () => {
  const collectionTweets = JSON.parse(
    localStorage.getItem("collectionYoursTweets") ?? "[]"
  );

  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedTweets, setSelectedTweets] = useState(collectionTweets);
  const [page, setPage] = useState(1);
  const [isHandleBtnMore, setIsHandleBtnMore] = useState(false);
  const [isFetchMore, setIsFetchMore] = useState(true);
  const [lengthCollection, setLengthCollection] = useState(0);
  const [btnFilter, setBtnFilter] = useState("");

  useEffect(() => {
    localStorage.setItem(
      "collectionYoursTweets",
      JSON.stringify(selectedTweets)
    );
  }, [page, selectedTweets]);

  useEffect(() => {
    setIsLoading(true);
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
    const getPopular = async page => {
      const popular = await getPopularTweets(page);
      setList([...list, ...popular]);
      setIsLoading(false);
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
