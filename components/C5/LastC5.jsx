import { Button, Flex } from '@chakra-ui/react';
import React from 'react';
import { RiArrowRightSLine } from 'react-icons/ri';

function LastC5() {
  return (
    <Flex
      justify="center"
      align="center"
      className="space-x-7 bg-gray-50"
      pb={24}
    >
      <Button
        leftIcon={<RiArrowRightSLine />}
        colorScheme="orange"
        rounded="3xl"
        _focus={{ ring: '0' }}
        size="sm"
        w="160px"
        p={5}
        className="shadow-2xl"
      >
        Detaylı İnceleyin
      </Button>
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
  );
}

export default LastC5;
