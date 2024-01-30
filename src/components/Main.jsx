import { VStack } from '@chakra-ui/react';
import AppsContainer from './AppsContainer';
import Header from './Header';

import CursorDefault from '../assets/default.svg';
import OpenedAppsContainer from './OpenedAppsContainer';
import Projects from './Projects';
import { useEffect, useState } from 'react';
import Me from './Me';
import Curriculum from './Curriculum';
import LoadingScreen from './LoadingScreen';

const Main = () => {
  const [openedApp, setOpenedApp] = useState("");
  const [done, setDone] = useState(false);

  const openApp = () => {
    switch (openedApp) {
      case 'Projects':
        return <Projects />;
      case 'Me':
        return <Me />;
      case 'Curriculum':
        return <Curriculum />;
      default:
        return '';
    }
  }

  setTimeout(() => {
    setDone(true)
  }, 5000);
  
  return (
    <VStack
      h="100vh"
      bg="#BDBDBD"
      cursor={`url(${CursorDefault}), default;`}
      fontFamily="'Chicago', sans-serif"
      color="#4F4F4F"
    >
      <Header />
      {
        done === false ? <LoadingScreen/> :
        <>
          <AppsContainer setOpenedApp={setOpenedApp} />
          {openedApp !== "" && <OpenedAppsContainer title={openedApp} setOpenedApp={setOpenedApp}>
            {openApp()}
          </OpenedAppsContainer>}
        </>
      }
    </VStack>
  )
}

export default Main
