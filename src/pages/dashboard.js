import React from 'react'

import {
  Card,
  CardBody,
  CardSubtitle,
  CardTitle,
  Table,
  Col,
  ListGroup,
  ListGroupItem,
  Row,
  Button,
} from "reactstrap";
import dynamic from 'next/dynamic'
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const topBikeData = [
  {
    name: "Ather",
    avatar: "images/bk1.jpg",
    NumberOfRides: 606,
    RatePerHour: "₹200/hour",
    Rating: 4.87
  },
  {
    name: "Revolt",
    avatar: "images/bk2.jpg",
    NumberOfRides: 301,
    RatePerHour: "₹300/hour",
    Rating: 4.6
  },
  {
    name: "Ultraviolette F77",
    avatar: "images/bk3.jpg",
    NumberOfRides: 515,
    RatePerHour: "₹400/hour",
    Rating: 4.32
  },
  // {
  //   name: "Odysse Evoqis",
  //   avatar: "images/bk4.jpg",
  //   NumberOfRides: 632,  
  //   RatePerHour: "₹300/hour",
  //   Rating: 4.29
  // },
  // {
  //   name: "Mirasma",
  //   avatar: "images/bk5.jpg",
  //   NumberOfRides: 523,  
  //   RatePerHour: "₹250/hour",
  //   Rating: 4.23
  // }
];

const topUserData = [
  {
    avatar: "images/person_1.jpg",
    name: "Roosevelt Dallmann",
    email: "rdallmann1@bbc.co.uk",
    NumberOfRides: "243",
    gender: "Male",
  },
  {
    avatar: "images/person_2.jpg",
    name: "Harris Vanstone",
    email: "hvanstonez@friendfeed.com",
    NumberOfRides: "134",
    gender: "Male",
  },
  {
    avatar: "images/person_3.jpg",
    name: "Jon Liger",
    email: "jliger2e@gmpg.org",
    NumberOfRides: "98",
    gender: "Male",
  },
  // {
  //   avatar: "images/person_4.jpg",
  //   name: "Tamra Stothert",
  //   email: "tstothertrm@goo.ne.jp",
  //   NumberOfRides: "92",
  //   gender: "Male",
  // },
];

const SalesChart = () => {
  const chartoptions = {
    series: [
      {
        name: "Bikes Rented",
        data: [182, 302, 204, 145, 94, 203, 84, 120, 86, 200, 530, 203],
      },
    ],
    options: {
      chart: {
        type: "area",
      },
      dataLabels: {
        enabled: false,
      },
      grid: {
        strokeDashArray: 3,
      },

      stroke: {
        curve: "smooth",
        width: 1,
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "March",
          "April",
          "May",
          "June",
          "July",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
        ],
      },
    },
  };
  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5">Sales Summary</CardTitle>
        <CardSubtitle className="text-muted" tag="h6">
          Yearly Rental Report
        </CardSubtitle>
        <Chart
          type="area"
          width="100%"
          height="390"
          options={chartoptions.options}
          series={chartoptions.series}
        ></Chart>
      </CardBody>
    </Card>
  );
};

