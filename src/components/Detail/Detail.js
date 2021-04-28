import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../firebase";

import {
  Container,
  Background,
  ImgTitle,
  ContentMeta,
  Control,
  Player,
  Trailer,
  AddList,
  GroupWatch,
  SubTitle,
  Description,
} from "./Detail.styles";

const Detail = (props) => {
  const { id } = useParams();
  const [detailData, setDetailData] = useState({});

  useEffect(() => {
    db.collection("movies")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setDetailData(doc.data());
        } else {
          console.log("no docs on firebase");
        }
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, [id]);

  return (
    <Container>
      <Background>
        <img alt={detailData.title} src={detailData.backgroundImg} />
      </Background>

      <ImgTitle>
        <img alt={detailData.title} src={detailData.titleImg} />
      </ImgTitle>
      <ContentMeta>
        <Control>
          <Player>
            <img src="/images/play-icon-black.png" alt="" />
            <span>Play</span>
          </Player>
          <Trailer>
            <img src="/images/play-icon-white.png" alt="" />
            <span>Trailer</span>
          </Trailer>
          <AddList>
            <span />
            <span />
          </AddList>
          <GroupWatch>
            <div>
              <img src="/images/group-icon.png" alt="" />
            </div>
          </GroupWatch>
        </Control>
        <SubTitle>{detailData.subTitle}</SubTitle>
        <Description>{detailData.description}</Description>
      </ContentMeta>
    </Container>
  );
};

export default Detail;
