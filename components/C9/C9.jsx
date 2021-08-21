import { Flex, Text, Box } from '@chakra-ui/react';
import React from 'react';
import Image from 'next/image';

function C9() {
  const list1 = [
    'Firma Hkkında',
    'Misyonumuz & Vizyonumuz',
    'Yetki Belgelerimiz',
    'Kişisel Verilerin Korunması',
    'Bilgi Toplumu Hizmetleri',
  ];
  const list2 = [
    'Saç Ekimi ve Bakımı',
    'Kadınlarda Saç Ekimi',
    'Sakal Ekimi',
    'Diğer alt menü başlığı',
    'Diğer alt menü başlığı',
    'Diğer alt menü başlığı',
  ];
  const list3 = [
    'Yasal Mevzuat',
    'Diğer alt menü başlığı',
    'Son diğer alt menü başlığı',
    'Diğer alt menü başlığı',
    'Bir diğer alt menü başlığı',
  ];
  return (
    <Flex className="relative z-10">
      <Flex
        h="auto"
        w="full"
        className="absolute -top-20 bg-gray-900 bg-opacity-80 shadow-2xl"
        p={10}
        pt={44}
        justify="space-around"
      >
        <Box>
          <Text fontSize="md" color="white" opacity="0.9" mb={8}>
            KURUMSAL
          </Text>
          {list1.map((listItem, i) => (
            <Text fontSize="xs" mt={2} color="gray.300" opacity="0.6" key={i}>
              {listItem}
            </Text>
          ))}
        </Box>
        <Box>
          <Text fontSize="md" color="white" opacity="0.9" mb={8}>
            HİZMETLERİMİZ
          </Text>
          {list2.map((listItem, i) => (
            <Text fontSize="xs" mt={2} color="gray.300" opacity="0.6" key={i}>
              {listItem}
            </Text>
          ))}
        </Box>
        <Box>
          <Text fontSize="md" color="white" opacity="0.9" mb={8}>
            SEKTÖREL BİLGİLER
          </Text>
          {list3.map((listItem, i) => (
            <Text fontSize="xs" mt={2} color="gray.300" opacity="0.6" key={i}>
              {listItem}
            </Text>
          ))}
        </Box>
        <Image
          src="/log.webp"
          alt="Long Hair Center"
          width="300px"
          className="text-white"
          height="200px"
          objectFit="contain"
        />
      </Flex>
    </Flex>
  );
}

export default C9;
