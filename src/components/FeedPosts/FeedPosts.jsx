import {
  Box,
  Container,
  Flex,
  Skeleton,
  SkeletonCircle,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import FeedPost from "./FeedPost";

const FeedPosts = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <Box maxW={"container.sm"} py={10} px={10}>
      {isLoading &&
        [0, 1, 2, 3].map((_, idx) => {
          <VStack key={idx} gap={4} alignItems={"flex-start"} mb={10}>
            <Flex gap="2">
              <SkeletonCircle bg="teal.500" size="10"  />
              <VStack gap={2} alignItems={"flex-start"}>
                <Skeleton bg="teal.500" height="10px" w={"200px"} />
                <Skeleton bg="teal.500" height="10px" w={"200px"} />
              </VStack>
            </Flex>
            <Skeleton bg="teal.500" w={"full"}>
              <Box h={"500px"} boxShadow='lg' bg='white'>
                content wraapped
              </Box>
            </Skeleton>
            Hello
          </VStack>;
        })}

      {!isLoading && (
        <>
          <FeedPost img="/img1.png" username="John" avatar="/img1.png" />
          <FeedPost img="/img2.png" username="Jane" avatar="/img2.png" />
          <FeedPost img="/img3.png" username="Mike" avatar="/img3.png" />
          <FeedPost img="/img4.png" username="Riss" avatar="/img4.png" />
        </>
      )}
    </Box>
  );
};

export default FeedPosts;
