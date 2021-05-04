import React, { useEffect, useState } from "react";
import Header from "../common/header/Header";
import Center from "./../common/center/Center";
import Row from "./../common/row/Row";
import PostCard from "../common/postCard/PostCard";
import Nav from "./../common/nav/Nav";
import Button from "./../common/button/Button";
import Footer from "../common/footer/Footer";
import Spinner from "../common/spinner/Spiner";
import { getPosts, deletePost } from "./../../services/postServices";

const Home = () => {
  //we change here
  const [items, setItems] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  //setting tha initial page
  const [page, setPage] = useState(0);
  // we need to know if there is more data
  // const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    loadMore();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadMore = () => {
    setIsFetching(true);

    getPosts(page).then((res) => {
      setItems((prevItems) => [...new Set([...prevItems, ...res.data])]);

      setPage((prevPage) => prevPage + 1);
      // setHasMore(res.data.length > 0);
      setIsFetching(false);
    });
  };

  const removePost = (id) => {
    deletePost(id);
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <>
      <Row>
        <Center>
          <Header />
          <Nav />
          {items.map((item, i) => (
            <PostCard
              key={i}
              id={item.id}
              title={item.title}
              body={item.body}
              handleDelete={removePost}
            />
          ))}
          <Button
            type="btn--big"
            text={items.length > 0 && isFetching ? <Spinner /> : "Load More"}
            handleClick={loadMore}
          />

          <Footer />
        </Center>
      </Row>
    </>
  );
};

export default Home;
