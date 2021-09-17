import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { destroyCookie } from "nookies";
import { useRouter } from "next/router";
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
const bcrypt = require('bcryptjs');

const CheckoutForm = ({ paymentIntent }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [checkoutError, setCheckoutError] = useState();
  const [checkoutSuccess, setCheckoutSuccess] = useState();
  const router = useRouter();

  const handleSubmit = async e => {
    // e.preventDefault();

    console.log("payme**********")
    try {
      const {
        error,
        paymentIntent: { status }
      } = await stripe.confirmCardPayment(paymentIntent.client_secret, {
        payment_method: {
          card: elements.getElement(CardElement)
        }
      });

      if (error) throw new Error(error.message);

      if (status === "succeeded") {
        setCheckoutSuccess(true);
        destroyCookie(null, "paymentIntentId");
      }
    } catch (err) {
      alert(err.message);
      setCheckoutError(err.message);
    }
  };

  if (checkoutSuccess){

    const hash = bcrypt.hashSync(window.$email, 10);
    // now we set user password to hashed password

    console.log('Sending')
    let data = {
        name : window.$name,
        email : window.$email,
        key : hash,
      }

      // alert(window.$name + " - " + window.$email)

      fetch('/api/add-user', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((res) => {
      console.log('Response received')
      if (res.status === 200) {
        console.log('Response succeeded!')
      }
    })

      
    // fetch('/api/mail', {
    //     method: 'POST',
    //     headers: {
    //       'Accept': 'application/json, text/plain, */*',
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(data)
    //   }).then((res) => {
    //     console.log('Response received')
    //     if (res.status === 200) {
    //       console.log('Response succeeded!')
    //       setSubmitted(true)
    //       setName('')
    //       setEmail('')
    //       setBody('')
    //     }
    //   })

    // let data1 = {
    //   csrfToken : '298e12975ee552e8d504cdb6aff2cdd45a4a4c6340b74de4d8cb0df887fdf7ec%7Cfef88c4a4b74fd57686bcb474f48f49de424aad8ccaa2cf709c970051f9b13db',
    //   email : 'dechathuranga@gmail.com',
    // }
  
    console.log("///////////////*****")
  
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

    // router.push('/check-your-email');
    // window.$email = "e.target.value";
    router.push('/signin');
  }
//    return <p>Payment successful!</p>;

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <CardElement />

      {/* <button type="submit" disabled={!stripe}>
        Pay now
      </button> */}

 <a
 disabled={!stripe}
                  onClick={(e) => handleSubmit()}
                  // href="check-mail.html" 
                  type="submit" class="c_submit-btn">Submit
                            <svg width="22" height="15" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.8913 1L20.5 7.5M13.8913 14L20.5 7.5M20.5 7.5H1.5" stroke="#192B43" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </a>


      {checkoutError && <span style={{ color: "red" }}>{checkoutError}</span>}
    </form>

 {/* <Container maxW="xl" centerContent>
<Heading as="h1" textAlign="center">
  Welcome to our custom page
</Heading>
<Box alignContent="center" justifyContent="center" marginTop={12}>
  <Box className="email-form">
    <form 
    method="post" action="/api/auth/signin/email"
    >
      <Input name="csrfToken" type="hidden" defaultValue={csrfToken} />
      <label>
        Email address
        <Input type="text" id="email" name="email" />
      </label>
      <Button  
      // onClick={(e) => handleSubmit()} 
      type="submit">Use your Email</Button>
    </form>
  </Box>
</Box>
 </Container>  */}
</div>
  );
};


// CheckoutForm.getInitialProps = async (context) => {
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

export default CheckoutForm;