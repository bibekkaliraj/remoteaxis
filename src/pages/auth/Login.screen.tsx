 import login from "../../assets/login.png"
// import trees from "../../assets/trees.jpg"

// import React from "react";
// import { TextInput, Button, Box } from "@mantine/core";
// import { useForm } from "@mantine/form";
// import LoginImage from "../assets/Login.png";
// import Bg from "../assets/bg.png";
import { FcGoogle } from 'react-icons/fc';
import { useToggle, upperFirst } from '@mantine/hooks';
import { useForm } from '@mantine/form';
import { Link } from "react-router-dom";
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
    Divider
  } from '@mantine/core';
import { NavBar } from "./NavBar";


export const LoginScreen = () => {
  // const sth = [
  //   {
  //     link:"http://localhost:3001/",
  //     label:"Home"
  //   },
  // ]
  return (
    <Container size={420} my={40} className="mt-4 md:mt-8">
    
      <Title
        align="center"
        sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}
      >
        Welcome back!
      </Title>
      

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <TextInput label="Email" placeholder="yourmail@gmail.com" required />
        <PasswordInput label="Password" placeholder="Your password" required mt="md" />
        <Group position="apart" mt="lg">
          <Checkbox label="Remember me" sx={{ lineHeight: 1 }} />
          {/* <Anchor href="/forgotpassword" size="sm">
            Forgot password?
          </Anchor> */}
          <Link to="/forgotpassword" className="text-blue-600 no-underline hover:underline font-poppins"> forgotPassword</Link>
        </Group>
        <Button fullWidth mt="xl" style={{background:'black'}} >
          Sign in
        </Button>
        <Text color="dimmed" size="sm" align="center" mt={5}>
        Do not have an account yet?{' '}
        {/* <Anchor href="/signup" size="sm" >
          Create account
        </Anchor> */}
        <Link to="/signup" className="text-blue-600 no-underline hover:underline"> Create account</Link>
        <Divider label="Or continue with email" labelPosition="center" my="lg" />
      </Text>
      
      </Paper>
    </Container>
  );
}