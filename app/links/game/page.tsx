import { loadGameDynamicProfile } from "../../../dynamicProfile/loadGames";
import ClientPage from "./ClientPage";

const Page = async () => {
  const profile = await loadGameDynamicProfile();

  return <ClientPage profile={profile} />;
};

export default Page;
