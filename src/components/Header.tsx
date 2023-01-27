import React from 'react';
import { Box , Container, Heading , Text } from '@chakra-ui/react';

export default function Header() {
  return (
    <Box pb='28'  as='section' >
      <Box 
       
        display='flex ' 
        alignItems='center' 
        justifyContent="center" 
        flexDirection="column" 
        color="gray.50" 
        bg='purple.600'
        pt="90px" 
        pb="198px" 
        px="8"
        >
          <Heading fontSize={['3xl','3xl','5xl']} fontWeight="extrabold" textAlign={['left','left','center']}>Simple pricing for your business</Heading>
          <Text fontSize={['lg','lg','2xl']} fontWeight="medium" pt="4">Plans that are carefully crafted to suit your business.</Text>
      </Box>
    </Box>
  )
}
