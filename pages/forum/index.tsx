import type { NextPage, GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useQuery, QueryClient, dehydrate } from "react-query";
import { collection, getDocs } from "firebase/firestore";

import { db } from "../../firebase/firebase";

import Container from "@mui/material/Container";

import ForumMenu from "../../components/layout/ForumMenu";
import StatsPanel from "../../components/reusable/stats/StatsPanel";
// types
import { CategoryType } from "../../types/categoryType";
import { TopicType } from "../../types/topicType";
import { StatisticsCountType } from "../../types";
// api
import { GET_CATEGORIES } from "../../api/category";
import { GET_LATEST_TOPICS, GET_HOT_TOPICS } from "../../api/topic";
import { GET_STATISTICS_COUNT } from "../../api";

const namePage: NextPage = (props) => {
  const router = useRouter();

  const { data } = useQuery(["forum-main-aside"], async () => {
    // const querySnapshot = await getDocs(collection(db, "category"));

    const categoriesRes = await GET_CATEGORIES();

    const latestTopicsRes = await GET_LATEST_TOPICS(5);
    const hotTopicsRes = await GET_HOT_TOPICS(5);
    const statisticsCountRes = await GET_STATISTICS_COUNT();

    const categories = categoriesRes as CategoryType[];
    const latest_topics = latestTopicsRes as TopicType[];
    const hot_topics = hotTopicsRes as TopicType[];
    const statistics_count = statisticsCountRes as StatisticsCountType;

    return {
      categories,
      latest_topics,
      hot_topics,
      statistics_count,
    };

    // let categories: CategoryType[] = [];

    // querySnapshot.forEach((doc) => {
    //   categories.push({
    //     id: doc.id,
    //     name: doc.data().name,
    //     active: doc.data().active,
    //     meta: doc.data().meta,
    //   });
    // });
  });

  return (
    <ForumMenu data={data!}>
      <StatsPanel counts={data?.statistics_count!} />
      <div>forum</div>
    </ForumMenu>
  );
};

export const getServerSideProps: GetServerSideProps = async (
  context
): Promise<any> => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["forum-main-aside"], async () => {
    try {
      const categoriesRes = await GET_CATEGORIES();

      const latestTopicsRes = await GET_LATEST_TOPICS(5);
      const hotTopicsRes = await GET_HOT_TOPICS(5);
      const statisticsCountRes = await GET_STATISTICS_COUNT();

      const categories = categoriesRes as CategoryType[];
      const latest_topics = latestTopicsRes as TopicType[];
      const hot_topics = hotTopicsRes as TopicType[];
      const statistics_count = statisticsCountRes as StatisticsCountType;

      return {
        categories,
        latest_topics,
        hot_topics,
        statistics_count,
      };
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
