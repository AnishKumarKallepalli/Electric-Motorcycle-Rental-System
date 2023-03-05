import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Header></Header>

      <div className="hero-wrap ftco-degree-bg" style={{ backgroundImage: 'url("images/bg_1.jpg")' }} data-stellar-background-ratio="0.5">
    <div className="overlay" />
    <div className="container">
      <div className="row no-gutters slider-text justify-content-start align-items-center justify-content-center">
        <div className="col-lg-8 ftco-animate">
          <div className="text w-100 text-center mb-md-5 pb-md-5">
            <h1 className="mb-4">Fast &amp; Easy Way To Rent A Bike</h1>
            <p style={{ fontSize: 18 }}>
            Most affordable bike rental company you can find. 
            We make it easy to get around and explore all that world has to offer without any harm to the environment.
            </p>
          
          </div>
        </div>
      </div>
    </div>
</div>
  <section className="ftco-section ftco-no-pt bg-light">
    <div className="container">
      <div className="row no-gutters">
        <div className="col-md-12	featured-top">
          <div className="row no-gutters">
            <div className="col-md-4 d-flex align-items-center">
              <form action="#" className="request-form ftco-animate bg-primary">
                <h2>Make your trip</h2>
                <div className="form-group">
                  <label htmlFor="" className="label">
                    Pick-up location
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="City, Airport, Station, etc"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="" className="label">
                    Drop-off location
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="City, Airport, Station, etc"
                  />
                </div>
                <div className="d-flex">
                  <div className="form-group mr-2">
                    <label htmlFor="" className="label">
                      Pick-up date
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="book_pick_date"
                      placeholder="Date"
                    />
                  </div>
                  <div className="form-group ml-2">
                    <label htmlFor="" className="label">
                      Drop-off date
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="book_off_date"
                      placeholder="Date"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="" className="label">
                    Pick-up time
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="time_pick"
                    placeholder="Time"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    defaultValue="Rent A Bike Now"
                    className="btn btn-secondary py-3 px-4"
                  />
                </div>
              </form>
            </div>
            <div className="col-md-8 d-flex align-items-center">
              <div className="services-wrap rounded-right w-100">
                <h3 className="heading-section mb-4">
                  Better Way to Rent Your Perfect Bike
                </h3>
                <div className="row d-flex mb-4">
                  <div className="col-md-4 d-flex align-self-stretch ftco-animate">
                    <div className="services w-100 text-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                      <img class =" iconani" src ="/images/002-map.png"></img>
                      </div>
                      <div className="text w-100">
                        <h3 className="heading mb-2">
                          Choose Your Pickup Location
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 d-flex align-self-stretch ftco-animate">
                    <div className="services w-100 text-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                      <img class =" iconani" src ="/images/003-handshake.png"></img>
                      </div>
                      <div className="text w-100">
                        <h3 className="heading mb-2">Select the Best Deal</h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 d-flex align-self-stretch ftco-animate">
                    <div className="services w-100 text-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                      <img class =" iconani" src ="/images/001-rent.png"></img>
                      </div>
                      <div className="text w-100">
                        <h3 className="heading mb-2">
                          Reserve Your Rental Bike
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <p>
                  <a href="#" className="btn btn-primary py-3 px-4">
                    Reserve Your Perfect Bike
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="ftco-section">
			<div class="container">
				<div class="row justify-content-center mb-5">
          <div class="col-md-7 text-center heading-section ftco-animate">
          	<span class="subheading">Services</span>
            <h2 class="mb-3">Our Latest Services</h2>
          </div>
        </div>
				<div class="row">
					<div class="col-md-3">
						<div class="services services-2 w-100 text-center">
            	<div class="icon d-flex align-items-center justify-content-center"><img class =" iconani" src ="/images/005-affordable.png"></img></div>
            	<div class="text w-100">
                <h3 class="heading mb-2">Very Affordable</h3>
                <p>Our bikes have excellent quality and are very affordable.</p>
              </div>
            </div>
					</div>
					<div class="col-md-3">
						<div class="services services-2 w-100 text-center">
            	<div class="icon d-flex align-items-center justify-content-center"><img class =" iconani" src ="/images/004-architecture-and-city.png"></img></div>
            	<div class="text w-100">
                <h3 class="heading mb-2">Across Multiple Cities</h3>
                <p>You can find our bikes anywhere, and you can leave them anywhere.</p>
              </div>
            </div>
					</div>
					<div class="col-md-3">
						<div class="services services-2 w-100 text-center">
            	<div class="icon d-flex align-items-center justify-content-center"><img class =" iconani" src ="/images/007-available.png"></img></div>
            	<div class="text w-100">
                <h3 class="heading mb-2">Always Available</h3>
                <p>We guarantee that you can always find a bike available near you.</p>
              </div>
            </div>
					</div>
					<div class="col-md-3">
						<div class="services services-2 w-100 text-center">
            	<div class="icon d-flex align-items-center justify-content-center"><img class =" iconani" src ="/images/006-environmentalism.png"></img></div>
            	<div class="text w-100">
                <h3 class="heading mb-2">Eco-Friendly</h3>
                <p>Worried about pollution don't worry we got you covered. Our bikes are electric.</p>
              </div>
            </div>
					</div>
				</div>
			</div>
		</section>


      <Footer></Footer>
    </>
  )
}
