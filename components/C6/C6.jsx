import { Box, Button, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import Image from 'next/image';
import { RiArrowRightSLine } from 'react-icons/ri';

function C6() {
  return (
    <Flex className="bg-gray-50 w-full" py={10}>
      <Box className="w-auto">
        <Image
          src="/i.png"
          width="635px"
          height={'450px'}
          alt="i"
          objectFit="contain"
        />
      </Box>

      <Flex className="w-4/6 relative">
        <Flex className="bg-white w-full absolute shadow-2xl -bottom-32 p-12 right-0 space-x-4">
          <Flex direction="column">
            <Box mb="1px" w="40px" h="40px">
              <Image
                src="/facebook.png"
                alt="Facebook"
                className="shadow-2xl"
                width="40px"
                height="40px"
                objectFit="contain"
              />
            </Box>
            <Box mb="1px" w="40px" h="40px">
              <Image
                src="/twitter.png"
                alt="Twitter"
                width="40px"
                className="shadow-2xl"
                ß
                height="40px"
                objectFit="contain"
              />
            </Box>
            <Box mb="1px" w="40px" h="40px">
              <Image
                src="/instagram.png"
                alt="Instagram"
                width="40px"
                className="shadow-2xl"
                height="40px"
                objectFit="contain"
              />
            </Box>
            <Box>
              <Image
                src="/linkedin.png"
                alt="Linkedin"
                width="40px"
                className="shadow-2xl"
                height="40px"
                objectFit="contain"
              />
            </Box>
          </Flex>
          <Box className="space-y-5">
            <Text
              fontSize="lg"
              color="gray.800"
              fontWeight="semibold"
              opacity="0.9"
            >
              LONG HAIR CENTER ISTANBUL
            </Text>
            <Text fontSize="sm" color="gray.800" opacity="0.8">
              Although our aim is to provide all the best possible services to
              the patients with our whole attention and consideration, we do not
              accept more than 1 surgery for the some daytime. In rare cases,
              this number increases to a maximum of 2 surgeries if the second
              patient&lsquo;s baldness requires less than 2000 hair grafts. This
              work ethic allows us to leave a unique remark in the Turkish hair
              transplant sector.
            </Text>
            <Text fontSize="sm" color="gray.800" opacity="0.8">
              Hair transplant expert Ahmet Yildirim, under his esteemed
              coordinatorship &lsquo;Long Hair Center&apos; a Turkish origin
              company serves in the field of hair transplantation and esthetics.
            </Text>
            <Text fontSize="sm" color="gray.800" opacity="0.8">
              &apos;Long Hair Center&apos; has been operating hair
              transplantation and plastic surgery by the expert doctor and with
              the vastly experienced team for many years in Turkey. For the last
              10 years, in this Field, our center successfully corried out more
              than 2000 hair transplant surgeries for patients coming from all
              around the world (more than 25 countries). Guests/patients are
              cared as an individual by the consultation process. Long Hair
              Center is a leading hair transplant clinic in Istanbul, Turkey
              that assuredly claims to provide an undetectable result.
            </Text>
            <Button
              leftIcon={<RiArrowRightSLine />}
              colorScheme="orange"
              rounded="3xl"
              _focus={{ ring: '0' }}
              className="shadow-2xl"
              size="sm"
              w="160px"
              p={5}
            >
              Detaylı İnceleyin
            </Button>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default C6;
