import {
  AtcoderAlgoResponse,
  CodeforcesResponse,
  SolvedacResponse,
  StackOverflowResponse,
  TopcoderResponse,
  fetchAtcoderAlgo,
  fetchCodeforces,
  fetchSolvedac,
  fetchStackOverflow,
  fetchTopcoder,
} from "./loaders";
import { BaekjoonResponse, fetchBaekjoon } from "./loaders/baekjoon";

const loaders = [
  fetchAtcoderAlgo,
  fetchBaekjoon,
  fetchCodeforces,
  fetchStackOverflow,
  fetchSolvedac,
  fetchTopcoder,
] as const;

type TransformLoader<Loaders extends readonly [...any[]]> = {
  [K in keyof Loaders]: Loaders[K] extends () => Promise<infer T>
    ? T | null
    : never;
};

type LoadersResult = TransformLoader<typeof loaders>;

export interface DynamicProfile {
  atcoderAlgo: AtcoderAlgoResponse | null;
  baekjoon: BaekjoonResponse | null;
  codeforces: CodeforcesResponse | null;
  stackOverflow: StackOverflowResponse | null;
  solvedac: SolvedacResponse | null;
  topcoder: TopcoderResponse | null;
}

export const loadDynamicProfile = async (): Promise<DynamicProfile> => {
  const loaded = await Promise.all(
    loaders.map((loader) => loader().catch((e) => null))
  );
  const [atcoderAlgo, baekjoon, codeforces, stackOverflow, solvedac, topcoder] =
    loaded as unknown as LoadersResult;

  return {
    atcoderAlgo,
    baekjoon,
    codeforces,
    stackOverflow,
    solvedac,
    topcoder,
  };
};
