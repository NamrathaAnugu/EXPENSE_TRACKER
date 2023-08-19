import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Grid,
    GridItem,
    HStack,
    InputGroup,
    InputRightElement,
    Center,
    
  } from '@chakra-ui/react';
  import React,{useState} from 'react';
import { useUserContext } from '../context/UserContext';
  
  export default function Auth() {
    const {login,register}=useUserContext();
    const [lemail,setLemail]=useState("");
    const [lpass,setLpass]=useState("");
    const [remail,setRemail]=useState("");
    const [rpass,setRpass]=useState("");
    const [name,setName]=useState("");

    return (
        <div >
            <Center>
                <Heading>
                    Expense Tracker
                </Heading>
            </Center>
        <Grid templateColumns="repeat(2,1fr)" minWidth="700px" bg="white">
            <GridItem colSpan={1} bg="white">
            <Flex
        h={'100vh'}
        align={'center'}
        bg={"#F2D8D8"}
        justify={'center'}
        color={"#5C8984"}
        >
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Sign in to your account</Heading>
            <Text fontSize={'lg'} >
              to enjoy all of our cool <Link >features</Link> ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={"#F2D8D8"}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" onChange={(e)=>{setLemail(e.target.value)}}/>
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" onChange={(e)=>{setLpass(e.target.value)}}/>
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  
                </Stack>
                <Button
                  bg={'blue.400'}
                  color={'white'}
                  onClick={()=>login(lemail,lpass)}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
            </GridItem>
            <GridItem>
            <Flex
        h={'100vh'}
        align={'center'}
        bg={"#5C8984"}
        justify={'center'}
        color={"#F2D8D8"}
        >
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} color={"#F2D8D8"}>Register your account</Heading>
            <Text fontSize={'lg'} >
              to enjoy all of our cool <Link >features</Link> ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={"#5C8984"}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
            <FormControl id="email">
                <FormLabel>Name</FormLabel>
                <Input type="text" onChange={(e)=>{setName(e.target.value)}}/>
              </FormControl>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" onChange={(e)=>{setRemail(e.target.value)}}/>
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" onChange={(e)=>{setRpass(e.target.value)}}/>
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  
                </Stack>
                <Button
                  bg={'blue.400'}
                  color={'white'}
                  onClick={()=>register(name,remail,rpass)}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Register
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
            </GridItem>
        </Grid>
        </div>
      
    );
  }