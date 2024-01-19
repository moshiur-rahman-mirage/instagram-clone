import { Box, Flex, Text, VStack } from "@chakra-ui/react"
import SuggestedHeader from "./SuggestedHeader"
import SuggestedUser from "./SuggestedUser"

const SuggestedUsers = () => {
  return (
    <VStack py={8} gap={4}>
        <SuggestedHeader/>
        <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
            <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
                Suggested For You
            </Text>
            <Text fontSize={12} _hover={{color:"gray.400"}} fontWeight={"bold"}  cursor={"pointer"}>
                See All
            </Text>
        </Flex>
        <SuggestedUser name="Rakib" followers={200} avatar="./img1.png"/>
        <SuggestedUser name="Rakib" followers={200} avatar="./img1.png"/>
        <SuggestedUser name="Rakib" followers={200} avatar="./img1.png"/>
        
        <Box fontSize={12} color={"gray.500"} mt={5}>
            @2024 Built By Moshiur
        </Box>
    </VStack>
  )
}

export default SuggestedUsers