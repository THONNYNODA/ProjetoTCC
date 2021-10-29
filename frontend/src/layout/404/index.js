import React from "react";
import { Link } from "react-router-dom";

import { Text, BackBox, ErrorBox, ImgBox, LinkS } from "./styles";

const Error404 = () => {
  return (
    <>
      <BackBox>
        <ErrorBox>
          <ImgBox />
          <Text>Sorry, ocorreu um erro na página</Text>

          <Link to="/">
            <LinkS>Retorne a pagina inicial</LinkS>
          </Link>
        </ErrorBox>
      </BackBox>
    </>
  );
};

export default Error404;
