import { useEffect, useState } from "react";
import { getPopularTweets, getAllTweets } from "services/api";
import { Container } from "components/Container/Container.styled";
import { Filter } from "components/Filter/Filter";
import { TweetsList } from "components/Tweet/TweetsList";
import { ButtonFilter } from "components/Filter/Filter.styled";
import { Preloader } from "components/Preloader/Preloader";

const Tweets = () => {
  const collectionTweets = localStorage.getItem("collectionYoursTweets");
  const collectionParse = JSON.parse(collectionTweets) ?? [];

  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedTweets, setSelectedTweets] = useState(collectionParse);
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
    const getAll = async () => {
      const all = await getAllTweets();
      setLengthCollection(all.length);
      if (btnFilter === "show all") {
        setList(all);
      }
      if (btnFilter === "follow") {
        const follow = all.filter(item => !selectedTweets.includes(item.id));
        setList(follow);
        setLengthCollection(follow.length);
      }
      if (btnFilter === "followings") {
        const followings = all.filter(item => selectedTweets.includes(item.id));
        setList(followings);
        setLengthCollection(followings.length);
      }
    };
    getAll();
  }, [btnFilter, selectedTweets]);

  useEffect(() => {
    setIsLoading(true);
    if (!isFetchMore) return;
    if (lengthCollection === list.length) return;

    const getPopular = async page => {
      const popular = await getPopularTweets(page);
      setList([...list, ...popular]);
    };
    getPopular(page);
    setIsLoading(false);
    setIsFetchMore(false);
  }, [isFetchMore, isHandleBtnMore, lengthCollection, list, page]);

  const handleClickMore = () => {
    setIsFetchMore(true);
    setIsHandleBtnMore(true);
    setPage(prevState => prevState + 1);
    setIsHandleBtnMore(false);
  };

  return (
    <main>
      <Container>
        <Filter setBtnFilter={setBtnFilter} />
        <TweetsList
          list={list}
          setSelectedTweets={setSelectedTweets}
          selectedTweets={selectedTweets}
        />
        {lengthCollection !== list.length && (
          <ButtonFilter type="button" onClick={handleClickMore}>
            Load more
          </ButtonFilter>
        )}
      </Container>
      {/* {isLoading && <Preloader />} */}
    </main>
  );
};

export default Tweets;
