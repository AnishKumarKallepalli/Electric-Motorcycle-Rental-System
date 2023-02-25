
export default function Card({ props }) {

  return (
    <>
      <div className="col-md-4">
        <div className="car-wrap rounded ftco-animate">
          <div
            className="img rounded d-flex align-items-end"
            style={{ backgroundImage: "url(" + props.image + ")" }}
          ></div>
          <div className="text">
            <h2 className="mb-0">
              <a >{props.name}</a>
            </h2>
            <div className="d-flex mb-3">
              <span className="cat">Rent Starting at</span>
              <p className="price ml-auto">
                ₹{props.price} <span>/day</span>
              </p>
            </div>
            <p className="d-flex mb-0 d-block">
              <a href="/" className="btn btn-primary py-2 mr-1">
                Book now
              </a>{" "}
              <a
                href="car-single.html"
                className="btn btn-secondary py-2 ml-1"
              >
                Details
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}