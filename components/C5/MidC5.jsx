import { Flex, Text } from '@chakra-ui/react';
import React from 'react';

function MidC5() {
  return (
    <Flex
      justify="center"
      align="left"
      px={40}
      py={24}
      direction="column"
      className="space-y-5 bg-gray-50"
    >
      <Text fontSize="sm" color="gray.800" opacity="0.8">
        Saç ekimi, &lsquo;saç dökülmesi kalıcı çözümü&lsquo; olarak ifade
        edilebilir. Saç ekimi operasyonu ise, hastane ortamında yapılan mikro
        cerrahi bir operasyon olarak tanımlanabilir ve mikro cerrahi operasyon
        ifadesi ile anlatılmak istenen, saç ekiminde normal bir ameliyattan çok
        daha az müdahalelerle saç nakli işlemi gerçekleştirilmesidir.
      </Text>
      <Text fontSize="sm" color="gray.800" opacity="0.8">
        Saç ekim operasyonu, tıbbi olarak erkek tipi saç dökülmesi olarak
        bilinen androgenetik alopesi yaşayan kişiler için etkili ve kalıcı bir
        çözümdür ama bunun dışında, yara izleri olanlar ya da çeşitli saç
        hastalıkları ile saç kaybına uğrayan kişiler de bu operasyonu rahatlıkla
        yaptırabilir.
      </Text>
      <Text fontSize="lg" color="gray.800" opacity="0.8">
        FUE Saç Ekimi Operasyonu
      </Text>
      <Text fontSize="sm" color="gray.800" opacity="0.8">
        Saç ekiminin gelişimi çok eskilere dayansa da dünyada saç ekimi
        1990&lsquo;lı yılların ortalarında günümüzdeki anlamıyla kullanılmaya
        başlanmıştır. 1990&lsquo;lı yıllarda FUT yöntemi ile yapılan saç ekimi
        2000&lsquo;li yılların başlarında geliştiren ve 2005 yılından sonra
        kullanılmaya başlayan FUE yöntemine yerini bırakmıştır...
      </Text>
    </Flex>
  );
}

export default MidC5;
