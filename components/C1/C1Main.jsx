import { Box, Flex, Heading, Text, Button, Input } from '@chakra-ui/react';
import React, { useState } from 'react';
import { RiArrowRightSLine } from 'react-icons/ri';

function C1Main() {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const callMeFunc = async (e) => {
    e.preventDefault();

    await setName('');
    await setPhoneNumber('');
  };
  return (
    <Flex py={10} px={16} align="center" justify="space-between" h="590px">
      <Box h="auto">
        <Heading
          size="lg"
          color="white"
          fontWeight="light"
          opacity="0.7"
          className="shadow-2xl"
        >
          Saç Ekimi Analizi
        </Heading>
        <Text
          mt={4}
          fontSize="md"
          color="white"
          opacity="0.5"
          w="250px"
          className="shadow-2xl"
        >
          Doktor ile ön görüşme notlarınızı online olarak bize bu formla
          iletebilirsiniz
        </Text>
        <Button
          leftIcon={<RiArrowRightSLine />}
          colorScheme="blue"
          mt={4}
          rounded="3xl"
          _focus={{ ring: '0' }}
          p={5}
          className="shadow-2xl"
        >
          Devamını İnceleyin
        </Button>
        <Flex className="space-x-2" mt={10} ml={2}>
          <Box bgColor="white" w="15px" h="4px" className="shadow-2xl"></Box>
          <Box bgColor="gray.700" w="15px" h="4px" className="shadow-2xl"></Box>
          <Box bgColor="gray.700" w="15px" h="4px" className="shadow-2xl"></Box>
          <Box bgColor="gray.700" w="15px" h="4px" className="shadow-2xl"></Box>
          <Box bgColor="gray.700" w="15px" h="4px" className="shadow-2xl"></Box>
          <Box bgColor="gray.700" w="15px" h="4px" className="shadow-2xl"></Box>
        </Flex>
      </Box>
      <Flex className="rounded-full bg-opacity-10 bg-gray-100 w-96 h-96 justify-center items-center shadow-2xl">
        <Flex className="rounded-full bg-opacity-20 bg-gray-400 w-80 h-80 justify-center items-center shadow-2xl">
          <Flex
            as="form"
            onSubmit={callMeFunc}
            className="shadow-2xl space-y-5 rounded-full bg-opacity-50 bg-white w-64 h-64 justify-center items-center flex-col"
          >
            <Flex>
              <Text fontSize="lg" className="shadow-2xl">
                Doktora <strong>Sorun</strong>
              </Text>
            </Flex>

            <Input
              type="text"
              variant="outline"
              value={name}
              onChange={(e) => setName(e.target.value)}
              size="xs"
              w="200px"
              bgColor="white"
              rounded="sm"
              className="shadow-2xl"
              required
              color="gray.700"
              _focus={{ ring: '0' }}
              placeholder="Adınız Soyadınız"
            />
            <Input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              variant="outline"
              color="gray.700"
              required
              size="xs"
              rounded="sm"
              className="shadow-2xl"
              w="200px"
              maxLength="11"
              bgColor="white"
              _focus={{ ring: '0' }}
              placeholder="Telefon Numaranız"
            />
            <Button
              type="submit"
              size="sm"
              colorScheme="orange"
              _focus={{ ring: '0' }}
              p={4}
              className="shadow-2xl"
            >
              <Text fontSize="xs">BENİ ARAYIN</Text>
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default C1Main;
