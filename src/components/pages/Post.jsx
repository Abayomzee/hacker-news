import React from "react";
import Header from "../common/header/Header";
import Center from "./../common/center/Center";
import Row from "./../common/row/Row";
import Footer from "../common/footer/Footer";
import FullPost from "./../common/full-post/FullPost";

const Home = () => {
  return (
    <>
      <Row>
        <Center>
          <Header />
          <FullPost
            title="Lorem Ipsum is simply dummy text."
            text={`Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, …when an unknown printer took a galley of type and scrambled`}
          />
          <Footer />
        </Center>
      </Row>
    </>
  );
};

export default Home;
