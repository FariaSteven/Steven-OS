import { Divider, HStack, Link, Select, Text, VStack } from '@chakra-ui/react';
import { IoCaretDownSharp } from "react-icons/io5";

import save from "../assets/Save.svg";
import boldBtn from "../assets/bold-btn.svg";
import italicBtn from "../assets/italic-btn.svg";
import underlineBtn from "../assets/underline-btn.svg";
import centerTxtBtn from "../assets/center-txt-btn.svg";
import alignLeftTxtBtn from "../assets/align-left-text-btn.svg";
import alignRightTxtBtn from "../assets/align-right-text-btn.svg";

const Me = () => {
  return (
    <VStack w="100%" bg="#E5E4E3" alignItems="baseline" gap="0.1rem">
      <HStack w="100%" borderTop="1px solid #000" p="5px">
        <img src={save} alt='Save' width="25px" />
        <Divider orientation='vertical' borderColor="#BDBDBD" borderWidth="1px" />
        <select
          disabled="disabled"
          style={{
            width: "20%",
            border: "1px solid #000",
            background: "transparent"
          }}
        >
          <option>ChicagoFLF</option>
        </select>
        <select
          disabled="disabled"
          style={{
            width: "10%",
            border: "1px solid #000",
            background: "transparent"
          }}
        >
          <option>12</option>
        </select>
        <Divider orientation='vertical' borderColor="#BDBDBD" borderWidth="1px" />
        <img src={boldBtn} alt='Save' width="25px" />
        <img src={italicBtn} alt='Save' width="25px" />
        <img src={underlineBtn} alt='Save' width="25px" />
        <Divider orientation='vertical' borderColor="#BDBDBD" borderWidth="1px" />
        <img src={alignLeftTxtBtn} alt='Save' width="25px" />
        <img src={centerTxtBtn} alt='Save' width="25px" />
        <img src={alignRightTxtBtn} alt='Save' width="25px" />
      </HStack>
      <VStack w="100%" borderTop="1px solid #000" p="20px" gap="0.1">
        <Text bg="#FCFCFC" p="40px 30px" display="flex" flexDirection="column" gap="1rem">
          <p>About me</p>
          <p>Sou formado em Análise e Desenvolvimento de Sistemas e tenho 4 anos de experiência como desenvolvedor, atuando tanto no back-end quanto no front-end, construindo aplicações robustas e escaláveis, que atendem as necessidades dos clientes.</p>
          <p>Em relação as minhas habilidades técnicas, tenho vasto conhecimento em tecnologias como <b>HTML, CSS, Javascript, Typescript, Java, React, Nest, Spring Boot, Laravel, Redux, Styled Components, Node, GraphQL, ApolloServer, Mongoose, MySQL, MongoDB, Cypress entre outras.</b> Tenho uma experiência significativa na criação e manutenção de APIs, desenvolvimento de páginas fullstack, abrangendo todas as etapas desde o CRUD até o consumo das rotas no front-end. Além disso, sou hábil em analisar e resolver problemas em colaboração com os clientes, buscando entender suas necessidades e fornecer soluções personalizadas.</p>
          <p>Procuro fazer a diferença e ajudar pessoas através do meu código. Nos últimos anos, tenho me esforçado para aplicar as melhores práticas de desenvolvimento, resultando em um código mais limpo, legível e polido.</p>
        </Text>
      </VStack>
      <HStack w="100%" borderTop="1px solid #000" p="5px">
        <Text>Page 1</Text>
        <Divider orientation='vertical' borderColor="#BDBDBD" borderWidth="1px"/>
      </HStack>
    </VStack>
  )
}

export default Me