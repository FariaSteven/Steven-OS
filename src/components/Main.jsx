import { VStack } from '@chakra-ui/react';
import AppsContainer from './AppsContainer';
import Header from './Header';

import CursorDefault from '../assets/default.svg';

const Main = () => {
  return (
    <VStack 
    h="100vh" 
    bg="#BDBDBD" 
    cursor={`url(${CursorDefault}), default;`}
    >
      <Header/>
      <AppsContainer/>
    </VStack>
  )
}

export default Main
