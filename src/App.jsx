import { Container, Text, Box, Heading, Button } from '@chakra-ui/react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'

export const App = () => {
  const counter = useSelector((state) => state.counter)

  const counterDispatch = useDispatch()

  const incrementHandler = () => {
    counterDispatch({ type: 'increment' })
  }
  const decrementHandler = () => {
    counterDispatch({ type: 'decrement' })
  }

  return (
    <>
      <Container
        alignItems="center"
        bg="gray"
        display="flex"
        height="100vh"
        justifyContent="center"
        w="100%"
      >
        <Box bg="white" p={4} rounded=".8rem" textAlign="center" w="50%">
          <Text color="gray" fontSize="1.8rem" fontWeight="700" my="1rem">
            REDUX COUNTER
          </Text>
          <Heading color="#322659" fontSize="3.8rem" my="4rem">
            {counter}
          </Heading>
          <Button
            bg="#322659"
            border="none"
            color="white"
            fontWeight="700"
            my="1.5rem"
            p="1rem 2rem"
            rounded="0.5rem"
            onClick={incrementHandler}
          >
            Increment
          </Button>
          <Button
            bg="#322659"
            border="none"
            color="white"
            fontWeight="700"
            my="1.5rem"
            p="1rem 2rem"
            rounded="0.5rem"
            onClick={decrementHandler}
          >
            Decrement
          </Button>
          <Button
            bg="#322659"
            border="none"
            color="white"
            fontWeight="700"
            my="1.5rem"
            p="1rem 2rem"
            rounded="0.5rem"
            /* onClick={toogleHandler} */
          >
            Toggle Counter
          </Button>
        </Box>
      </Container>
    </>
  )
}
