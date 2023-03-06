import "@/styles/open-iconic-bootstrap.min.css";
import "@/styles/animate.css";
import "@/styles/owl.carousel.min.css";
import "@/styles/owl.theme.default.min.css";
import "@/styles/magnific-popup.css";
import "@/styles/aos.css";
import "@/styles/ionicons.min.css";
import "@/styles/bootstrap-datepicker.css";
import "@/styles/jquery.timepicker.css";
import "@/styles/flaticon.css";
import "@/styles/icomoon.css";
import "@/styles/style.css";
import Script from "next/script";
import { useRouter } from 'next/router'
import "@/styles/global.css"

import {UserProvider} from "@auth0/nextjs-auth0/client";
import Header from "@/components/Header";

export default function App({ Component, pageProps }) {
  const router = useRouter()

  return (
    
      <>
      <Script src="js/jquery.min.js" strategy="beforeInteractive"></Script>
      <Script
        src="js/jquery-migrate-3.0.1.min.js"
        strategy="beforeInteractive"
      ></Script>
      <Script src="js/popper.min.js" strategy="beforeInteractive"></Script>
      <Script src="js/bootstrap.min.js" strategy="beforeInteractive"></Script>
      <Script
        src="js/jquery.easing.1.3.js"
        strategy="beforeInteractive"
      ></Script>
      <Script
        src="js/jquery.waypoints.min.js"
        strategy="beforeInteractive"
      ></Script>
      <Script
        src="js/jquery.stellar.min.js"
        strategy="beforeInteractive"
      ></Script>
      <Script
        src="js/owl.carousel.min.js"
        strategy="beforeInteractive"
      ></Script>
      <Script
        src="js/jquery.magnific-popup.min.js"
        strategy="beforeInteractive"
      ></Script>
      <Script src="js/aos.js" strategy="beforeInteractive"></Script>
      <Script
        src="js/jquery.animateNumber.min.js"
        strategy="beforeInteractive"
      ></Script>
      <Script
        src="js/bootstrap-datepicker.js"
        strategy="beforeInteractive"
      ></Script>
      <Script
        src="js/jquery.timepicker.min.js"
        strategy="beforeInteractive"
      ></Script>
      <Script src="js/scrollax.min.js" strategy="beforeInteractive"></Script>
      <Script
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBVWaKrjvy3MaE7SQ74_uJiULgl1JY0H2s&sensor=false"
        strategy="beforeInteractive"
      ></Script>
      <Script src="js/google-map.js" strategy="beforeInteractive"></Script>
      <Script src="js/main.js" strategy="beforeInteractive"></Script>
      <Script
          src="https://widget.Cloudinary.com/v2.0/global/all.js"
          type="text/javascript"
        ></Script>
      <UserProvider>
      <div className="bg-black py-6 sm:py-8 lg:py-12"><Header /></div>
        <Component {...pageProps} key={router.asPath}  />
      </UserProvider>
      </>
  );
}
