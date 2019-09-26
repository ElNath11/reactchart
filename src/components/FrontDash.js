import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

//Chart 
import AverageDailyRate from './AverageDailyRate'
import OccupancyRate from './OccupancyRate'
import AverageDailyRateCircular from './AverageDailyRateCircular'
import TotalRevenue from './TotalRevenue'
import ChartReservationSource from './ChartReservationSource'
import CancellationRate from './CancellationRate'
import ChartCancellationReason from './ChartCancellationReason'
import ChartGuestSegment from './ChartGuestSegment'
import ChartCustomerSurvey from './ChartCustomerSurvey'
import ChartCampaignAndSales from './ChartCampaignAndSales'
import ChartPowerConsumption from './ChartPowerConsumption'
import ChartSecurityAlarm from './ChartSecurityAlarm'

//Icon
import IconOccupied from './icons/IconOccupied'
import IconAvailable from './icons/IconAvailable'
import IconDNR from './icons/IconDNR'
import IconCheckIn from './icons/IconCheckIn'
import IconCheckOut from './icons/IconCheckOut'
import IconConfirmed from './icons/IconConfirmed'
import IconUnconfirmed from './icons/IconUnconfirmed'
import IconNoShow from './icons/IconNoShow'
import IconCancel from './icons/IconCancel'


class FrontDash extends Component {
constructor(props) {
    super(props);

   this.state = {   	
   	data: [],
   	hotel_performance_sumary: [],
   	room_performance_sumary: [],
   	transaction_sumary: [],
   	payment_tracker_sumary: [],
   	payment_trackers: [],

   	total_room: 0,
   	occupancy_rate: 0,
   	average_daily_rate: 0,
   	total_daily_rate: 0,
   	total_revenue: 0,
   	filterFront: 'day',
   	rate: '',
	labels: [],
   	revenue: [],
    room_occupancy_rate: [],
    room_average_daily_rate: [],

   	confirmed: 0,
   	unconfirmed: 0,
   	no_show: 0,
   	cancel: 0,
   	checked_in: 0,

   	occupied: 0,
   	available: 0,
   	dnr: 0,
   	room_checked_in: 0,
   	checked_out: 0,

   	room_number: [],
   	amout_requested: [],
   	total_balance: 0,

   	pending_folio_sumary: [],
	reservation_number: [],
	pending_amout_requested: [],
	pending_total_balance: 0,
   }
   
  }

  componentDidMount() {       
	this.fetchHotelPerformance(this.state.filterFront);
        /*this.fetchRoomPerformance();*/
    }

    fetchHotelPerformance = (filter) => {
		
		fetch(`http://feeback.dev.ms.taskyinn.com/dashboard/frontdesk/10/${filter}`, {
			crossDomain:true,
			method: 'GET'
		})

        .then(res => res.json())
        
        .then(response => this.setState({
        	data: response.data,
          hotel_performance_sumary: response.data.hotel_performance_sumary,
          occupancy_rate: response.data.hotel_performance_sumary.occupancy_rate,
          average_daily_rate: response.data.hotel_performance_sumary.average_daily_rate,

          room_performance_sumary: response.data.room_performance_sumary,
          labels: response.data.room_performance_sumary.labels,
          revenue: response.data.room_performance_sumary.revenue,
          room_occupancy_rate: response.data.room_performance_sumary.occupancy_rate,
          room_average_daily_rate: response.data.room_performance_sumary.average_daily_rate,

          booking_sumary: response.data.booking_sumary,
          confirmed: response.data.booking_sumary.confirmed,
          unconfirmed: response.data.booking_sumary.unconfirmed,
          no_show: response.data.booking_sumary.no_show,
          cancel: response.data.booking_sumary.cancel,
          checked_in: response.data.booking_sumary.checked_in,

          transaction_sumary: response.data.transaction_sumary,
          occupied: response.data.transaction_sumary.occupied,
		   	available: response.data.transaction_sumary.available,
		   	dnr: response.data.transaction_sumary.dnr,
		   	room_checked_in: response.data.transaction_sumary.room_checked_in,
		   	checked_out: response.data.transaction_sumary.checked_out,

		  payment_tracker_sumary: response.data.payment_tracker_sumary,
			room_number: response.data.payment_tracker_sumary.room_number,
			amout_requested: response.data.payment_tracker_sumary.amout_requested,
			total_balance: response.data.payment_tracker_sumary.total_balance,

			pending_folio_sumary: response.data.pending_folio_sumary,
			reservation_number: response.data.pending_folio_sumary.reservation_number,
			pending_amout_requested: response.data.pending_folio_sumary.amout_requested,
			pending_total_balance: response.data.pending_folio_sumary.total_balance,

		  isLoaded: true
		}),
			//this.okay()
		).catch(error => console.log('parsing failed', error))
	}
    
