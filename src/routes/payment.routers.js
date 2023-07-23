import { Router } from "express";
import { createSeccion } from "../controllers/payment.controller.js";
import {port} from '../config.js'

const router = Router();

router.post('/checkout-session', createSeccion);
console.log(router);
router.get(`${port}/success`,(req, res)=> res.redirect(`${port}/success.html`));
router.get(`${port}/cancel`,(req, res)=> res.redirect(`${port}/`));

// router.get('/cancel', (req, res) => {
//     res.redirect(path.resolve('path/to/cancel.html'));
//   });


//   router.get('/success', (req, res) => {
//     res.redirect(path.resolve('path/to/success.html'));
//   });

export default router;