 import login from "../../assets/login.png"
// import trees from "../../assets/trees.jpg"

import React from "react";
// import { TextInput, Button, Box } from "@mantine/core";
// import { useForm } from "@mantine/form";
// import LoginImage from "../assets/Login.png";
// import Bg from "../assets/bg.png";
import { FcGoogle } from 'react-icons/fc';
import { useToggle, upperFirst } from '@mantine/hooks';
import { useForm } from '@mantine/form';
import {
    TextInput,
    PasswordInput,
    Checkbox,
    Anchor,
    Paper,
    Title,
    Text,
    Container,
    Group,
    Button,
  } from '@mantine/core';


export const LoginScreen = () => {
    return (
        <Container size={420} my={40}>
          {/*<Title*/}
          {/*  align="center"*/}
          {/*  sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}*/}
          {/*>*/}
            <div className="text-lg">Welcome back!</div>
          {/*</Title>*/}
          <Text color="dimmed" size="sm" align="center" mt={5}>
            Do not have an account yet?{' '}
            <Anchor<'a'> href="#" size="sm" onClick={(event) => event.preventDefault()}>
              Create account
            </Anchor>
          </Text>
    
          <Paper withBorder shadow="xl" p="xl" mt={30} radius="md" >
            <TextInput label="Email" placeholder="yourmail@gmail.com" required />
            <PasswordInput label="Password" placeholder="Your password" required mt="md" />
            <Group position="apart" mt="lg">
              <Checkbox label="Remember me" sx={{ lineHeight: 1 }} />
              <Anchor<'a'> onClick={(event) => event.preventDefault()} href="#" size="sm">
                Forgot password?
              </Anchor>
            </Group>
            <Button fullWidth mt="xl" variant={'subtle'}>
              Sign in
            </Button>
            <h1 className="text-red-300">hello world</h1>
          </Paper>
        </Container>
      );
    }