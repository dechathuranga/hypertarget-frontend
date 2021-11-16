import Head from 'next/head'
import { withIronSession } from "next-iron-session";
import { useRouter } from "next/router";
import login from './api/login';
import getConfig from 'next/config'
import React, { useEffect, useRef } from "react";
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Head>
      <meta charset="UTF-8"/>
    {/* <meta http-equiv="X-UA-Compatible" content="IE=edge"/> */}
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Hypertarget</title>
    {/* <!-- favicon --> */}
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon"/>
    {/* <!-- bootstrap  --> */}
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"/>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
    {/* <!-- owl carousel --> */}
    <link rel="stylesheet" href="assets/css/owl.carousel.min.css"/>
    <link rel="stylesheet" href="assets/css/owl.theme.default.min.css"/>
    {/* <!-- custom css --> */}
    <link rel="stylesheet" href="assets/css/steps.css"/>
    <link rel="stylesheet" href="assets/css/main.css"/>
    <link rel="stylesheet" href="assets/css/responsive.css"/>
    <link rel="stylesheet" href="assets/css/code.css"/>
      </Head>
    
<body>
<div className="row height-100-percents">
    <div className="col col-md-8 col-md-offset-2 iframe-wrap">
        <iframe sandbox="" className="iframe" ng-src="https://docs.npmjs.com/cli/v7/commands/npm-audit"></iframe>
    </div>
</div>
</body>

    </div>
  )
}
