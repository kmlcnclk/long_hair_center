import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import Image from 'next/image';

function FirstC5() {
  return (
    <Flex pt={2} px={16} className="bg-blue-400" justify="center">
      <Flex
        justify="center"
        align="center"
        direction="column"
        mx={2}
        p={2}
        className="bg-gray-50 rounded-t-lg cursor-pointer"
      >
        <Image
          src="/kıl.png"
          width="150px"
          height="100px"
          alt="Kıl"
          objectFit="contain"
        />
        <Text fontSize="sm" color="gray.800" opacity="0.9">
          Saç Ekimi
        </Text>
      </Flex>
      <Flex
        justify="center"
        align="center"
        direction="column"
        className="bg-blue-300 rounded-t-lg shadow-sm cursor-pointer"
        color="white"
        mx={2}
        p={2}
      >
        <Image
          src="/beard.png"
          width="150px"
          height="100px"
          alt="Kıl"
          objectFit="contain"
        />
        <Text fontSize="sm" color="gray.100">
          Sakal Ekimi
        </Text>
      </Flex>
      <Flex
        justify="center"
        align="center"
        mx={2}
        direction="column"
        className="bg-blue-300 rounded-t-lg shadow-sm cursor-pointer"
        p={2}
      >
        <Image
          src="/tuy.png"
          width="150px"
          height="100px"
          alt="Kıl"
          objectFit="contain"
        />
        <Text fontSize="sm" color="gray.100">
          Soft FUE
        </Text>
      </Flex>
      <Flex
        justify="center"
        align="center"
        direction="column"
        mx={2}
        className="bg-blue-300 rounded-t-lg shadow-sm cursor-pointer"
        p={2}
      >
        <Image
          src="/iğne.png"
          width="150px"
          height="100px"
          alt="Kıl"
          objectFit="contain"
        />
        <Text fontSize="sm" color="gray.100">
          DHI Saç Ekimi
        </Text>
      </Flex>
      <Flex
        justify="center"
        align="center"
        direction="column"
        mx={2}
        className="bg-blue-300 rounded-t-lg shadow-sm cursor-pointer"
        p={2}
      >
        <Image
          src="/pen.png"
          width="150px"
          height="100px"
          alt="Kıl"
          objectFit="contain"
        />
        <Text fontSize="sm" color="gray.100">
          Safir FUE
        </Text>
      </Flex>
      <Flex
        justify="center"
        align="center"
        direction="column"
        mx={2}
        className="bg-blue-300 rounded-t-lg shadow-sm cursor-pointer"
        p={2}
      >
        <Image
          src="/hair.png"
          width="150px"
          height="100px"
          alt="Kıl"
          objectFit="contain"
        />
        <Text fontSize="sm" color="gray.100">
          Kadınlara Saç Ekimi
        </Text>
      </Flex>
    </Flex>
  );
}

export default FirstC5;
