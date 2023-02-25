export default function Pricecard({props}){
 
    return(
    <>
   <tr className="">
                  <td className="car-image">
                    <div
                      className="img"
                      style={{backgroundImage: "url("+props.image+")"  }}
                    />
                  </td>
                  <td className="product-name">
                    <h3>{props.title}</h3>
                    <p className="mb-0 rated">
                      <span>Rating: {props.rating} </span>
                      <span class="ion-ios-star"></span>
        
                    </p>
                  </td>
                  <td className="price">
                    <p className="btn-custom">
                      <a href="/">Rent a Bike</a>
                    </p>
                    <div className="price-rate">
                      <h3>
                        <span className="num">
                          <small className="currency">$</small> {props.priceh}
                        </span>
                        <span className="per">/per hour</span>
                      </h3>
                
                    </div>
                  </td>
                  <td className="price">
                    <p className="btn-custom">
                      <a href="/">Rent a Bike</a>
                    </p>
                    <div className="price-rate">
                      <h3>
                        <span className="num">
                          <small className="currency">$</small> {props.priced}
                        </span>
                        <span className="per">/per day</span>
                      </h3>
                     
                    </div>
                  </td>
                  <td className="price">
                    <p className="btn-custom">
                      <a href="/">Rent a Bike</a>
                    </p>
                    <div className="price-rate">
                      <h3>
                        <span className="num">
                          <small className="currency">$</small> {props.pricem}
                        </span>
                        <span className="per">/per month</span>
                      </h3>
                      
                    </div>
                  </td>
                </tr>
</>
    );
}