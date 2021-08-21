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
    'LONG HAİR HAKKINDA',
    'SAÇ EKİMİ',
    'GALERİ',
    'KILAVUZ',
    'EK TEDAVİLER',
    'MERAK EDİLENLER',
    'BLOG',
    'İLETİŞİM',
  ];

  const select1 = ['EN', 'TR'];
  const select2 = ['WHATSAPP', 'INSTAGRAM', 'FACEBOOK', 'TWITTER'];

  const [language, setLanguage] = useState('EN');
  const [sosial, setSosial] = useState('WHATSAPP');

  return (
    <Flex py={10} px={16} align="center" justify="space-between">
      <Flex align="center">
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
      <Flex align="center">
        <Flex align="center" justify="space-between" mr={1}>
          {headerList.map((item, i) => (
            <Text
              fontSize="sm"
              color="gray.50"
              className="cursor-pointer"
              opacity="0.5"
              mr={3}
              key={i}
            >
              {item}
            </Text>
          ))}
        </Flex>

        <Box
          ml={4}
          mr={10}
          h="45px"
          opacity="0.4"
          w="1px"
          bgColor="white"
        ></Box>
      </Flex>

      <Flex align="center">
        <Menu>
          <MenuButton
            as={Button}
            size="sm"
            mr={2}
            bg="#141414"
            opacity="0.7"
            borderColor="#141414"
            variant="outline"
            _hover={{ bg: '#141414' }}
            _active={{ bg: '#141414' }}
            color="white"
            rightIcon={<ChevronDownIcon />}
            className="shadow-2xl"
          >
            {language}
          </MenuButton>
          <MenuList>
            {select1.map((s, i) => (
              <MenuItem
                _hover={{ bgColor: 'gray.200' }}
                onClick={() => setLanguage(s)}
                key={i}
              >
                {s}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton
            as={Button}
            ml={2}
            size="sm"
            bg="#141414"
            opacity="0.7"
            borderColor="#141414"
            variant="outline"
            _hover={{ bg: '#141414' }}
            _active={{ bg: '#141414' }}
            color="white"
            rightIcon={<ChevronDownIcon />}
            className="shadow-2xl"
          >
            {sosial}
          </MenuButton>
          <MenuList>
            {select2.map((s, i) => (
              <MenuItem
                _hover={{ bgColor: 'gray.200' }}
                onClick={() => setSosial(s)}
                key={i}
              >
                {s}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
}

export default C1Header;
