import { Box } from '@chakra-ui/react';
import React from 'react';
import FirstC5 from './FirstC5';
import LastC5 from './LastC5';
import MidC5 from './MidC5';

function C5() {
  return (
    <Box>
      <FirstC5 />
      <MidC5 />
      <LastC5 />
    </Box>
  );
}

export default C5;
