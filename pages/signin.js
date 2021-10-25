// import React,  { useEffect, useRef } from "react";
// import { providers, signIn, getSession, csrfToken } from "next-auth/client";
// import {
//   Box,
//   Button,
//   Flex,
//   Heading,
//   Input,
//   Container,
//   Stack,
// } from "@chakra-ui/react";

// console.log("mail - "+ global.$email);

// export default function SignIn({ providers, csrfToken }) {

//   const buttonRef = useRef(null);

//   useEffect(() => {
//     buttonRef.current.click();
//   }, []);

//   return (
//   <div>
//           <form 
//           method="post" action="/api/auth/signin/email"
//           >
//             <Input name="csrfToken" type="hidden" defaultValue={csrfToken} />
           
//               <Input type="text" type="hidden" id="email" name="email" defaultValue={global.$email}/>
            
//             <Button  
//             ref={buttonRef}
//             type="hidden"
//             type="submit"></Button>
//           </form>

//     </div>
//   );
// }

// SignIn.getInitialProps = async (context) => {
//   const { req, res } = context;
//   const session = await getSession({ req });

//   if (session && res && session.accessToken) {
//     res.writeHead(302, {
//       Location: "/",
//     });
//     res.end();
//     return;
//   }

//   return {
//     session: undefined,
//     providers: await providers(context),
//     csrfToken: await csrfToken(context),
//   };
// };