const BikeTable = () => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Top Bikes</CardTitle>
          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>Bike Name</th>
                <th>Number of Rides</th>
                <th>Rating</th>
                <th>Price Per Hour</th>
              </tr>
            </thead>
            <tbody>
              {topBikeData.map((tdata, index) => (
                <tr key={index} className="border-top">
                  <td>
                    <div className="d-flex align-items-center p-2">
                      <img
                        src={tdata.avatar}
                        className="rounded"
                        alt="avatar"
                        width="60"
                        height="60"
                      />
                      <div className="ms-3">
                        <h6 className="mb-0">{tdata.name}</h6>
                      </div>
                    </div>
                  </td>
                  <td>{tdata.NumberOfRides}</td>
                  <td>{tdata.Rating}</td>
                  <td>{tdata.RatePerHour}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
};

const UserTable = () => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Top Users</CardTitle>
          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>User Name</th>
                <th>Number of Rides</th>
                <th>Gender</th>
              </tr>
            </thead>
            <tbody>
              {topUserData.map((tdata, index) => (
                <tr key={index} className="border-top">
                  <td>
                    <div className="d-flex align-items-center p-2">
                      <img
                        src={tdata.avatar}
                        className="rounded-circle"
                        alt="avatar"
                        width="100"
                        height="100"
                      />
                      <div className="ms-3">
                        <h6 className="mb-0">{tdata.name}</h6>
                        <span className="text-muted">{tdata.email}</span>
                      </div>
                    </div>
                  </td>
                  <td>{tdata.NumberOfRides}</td>
                  <td>{tdata.gender}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
};

const TopCards = (props) => {
  return (
    <Card>
      <CardBody>
        <div className="d-flex">
          <div className={`circle-box lg-box d-inline-block ${props.bg}`}>
            <i className={props.icon}></i>
          </div>
          <div className="ms-3">
            <h3 className="mb-0 font-weight-bold">{props.earning}</h3>
            <small className="text-muted">{props.subtitle}</small>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

const recentOrderData = [
  {
    color: "success",
    title: "Jon booked a Ather for 30 mins.",
    date: "1 minute ago",
    icon: "bi bi-bell",
  },
  {
    color: "success",
    title: "Samantha booked a Revlot for 2 hours.",
    date: "5 minutes ago",
    icon: "bi bi-laptop"
  },
  {
    color: "warning",
    title: "Alexandra gave a service request for mirasama",
    date: "8 minutes ago",
    icon: "bi bi-clock"
  },
  {
    color: "success",
    title: "Anish booked a mirasam for 5 hours",
    date: "11 minutes ago",
    icon: "bi bi-exclamation-circle"
  },
  {
    color: "warning",
    title: "Akshat gave a service request for Revolt",
    date: "14 minutes ago",
    icon: "bi bi-clock"
  },
  {
    color: "success",
    title: "Sriram booked a honda for 30 minutes.",
    date: "17 minutes ago",
    icon: "bi bi-clock"
  },
  {
    color: "success",
    title: "Mokshith booked a Yamaha for 5 hours",
    date: "23 minutes ago",
    icon: "bi bi-exclamation-circle"
  },
  {
    color: "success",
    title: "Ashwin booked a Royal Enfield for 7 hours",
    date: "29 minutes ago",
    icon: "bi bi-exclamation-circle"
  },
  {
    color: "warning",
    title: "Arkishman gave a service request for Yamaha",
    date: "34 minutes ago",
    icon: "bi bi-clock"
  },
  {
    color: "success",
    title: "Milind booked a Harley Davidson for 45 minutes.",
    date: "37 minutes ago",
    icon: "bi bi-clock"
  },
];

const RecentOrders = () => {
  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5">Recent Rentals</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">

        </CardSubtitle>
        <ListGroup flush className="mt-4">
          {recentOrderData.map((order, index) => (
            <ListGroupItem
              key={index}
              action
              href="/"
              tag="a"
              className="d-flex align-items-center p-3 border-0"
            >
              <Button
                className="rounded-circle me-3"
                size="sm"
                color={order.color}
              >
                <i className={order.icon}></i>
              </Button>
              {order.title}
              <small className="ms-auto text-muted text-small">
                {order.date}
              </small>
            </ListGroupItem>
          ))}
        </ListGroup>
      </CardBody>
    </Card>
  );
};
export default function dashboard() {
  return (
    <div>
      {/***Top Cards***/}
      <Row>
        <Col sm="6" lg="3">
          <TopCards
            bg="bg-light-success text-success"
            title="Profit"
            subtitle="Yearly Earning"
            earning="$100k+"
            icon="bi bi-wallet"
          />
        </Col>
        <Col sm="6" lg="3">
          <TopCards
            bg="bg-light-warning text-warning"
            title="Number of Bikes"
            subtitle="Number of Bikes available"
            earning="5K+"
            icon="bi bi-basket3"
          />
        </Col>
        <Col sm="6" lg="3">
          <TopCards
            bg="bg-light-info text-into"
            title="Sales"
            subtitle="Weekly Sales"
            earning="100+"
            icon="bi bi-bag"
          />
        </Col>
        <Col sm="6" lg="3">
          <TopCards
            bg="bg-light-danger text-danger"
            title="Customers"
            subtitle="Customers"
            earning="10K+"
            icon="bi bi-coin"
          />
        </Col>
      </Row>
      {/***Sales & Feed***/}
      <Row>
        <Col sm="6" lg="6" xl="7" xxl="8">
          <SalesChart />
        </Col>
        <Col sm="5" lg="5" xl="5" xxl="4">
          <BikeTable />
        </Col>
      </Row>
      {/***Table ***/}
      <Row>
        <Col lg="8">
          <UserTable />
        </Col>
        <Col>
          <RecentOrders />
        </Col>
      </Row>
    </div>
  )
}
