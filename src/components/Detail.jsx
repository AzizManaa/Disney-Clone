import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { db } from "../firebase";
import Modal from "./Modal";
function Detail() {
  const { id } = useParams();
  const [movie, setmovie] = useState({});
  const [clickedMov, setClickedMov] = useState(null);
  useEffect(() => {
    db.collection("movies")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setmovie(doc.data());
        } else {
        }
      });
  }, []);
  const handleClick = () => {
    setClickedMov(movie.trailerVid);
  };
  return (
    <Container>
      <Background>
        <img alt={movie.title} src={movie.backgroundImg} />
      </Background>
      <ImageTitle>
        <img alt={movie.title} src={movie.titleImg} />
      </ImageTitle>
      <Controle>
        <PlayButton>
          <img src="/assests/images/play-icon-black.png" />
          <span>PLAY</span>
        </PlayButton>
        <TrailerButton onClick={() => handleClick()}>
          <img src="/assests/images/play-icon-white.png" />
          <span>TRAILER</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupWatchButton>
          <img src="/assests/images/group-icon.png" />
        </GroupWatchButton>
      </Controle>
      <Subtitle>{movie.subTitle}</Subtitle>
      <Description>{movie.description}</Description>
      {clickedMov && (
        <Modal clickedMov={clickedMov} setClickedMov={setClickedMov} />
      )}
    </Container>
  );
}

export default Detail;
const Container = styled.div`
  min-height: 80vh;
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`;
const Background = styled.div`
  position: fixed;
  inset: 0;
  z-index: -1;
  opacity: 0.8;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const ImageTitle = styled.div`
  height: 30vh;
  min-height: 170px;
  width: 35vw;
  min-width: 200px;
  margin-top: 120px;
  margin-bottom: 50px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
const Controle = styled.div`
  display: flex;
  align-items: center;
`;
const PlayButton = styled.button`
  border-radius: 4px;
  font-size: 15px;
  display: flex;
  align-items: center;
  height: 56px;
  background: rgb(249, 249, 249);
  border: none;
  padding: 0 24px;
  margin-right: 22px;
  letter-spacing: 1.8px;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background: rgb(198, 198, 198);
  }
`;
const TrailerButton = styled(PlayButton)`
  background: rgba(168, 168, 168, 0.3);
  border: 3px solid rgba(249, 249, 249, 0.1);
  color: rgba(249, 249, 249);
`;
const AddButton = styled.button`
  cursor: pointer;
  margin-right: 16px;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid white;
  background: rgba(168, 168, 168, 0.3);
  span {
    font-size: 30px;
    color: white;
  }
`;
const GroupWatchButton = styled(AddButton)`
  background: rgba(0, 0, 0);
`;

const Subtitle = styled.div`
  color: rgba(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  margin-top: 26px;
`;
const Description = styled.div`
  text-align: justify;
  line-height: 1.4;
  font-size: 18px;
  margin-top: 16px;
  color: rgba(249, 249, 249);
  max-width: 760px;
`;
