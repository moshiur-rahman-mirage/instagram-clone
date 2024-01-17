import { Box, Container, Flex, Image, VStack } from "@chakra-ui/react";
import AuthForm from "../../components/AuthForm/AuthForm";

const AuthPage = () => {
  return (
    <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>
      <Container maxW={"container.md"} padding={0}>
        <Flex justifyContent={"center"} alignItems={"center"} gap={10}>
          {/* Left Hand Sib de */}
          <Box display={{ base: "none", md: "block" }}>
            <Image src="/auth.png" h={650} alt="phone.img" />
          </Box>
          {/* Right Hand Side */}
          <VStack spacing={4} align={"streatch"}>
            <AuthForm />
            <Box textAlign={"center"}>Get The App</Box>
            <Flex gap={5} justifyContent={"center"}>
              <Image src="/playstore.png" h={10} alt="playstore.logo" />
              <Image src="/microsoft.png" h={10} alt="Microsoft.logo" />
            </Flex>
          </VStack>
        </Flex>
      </Container>
    </Flex>
  );
};

export default AuthPage;
