import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Pricecard from '@/components/Pricecard'
import data from '@/components/bikes.json';
const inter = Inter({ subsets: ['latin'] })

export default function Home({listofbikes}) {
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
              Pricing <i className="ion-ios-arrow-forward" />
            </span>
          </p>
          <h1 className="mb-3 bread">Pricing</h1>
        </div>
      </div>
    </div>
  </section>
  <section className="ftco-section ftco-cart">
    <div className="container">
      <div className="row">
        <div className="col-md-12 ftco-animate">
          <div className="car-list">
            <table className="table">
              <thead className="thead-primary">
                <tr className="text-center">
                  <th>&nbsp;</th>
                  <th>&nbsp;</th>
                  <th className="bg-primary heading">Per Hour Rate</th>
                  <th className="bg-dark heading">Per Day Rate</th>
                  <th className="bg-black heading">Leasing</th>
                </tr>
              </thead>
              <tbody>
              {listofbikes.map((bike) => (
          <Pricecard key={bike.id} props={bike} /> ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
</>



      <Footer></Footer>
    </>
  )
}
function getBikes() {
    return data;
  }
  
  export async function getStaticProps() {
    const listofbikes = await getBikes();
    return { props: { listofbikes } };
  }