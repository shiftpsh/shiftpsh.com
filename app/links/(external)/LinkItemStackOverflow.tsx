import { Typo } from "@solved-ac/ui-react";
import { IconBrandStackoverflow } from "@tabler/icons-react";
import { StackOverflowResponse } from "../../../dynamicProfile/loaders";
import { LinkItem } from "../LinkItem";

const LinkItemStackOverflow = ({
  stackOverflow,
}: {
  stackOverflow: StackOverflowResponse | null;
}) => {
  return (
    <LinkItem
      icon={<IconBrandStackoverflow />}
      caption="Stack Overflow"
      description={
        stackOverflow ? (
          <>
            {stackOverflow.displayName}{" "}
            <Typo description tabular>
              ({stackOverflow.reputation})
            </Typo>
          </>
        ) : (
          `shiftpsh`
        )
      }
      href="https://stackoverflow.com/users/2688304/shiftpsh"
      color="#f48024"
    />
  );
};

export default LinkItemStackOverflow;
