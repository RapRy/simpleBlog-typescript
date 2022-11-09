import type { NextPage, GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useQuery, QueryClient, dehydrate } from "react-query";
import { collection, getDocs } from "firebase/firestore";

import { db } from "../../firebase/firebase";

import ForumMenu from "../../components/layout/ForumMenu";
import { CategoryType } from "../../types/categoryType";
import { GET_LATEST_TOPICS } from "../../api/category";

const namePage: NextPage = (props) => {
  const router = useRouter();

  const { data } = useQuery(["category-list"], async () => {
    // const querySnapshot = await getDocs(collection(db, "category"));

    const categories = await GET_LATEST_TOPICS();

    // let categories: CategoryType[] = [];

    // querySnapshot.forEach((doc) => {
    //   categories.push({
    //     id: doc.id,
    //     name: doc.data().name,
    //     active: doc.data().active,
    //     meta: doc.data().meta,
    //   });
    // });

    return { categories };
  });

  return (
    <ForumMenu data={data!}>
      <div>forum</div>
    </ForumMenu>
  );
};

export const getServerSideProps: GetServerSideProps = async (
  context
): Promise<any> => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["category-list"], async () => {
    try {
      const categoriesRes = await GET_LATEST_TOPICS();

      const categories = categoriesRes;

      return { categories };
      // const querySnapshot = await getDocs(collection(db, "category"));

      // let categories: CategoryType[] = [];

      // querySnapshot.forEach((doc) => {
      //   categories.push({
      //     id: doc.id,
      //     name: doc.data().name,
      //     active: doc.data().active,
      //     meta: doc.data().meta,
      //   });
      // });

      // return { categories };
    } catch (err) {
      throw err;
    }
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default namePage;
