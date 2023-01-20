import React from 'react';
import styled from 'styled-components/macro'

import medium from '../public/medium.svg'

const mobileWidth = '450px'

const Main = styled.div`
  min-height: 100vh;
  position: relative;
`;

const Heading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeadingBG = styled.div`
  position: absolute;
  top: 10px;
  margin: 0 auto;
  padding: 10px;
  font-size: 80px;
  font-weight: 700;
  font-family: 'Montserrat';
  color: #f1f1f1;

  @media (min-width: ${mobileWidth}) {
    font-size: 300px;
    top: 0;
  }
`;
const HeadingText = styled.div`
  position: absolute;
  top: 45px;
  margin: 0 auto;
  font-size: 40px;
  font-family: 'Montserrat';

  @media (min-width: ${mobileWidth}) {
    font-size: 60px;
    top: 160px;
  }
`;

const Body = styled.div`
  position: relative;
  top: 145px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: ${mobileWidth}) {
    top: 380px;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
`;

const Cards = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 0;

  @media (min-width: ${mobileWidth}) {
    width: 1296px;
  }
`;

const Card = styled.div`

  width: 90%;
  margin: 0 1em 2em;
  background: #eee;
  border-radius: 10px;

  * {
    font-family: 'Poppins'
  }
`;

const CImg = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;

  img {
    width: 100%;
    border-radius: 10px;
  }
`;

const CBody = styled.div`
  padding: 15px 25px;

  p {
    font-size: 14px;
    font-weight: 400;
    color: #555;
    margin-bottom: 10px;
  }
`;

const CHeader = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
`;

const CFooter = styled.div`
  display: flex;
  justify-content: space-between;
  padding-botton: 20px;

  img {
    width: 80px;
  }
`;

const Link = styled.a`
    text-decoration: none;
    color: black;
`;

function Blogs(props) {

  const blogs = [
      {
          id: 1,
          title: "How to make your MySQL transactions valuable in Node.js",
          content: "MySQL transactions come in handy when we deal with multiples queries. Also, we should roll back all queries if one of them failed. We can avoid callback hell which is shown in the document by using promises. In this tutorial, we are going to write a wrapper on top of MySQL library.",
          publishicon: medium,
          img: "https://miro.medium.com/max/2000/1*pK8P0MWjU1HiHkR1CDnb2A.jpeg",
          link: "https://hanjas.medium.com/how-to-make-your-mysql-transactions-valuable-in-node-js-19d62dca8764"
      },
      {
          id: 2,
          title: "Nodejs Sequelize MySQL",
          content: "Sequelize is a popular Node.js library that provides easy access to MySQL, MariaDB, SQLite, and PostgreSQL databases. It is designed to be a simple and flexible tool for building efficient and scalable Node.js applications that use relational databases. Here is a guide on how to use Sequelize in a Node.js application with MySQL.",
          publishicon: medium,
          img: "https://miro.medium.com/max/1400/1*utuBWeTq9LpXNmPHiEvFRQ.webp",
          link: "https://hanjas.medium.com/sequelize-mysql-in-nodejs-87492b5123c1"
      },
      {
          id: 3,
          title: "How to write your own date library in 15mins",
          content: "Most of us find it very hard when we work with multiple date formats. Handling date in javascript is not easy, so most of us use existing libraries like moment.js for our use case without even knowing what is happening inside those libraries.",
          publishicon: medium,
          img: "https://miro.medium.com/max/16668/1*htNbPUpyseYGhPohu9SZ7Q.jpeg",
          link: "https://hanjas.medium.com/how-to-write-your-own-date-library-in-15mins-da105b039b78"
      },
      {
          id: 4,
          title: "These cassandra utils will save you a lot of time",
          content: "This article shows you how to implement Cassandra util in your Node.js project. Apache Cassandra is a highly scalable open-source NoSQL database system being the right choice when you need scalability and high availability without compromising performance.",
          publishicon: medium,
          img: "https://miro.medium.com/max/2000/1*U2JmThnxLsAG9hsVs-Nz6Q.jpeg",
          link: "https://hanjas.medium.com/these-cassandra-utils-will-save-you-a-lot-of-time-54e3e0453996"
      },
      // {
      //     id: 5,
      //     title: "How to write your own date library in 15mins",
      //     content: "Most of us find it very hard when we work with multiple date formats. Handling date in javascript is not easy, so most of us use existing libraries like moment.js for our use case without even knowing what is happening inside those libraries.",
      //     publishicon: medium,
      //     img: "https://miro.medium.com/max/16668/1*htNbPUpyseYGhPohu9SZ7Q.jpeg",
      //     link: "https://hanjas.medium.com/how-to-write-your-own-date-library-in-15mins-da105b039b78"
      // }
  ];

  const cardItem = (item) => {
    return (
      <Card>
        <CImg><img src={item.img} alt={item.id}></img></CImg>
        <CBody>
          <CHeader>{item.title}</CHeader>
          <p>{item.content}</p>
          <CFooter>
            <img src={item.publishicon} alt="publisher" />
            <Link href={item.link}>Read more</Link>
          </CFooter>
        </CBody>
      </Card>
    )
  }

  return (
    <Main>
        <Heading>
          <HeadingBG>BLOGS</HeadingBG>
          <HeadingText>Blogs</HeadingText>
        </Heading>
        <Body>
          <Content>
            <Cards>
              {blogs.map((item) => cardItem(item))}
            </Cards>
          </Content>
        </Body>
    </Main>
  );
}

export default Blogs;