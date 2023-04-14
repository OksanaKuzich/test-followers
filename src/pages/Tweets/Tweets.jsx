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
  const [isLoadmoreClick, setIsLoadmoreClick] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedTweets, setSelectedTweets] = useState(collectionParse);

  useEffect(() => {
    console.log(selectedTweets);
    localStorage.setItem(
      "collectionYoursTweets",
      JSON.stringify(selectedTweets)
    );
  }, [selectedTweets]);

  useEffect(() => {
    setIsLoading(true);
    const getPopular = async () => {
      const popular = await getPopularTweets();
      setList(popular);
    };
    const getAll = async () => {
      const all = await getAllTweets();
      setList(all);
    };

    if (isLoadmoreClick) {
      getAll();
    } else {
      getPopular();
    }
    setIsLoading(false);
  }, [isLoadmoreClick, isLoading]);

  const handleClickMore = () => {
    setIsLoadmoreClick(!isLoadmoreClick);
  };

  return (
    <main>
      <Container>
        <Filter />
        <TweetsList
          list={list}
          setSelectedTweets={setSelectedTweets}
          selectedTweets={selectedTweets}
        />
        <ButtonFilter type="button" onClick={handleClickMore}>
          {isLoadmoreClick ? "Hide all" : "Load more"}
        </ButtonFilter>
      </Container>
      {isLoading && <Preloader />}
    </main>
  );
};

export default Tweets;
