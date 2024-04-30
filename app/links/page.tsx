import { loadDynamicProfile } from "../../dynamicProfile/load";
import ClientPage from "./ClientPage";

const Page = async () => {
  const profile = await loadDynamicProfile();

  return <ClientPage profile={profile} />;
};

export default Page;
