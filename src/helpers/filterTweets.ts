import { getAllTweets } from "../services/api";
import { enableBodyScroll } from "body-scroll-lock";

export const getAll = async (setLengthCollection, btnFilter, selectedTweets, setList, setIsLoading, body) => {
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
  setIsLoading(false);
  enableBodyScroll(body)
  };