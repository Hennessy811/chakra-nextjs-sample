import { Box, Button, Container, Flex, Heading, useColorMode } from '@chakra-ui/react';

export default function IndexPage() {
  const { toggleColorMode } = useColorMode();
  return (
    <Container maxW={'7xl'} px={[4, null, 16]}>
      <Heading>Welcome to Chakra UI</Heading>

      <Button
        colorScheme="facebook"
        onClick={() => {
          toggleColorMode();
        }}
      >
        Change theme
      </Button>
    </Container>
  );
}
