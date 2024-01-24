import { HStack, Link, Text, VStack } from '@chakra-ui/react';
import CursorPointer from '../assets/pointer.svg';

const projectData = [
  {
    size: "29k",
    name: "Valorant Central",
    kind: "Frontend",
    lastModified: "Sun, Dec 11, 2023",
    link: "https://valorant-central.vercel.app/"
  },
  {
    size: "15k",
    name: "ReactGPT",
    kind: "Frontend",
    lastModified: "Sun, Dec 11, 2023",
    link: "https://reactgpt.vercel.app/"
  },
]

const Projects = () => {
  return (
    <VStack w="100%" bg="#E5E4E3" alignItems="baseline" gap="0.1rem">
      <HStack w="100%" borderBottom="1px solid #000" p="0px 5px" gridTemplateColumns={["1fr 1fr 1fr 1fr"]} gap="0">
        <Text w="50%">Size</Text>
        <Text w="100%">Name</Text>
        <Text w="100%">Kind</Text>
        <Text w="100%">Last Modified</Text>
      </HStack>
      <VStack w="100%" borderTop="1px solid #000" p="0px 5px" gap="0.1">
        {projectData?.map((item) => (
          <Link
            href={item.link}
            target='_blank'
            cursor={`url(${CursorPointer}), auto;`}
            w="100%"
            display="grid"
            gridTemplateColumns={["0.5fr 1fr 1fr 1fr"]}
            gap="0"
          >
            <Text w="100%">{item.size}</Text>
            <Text w="100%">{item.name}</Text>
            <Text w="100%">{item.kind}</Text>
            <Text w="100%">{item.lastModified}</Text>
          </Link>
        ))}
      </VStack>
    </VStack>
  )
}

export default Projects