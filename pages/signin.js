import React,  { useEffect, useRef } from "react";
import { providers, signIn, getSession, csrfToken } from "next-auth/client";
import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Container,
  Stack,
} from "@chakra-ui/react";

console.log("mail - "+ global.$email);
alert("Hello! I am an alert box!! - " + global.$email);


// const handleSubmit = async e => {

//   let data1 = {
//     csrfToken : '748e29d4959389b866421b746f61b04248f941f7f3972895c7790a564219e7b5',
//     email : 'dechathuranga@gmail.com',
//   }

//   console.log("///////////////*****")

// fetch('/api/auth/signin/email', {
//     method: 'POST',
//     headers: {
//       'Accept': 'application/json, text/plain, */*',
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(data1)
//   }).then((res) => {
//     console.log('Response received')
//     if (res.status === 200) {
//       console.log('Response succeeded!***')
//     //   setSubmitted(true)
//     //   setName('')
//     //   setEmail('')
//     //   setBody('')
//     }
//   })

// }

export default function SignIn({ providers, csrfToken }) {
// export default function SignIn() {

  const buttonRef = useRef(null);

  useEffect(() => {
    buttonRef.current.click();
  }, []);

  return (
    <Container maxW="xl" centerContent>
      <Box alignContent="center" justifyContent="center" marginTop={12}>
        <Box className="email-form">
          <form 
          method="post" action="/api/auth/signin/email"
          >
            <Input name="csrfToken" type="hidden" defaultValue={csrfToken} />
            <label>
              Email address
              <Input type="text" id="email" name="email" defaultValue={global.$email}/>
            </label>
            <Button  
            ref={buttonRef}
            // onClick={(e) => handleSubmit()} 
            type="submit">Use your Email</Button>
          </form>
        </Box>
      </Box>
    </Container>
  );
}

SignIn.getInitialProps = async (context) => {
  const { req, res } = context;
  const session = await getSession({ req });

  if (session && res && session.accessToken) {
    res.writeHead(302, {
      Location: "/",
    });
    res.end();
    return;
  }

  return {
    session: undefined,
    providers: await providers(context),
    csrfToken: await csrfToken(context),
  };
};
