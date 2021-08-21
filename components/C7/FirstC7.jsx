import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import Image from 'next/image';

function FirstC7() {
  return (
    <Flex w="full" mt={32} align="center">
      <Box w="150px" h="2px" bgColor="blue.400"></Box>
      <Box
        rounded="full"
        p={3}
        borderTop="solid 3px"
        borderTopColor="blue.400"
        className="relative"
      >
        <Box bgColor="blue.400" rounded="full" p={8} className="shadow-2xl">
          <Image
            src="/phone.png"
            width="70px"
            height="70px"
            alt="Telefon"
            objectFit="contain"
          />
        </Box>
        <Box
          w="3px"
          h="40px"
          bgColor="blue.400"
          className="absolute  -bottom-4"
          left="72px"
        ></Box>
        <Box>
          <Flex
            className="absolute -bottom-7 shadow-2xl"
            left="62px"
            rounded="full"
            bgColor="gray.500"
            justify="center"
            align="center"
            w="23px"
            h="23px"
          >
            <Text fontSize="xs" color="white">
              1
            </Text>
          </Flex>
          <Text
            fontSize="xs"
            color="gray.700"
            opacity="0.7"
            className="absolute -bottom-14"
            left="47px"
            fontWeight="semibold"
          >
            Bize Ulaşın
          </Text>
        </Box>
      </Box>
      <Box w="100px" h="2px" bgColor="blue.400"></Box>
      <Box
        rounded="full"
        p={3}
        borderBottom="solid 3px"
        borderBottomColor="blue.400"
        className="relative"
      >
        <Box bgColor="blue.400" rounded="full" p={8} className="shadow-2xl ">
          <Image
            src="/otel.png"
            width="70px"
            height="70px"
            alt="Telefon"
            objectFit="contain"
          />
        </Box>
        <Box
          w="3px"
          h="40px"
          bgColor="blue.400"
          className="absolute  -bottom-4"
          left="72px"
        ></Box>
        <Box>
          <Flex
            className="absolute -bottom-8 shadow-2xl"
            left="62px"
            rounded="full"
            bgColor="gray.500"
            justify="center"
            align="center"
            w="23px"
            h="23px"
          >
            <Text fontSize="xs" color="white">
              2
            </Text>
          </Flex>
          <Text
            fontSize="xs"
            color="gray.700"
            opacity="0.7"
            className="absolute -bottom-14"
            left="62px"
            fontWeight="semibold"
          >
            Otel
          </Text>
        </Box>
      </Box>
      <Box w="100px" h="2px" bgColor="blue.400"></Box>
      <Box
        rounded="full"
        p={3}
        borderTop="solid 3px"
        borderTopColor="blue.400"
        className="relative"
      >
        <Box bgColor="blue.400" rounded="full" p={8} className="shadow-2xl">
          <Image
            src="/car.png"
            width="70px"
            height="70px"
            alt="Telefon"
            objectFit="contain"
          />
        </Box>
        <Box
          w="3px"
          h="40px"
          bgColor="blue.400"
          className="absolute  -bottom-4"
          left="72px"
        ></Box>
        <Box>
          <Flex
            className="absolute -bottom-7 shadow-2xl"
            left="62px"
            rounded="full"
            bgColor="gray.500"
            justify="center"
            align="center"
            w="23px"
            h="23px"
          >
            <Text fontSize="xs" color="white">
              3
            </Text>
          </Flex>
          <Text
            fontSize="xs"
            color="gray.700"
            opacity="0.7"
            className="absolute -bottom-14"
            left="54px"
            fontWeight="semibold"
          >
            Transfer
          </Text>
        </Box>
      </Box>
      <Box w="100px" h="2px" bgColor="blue.400"></Box>
      <Box
        rounded="full"
        p={3}
        borderBottom="solid 3px"
        borderBottomColor="blue.400"
        className="relative"
      >
        <Box bgColor="blue.400" rounded="full" p={8} className="shadow-2xl">
          <Image
            src="/hospital.png"
            width="70px"
            height="70px"
            alt="Telefon"
            objectFit="contain"
          />
        </Box>
        <Box
          w="3px"
          h="40px"
          bgColor="blue.400"
          className="absolute  -bottom-4"
          left="72px"
        ></Box>
        <Box>
          <Flex
            className="absolute -bottom-8 shadow-2xl"
            left="62px"
            rounded="full"
            bgColor="gray.500"
            justify="center"
            align="center"
            w="23px"
            h="23px"
          >
            <Text fontSize="xs" color="white">
              4
            </Text>
          </Flex>
          <Text
            fontSize="xs"
            color="gray.700"
            opacity="0.7"
            className="absolute -bottom-14"
            left="54px"
            fontWeight="semibold"
          >
            Hastane
          </Text>
        </Box>
      </Box>{' '}
      <Box w="100px" h="2px" bgColor="blue.400"></Box>
      <Box rounded="full" className="relative">
        <Box bgColor="gray.600" rounded="full" p={8} className="shadow-2xl">
          <Image
            src="/world.png"
            width="70px"
            height="70px"
            alt="Telefon"
            objectFit="contain"
          />
        </Box>
        <Box
          w="3px"
          h="40px"
          bgColor="gray.600"
          className="absolute -bottom-7"
          left="60px"
        ></Box>
        <Box>
          <Flex
            className="absolute -bottom-10 shadow-2xl"
            left="51px"
            rounded="full"
            bgColor="gray.500"
            justify="center"
            align="center"
            w="23px"
            h="23px"
          >
            <Text fontSize="xs" color="white">
              5
            </Text>
          </Flex>
          <Text
            fontSize="xs"
            color="gray.700"
            opacity="0.7"
            className="absolute -bottom-16"
            left="29px"
            w="100px"
            fontWeight="semibold"
          >
            Kültür Turları
          </Text>
        </Box>
      </Box>
      <Box w="150px" h="2px" bgColor="blue.400"></Box>
    </Flex>
  );
}

export default FirstC7;
