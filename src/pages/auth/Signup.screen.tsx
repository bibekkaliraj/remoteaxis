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
import { Link } from 'react-router-dom';
export const SignupScreen = () => {
    return (
      <Container size={420} my={40} className="mt-4 md:mt-8">
        <Title
          align="center"
          sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}
        >
          Sign Up
        </Title>
        
  
        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <TextInput label="FullName" placeholder="FullName" required />
          <TextInput label="Email" placeholder="Email" required />
          <TextInput label="Password" placeholder="Password" required />
          <TextInput label="Comfirm Password" placeholder="Comfirm Password" required />
         
          <Button fullWidth mt="xl" style={{background:'blue'}} >
            Create Account
          </Button>
          <Text color="dimmed" size="sm" align="center" mt={5}>
          Already have an account?{' '}
          {/* <Anchor href="/login" size="sm" >
            Login 
          </Anchor> */}
         <Link to="/Login" className="text-blue-600 no-underline hover:underline">Login</Link>
          <Divider label="Or continue with email" labelPosition="center" my="lg" />
        </Text>
        
        </Paper>
      </Container>
    );
  }