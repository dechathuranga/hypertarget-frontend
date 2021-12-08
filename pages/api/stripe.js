import Stripe from "stripe";

// export const getServerSideProps = () => {
  export default async () => {

  const stripe = new Stripe("sk_test_51JX4itAOb7pHxrW20akGAPv5Snf9RNRZDBuyVjEqwu3U1A1mktlZnDiETU5tQfE7nnCuEWCKKrsYLhnZAXlXuV9C00UgwvUBBP");

  const paymentIntent = await stripe.paymentIntents.create({
    amount: 4000,
    currency: "gbp"
  });

  // return {
  //   props: {
  //     paymentIntent
  //   }
  // };
};