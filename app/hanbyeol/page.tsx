import { HANBYEOL_FOLDER_PATH, getAllPostFrontmatters } from "../../utils/post";
import ClientPage from "./ClientPage";

const Page = async () => {
  const allPosts = await getAllPostFrontmatters(HANBYEOL_FOLDER_PATH);

  return <ClientPage posts={allPosts} />;
};

export default Page;
