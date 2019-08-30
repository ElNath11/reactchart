import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import ChartFrontDesk from './ChartFrontDesk';
import ChartReservation from './ChartReservation';
import OptionFull from './OptionFull';
import ChartCurrentCustomer from './ChartCurrentCustomer';
import ChartRepeatOrder from './ChartRepeatOrder';


class Dashboard extends Component{
	render(){
		return(
		<div className="">

				<div className="ui segment bg-grey">
					<Container className="px-0">

						<Row>
							<Col className="">Frontdesk Section</Col>
							<Col className=" text-right">View Detail</Col>
						</Row>
						<ChartFrontDesk />
						<Row className="text-center px-3 py-0 bg-none border-none">
							<Col xs="12" sm="3" className="text-center pl-0 pr-1">
								<div className="col bg-white pretty-box border-s px-0">
									<div className="col-12 border-bottom py-1">
										<h1 className="f14">Booking Status</h1>
									</div>
									<div className="row px-3 pt-3 pb-2">
										<div className="col px-0">
											<ul className="list-unstyled mb-0">
												<li className="f24 text-blue border-right">5</li>
												<li className="f10 text-black">Confirmed Reservation</li>
											</ul>
										</div>
										<div className="col px-0">
											<ul className="list-unstyled mb-0">
												<li className="f24 text-blue">1</li>
												<li className="f10 text-black">Unconfirmed Bookings</li>
											</ul>
										</div>
									</div>
								</div>
							</Col>
							<Col xs="12" sm="3" className="text-center pl-1 pr-1">
								<div className="col bg-white pretty-box border-s px-0">
									<div className="col-12 border-bottom py-1">
										<h1 className="f14">Room Check-in</h1>
									</div>
									<div className="row text-green f24 pt-3 pb-2">
										<div className="col-12 border-right">
											10
											<div className="col-12 text-black f10">Rooms Occupied</div>	
										</div>
									</div>
								</div>
							</Col>

							<Col xs="12" sm="6" className="text-center pl-1 pr-0">
								<div className="col bg-white pretty-box border-s px-0">
									<div className="col-12 border-bottom py-1">
										<h1 className="f14">Today Transaction</h1>
									</div>
									<div className="row px-3 pt-3 pb-2">
										<div className="col px-0">
											<ul className="list-unstyled mb-0">
												<li className="f24 text-red border-right">10</li>
												<li className="f10 text-black">Check-out</li>
											</ul>
										</div>
										<div className="col px-0">
											<ul className="list-unstyled mb-0">
												<li className="f24 text-red border-right">7</li>
												<li className="f10 text-black">Check-in</li>
											</ul>
										</div>
										<div className="col px-0">
											<ul className="list-unstyled mb-0">
												<li className="f24 text-red">5</li>
												<li className="f10 text-black">Appartment Available</li>
											</ul>
										</div>
									</div>
								</div>
							</Col>
						</Row>

					{/* Row Table */}

					<div className="row px-3 py-2">
						<div className="col pr-1 pl-0">
							<div className="col pretty-box bg-white">Payment Tracker</div>
							<table className="ui celled table mt-0 text-center">
							  <thead>
							    <tr>
							      <th className="text-brown">Apartment Number</th>
							      <th className="text-brown">Amount Requested</th>
							    </tr>
							  </thead>
							  <tbody>
							    <tr>
							      <td>201</td>
							      <td>900 <span className="f10">SAR</span></td>
							    </tr>
							    <tr>
							      <td>309</td>
							      <td>500 <span className="f10">SAR</span></td>
							    </tr>
							    <tr>
							      <td>483</td>
							      <td>1200 <span className="f10">SAR</span></td>
							    </tr>
							  </tbody>
							  <tfoot>
							    <tr>
								    <th className="font-weight-bold bg-brown">3 People</th>
								    <th className="font-weight-bold bg-brown">2 Approved</th>
							  </tr></tfoot>
							</table>
						</div>
						<div className="col pl-1 pr-0">
							<div className="col pretty-box bg-white">Pending Folio</div>
							<table className="ui celled table mt-0 text-center">
							  <thead>
							    <tr>
							      <th className="text-blue">Reservation Number</th>
							      <th className="text-blue">Amount Requested</th>
							    </tr>
							  </thead>
							  <tbody>
							    <tr>
							      <td>201</td>
							      <td>900 <span className="f10">SAR</span></td>
							    </tr>
							    <tr>
							      <td>309</td>
							      <td>500 <span className="f10">SAR</span></td>
							    </tr>
							    <tr>
							      <td>483</td>
							      <td>1200 <span className="f10">SAR</span></td>
							    </tr>
							  </tbody>
							  <tfoot>
							    <tr>
								    <th className="font-weight-bold bg-blue">3 People</th>
								    <th className="font-weight-bold bg-blue">2 Approved</th>
							  </tr></tfoot>
							</table>
						</div>
					</div>

					{/* Row Table */}				
					</Container>
				</div>
				{/* Row Booking Section */}
					<div className="ui segment bg-grey">
						<Container className="px-0">
							<Row>
								<Col className="">Booking Section</Col>
							</Row>
							<Row className="px-3 py-2">
								<Col className="pr-1 pl-0">
									<div className="col-12 pretty-box bg-white">
										<Row className="border-bottom py-2">
											<Col className="">Reservation Source</Col>
											<Col className=" text-right">View Detail</Col>
										</Row>
										<Row className="pt-3">
											<Col className="">
												<ul className="list-unstyled border-bottom pb-3 pt-4">
													<li><span className="text-red">Direct Booking:</span> 5000Sar</li>
													<li><span className="text-green">Website:</span> 1000Sar</li>
													<li><span className="text-blue">OTAs:</span> 4000Sar</li>
												</ul>
												<ul className="list-unstyled pl-4">
													<li><span className="text-red red-circle">Direct Booking</span></li>
													<li><span className="text-green green-circle">Website</span></li>
													<li><span className="text-blue blue-circle">OTAs</span></li>
												</ul>
											</Col>
											<Col className="">
												<ChartReservation />
											</Col>
										</Row>
									</div>
								</Col>
								<Col>
									<div className="col-12 pretty-box bg-white">
										<Row className="border-bottom py-2">
											<Col className="">Cancelation Rate</Col>
											<Col className=" text-right">View Detail</Col>
										</Row>
										<Row className="pt-3">
											<Col className="">
												<OptionFull />
											</Col>											
										</Row>
									</div>
								</Col>
							</Row>
						</Container>
					</div>
				{/* Row Booking Section */}
					
				{/* Row Guest Section */}
					<div className="ui segment bg-grey">
						<Container className="px-0">
							<Row>
								<Col className="">Guest Section</Col>
							</Row>
							<Row className="px-3 py-2">
								<Col className="pr-1 pl-0">
									<div className="col-12 pretty-box bg-white">
										<Row className="border-bottom py-2">
											<Col className="">Guest Segment</Col>
											<Col className=" text-right">View Detail</Col>
										</Row>
										<Row className="pt-3">
											<Col className="">
												<ChartCurrentCustomer />
											</Col>
										</Row>
									</div>
								</Col>
								<Col>
									<ChartRepeatOrder />
								</Col>
							</Row>
						</Container>
					</div>
				{/* Row Guest Section */}

				{/* Row Campaign Rooms Section */}
				<Container>
					<Row className="text-left">
						<Col className=" pl-0 pr-1">
							<div className="ui segment bg-grey">
								<h1 className="f18">Campaign and Sales Section</h1>
								<div className="col-12 pretty-box bg-white">										
										<Row className="pt-3">
											<Col className="">
												<ChartCurrentCustomer />
											</Col>
										</Row>
									</div>
							</div>
						</Col>
						<Col className="pr-0 pl-1">
							<div className="ui segment bg-grey">
								<h1 className="f18">Room Section</h1>
								<div className="col-12 pretty-box bg-white">
										<Row className="border-bottom py-2">
											<Col className="">Guest Segment</Col>
											<Col className=" text-right">View Detail</Col>
										</Row>
										<Row className="pt-3">
											<Col className="">
												
											</Col>
										</Row>
									</div>
							</div>
						</Col>
					</Row>
				</Container>
				{/* Row Campaign Rooms Section */}
</div>

		);
	}
}

export default Dashboard;