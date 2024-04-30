import { Record, Static, String } from "runtypes";

const StackOverflowResponseGuard = Record({
  reputation: String,
  displayName: String,
  profileUrl: String,
});

const URL = "https://stackoverflow.com/users/flair/2688304.json";

export const fetchStackOverflow = async () => {
  const response = await fetch(URL);
  const data = await response.json();
  const result = StackOverflowResponseGuard.check(data);
  return result;
};

export type StackOverflowResponse = Awaited<
  ReturnType<typeof fetchStackOverflow>
>;
