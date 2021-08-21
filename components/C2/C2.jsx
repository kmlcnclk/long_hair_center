import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import Image from 'next/image';

function C2() {
  return (
    <Flex bgColor="white" py={24} align="center" px={16}>
      <Image
        src="/2.png"
        alt="foto"
        width="400px"
        height="400px"
        objectFit="contain"
      />
      <Box
        h="1px"
        w="300px"
        bgColor="gray.500"
        mx={2}
        className="opacity-50"
      ></Box>
      <Box className="space-y-3">
        <Heading size="lg">FUE</Heading>
        <Heading fontWeight="light" size="lg" color="gray.500" opacity="0.6">
          Hair Transplant Process
        </Heading>
        <Text fontSize="md" w="450px" color="gray.500" opacity="0.6">
          The FUE process is an advanced next-generation hair transplant
          micro-surgery. Click on the steps to get a simplified overview. For
          more details particular to your case, please consult with our doctor.
        </Text>
      </Box>
    </Flex>
  );
}

export default C2;
