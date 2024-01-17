import { Box, Flex } from "@chakra-ui/react";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Outlet, useLocation } from "react-router-dom";

const Root = () => {
  const location = useLocation();
  const pathName=location.pathname;
   console.log(pathName)
  return (
    <Flex>
      {/* Sidebar on the left */}
      {pathName !== "/" ? ( 
        <Box w={{ base: "70px", md: "240px" }}>
          <Sidebar />
        </Box>
      ) : null}
      {/* Page content on the right */}
      <Box flex={1} w={{ base: "calc(100%-70px)", md: "calc(100%-240px)" }}>
         <Outlet></Outlet>
      </Box>
    </Flex>
  );
};

export default Root;
