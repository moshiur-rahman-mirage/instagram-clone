import { Avatar, Box, Flex, Link, Tooltip } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { CreatePostLogo, InstagramLogo, InstagramMobileLogo, NotificationsLogo, SearchLogo } from '../../assets/constents'
import {AiFillHome} from "react-icons/ai"
import { BiLogOut } from "react-icons/bi";

const Sidebar = () => {
    const sidebarItems=[
        {
            icon:<AiFillHome size={25} bg={"white.200"}/>,
            text:"Home",
            link:"/home"
        },
        {
            icon:<SearchLogo/> ,
            text:"Search",
           
        },
        {
            icon:<NotificationsLogo/>,
            text:"Notification",
           
        },
        {
            icon:<CreatePostLogo/>,
            text:"Create",
           
        },
        {
            icon:<Avatar size={"sm"} name="Burak Ork" src="/profilepic.png"/>,
            text:"Profile",
            link:"/asaprogrammer"
        },

    ]
  return (
    <Box 
    height={"100vh"} 
    borderRight={"1px solid"} 
    borderColor={"whiteAlpha.300"}
     py={8} position={"sticky"} 
     left={0}
     px={{base:2,md:4}}
     top={0} >
        <Flex direction={"column"} gap={10} w="full" height={"full"}>
            <Link to={"/home"} as={RouterLink} pl={2} display={{base:"none",md:"block"}}
            cursor="pointer"
            >
            <InstagramLogo/>
            </Link>
            <Link to={"/home"} as={RouterLink} pl={4} display={{base:"block",md:"none"}}
            cursor="pointer"
            _hover={{
                bg:"whiteAlpha.200"
            }}
            w={{base:10}}
            >
            <InstagramMobileLogo/>
            </Link>
            <Flex direction={"column"} gap={5} cursor={"pointer"}>
              {sidebarItems.map((item,index)=>{
                return(
                   
                        <Tooltip
                        key={index}
                        hasArrow 
                        label={item.text}
                        placement='right'
                        ml={1}
                        openDelay={1000}
                        display={{base:"block",md:"none"}}
                    >
                        <Link 
                            display={"flex"}
                            to={item.link || null}
                            as={RouterLink}
                            alignItems={"center"}
                            gap={4}
                            borderRadius={6}
                            _hover={{bg:"whiteAlpha.400"}}
                            p={2}
                            w={{base:10,md:"full"}}
                            justifyContent={{base:"center",md:"flex-start"}}
                        >
                            {item.icon}
                            {console.log(item.icon)}
                            <Box display={{base:"none",md:"block"}}>
                                {item.text}
                            </Box>
                        </Link>
                    </Tooltip>
                    )
                
              })}
            </Flex>
              <Tooltip
                        label="Logout"
                        placement='right'
                        ml={1}
                        openDelay={1000}
                        display={{base:'block',md:'none'}}
                    >
                        <Link 
                            display={"flex"}
                            to={"/"}
                            as={RouterLink}
                            alignItems={"center"}
                            gap={4}
                            borderRadius={6}
                            _hover={{bg:"whiteAlpha.400"}}
                            p={2}
                            mt={"auto"}
                            w={{base:10,md:"full"}}
                            justifyContent={{base:"center",md:"flex-start"}}
                        >
                            <BiLogOut size={25}/>
                            <Box display={{base:"none",md:"block"}}>
                                Logout
                            </Box>
                        </Link>
                    </Tooltip>
        </Flex>
    </Box>
  )
}

export default Sidebar