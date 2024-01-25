import { Text, VStack } from '@chakra-ui/react';
import AppsContainer from './AppsContainer';
import Header from './Header';

import CursorDefault from '../assets/default.svg';
import OpenedAppsContainer from './OpenedAppsContainer';
import Projects from './Projects';
import { useState } from 'react';
import Me from './Me';
import Curriculum from './Curriculum';

const Main = () => {
  const [openedApp, setOpenedApp] = useState("");

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

  return (
    <VStack
      h="100vh"
      bg="#BDBDBD"
      cursor={`url(${CursorDefault}), default;`}
      fontFamily="ChicagoFLFRegular"
      color="#4F4F4F"
    >
      <Header />
      <AppsContainer setOpenedApp={setOpenedApp}/>
      {openedApp !== "" && <OpenedAppsContainer title={openedApp} setOpenedApp={setOpenedApp}>
        {openApp()}
      </OpenedAppsContainer>}
    </VStack>
  )
}

export default Main
