import { getAllTweets } from "../services/api";
import { enableBodyScroll } from "body-scroll-lock";

const body = document.getElementsByTagName("body")[0];

export const getAll = async (setLengthCollection: (lengthCollection: number) => void, btnFilter: string, selectedTweets: string[],
  setList: (list: any[]) => void,
  setIsLoading: (isLoading: boolean) => void,
  ): Promise<void> => {
    const all: string[] = await getAllTweets();
    setLengthCollection(all.length);
    if (btnFilter === "show all") {
      setList(all);
    }
    if (btnFilter === "follow") {
      const follow: string[] = all.filter((item:any) => !selectedTweets.includes(item.id));
      setList(follow);
      setLengthCollection(follow.length);
    }
    if (btnFilter === "followings") {
      const followings: string[] = all.filter((item:any) => selectedTweets.includes(item.id));
      setList(followings);
      setLengthCollection(followings.length);
    }
  setIsLoading(false);
  enableBodyScroll(body)
  };