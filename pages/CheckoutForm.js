import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { destroyCookie } from "nookies";
import { useRouter } from "next/router";

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

    console.log('Sending')
    let data = {
        name : window.$name,
        email : window.$email,
      }

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

      
    fetch('/api/mail', {
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
          setSubmitted(true)
          setName('')
          setEmail('')
          setBody('')
        }
      })

    router.push('/check-your-email');
  }
//    return <p>Payment successful!</p>;

  return (
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
  );
};

export default CheckoutForm;