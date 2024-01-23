import React from 'react'
import Bomb from "../assets/Bomb.svg";
import { HStack, Text } from '@chakra-ui/react';

const Header = () => {
  return (
    <HStack
      w="100%"
      bg="#FFF"
      fontFamily="ChicagoFLFRegular"
      color="#4F4F4F" 
      p="0px 10px"
      fontSize="12px"
      alignItems="center"
    >
      <img src={Bomb} width="25px" alt='Bomb icon' />
      <Text>File</Text>
      <Text>Edit</Text>
      <Text>View</Text>
      <Text>Special</Text>
    </HStack>
  )
}

export default Header