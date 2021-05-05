import http from "./httpServices";

const postsUrl = "/posts";

export const getPosts = async (page) => {
  try {
    const res = await http
      .get(postsUrl, { params: { _page: page, _limit: 2 } })
      .then((res) => res);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = async (id) => {
  try {
    const res = http.delete(`${postsUrl}/${id}`).then((res) => res);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const createPost = async (data) => {
  data = JSON.stringify(data);
  try {
    const res = http.post(postsUrl, data).then((res) => res);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const updateAPost = async (id, data) => {
  try {
    const res = http.patch(`${postsUrl}/${id}`, data).then((res) => res);
    return res;
  } catch (error) {
    console.log(error);
  }
};