    OnClickFilterFront = (value, filterFront) => {
    	this.setState({ filterFront: value });
		this.fetchHotelPerformance(value);
	};

    renderListPay(){
		return this.state.payment_tracker_sumary.payment_trackers && this.state.payment_tracker_sumary.payment_trackers.map(pay_item => {
			return(
				
				    <tr key={pay_item.number}>
						<td>{pay_item.number}</td>
						<td>{pay_item.balance} <span className="f10">SAR</span></td>
					</tr>
				
			);
		});
	}

	renderPendingFolio(){
		return this.state.pending_folio_sumary.pending_folios && this.state.pending_folio_sumary.pending_folios.map(pending_item => {
			return(
				
				    <tr key={pending_item.number}>
						<td>{pending_item.number}</td>
						<td>{pending_item.balance} <span className="f10">SAR</span></td>
					</tr>
				
			);
		});
	}

	// componentDidUpdate(prevProps, prevState, snapshot, room_performance_sumary) {
	//   //Typical usage (don't forget to compare props):
	//   if (this.state.room_performance_sumary !== prevState.room_performance_sumary) {
	//      this.setState(this.state.room_performance_sumary);
	//   }
	// }

	render(){

		const {hotel_performance_sumary, room_performance_sumary,error, isLoaded} = this.state;
		
		if (!room_performance_sumary) { return <div>Loading rev...</div>; }

		if (error) {
			return <div>Error: {error.message}</div>;

		} else if (!isLoaded) {
			return <div></div>;

		} else {	

		return(
			<div className="pb-2 px-3 pt-3">
				<div className="dash-title">Dashboard</div>
					<div className="container-background py-3 px-3 my-2">
						<Row>							
							<Col className="text-right">				                  
				                	<select className="dropdown" id="desk" onChange={(e) => this.OnClickFilterFront(e.target.value, "filterFront")}>
				                        <option value="" defaultValue>Select Filter</option>
				                        <option value="day">Today</option>
				                        <option value="month">Month</option>
				                        <option value="year">Years</option>
				                    </select>
							</Col>
						</Row>
					{/* Row 1 */}
					
						<Row className="py-2">
							<Col xs="12" sm="6"> 
								<div className="theBox">
								<div className="theBox-head">
									<Row className="p-2">
										<Col xs="12" sm="6" className="text-left semi-bold">Room Performance</Col>
										<Col xs="12" sm="6" className="text-detail">Details ></Col>
									</Row>
								</div>
								 
								<Row className="p-2">
									<Col xs="12">

										<AverageDailyRate dataLab={this.state.labels}
										seriesRevenue={this.state.revenue} 
										seriesOccu={this.state.room_occupancy_rate}
										seriesAverage={this.state.room_average_daily_rate} />

									</Col>									
								</Row>
								</div>
							</Col>
							
							<Col xs="12" sm="6">										
								<div className="theBox">
								<div className="theBox-head">
									<Row className="p-2">
										<Col xs="12" sm="6" className="text-left semi-bold">Hotel Performance</Col>
										<Col xs="12" sm="6" className="text-detail">Details ></Col>
									</Row>
								</div>
													
								<Row className="p-2 text-center">
									<Col xs="12" sm="4">
										<OccupancyRate dataOccupancy={[this.state.occupancy_rate]} />
									</Col>
									<Col xs="12" sm="4">
										<AverageDailyRateCircular dataAverage={[this.state.average_daily_rate]} />
									</Col>
									<Col xs="12" sm="4">
										<TotalRevenue />
									</Col>
								</Row>
								<Row className="p-2 text-center">
									<Col xs="12" sm="4">
										<ul className="list-unstyled">
											<li className="text-number">{hotel_performance_sumary.total_room}</li>
											<li className="text-detail-value">Rooms</li>
										</ul>
									</Col>
									<Col xs="12" sm="4">
										<ul className="list-unstyled">
											<li className="text-number">{hotel_performance_sumary.total_daily_rate}</li>
											<li className="text-detail-value">In SAR</li>
										</ul>
									</Col>
									<Col xs="12" sm="4">
										<ul className="list-unstyled">
											<li className="text-number">{hotel_performance_sumary.total_revenue}</li>
											<li className="text-detail-value">In SAR</li>
										</ul>
									</Col>
								</Row>
														
								</div>												
							</Col>

						</Row>
						
					{/* Row 1 */}
					{/* Row 2 */}
						<Row className="py-2">
							<Col xs="12" sm="6"> 
								<div className="theBox">
								<div className="theBox-head">
									<Row className="p-2">
										<Col xs="12" sm="6" className="text-left semi-bold">Booking Status</Col>
										<Col xs="12" sm="6" className="text-detail">Details ></Col>
									</Row>
								</div>
								<Row className="p-2 text-center mt-3">
									<Col>
										<ul className="list-unstyled">
											<li><IconConfirmed /></li>
											<li className="text-number py-2">{this.state.confirmed}</li>
											<li className="text-detail-value">Confirmed</li>
										</ul>
									</Col>
									<Col>
										<ul className="list-unstyled">
											<li><IconUnconfirmed /></li>
											<li className="text-number py-2">{this.state.unconfirmed}</li>
											<li className="text-detail-value">Unconfirmed</li>
										</ul>
									</Col>
									<Col>
										<ul className="list-unstyled">
											<li><IconNoShow /></li>
											<li className="text-number py-2">{this.state.no_show}</li>
											<li className="text-detail-value">No Show</li>
										</ul>
									</Col>
									<Col>
										<ul className="list-unstyled">
											<li><IconCancel /></li>
											<li className="text-number py-2">{this.state.cancel}</li>
											<li className="text-detail-value">Cancel</li>
										</ul></Col>
									<Col>
										<ul className="list-unstyled">
											<li><IconCheckIn /></li>
											<li className="text-number py-2">{this.state.checked_in}</li>
											<li className="text-detail-value">Checked-In</li>
										</ul>
									</Col>
								</Row>
								</div>
							</Col>
							<Col xs="12" sm="6"> 
								<div className="theBox">
								<div className="theBox-head">
									<Row className="p-2">
										<Col xs="12" sm="6" className="text-left semi-bold">Transaction (in Room)</Col>
										<Col xs="12" sm="6" className="text-detail">Details ></Col>
									</Row>
								</div>								
								<Row className="p-2 text-center mt-3">
									<Col>
										<ul className="list-unstyled">
											<li><IconOccupied /></li>
											<li className="text-number py-2">{this.state.occupied}</li>
											<li className="text-detail-value">Occupied</li>
										</ul>
									</Col>
									<Col>
										<ul className="list-unstyled">
											<li><IconAvailable /></li>
											<li className="text-number py-2">{this.state.available}</li>
											<li className="text-detail-value">Available</li>
										</ul>
									</Col>
									<Col>
										<ul className="list-unstyled">
											<li><IconDNR /></li>
											<li className="text-number py-2">{this.state.dnr}</li>
											<li className="text-detail-value">DNR</li>
										</ul>
									</Col>
									<Col>
										<ul className="list-unstyled">
											<li><IconCheckIn /></li>
											<li className="text-number py-2">{this.state.checked_in}</li>
											<li className="text-detail-value">Checked-In</li>
										</ul>
									</Col>
									<Col>
										<ul className="list-unstyled">
											<li><IconCheckOut /></li>
											<li className="text-number py-2">{this.state.checked_out}</li>
											<li className="text-detail-value">Checked-Out</li>
										</ul>
									</Col>
								</Row>
								</div>
							</Col>
						</Row>
					{/* Row 2 */}
				{/* Row 3 */}
						<Row className="py-2">
							<Col xs="12" sm="6"> 
								<div className="theBox">
								<div className="theBox-head">
									<Row className="p-2">
										<Col xs="12" sm="6" className="text-left semi-bold">Payment Tracker</Col>
										<Col xs="12" sm="6" className="text-detail">Details ></Col>
									</Row>
								</div>
								<Row className="p-2 text-center">
									<Col>
							<table className="ui celled table mt-0 text-center">
							  <thead>
							    <tr>
							      <th className="text-white bg-purple">Apartment Number</th>
							      <th className="text-white bg-purple">Amount Requested</th>
							    </tr>
							  </thead>
							  <tbody>
								    { this.renderListPay() }								    
							  </tbody>
							  <tfoot>
							    <tr>
								    <th className="font-weight-bold bg-tab-bottom">Total</th>
								    <th className="font-weight-bold bg-tab-bottom">{this.state.total_balance} SAR</th>
							  </tr></tfoot>
							</table>
									</Col>									
								</Row>
								</div>
							</Col>
							<Col xs="12" sm="6"> 
								<div className="theBox">
								<div className="theBox-head">
									<Row className="p-2">
										<Col xs="12" sm="6" className="text-left semi-bold">Pending Folio</Col>
										<Col xs="12" sm="6" className="text-detail">Details ></Col>
									</Row>
								</div>								
								<Row className="p-2 text-center">
									<Col>
										<table className="ui celled table mt-0 text-center">
										  <thead>
										    <tr>
										      <th className="text-white bg-tab-pen">Apartment Number</th>
										      <th className="text-white bg-tab-pen">Amount Requested</th>
										    </tr>
										  </thead>
										  <tbody>
										   	{this.renderPendingFolio()}
										  </tbody>
										  <tfoot>
										    <tr>
											    <th className="font-weight-bold bg-tab-bottom">Total</th>
											    <th className="font-weight-bold bg-tab-bottom">{this.state.pending_total_balance} SAR</th>
										  </tr></tfoot>
										</table>
									</Col>
								</Row>
								</div>
							</Col>
						</Row>
					{/* Row 3 */}
					</div>
						{/* Line 2 */}
					<div className="container-background py-3 px-3 my-2">
						<Row>
							<Col className="section-title ">
								Booking Section
							</Col>
							<Col className="text-right">
								<select className="dropdown" id="booking">
				                        <option value="" defaultValue>Select Filter</option>
				                        <option value="today">Today</option>
				                        <option value="monthly">Monthly</option>
				                        <option value="years">Years</option>
				                    </select>
							</Col>
						</Row>
						{/* Row 1 */}
						<Row className="py-2">
							<Col xs="12" sm="6"> 
								<div className="theBox">
								<div className="theBox-head">
									<Row className="p-2">
										<Col xs="12" sm="6" className="text-left semi-bold">Reservation Source</Col>
										<Col xs="12" sm="6" className="text-detail">Details ></Col>
									</Row>
								</div>
								<Row className="p-2">
									<Col xs="12" className="pt-3">
										<ChartReservationSource />
									</Col>
								</Row>
								</div>
							</Col>
							<Col xs="12" sm="6"> 
								<div className="theBox">
								<div className="theBox-head">
									<Row className="p-2">
										<Col xs="12" sm="6" className="text-left semi-bold">Cancelation Rate</Col>
										<Col xs="12" sm="6" className="text-detail">Details ></Col>
									</Row>
								</div>
								<Row className="p-2">
									<Col xs="12" sm="4">
									<p className="text-detail-value mb-0 pt-4">Cancelation Rate</p>
										<CancellationRate />
									</Col>
									<Col xs="12" sm="8">
									<p className="text-detail-value mb-0 pt-4 text-align-clear pl3">Cancelation Reason</p>
										<ChartCancellationReason />
									</Col>
								</Row>
								</div>
							</Col>
						</Row>
					{/* Row 1 */}
					</div>
					{/* Line 2 */}
						{/* Line 3 */}
					<div className="container-background py-3 px-3 my-2">
						<Row>
							<Col className="section-title ">
								Guest Section
							</Col>
							<Col className="text-right">
								<select className="dropdown" id="guest">
				                        <option value="" defaultValue>Select Filter</option>
				                        <option value="today">Today</option>
				                        <option value="monthly">Monthly</option>
				                        <option value="years">Years</option>
				                    </select>
							</Col>
						</Row>
						{/* Row 1 */}
						<Row className="py-2">
							<Col xs="12" sm="6"> 
								<div className="theBox">
								<div className="theBox-head">
									<Row className="p-2">
										<Col xs="12" sm="6" className="text-left semi-bold">Guest Segment</Col>
										<Col xs="12" sm="6" className="text-detail">Details ></Col>
									</Row>
								</div>
								<Row className="p-2">
									<Col xs="12" sm="4" className="text-center box">
									<div className=" box-content">
									<h2 className="text-detail-value text-center">Current Customers</h2>
										<ul className="list-inline">
											<li className="list-inline-item align-super"><IconOccupied /></li>
											<li className="list-inline-item"><p className="text-number">21,360,000</p></li>
										</ul>
									</div>
									</Col>
									<Col xs="12" sm="8">
									<p className="text-detail-value text-align-clear text-right pr35 mb-0 pt-4">Loyalty Program</p>
										<ChartGuestSegment />
									</Col>
								</Row>
								</div>
							</Col>
							<Col xs="12" sm="6"> 
								<div className="theBox">
								<div className="theBox-head">
									<Row className="p-2">
										<Col xs="12" sm="6" className="text-left semi-bold">Guest Feedback</Col>
										<Col xs="12" sm="6" className="text-detail">Details ></Col>
									</Row>
								</div>
								<Row className="p-2 text-center">
									<Col xs="12" sm="5">
									<h2 className="text-detail-value text-center pt-4 mb-0 pb-3">Do you repeat to visit?</h2>
										<ChartCustomerSurvey />
									</Col>
									<Col xs="12" sm="7" className="box">
									<div className="box-content">
										<table className="theBox w90 mb-2">
											<thead className="theBox-head">
												<tr className="border-bottom">
													<td colSpan="2" className="border-right">Respondents</td>
													<td className="w127">Average Rating</td>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td className="border-right w30">
														<ul className="list-unstyled">
															<li className="text-number f14">375</li>
															<li className="text-detail-value f12">Forms Sent</li>
														</ul>
													</td>
													<td className="border-right w30">
														<ul className="list-unstyled">
															<li className="text-number f14">347</li>
															<li className="text-detail-value f12">Who Rated</li>
														</ul>
													</td>
													<td className=" w30">
														<ul className="list-unstyled">
															<li className="text-number f14">8</li>
															<li className="text-detail-value f12">Out of 10</li>
														</ul>
													</td>
												</tr>
											</tbody>
										</table>
										<table className="theBox w90">
										<tbody>
											<tr>
												<td className="border-right w30">
													<ul className="list-unstyled">
															<li className="text-number f14">260</li>
															<li className="text-detail-value f12 green-circle">Vote Yes</li>
													</ul>
												</td>
												<td className="border-right w30">
													<ul className="list-unstyled">
															<li className="text-number f14">87</li>
															<li className="text-detail-value f12 red-circle">Vote No</li>
														</ul>
												</td>
												<td className="w30">
													<ul className="list-unstyled">
															<li className="text-number f14">347</li>
															<li className="text-detail-value f12">Total Vote</li>
														</ul>
												</td>
											</tr>
											</tbody>
										</table>
										</div>
									</Col>
								</Row>
								</div>
							</Col>
						</Row>
					{/* Row 1 */}
					</div>
					{/* Line 3 */}
						{/* Line 4 */}
					<div className="container-background py-3 px-3 my-2">
						<Row>
							<Col className="section-title ">
								Advance Report
							</Col>
							<Col className="text-right">
								<select className="dropdown" id="report">
				                        <option value="" defaultValue>Select Filter</option>
				                        <option value="today">Today</option>
				                        <option value="monthly">Monthly</option>
				                        <option value="years">Years</option>
				                    </select>
							</Col>
						</Row>
						{/* Row 1 */}
						<Row className="py-2">
							<Col xs="12" sm="6"> 
								<div className="theBox">
								<div className="theBox-head">
									<Row className="p-2">
										<Col xs="12" sm="6" className="text-left semi-bold">Sales Perfomance</Col>
										<Col xs="12" sm="6" className="text-detail">Details ></Col>
									</Row>
								</div>
								<Row className="p-2">
									<Col><ChartCampaignAndSales /></Col>								
								</Row>
								</div>
							</Col>
							<Col xs="12" sm="6"> 
								<div className="theBox">
								<div className="theBox-head">
									<Row className="p-2">
										<Col xs="12" sm="6" className="text-left semi-bold">Room Tracking</Col>
										<Col xs="12" sm="6" className="text-detail">Details ></Col>
									</Row>
								</div>
								<Row className="p-2 text-center">
									<Col xs="12" sm="6">
										<p className="text-detail-value mb-0 pt-4">Unfair Power Comsumption</p>
										<ChartPowerConsumption />
										<Row>
											<Col>
												<ul className="list-unstyled">
													<li className="text-number f18">500</li>
													<li className="text-detail-value f12">Hours Usage</li>
												</ul>
											</Col>
											<Col>
												<ul className="list-unstyled">
													<li className="text-number f18 text-red">5,589.5</li>
													<li className="text-detail-value f12">Loss (in SAR)</li>
												</ul>
											</Col>
										</Row>
									</Col>
									<Col xs="12" sm="6">
										<p className="text-detail-value mb-0 pt-4">Security Alarm</p>
										<ChartSecurityAlarm />
										<Row>
											<Col>
												<ul className="list-unstyled">
													<li className="text-number f18">15</li>
													<li className="text-detail-value f12">Rooms Detected</li>
												</ul>
											</Col>
										</Row>
									</Col>									
								</Row>
								</div>
							</Col>
						</Row>
					{/* Row 1 */}
					</div>
					{/* Line 4 */}
			</div>
		);
	}
}
}

export default FrontDash;