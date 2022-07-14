import { HOME_PATH, PROFILE_PATH, TWEET_PATH } from "./utils/const";
import Home from "./components/Home";
import TweetList from "./components/TweetList";

export const publicRoutes = [
  { path: HOME_PATH, Component: Home },
  { path: TWEET_PATH, Component: TweetList },
];
export const privateRoutes = [{ path: PROFILE_PATH, Component: "Profile" }];
