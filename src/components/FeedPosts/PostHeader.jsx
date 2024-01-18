import { Avatar, Box, Flex, Text } from "@chakra-ui/react"

const PostHeader = () => {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"} my={2}>
        <Flex alignItems={"center"} gap={2}>
            <Avatar src="/img1.png" alt="user pro pick" size={"sm"}/>
            <Flex fontSize={12} fontWeight={"bold"} gap="2">
                Doe
                <Box color={"gray.500"}>
                    . 1w
                </Box>
            </Flex>
        </Flex>
        <Box
            cursor={"pointer"}
        >
            <Text
                fontSize={12}
                color={"blue.500"}
                fontWeight={"bold"}
                _hover={{
                    color:"white"
                }}
            >
            unfoloow
            </Text>
        </Box>
    </Flex>
  )
}

export default PostHeader