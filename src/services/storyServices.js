import http from "./httpServices";

const storiesIdUrl = "/newstories.json";
const storyIdUrl = "/item/";
const bestStoryUrl = "/topstories.json";

export const getStories = async () => {
  try {
    const res = await http.get(storiesIdUrl).then((data) => data);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const getStory = async (storyId) => {
  try {
    const res = await http.get(`${storyIdUrl + storyId}.json`);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const topStories = async () => {
  try {
    const res = await http.get(bestStoryUrl).then((data) => data);
    return res;
  } catch (error) {
    console.log(error);
  }
};
