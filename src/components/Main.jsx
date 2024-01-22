import React from 'react';
import { HStack, VStack, Text } from '@chakra-ui/react';

import Linkedin from "../assets/LinkedIn.svg";
import Github from "../assets/GitHub Icon.svg";
import Medium from "../assets/Medium Icon.svg";
import Gmail from "../assets/Gmail Icon.svg";
import bin from "../assets/Bin.svg";
import Macintosh from "../assets/Macintosh-happy.svg";
import FileText from "../assets/File-text.svg";
import File from "../assets/File-vector.svg";
import Library from "../assets/Library.svg";
import Cow from "../assets/Cow.svg";

const apps = {
  leftApps: [ 
    {
      icon: Macintosh,
      text: "Me",
    },
    {
      icon: FileText,
      text: "Curriculum",
    },
    {
      icon: File,
      text: "Me.bmp",
    },
    {
      icon: Library,
      text: "Projects",
    },
    {
      icon: Cow,
      text: "Dogcow",
    },
  ],
  rightApps: [
    {
      icon: Linkedin,
      text: "LinkedIn",
    },
    {
      icon: Github,
      text: "GitHub",
    },
    {
      icon: Medium,
      text: "Medium",
    },
    {
      icon: Gmail,
      text: "Gmail",
    },
  ]
}

const Main = () => {
  return (
    <VStack bg="#BDBDBD">
      <HStack
        fontFamily="ChicagoFLFRegular"
        color="#4F4F4F"
        justifyContent="space-between"
        alignItems="flex-start"
        p="20px 10px"
        h="100vh"
        w="100%"
      >
        <VStack>
          {apps.leftApps.map((item) => (
            <VStack>
              <img src={item.icon} alt={item.text} />
              <Text>{item.text}</Text>
            </VStack>
          ))}
        </VStack>
        <VStack h="100%" justifyContent="space-between">
          <VStack>
            {apps.rightApps.map((item) => (
              <VStack>
                <img src={item.icon} alt={item.text} />
                <Text>{item.text}</Text>
              </VStack>
            ))}
          </VStack>
          <VStack>
            <img src={bin} alt="Trash" />
            <Text>Trash</Text>
          </VStack>
        </VStack>
      </HStack>
    </VStack>
  )
}

export default Main