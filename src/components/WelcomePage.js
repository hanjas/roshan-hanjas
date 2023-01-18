import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro'
import icons from '../lib/utils/icons'
import profilePic from '../public/profile-pic.svg';
import assets from '../lib/assets'

const Main = styled.div`
  height: 100vh;
  display: flex;
`;

const LeftSection = styled.div`
  height: 100vh;
  background-image: linear-gradient(120deg, rgba(240, 147, 251, 1) 0%, rgba(245, 87, 108, 1) 100%);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;

  @media (min-width: 400px) {
    flex: 2;
  }
`;
const LContent = styled.div`
  display: flex;
  flex-direction: column;
`;
const LProfile = styled.div`
  height: 250px;
  width: 250px;
  background-image: url(${profilePic});
  background-size: cover;
  border-radius: 150px;
  transform: scale(.8);
  margin: 0 auto;

  @media (min-width: 400px) {
    display: none;
  }
`;
const Name = styled.div`
  font-size: 60px;
  font-weight: 600;
  font-family: 'Montserrat';
  animation: text-clip 1s 0s cubic-bezier(0.5, 0, 0.1, 1) both;

  @media (min-width: 400px) {
    font-size: 80px;
  }
`;
const Title = styled.div`
  font-size: 18px;
  line-height: 40px;
  font-family: 'Montserrat';
  animation: text-clip 1s 0s cubic-bezier(0.5, 0, 0.1, 1) both;

  @media (min-width: 400px) {
    font-size: 25px;
  }
`;
const Links = styled.div`
  width: 200px;
  display: flex;
  animation: text-clip 1s 0s cubic-bezier(0.5, 0, 0.1, 1) both;

  svg {
      filter: grayscale(1);
      width: 25px;
      height: 25px;
      margin-right: 10px;
      filter: invert(10000%) contrast(1000%);
  }

  svg:hover {
      filter: none;
  }
`;


const RightSection = styled.div`
  height: 100vh;
  flex: 3; 
  position: relative;
`;
const RContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  overflow: hidden;
`;
const Profile = styled.div`
  position: relative;
  height: 250px;
  width: 250px;
  background-image: url(${profilePic});
  background-size: cover;
  border-radius: 150px;
  transform: scale(.8);

  @media (min-width: 400px) {
    animation: appear 500ms 1.7s both;
  }
`;

const IconsContainer = styled.div`
  pointer-events: none;
  animation: flower 300ms 1.7s both;
`;

const ClipContainer = styled.div`
  animation: counter-rotate 50s infinite;
  position: absolute;
  top: -50px;
  left: -50px;
`;
const Clip = styled.div`
  height: 350px;
  width: 350px;
  border-radius: 200px;
  border: 2px dashed #777;
  margin: auto;
  animation: flower 400ms 1.9s both;
`;
const Border1 = styled.div`
  position: absolute;
  border-radius: 100%;
  border: 5px dotted #eee;
  width: 800px;
  height: 800px;
  left: -275px;
  top: -275px;
  animation: counter-rotate 90s infinite linear;
`;
const Border2 = styled.div`
  position: absolute;
  border-radius: 100%;
  border: 5px dotted #eee;
  width: 850px;
  height: 850px;
  left: -300px;
  top: -300px;
  animation: rotate 90s infinite linear;
`;
const Border3 = styled.div`
  position: absolute;
  border-radius: 100%;
  border: 5px dotted #eee;
  width: 900px;
  height: 900px;
  left: -325px;
  top: -325px;
  animation: counter-rotate 90s infinite linear;
`;
const Icons = styled.div`
  position: absolute;
  left: -125px;
  top: -125px;
  height: 500px;
  width: 500px;
  margin: auto;
  animation: rotate 90s infinite linear;

  svg {
    position: absolute;
    width: 80px;
    animation: counter-rotate 90s infinite linear;
  }
`;

function WelcomePage(props) {
  const [ designation, setDesignation ] = useState("Fullstack Engineer")
  const designations = ["Fullstack Engineer", "Backend Engineer", "Web Developer", "superman", "batman"]
  const ICONS_CONTAINER_WIDTH = 500;


  const getRandomString = (length) => {
    var randomChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$%&*@?+!";
    var result = "";
    for (var i = 0; i < length; i++) {
      result += randomChars.charAt(
        Math.floor(Math.random() * randomChars.length)
      );
    }
    return result;
  }

  const getTransitionString = (labels, idx) => {
    const from = labels[idx % labels.length];
    const to = labels[(idx + 1) % labels.length];
    const min = Math.min(from.length, to.length);
    const max = Math.max(from.length, to.length);
    const length = min + parseInt(Math.random() * (max - min));
    return getRandomString(length);
  }
  
  useEffect(() => {
    let j = 0;
    const interval = setInterval(() => {
      const len = 20;
      Array.from({length:len}).forEach((_, i) => {
        setTimeout(() => {
          const str =
            i === len - 1
              ? designations[j % designations.length]
              : getTransitionString(designations, j);
          setDesignation(str);
        }, i * 20);
      })
      j++;
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <Main>
      <LeftSection>
        <LContent>
          <LProfile />
          <div>
            <Name>ROSHIN</Name>
            <Name>HANJAS</Name>
          </div>
          <Title>{designation}</Title>
          <Links>
          <a href="https://github.com/hanjas">{icons.github.icon}</a>
          <a href="https://hanjas.medium.com/">{icons.medium.icon}</a>
          <a href="https://www.linkedin.com/in/roshan-hanjas/">{icons.linkedin.icon}</a>
          </Links>
        </LContent>
      </LeftSection>
      <RightSection>
        <RContent>
          <Profile>
            <IconsContainer>
              <ClipContainer>
                <Clip />
              </ClipContainer>
              <Border1 />
              <Border2 />
              <Border3 />
              <Icons>
                {assets.map((f, key) => {
                  const index = parseInt(key, 10) / assets.length;
                  const r = ICONS_CONTAINER_WIDTH / 2;
                  const left = 210 + r * Math.cos(2 * Math.PI * index);
                  const top = 210 + r * Math.sin(2 * Math.PI * index);
                  return React.cloneElement(f, {
                    key,
                    style: { left, top },
                  });
                })}
              </Icons>
            </IconsContainer>
          </Profile>
        </RContent>
      </RightSection>
    </Main>
  );
}

export default WelcomePage;