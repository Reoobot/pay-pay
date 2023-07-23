import Stripe from "stripe";
import {STRIPE_PRIVATE_KEY} from '../config.js'


const stripe = new Stripe (STRIPE_PRIVATE_KEY);


export const createSeccion = async (req, res)=> {
    try {
        const session = await stripe.checkout.sessions.create({
          line_items: [
            {
              price_data: {
                product_data: {
                  name: 'Laptop',
                  description: 'Gaming Laptop',
                },
                currency: 'usd',
                unit_amount: 20000,
              },
              quantity: 1,
            },
            {
              price_data: {
                product_data: {
                  name: 'TV',
                  description: 'Smart TV',
                },
                currency: 'usd',
                unit_amount: 10000,
              },
              quantity: 2,
            },
          ],
          mode: 'payment',
          success_url: 'http://localhost:3000/success',
          cancel_url: 'http://localhost:3000/cancel',
        });
        // console.log(session);
        return res.json({ url: session.url });
      } catch (error) {
        console.error('Error creating checkout session:', error.message);
        res.status(500).json({ error: 'An error occurred while creating the checkout session' });
      }
    };
 
 
 



















// export const createSeccion = async (req, res)=> {
//    const session = await stripe.checkout.sessions.create({
//         line_items:[
//             {
//                 price_data:{
//                     product_data:{
//                         name:'Lapto',
//                         description:'Gaming Lapto',
//                     },
//                     currency:'usd',
//                     unit_amount: 20000,
//                 },
//                 quantity:1,
//             },
//             {
//                 price_data:{
//                     product_data:{
//                         name:'TV',
//                         description:'Smart TV',
//                     },
//                     currency:'usd',
//                     unit_amount: 10000,
//                 },
//                 quantity:2,
//             }   
//         ],
//         mode:'payment',
//         success_url:'http://localhost:3000/success',
//         cancel_url:'http://localhost:3000/cancel'
//     })
//     res.header("Content-Type", "application/json");
//     res.json({ url: session.url });
// };


