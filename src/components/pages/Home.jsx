import React, { useEffect, useMemo, useState } from "react";
import Header from "../common/header/Header";
import Center from "./../common/center/Center";
import Row from "./../common/row/Row";
import PostCard from "../common/postCard/PostCard";
import Nav from "./../common/nav/Nav";
import Button from "./../common/button/Button";
import Footer from "../common/footer/Footer";
import Spinner from "../common/spinner/Spiner";
import { getPosts, deletePost } from "./../../services/postServices";
import ModalLayout from "../common/modal-layout/ModalLayout";
import ModalChild from "../common/modal-child/ModalChild";
import PostForm from "../common/Forms/PostForm";
import UpdateForm from "./../common/Forms/UpdateForm";

const Home = () => {
  //we change here
  const [items, setItems] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  //setting tha initial page
  const [page, setPage] = useState(0);
  // we need to know if there is more data
  // const [hasMore, setHasMore] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [postToUpdate, setPostToUpdate] = useState({});
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    loadMore();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Load posts
  const loadMore = () => {
    setIsFetching(true);

    getPosts(page).then((res) => {
      setItems((prevItems) => [...new Set([...prevItems, ...res.data])]);

      setPage((prevPage) => prevPage + 1);
      // setHasMore(res.data.length > 0);
      setIsFetching(false);
    });
  };

  // Delete a post
  const removePost = (id) => {
    deletePost(id);
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const modalOpen = () => {
    setOpenModal(true);
  };
  const modalClose = () => {
    setOpenModal(false);
    setUpdate(false);
  };

  const newPost = (post) => {
    console.log(post);
    setItems((prevItems) => [...prevItems, post]);
  };

  const updatePost = (id) => {
    modalOpen();
    setUpdate(true);
    const postToBeUpdated = items.find((item) => item.id === id);
    setPostToUpdate({ ...postToBeUpdated });
  };

  const onPostUpdate = (id, post) => {
    const neww = items.map((item) => {
      if (item.id === id) return post;
      return item;
    });

    setItems(neww);
  };

  // Delayed page rendering in order to make Preloader visible (Not necessary)
  useMemo(() => {
    let v = 0;
    while (v < 900000000) {
      v++;
    }
  }, []);

  return (
    <>
      <Row>
        <Center>
          <Header />
          <Nav handleClick={modalOpen} />
          {items.map((item, i) => (
            <PostCard
              key={i}
              id={item.id}
              title={item.title}
              body={item.body}
              handleDelete={removePost}
              handleModal={updatePost}
            />
          ))}
          <Button
            type="btn--big"
            text={items.length > 0 && isFetching ? <Spinner /> : "Load More"}
            handleClick={loadMore}
          />
          <Footer />
          {openModal && (
            <ModalLayout>
              <ModalChild>
                <Button handleClick={modalClose} text="close" type="btn--sm" />
                {update ? (
                  <UpdateForm
                    updatePost={postToUpdate}
                    handleUpdatedPost={onPostUpdate}
                  />
                ) : (
                  <PostForm handleNewPost={newPost} />
                )}
              </ModalChild>
            </ModalLayout>
          )}
        </Center>
      </Row>
    </>
  );
};

export default Home;
