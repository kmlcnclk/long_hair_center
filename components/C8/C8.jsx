import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import Image from 'next/image';

function C8() {
  return (
    <Flex justify="center" px={30} align="center" className="bg-gray-50">
      <Flex justify="center" align="center" w="17%" h="auto" mx="auto">
        <Flex
          direction="column"
          justify="center"
          align="center"
          bgColor="white"
          w="250px"
          h="250px"
          p={7}
          className="shadow-2xl z-20"
        >
          <Text fontSize="sm" color="orange.500">
            SERTİFİKALARIMIZ
          </Text>

          <Image
            src="/ISO.png"
            alt="ISO"
            width="150px"
            height="150px"
            objectFit="contain"
          />
        </Flex>
      </Flex>
      <Flex justify="center" align="center" w="17%" h="auto" mx="auto">
        <Flex
          direction="column"
          justify="center"
          align="center"
          bgColor="white"
          p={7}
          w="250px"
          h="250px"
          className="shadow-2xl z-20"
        >
          <Text fontSize="sm" color="orange.500">
            BİZİ TAKİP EDİN
          </Text>
          <Box mt={14}>
            <Flex justify="center" align="center" className="space-x-2">
              <Box>
                <Image
                  src="/face.png"
                  alt="Facebook"
                  className="shadow-2xl cursor-pointer"
                  width="40px"
                  height="40px"
                  objectFit="contain"
                />
              </Box>
              <Box>
                <Image
                  src="/ins.png"
                  alt="Instagram"
                  className="shadow-2xl cursor-pointer"
                  width="40px"
                  height="40px"
                  objectFit="contain"
                />
              </Box>
              <Box>
                <Image
                  src="/pin.png"
                  alt="Pinterest"
                  className="shadow-2xl cursor-pointer"
                  width="40px"
                  height="40px"
                  objectFit="contain"
                />
              </Box>
            </Flex>
            <Flex justify="center" align="center" className="space-x-2">
              <Box>
                <Image
                  src="/twi.jpg"
                  alt="Twitter"
                  className="shadow-2xl cursor-pointer"
                  width="40px"
                  height="40px"
                  objectFit="contain"
                />
              </Box>

              <Box>
                <Image
                  src="/you.png"
                  alt="Youtube"
                  width="40px"
                  height="40px"
                  className="shadow-2xl cursor-pointer"
                  objectFit="contain"
                />
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Flex>
      <Flex justify="center" align="center" w="17%" h="auto" mx="auto">
        <Flex
          direction="column"
          justify="center"
          align="center"
          bgColor="white"
          w="250px"
          h="250px"
          p={7}
          className="shadow-2xl z-20"
        >
          <Text fontSize="sm" color="orange.500">
            BİZE ULAŞIN
          </Text>

          <Image
            src="/pho.png"
            alt="Phone"
            width="100px"
            height="100px"
            objectFit="contain"
          />
          <Text fontSize="xl" color="gray.600" opacity="0.8">
            0532 133 37 48
          </Text>
          <Text fontSize="sm" mt={1} color="gray.600" opacity="0.8">
            info@longhaircenter.com
          </Text>
        </Flex>
      </Flex>
      <Flex justify="center" align="center" w="34%" h="auto" mx="auto">
        <Flex
          direction="column"
          justify="center"
          align="center"
          bgColor="white"
          w="5000px"
          h="250px"
          p={3}
          className="shadow-2xl z-20"
        >
          <Image
            src="/harita.jpg"
            alt="Map"
            width="500px"
            className="shadow-2xl"
            height="250px"
          />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default C8;
