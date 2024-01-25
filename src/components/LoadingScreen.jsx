import React from 'react'

import { Text, VStack } from '@chakra-ui/react'
import { keyframes } from '@emotion/react'

import stevenOS from '../assets/StevenOSLogo.svg'

const LoadingScreen = () => {
    const squareStyles = {
        width: "10px",
        height: "20px",
        backgroundColor: "#4F4F4F",
        color: "#4F4F4F"
    };

    const animation = keyframes`
        from { width: 0 }
        to { width: 100% }
    `;

    const animationRun = `${animation} infinite 5s`;

    return (
        <VStack h="100vh" justifyContent="center" m="0px 15px">
            <VStack
                border="4px solid #4F4F4F"
                bg="#FFF"
                p="40px 30px 20px 30px"
            >
                <img src={stevenOS} alt='StevenOS Logo' />
                <Text mt="30px">Starting Up...</Text>
                <VStack
                    alignItems="flex-start"
                    border="1px solid #000"
                    p="5px"
                    bg="#D9D9D9"
                    mb="30px"
                >
                    <Text
                        textAlign="left"
                        overflow="hidden"
                        animation={animationRun}
                        display="flex"
                        gap="2px"
                    >
                        <div style={squareStyles}>A</div>
                        <div style={squareStyles}>B</div>
                        <div style={squareStyles}>C</div>
                        <div style={squareStyles}>D</div>
                        <div style={squareStyles}>E</div>
                        <div style={squareStyles}>F</div>
                        <div style={squareStyles}>G</div>
                        <div style={squareStyles}>H</div>
                        <div style={squareStyles}>I</div>
                        <div style={squareStyles}>G</div>
                        <div style={squareStyles}>H</div>
                        <div style={squareStyles}>I</div>
                        <div style={squareStyles}>G</div>
                        <div style={squareStyles}>H</div>
                        <div style={squareStyles}>I</div>
                    </Text>
                </VStack>
                <Text fontSize="12px" textAlign="center">TM and © Steven Corporation 2001 - 2024. All rights reserved.</Text>
            </VStack>
        </VStack>
    )
}

export default LoadingScreen