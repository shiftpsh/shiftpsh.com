import { Typo } from "@solved-ac/ui-react";
import { IconCode } from "@tabler/icons-react";
import { BaekjoonResponse } from "../../../dynamicProfile/loaders/baekjoon";
import { LinkItem } from "../LinkItem";

const LinkItemBaekjoon = ({
  baekjoon,
}: {
  baekjoon: BaekjoonResponse | null;
}) => {
  return (
    <LinkItem
      icon={<IconCode />}
      caption="Baekjoon OJ"
      description={
        baekjoon ? (
          <>
            shiftpsh{" "}
            <Typo description tabular>
              (#{baekjoon.rank})
            </Typo>
          </>
        ) : (
          `shiftpsh`
        )
      }
      href="https://www.acmicpc.net/user/shiftpsh"
      color="#2e9afe"
    />
  );
};

export default LinkItemBaekjoon;
