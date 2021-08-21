import { Box, Button, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import Image from 'next/image';
import { RiArrowRightSLine } from 'react-icons/ri';

function C4() {
  return (
    <Flex bgColor="white" justify="space-around" py={24} px={32}>
      <Box className="space-y-6">
        <Flex>
          <Flex className="relative shadow-2xl" mr={3} justify="center">
            <Image
              src="/beforeAfter.png"
              alt="Before After Image"
              width="220px"
              height="150px"
              objectFit="contain"
            />
            <Flex
              className="absolute bottom-0 bg-gray-800 bg-opacity-70"
              h="20px"
              w="220px"
              align="center"
              justify="space-around"
              color="white"
            >
              <Text fontSize="xs" opacity="0.6">
                ÖNCESİ
              </Text>
              <Text fontSize="xs" opacity="0.6">
                SONRASI
              </Text>
            </Flex>
          </Flex>
          <Flex className="relative shadow-2xl" ml={3} justify="center">
            <Image
              src="/beforeAfter.png"
              alt="Before After Image"
              width="220px"
              height="150px"
              objectFit="contain"
            />
            <Flex
              className="absolute bottom-0 bg-gray-800 bg-opacity-70"
              h="20px"
              w="220px"
              justify="space-around"
              color="white"
              align="center"
            >
              <Text fontSize="xs" opacity="0.6">
                ÖNCESİ
              </Text>
              <Text fontSize="xs" opacity="0.6">
                SONRASI
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex>
          <Flex className="relative shadow-2xl" mr={3} justify="center">
            <Image
              src="/beforeAfter.png"
              alt="Before After Image"
              width="220px"
              height="150px"
              objectFit="contain"
            />
            <Flex
              className="absolute bottom-0 bg-gray-800 bg-opacity-70"
              h="20px"
              align="center"
              w="220px"
              justify="space-around"
              color="white"
            >
              <Text fontSize="xs" opacity="0.6">
                ÖNCESİ
              </Text>
              <Text fontSize="xs" opacity="0.6">
                SONRASI
              </Text>
            </Flex>
          </Flex>
          <Flex className="relative shadow-2xl" ml={3} justify="center">
            <Image
              src="/beforeAfter.png"
              alt="Before After Image"
              width="220px"
              height="150px"
              objectFit="contain"
            />
            <Flex
              className="absolute bottom-0 bg-gray-800 bg-opacity-70"
              h="20px"
              align="center"
              w="220px"
              justify="space-around"
              color="white"
            >
              <Text fontSize="xs" opacity="0.6">
                ÖNCESİ
              </Text>
              <Text fontSize="xs" opacity="0.6">
                SONRASI
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Box>

      <Box>
        <Text fontSize="xl" color="gray.800" opacity="0.8" w="350px">
          Türkiye&apos;de saç ekimi: hastalarımızdan{' '}
          <strong>öncesi ve sonrası fotoğrafları</strong>
        </Text>
        <Text
          fontSize="sm"
          w="400px"
          color="gray.800"
          opacity="0.8"
          className="mt-3"
        >
          Sloganımız: &quot;Hayalleri Gerçekleştiriyoruz!&quot;. Bu nedenle
          hastalarımıza mümkün olan en iyi deneyimi ve sonuçları sunmamız bizim
          için önemlidir.
        </Text>
        <Text
          fontSize="sm"
          w="400px"
          color="gray.800"
          opacity="0.8"
          className="mt-3"
        >
          En modern yöntem ve enstrümanların yanı sıra ekibin tecrübesi ve
          uzmanlığı da doğal olarak hizmetlerimizde büyük rol oynamaktadır.
          Gerçekleştirdiğimiz başarılı 35.000+ saç ekimine yıllar içinde
          bakmaktan gurur duyuyoruz. Bu, 35.000&apos;den fazla hastanın
          Elithair&apos;e olan güvenini yeniden kazandığı anlamına geliyor!
        </Text>
        <Text
          fontSize="sm"
          w="400px"
          color="gray.800"
          opacity="0.8"
          className="mt-3"
        >
          Öncesi ve sonrası fotoğraflarxımız, bir saç ekimi prosedürünün
          hastalarımız için yarattığı dramatik değişimi gösteriyor.
        </Text>
        <Button
          leftIcon={<RiArrowRightSLine />}
          colorScheme="blue"
          bgColor="blue.400"
          rounded="3xl"
          _focus={{ ring: '0' }}
          size="sm"
          w="160px"
          p={5}
          className="shadow-2xl mt-8"
        >
          İletişime Geçin
        </Button>
      </Box>
    </Flex>
  );
}

export default C4;
