import Link from 'next/link'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function About() {
  return (
    <>
  <section
    className="hero-wrap hero-wrap-2 js-fullheight"
    style={{ backgroundImage: 'url("images/bg_3.jpg")' }}
    data-stellar-background-ratio="0.5"
  >
    <div className="overlay" />
    <div className="container">
      <div className="row no-gutters slider-text js-fullheight align-items-end justify-content-start">
        <div className="col-md-9 ftco-animate pb-5">
          <p className="breadcrumbs">
            <span className="mr-2">
             <Link href="/">
                Home <i className="ion-ios-arrow-forward" />
                </Link>
            </span>{" "}
            <span>
              About us <i className="ion-ios-arrow-forward" />
            </span>
          </p>
          <h1 className="mb-3 bread">About Us</h1>
        </div>
      </div>
    </div>
  </section>
  <section className="ftco-section ftco-about">
    <div className="container">
      <div className="row no-gutters">
        <div
          className="col-md-6 p-md-5 img img-2 d-flex justify-content-center align-items-center"
          style={{ backgroundImage: "url(images/about.jpg)" }}
        ></div>
        <div className="col-md-6 wrap-about ftco-animate">
          <div className="heading-section heading-section-white pl-md-5">
            <span className="subheading">About us</span>
            <h2 className="mb-4">Welcome to Bike Rental</h2>
            <p>
            Our mission is to provide an eco-friendly and convenient way for people to explore 
            their city or town on two wheels. With our electric bikes, you can cruise around 
            town without worrying about traffic, parking, or emissions.
            </p>
            <p>
            Our electric bike rental system is perfect for tourists and locals alike. 
            Whether you're exploring a new city or just running errands, our bikes offer a 
            fun and efficient way to get around. We're committed to making sustainable 
            transportation accessible to everyone, and we hope you'll join us on this journey.
            </p>
            <p>
              <a href="/" className="btn btn-primary py-3 px-4">
                Rent A Bike
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>




      <Footer></Footer>
    </>
  )
}
