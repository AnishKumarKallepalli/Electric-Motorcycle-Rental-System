import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Card from '@/components/Card'
const inter = Inter({ subsets: ['latin'] })

export default function About() {
  return (
    <>
      <Header></Header>

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
                    <a href="index.html">
                      Home <i className="ion-ios-arrow-forward" />
                    </a>
                  </span>{" "}
                  <span>
                    Bikes <i className="ion-ios-arrow-forward" />
                  </span>
                </p>
                <h1 className="mb-3 bread">Choose Your Bike</h1>
              </div>
            </div>
          </div>
        </section>
        <section className="ftco-section bg-light">
          <div className="container">
            <div className="row">
              <Card _id="1" title="Mercedes Bax" price="$500"></Card>
            </div>

          </div>
        </section>
      </>


      <Footer></Footer>
    </>
  )
}
