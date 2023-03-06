import { Inter } from '@next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Card from '@/components/Card'

import { BASE_URL } from '@/constants'

const inter = Inter({ subsets: ['latin'] })

export default function Bikes({ listofbikes }) {
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
              {listofbikes?.map((bike) => (
                <Card key={bike._id} props={bike} />))}
            </div>

          </div>
        </section>
      </>


      <Footer></Footer>
    </>
  )
}

export async function getStaticProps() {
  // Fetch data from external API
  const res = await fetch(`${BASE_URL}/api/bikes`)
  const listofbikes = await res.json()
  // Pass data to the page via props
  return { props: { listofbikes } }
}