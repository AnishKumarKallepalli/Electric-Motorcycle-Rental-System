import { Inter } from '@next/font/google'
import { useRouter } from 'next/router';

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Card from '@/components/Card'
import { useUser } from "@auth0/nextjs-auth0/client";
import axios from 'axios';

import { BASE_URL } from '@/constants'

const inter = Inter({ subsets: ['latin'] })

export default function Bikes({ listofbikes }) {
  const { user } = useUser();
  const router = useRouter()
  const rentCb = (bike) => {
    //rent this bike for a day, start time is now
    const email = user.email;
    const name = user.name;
    const cur_ride = {
      bike: bike._id,
      start_time: new Date(),
      start_location: "Your House",
      cost: bike.pricePerHour * 13,
    };
    console.log("email", email)
    // return;
    axios.put(`${BASE_URL}/api/users`, {
      email,
      name,
      current_ride: cur_ride,
      wallet_balance: (user.wallet_balance ?? 5000) - bike.pricePerHour * 13,
      ride_history: [...(user.ride_history ?? []), cur_ride]
    }).then((res) => {
      console.log("rented bike", res);
      router.push('/profile')
    }
    ).catch((err) => {
      console.log("error renting bike", err);
    }
    )
  }
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
                <Card key={bike._id} props={bike} rentCb={rentCb} />))}
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