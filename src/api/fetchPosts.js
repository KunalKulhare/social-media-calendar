import { dummyPosts } from "../data/dummyData";

export const fetchPosts = async (selectedDates) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      let availablePosts = [...dummyPosts];
      availablePosts.sort((a, b) => b.followers - a.followers);
      const postsPerDate = Math.ceil(availablePosts.length / selectedDates.length);
      const distributedPosts = {};

      selectedDates.forEach((date) => {
        distributedPosts[date] = [];
      });
      const categoryCount = {};
      availablePosts.forEach((post) => {
        categoryCount[post.category] = 0;
      });
      availablePosts.forEach((post) => {
        const dateWithLeast = selectedDates.reduce((minDate, currDate) => {
          const currCount = distributedPosts[currDate].filter(
            (p) => p.category === post.category
          ).length;
          const minCount = distributedPosts[minDate].filter(
            (p) => p.category === post.category
          ).length;
          return currCount < minCount ? currDate : minDate;
        }, selectedDates[0]);
        if (distributedPosts[dateWithLeast].length < postsPerDate) {
          distributedPosts[dateWithLeast].push({ ...post, date: dateWithLeast });
          categoryCount[post.category]++;
        }
      });
      const result = Object.values(distributedPosts).flat();
      resolve(result);
    }, 500);
  });
};