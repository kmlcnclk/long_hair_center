import { Box, Button, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { RiArrowRightSLine } from 'react-icons/ri';
import Image from 'next/image';

function MainC7() {
  return (
    <Flex mt={200} w="full" justify="center" align="center">
      <Flex
        bgColor="gray.200"
        w="full"
        h="300px"
        justify="center"
        className="relative shadow-2xl"
        align="center"
      >
        <Flex
          w="70%"
          className="absolute shadow-2xl rounded-xl"
          h="400px"
          bgColor="white"
        >
          <Flex w="50%" direction="column" justify="space-around" p={10}>
            <Box>
              <Image
                src="/cr7.jpg"
                alt="Cr7"
                width="70px"
                className="rounded-full"
                height="70px"
                objectFit="contain"
              />
            </Box>
            <Text fontSize="sm" color="gray.800" opacity="0.8">
              &apos;Bu alana gerekli bilgiler girilecektir.Bu alana gerekli
              bilgiler girilecektir.Bu alana gerekli bilgiler girilecektir.Bu
              alana gerekli bilgiler girilecektir.Bu alana gerekli bilgiler
              girilecektir.&apos;
            </Text>
            <Text fontSize="x-small" color="gray.800" opacity="0.8">
              Bu alana gerekli bilgiler girilecektir.
            </Text>
            <Button
              leftIcon={<RiArrowRightSLine />}
              colorScheme="blue"
              bgColor="blue.400"
              rounded="3xl"
              _focus={{ ring: '0' }}
              size="sm"
              className="shadow-2xl"
              w="160px"
              p={5}
            >
              İletişime Geçin
            </Button>
          </Flex>
          <Flex w="50%">
            <Image
              src="/8.png"
              alt="Foto"
              width="500px"
              height="100%"
              className="rounded-r-xl shadow-2xl"
            />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default MainC7;
