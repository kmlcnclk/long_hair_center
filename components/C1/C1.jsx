import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import C1Header from './C1Header';
import C1Main from './C1Main';

function C1() {
  return (
    <Box
      bgImage="https://drhakan-106b2.kxcdn.com/wp-content/uploads/2020/06/sa%C3%A7-ekimi-sonras%C4%B1-d%C3%B6k%C3%BClme.jpg"
      minH="100%"
      minW="100%"
      bgAttachment="scroll"
      bgSize="cover"
      bgRepeat="no-repeat"
      w="full"
      h="auto"
    >
      <Box w="full" h="700px" bgColor="rgba(0, 0, 0, 0.70)">
        <C1Header />
        <C1Main />
      </Box>
    </Box>
  );
}

export default C1;
