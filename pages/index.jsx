import { Box } from '@chakra-ui/react';
import Head from 'next/head';
import C1 from '../components/C1/C1';
import C2 from '../components/C2/C2';
import C3 from '../components/C3/C3';
import C4 from '../components/C4/C4';
import C5 from '../components/C5/C5';
import C6 from '../components/C6/C6';
import C7 from '../components/C7/C7';
import C8 from '../components/C8/C8';
import C9 from '../components/C9/C9';

export default function Home() {
  return (
    <Box>
      <Head>
        <title>Long Hair Center</title>
        <meta
          name="description"
          content="Long Hair Center 'Bu alana gerekli bilgiler girilecektir.Bu alana gerekli bilgiler girilecektir.Bu alana gerekli bilgiler girilecektir.Bu alana gerekli bilgiler girilecektir.Bu alana gerekli bilgiler girilecektir. Bu alana gerekli bilgiler girilecektir.Bu alana gerekli bilgiler girilecektir.Bu alana gerekli bilgiler girilecektir.Bu alana gerekli bilgiler girilecektir.Bu alana gerekli bilgiler girilecektir.'"
        />
        <link rel="icon" href="/log.webp" />
      </Head>
      <C1 />
      <C2 />
      <C3 />
      <C4 />
      <C5 />
      <C6 />
      <C7 />
      <C8 />
      <C9 />
    </Box>
  );
}
