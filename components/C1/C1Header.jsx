import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react';
import Image from 'next/image';
import React, { useState } from 'react';

function C1Header() {
  const headerList = [
    'Long Hair Hakkında',
    'Saç Ekimi',
    'Galeri',
    'Kılavuz',
    'Ek Tedaviler',
    'Merak Edilenler',
    'Blog',
    'İleişim',
  ];

  const select1 = ['EN', 'TR'];
  const select2 = ['WHATSAPP', 'INSTAGRAM', 'FACEBOOK', 'TWITTER'];

  const [language, setLanguage] = useState('EN');
  const [sosial, setSosial] = useState('WHATSAPP');

  return (
    <Flex py={10} px={16} align="center" justify="space-between">
      <Flex align="center" w="20%">
        <Image
          src="/log.webp"
          alt="Long Hair Logo"
          width="170px"
          height="70px"
          objectFit="contain"
        />
        <Box
          ml={10}
          mr={7}
          h="45px"
          opacity="0.4"
          w="1px"
          bgColor="white"
        ></Box>
      </Flex>
      <Flex align="center" w="57%">
        <Flex align="center" w="full" justify="space-between">
          {headerList.map((item, i) => (
            <Text
              fontSize="sm"
              color="gray.50"
              className="cursor-pointer"
              opacity="0.5"
              // mr={6}
              key={i}
            >
              {item}
            </Text>
          ))}
        </Flex>
      </Flex>
      <Flex align="center" w="23%">
        <Flex
          mr={10}
          ml={7}
          h="45px"
          opacity="0.4"
          w="1px"
          bgColor="white"
        ></Flex>

        <Flex justify="space-between" w="full">
          <Menu>
            <MenuButton
              as={Button}
              size="sm"
              bg="#141414"
              opacity="0.7"
              borderColor="#141414"
              variant="outline"
              _hover={{ bg: '#141414' }}
              _active={{ bg: '#141414' }}
              _focus={{ ring: '0' }}
              color="white"
              rightIcon={<ChevronDownIcon />}
              className="shadow-2xl"
            >
              {language}
            </MenuButton>
            <MenuList bgColor="#141414" borderColor="#141414">
              {select1.map((s, i) => (
                <MenuItem
                  _hover={{ bgColor: 'gray.800' }}
                  _focus={{ bgColor: 'gray.800' }}
                  onClick={() => setLanguage(s)}
                  color="white"
                  opacity="0.7"
                  key={i}
                  fontSize="xs"
                >
                  {s}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton
              as={Button}
              size="sm"
              bg="#141414"
              opacity="0.7"
              borderColor="#141414"
              variant="outline"
              _hover={{ bg: '#141414' }}
              _active={{ bg: '#141414' }}
              _focus={{ ring: '0' }}
              color="white"
              rightIcon={<ChevronDownIcon />}
              className="shadow-2xl"
            >
              {sosial}
            </MenuButton>
            <MenuList bgColor="#141414" borderColor="#141414">
              {select2.map((s, i) => (
                <MenuItem
                  _hover={{ bgColor: 'gray.800' }}
                  _focus={{ bgColor: 'gray.800' }}
                  onClick={() => setSosial(s)}
                  fontSize="xs"
                  color="white"
                  opacity="0.7"
                  key={i}
                >
                  {s}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default C1Header;
