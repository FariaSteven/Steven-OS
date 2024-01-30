import { HStack, VStack, Text, Link } from '@chakra-ui/react';
import Linkedin from "../assets/LinkedIn.svg";
import Github from "../assets/GitHub Icon.svg";
import Medium from "../assets/Medium Icon.svg";
// import Gmail from "../assets/Gmail Icon.svg";
import bin from "../assets/Bin.svg";
import Macintosh from "../assets/Macintosh-happy.svg";
import FileText from "../assets/File-text.svg";
import File from "../assets/File-vector.svg";
import Library from "../assets/Library.svg";
import Cow from "../assets/Cow.svg";

import CursorPointer from '../assets/pointer.svg';

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
      link: "https://www.linkedin.com/in/steven-faria-12691317a/"
    },
    {
      icon: Github,
      text: "GitHub",
      link: "https://github.com/FariaSteven"
    },
    {
      icon: Medium,
      text: "Medium",
      link: "https://medium.com/@stevenfaria.gusmao"
    },
    // {
    //   icon: Gmail,
    //   text: "Gmail",
    // },
  ]
}

const AppsContainer = ({ setOpenedApp }) => {
  return (
    <HStack
      color="#4F4F4F"
      justifyContent="space-between"
      alignItems="flex-start"
      p="20px 10px"
      h="100%"
      w="100%"
    >
      <VStack>
        {apps.leftApps.map((item, i) => (
          <VStack
            key={i}
            cursor={`url(${CursorPointer}), auto;`} 
            onClick={() => {
              setOpenedApp(item.text)

              }}>
            <img src={item.icon} alt={item.text} />
            <Text>{item.text}</Text>
          </VStack>
        ))}
      </VStack>
      <VStack h="100%" justifyContent="space-between">
        <VStack
        cursor={`url(${CursorPointer}), auto;`}
        >
          {apps.rightApps.map((item, i) => (
            <Link key={i} href={item.link} target='_blank' 
            cursor={`url(${CursorPointer}), auto;`} 
            textAlign="center">
              <img src={item.icon} alt={item.text} />
              <Text>{item.text}</Text>
            </Link>
          ))}
        </VStack>
        <VStack
        cursor={`url(${CursorPointer}), auto;`}
        >
          <img src={bin} alt="Trash" />
          <Text>Trash</Text>
        </VStack>
      </VStack> 
    </HStack>    
  )
}

export default AppsContainer