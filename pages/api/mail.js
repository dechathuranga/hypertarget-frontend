// export default function (req, res) {
//     require('dotenv').config()
    
//     console.log('mail page');
//     let nodemailer = require('nodemailer')
//     const transporter = nodemailer.createTransport({
//       port: 465,
//       host: "smtp.gmail.com",
//       auth: {
//         user: 'hypertargetmail@gmail.com',
//         // pass: process.env.password,
//         pass: 'Dwhn0767228870',
//       },
//       secure: true,
//     })
//     const mailData = {
//       from: 'hypertargetmail@gmail.com',
//       to: req.body.email,
//     //   subject: `Message From ${req.body.name}`,
//       subject: `Login Link From Hypertarget`,
//       text: req.body.message + " | Sent from: " + req.body.email,
//       html: `<html lang="en">

//       <body>
    
//           <h2>Login to your account</h2>
    
//         <table width="100%" cellspacing="0" cellpadding="0">
//           <tr>
//               <td>
//                   <table cellspacing="0" cellpadding="0">
//                       <tr>
//                           <td style="border-radius: 2px;" bgcolor="#ED2939">
//                               <a href="http://localhost:3000/login-link" target="_blank" style="padding: 8px 12px; border: 1px solid #ED2939;border-radius: 2px;font-family: Helvetica, Arial, sans-serif;font-size: 14px; color: #ffffff;text-decoration: none;font-weight:bold;display: inline-block;">
//                                   Click and Login for Hypertarget             
//                               </a>
//                           </td>
//                       </tr>
//                   </table>
//               </td>
//           </tr>
//         </table>
//       </body>
//     </html>`
//     }
//     transporter.sendMail(mailData, function (err, info) {
//       if(err)
//         console.log(err)
//       else
//         console.log(info)
//     })
//     res.status(200)
//   }