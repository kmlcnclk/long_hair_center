import { Box, Button, Collapse, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React, { useState } from 'react';
import { RiArrowRightSLine } from 'react-icons/ri';

function C3() {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);

  const handleToggle1 = () => setShow1(!show1);
  const handleToggle2 = () => setShow2(!show2);
  const handleToggle3 = () => setShow3(!show3);

  return (
    <Flex
      py={16}
      className="bg-gray-300 bg-opacity-50"
      direction="column"
      px={24}
    >
      <Flex align="center" className=" justify-around">
        <Flex direction="column" justify="center">
          <Box
            bgColor="white"
            rounded="md"
            p={8}
            m={2}
            w="550px"
            className="shadow-xl"
          >
            <Flex align="center" justify="space-between" px={5}>
              <Text fontSize="lg" fontWeight="semibold">
                İsmail A.
              </Text>
              <Text fontSize="sm" opacity="0.6">
                19 Haziran 2021
              </Text>
            </Flex>
            <Flex mt={3} align="center">
              <Box>
                <Image
                  src="/3.png"
                  width="100px"
                  height="100px"
                  objectFit="contain"
                  alt="foto"
                />
              </Box>
              <Flex align="flex-start">
                <Box width="300px">
                  <Collapse startingHeight={25} in={show1}>
                    Saç ekimi ile yorum bu bölüme girilecektir. Saç ekimi ile
                    ilgili yorum bu bölüme girilecektir. Yorum bu bölüme
                    girilecektir.
                  </Collapse>
                </Box>

                <Button
                  size="sm"
                  onClick={handleToggle1}
                  _focus={{ ring: '0' }}
                  ml={2}
                >
                  Show {show1 ? 'Less' : 'More'}
                </Button>
              </Flex>
            </Flex>
          </Box>
          <Box
            rounded="md"
            p={8}
            m={2}
            className="bg-white shadow-xl"
            w="550px"
          >
            <Flex align="center" justify="space-between" px={5}>
              <Text fontSize="lg" fontWeight="semibold">
                İsmail A.
              </Text>
              <Text fontSize="sm" opacity="0.6">
                19 Haziran 2021
              </Text>
            </Flex>
            <Flex mt={3} align="center">
              <Box>
                <Image
                  src="/3.png"
                  width="100px"
                  height="100px"
                  objectFit="contain"
                  alt="foto"
                />
              </Box>
              <Flex align="flex-start">
                <Box width="300px">
                  <Collapse startingHeight={25} in={show2}>
                    Saç ekimi ile yorum bu bölüme girilecektir. Saç ekimi ile
                    ilgili yorum bu bölüme girilecektir. Yorum bu bölüme
                    girilecektir.
                  </Collapse>
                </Box>

                <Button
                  size="sm"
                  onClick={handleToggle2}
                  _focus={{ ring: '0' }}
                  ml={2}
                >
                  Show {show2 ? 'Less' : 'More'}
                </Button>
              </Flex>
            </Flex>
          </Box>
          <Box
            rounded="md"
            className="bg-white shadow-xl"
            p={8}
            m={2}
            w="550px"
          >
            <Flex align="center" justify="space-between" px={5}>
              <Text fontSize="lg" fontWeight="semibold">
                İsmail A.
              </Text>
              <Text fontSize="sm" opacity="0.6">
                19 Haziran 2021
              </Text>
            </Flex>
            <Flex mt={3} align="center">
              <Box>
                <Image
                  src="/3.png"
                  width="100px"
                  height="100px"
                  objectFit="contain"
                  alt="foto"
                />
              </Box>
              <Flex align="flex-start">
                <Box width="300px">
                  <Collapse startingHeight={25} in={show3}>
                    Saç ekimi ile yorum bu bölüme girilecektir. Saç ekimi ile
                    ilgili yorum bu bölüme girilecektir. Yorum bu bölüme
                    girilecektir.
                  </Collapse>
                </Box>

                <Button
                  size="sm"
                  onClick={handleToggle3}
                  _focus={{ ring: '0' }}
                  ml={2}
                >
                  Show {show3 ? 'Less' : 'More'}
                </Button>
              </Flex>
            </Flex>
          </Box>
        </Flex>
        <Box>
          <Box>
            <Text fontSize="xl" color="gray.800" opacity="0.9">
              Saç ekimi yaptıran müşterilerimizin
            </Text>
            <Text
              fontSize="2xl"
              fontWeight="semibold"
              color="gray.800"
              opacity="0.9"
            >
              Görüşlerini Okuyun!
            </Text>
          </Box>

          <Flex className="space-x-4 mt-5" justify="left" align="center">
            <Button
              leftIcon={<RiArrowRightSLine />}
              colorScheme="blue"
              bgColor="blue.400"
              rounded="3xl"
              _focus={{ ring: '0' }}
              size="sm"
              w="160px"
              p={5}
              className="shadow-2xl"
            >
              Sizde Yorum Yapın
            </Button>
            <Button
              leftIcon={<RiArrowRightSLine />}
              colorScheme="whiteAlpha"
              bgColor="white"
              w="160px"
              color="gray.700"
              rounded="3xl"
              _focus={{ ring: '0' }}
              size="sm"
              p={5}
              className="shadow-2xl"
            >
              Tümünü Okuyun
            </Button>
          </Flex>
          <Flex className="space-x-7 mt-5" justify="left" align="center">
            <Box>
              <Image
                src="/googleReviews.png"
                alt="Google Reviews 5.0"
                width="180px"
                height="100px"
                objectFit="contain"
              />
            </Box>
            <Box>
              <Image
                src="/trustpilot.png"
                alt="Trustpilot"
                width="200px"
                height="100px"
                objectFit="contain"
              />
            </Box>
          </Flex>
        </Box>
      </Flex>{' '}
      <Flex
        justify="center"
        align="center"
        className="space-y-14"
        direction="column"
        mt={20}
      >
        <Flex
          w="1000px"
          h="200px"
          bgAttachment="scroll"
          bgSize="cover"
          bgRepeat="no-repeat"
          rounded="3xl"
          className="shadow-2xl"
          bgImage="https://64.media.tumblr.com/78d25b5822aef6a7a53609153f6176e5/tumblr_inline_ozipabvf0W1vr0qa6_640.jpg"
        >
          <Flex
            w="full"
            h="full"
            minH="100%"
            rounded="3xl"
            minW="100%"
            justify="center"
            align="center"
            direction="column"
            className="bg-blue-700 bg-opacity-70 relative"
            color="white"
          >
            <Text fontSize="2xl" fontWeight="semibold">
              Saç Analizi
            </Text>
            <Text fontSize="xl">
              Saç analizi için cinsyet seçerek başlayınız.
            </Text>
            <Flex
              justify="center"
              className="absolute cursor-pointer -bottom-10 left-48"
              w="100px"
              h="100px"
              direction="column"
              align="center"
            >
              <Image
                src="/manIcon.png"
                alt="Man Icon"
                width="80px"
                className="rounded-full"
                height="80px"
                objectFit="contain"
              />
              <Text fontSize="md" mt={1} fontWeight="semibold" color="gray.900">
                Erkek
              </Text>
            </Flex>
            <Flex
              justify="center"
              className="absolute cursor-pointer -bottom-10 right-48"
              w="100px"
              h="100px"
              direction="column"
              align="center"
            >
              <Image
                src="/womanIcon.png"
                alt="Woman Icon"
                width="80px"
                className="rounded-full"
                height="80px"
                objectFit="contain"
              />
              <Text fontSize="md" mt={1} fontWeight="semibold" color="gray.900">
                Kadın
              </Text>
            </Flex>
          </Flex>
        </Flex>

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
          Sizde Yorum Yapın
        </Button>
      </Flex>
    </Flex>
  );
}

export default C3;
