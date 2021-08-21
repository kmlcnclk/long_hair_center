import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import Image from 'next/image';
import FirstC7 from './FirstC7';
import MainC7 from './MainC7';

function C7() {
  return (
    <Flex
      justify="center"
      className="bg-gray-50"
      align="center"
      direction="column"
      py={200}
    >
      <Flex
        justify="center"
        align="center"
        direction="column"
        className="space-y-3"
      >
        <Text
          fontSize="2xl"
          color="gray.800"
          opacity="0.9"
          fontWeight="semibold"
        >
          Servis Hizmetlerimiz
        </Text>
        <Text fontSize="md" color="gray.800" opacity="0.9">
          Transferinizden konaklamanıza kadar detaylı hizmet
        </Text>
      </Flex>
      <FirstC7 />
      <MainC7 />
      <Flex mt={100} className="space-x-2">
        <Box bgColor="gray.700" w="15px" className="shadow-2xl" h="4px"></Box>
        <Box bgColor="gray.300" w="15px" className="shadow-2xl" h="4px"></Box>
        <Box bgColor="gray.300" w="15px" h="4px" className="shadow-2xl"></Box>
        <Box bgColor="gray.300" w="15px" h="4px" className="shadow-2xl"></Box>
        <Box bgColor="gray.300" w="15px" h="4px" className="shadow-2xl"></Box>
        <Box bgColor="gray.300" w="15px" h="4px" className="shadow-2xl"></Box>
      </Flex>
    </Flex>
  );
}

export default C7;
