import { HANBYEOL_FOLDER_PATH, getAllPostFrontmatters } from "../../utils/post";
import ClientPage from "./ClientPage";

const Page = async () => {
  const allPosts = await getAllPostFrontmatters(HANBYEOL_FOLDER_PATH);
  const allPostsSorted = allPosts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return <ClientPage posts={allPostsSorted} />;
};

export default Page;
