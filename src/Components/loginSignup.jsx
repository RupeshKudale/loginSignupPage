import "./loginSignup.css";

import { Button, Flex, HStack, Heading } from '@chakra-ui/react'
import { EditIcon, EmailIcon, LockIcon } from "@chakra-ui/icons"

import React from 'react';

const LoginSignup = () => {
  return (
    <Flex className="container">
        <Flex className="header">
            <Heading className="text">Sign up</Heading>
            <div className="underline"></div>
        </Flex>
        <Flex className="inputs">
            <HStack className="input" justifyContent={"space-around"}>
                <EditIcon/>
                <input placeholder="Name" type="name" />
            </HStack>
            <HStack className="input" justifyContent={"space-around"}>
                <EmailIcon/>
                <input placeholder="Email" type="email" />
            </HStack>
            <HStack className="input" justifyContent={"space-around"}>
                <LockIcon/>
                <input placeholder="Password" type="password" />
            </HStack>
        <HStack className="forgetPass">
            <text>Forget Password ?</text> <span>Click Here !</span>
        </HStack>
        </Flex>
        <HStack className="submitContainer" justifyContent={"space-between"}>
            <Button className="submit">Sign Up</Button>
            <Button className="submit">Log In</Button>
        </HStack>
    </Flex>
  )
}

export default LoginSignup