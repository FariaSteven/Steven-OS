import { HStack, Img, Text, VStack } from '@chakra-ui/react';

import CloseBtn from "../assets/close-btn.svg";
import CursorPointer from '../assets/pointer.svg';

const OpenedAppsContainer = ({ children, title, setOpenedApp }) => {
  return (
    <VStack 
    w="100%" 
    h="100vh" 
    bg="transparent"
    justifyContent="center"
    position="absolute"
    >
      <VStack w={{ base: "900px", sm: "200px", md: "400px", lg: "900px" }} minH="600px" maxW={["400px", "900px"]} bg="#E5E4E3" border="1px solid #000" gap={"0.1rem"}>
        <HStack w="100%" borderBottom="1px solid #000" p="4px" justifyContent="space-between">
          <Img 
         cursor={`url(${CursorPointer}), auto;`}
          src={CloseBtn} 
          alt='Close Button'
          onClick={() => setOpenedApp("")}/>
          <Text fontSize="18px">{title}</Text>
          <div></div>
        </HStack>
        <VStack w="100%">
          {children}
        </VStack>
      </VStack>
    </VStack>

  )
}

export default OpenedAppsContainer