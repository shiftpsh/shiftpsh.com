import { Typo } from "@solved-ac/ui-react";
import { MaimaiResponse } from "../../../../dynamicProfile/loaders/maimai";
import { GameIcon, LinkItem } from "../../LinkItem";

const LinkItemMaimai = ({ maimai }: { maimai: MaimaiResponse | null }) => {
  return (
    <LinkItem
      icon={<GameIcon src="/img/games/maimai-48px.png" />}
      caption={
        <>
          maimai DX
          <br />
          <Typo description small>
            International
          </Typo>
        </>
      }
      description={
        <>
          {maimai && (
            <>
              {maimai.name}
              {/* {" "}
              <Typo description tabular>
                ({maimai.rating.toLocaleString()})
              </Typo> */}
            </>
          )}
          <br />
          <Typo readable small>
            7061399728945
          </Typo>
        </>
      }
      href="https://maimai.shiftpsh.com/shiftpsh"
      color="#42bbcd"
    />
  );
};

export default LinkItemMaimai;
