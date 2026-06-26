import { MaimaiResponse } from "../../../../dynamicProfile/loaders/maimai";
import { GameLinkItem } from "../../GameLinkItem";
import { GameIcon } from "../../LinkItem";

const LinkItemMaimai = ({ maimai }: { maimai: MaimaiResponse | null }) => {
  return (
    <GameLinkItem
      icon={<GameIcon src="/img/games/maimai-48px.png" />}
      title="maimai DX"
      subtitle="International"
      caption={maimai?.name || "solvedac"}
      description="7061399728945"
      href="https://maimai.shiftpsh.com/shiftpsh"
      color="#42bbcd"
      src="/img/games/bg/ras.png"
      bgWidth={210}
      bgTop={-40}
      bgRight={-20}
      rating="16112"
      ratingBorder="linear-gradient(120deg, #ff00a8, #d600ff, #0070ff, #00b8ff, #00e3a0, #ffe600, #ffac00, #ff6a00, #ff0040)"
    />
  );
};

export default LinkItemMaimai;
