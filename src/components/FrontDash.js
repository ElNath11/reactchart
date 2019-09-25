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
import IconTracker from './icons/IconTracker'


class FrontDash extends Component {
constructor(props) {
    super(props);

   this.state = {   	
   	itemsPerformance: [],
   	hotel_performance_sumary: [],
   	room_performance_sumary: [],
   	total_room: 0,
   	occupancy_rate: 0,
   	average_daily_rate: 0,
   	total_daily_rate: 0,
   	total_revenue: 0,
   	filterFront: 'day',
   	rate: ''
   }
   
  }

  componentDidMount() {
       // fetch("http://feeback.dev.ms.taskyinn.com/dashboard/frontdesk/10/day")
       //  .then(res => res.json())
       //  .then(parsedJSON => {
       //  	this.setState({
       //  		hotel_performance_sumary: parsedJSON.data.hotel_performance_sumary.result,
       //  		room_performance_sumary: parsedJSON.data.room_performance_sumary.result,
       //  	})
        	
       //  })
       //  .then(itemsPerformance => this.setState({
       //    itemsPerformance,
       //    isLoaded: false
       //  }))
       //  .catch(error => console.log('parsing failed', error))
       	

        this.fetchHotelPerformance(this.state.filterFront);
        this.fetchRoomPerformance();
        
    }

    fetchHotelPerformance(filter){
    	//filterFront = this.state.filterFront;//
    	console.log('bimo', filter);
    	fetch(`http://feeback.dev.ms.taskyinn.com/dashboard/frontdesk/10/${filter}`)

        .then(res => res.json())
        
        .then(response => { console.log('ini ',  response); this.setState({
          hotel_performance_sumary: response.data.hotel_performance_sumary,
          occupancy_rate: response.data.hotel_performance_sumary.occupancy_rate,
          average_daily_rate: response.data.hotel_performance_sumary.average_daily_rate,
          isLoaded: false
        })})
        .catch(error => console.log('parsing failed', error))
    }

    fetchRoomPerformance(){
         fetch("http://feeback.dev.ms.taskyinn.com/dashboard/frontdesk/10/day")
        .then(res => res.json())
        .then(parsedJSON => parsedJSON.data.room_performance_sumary.result.map(data => (
          {
            name: `${data.name}`,
            room_count: `${data.room_count}`,
            occupancy_count: `${data.occupancy_count}`,
            total_rev: `${data.total_rev}`,
            average_daily_rate: `${data.average_daily_rate}`,
          }
        )))
        .then(room_performance_sumary => this.setState({
          room_performance_sumary,
          isLoaded: false
        }))
        .catch(error => console.log('parsing failed', error))
    }
    
     OnClickFilterFront = (value, filterFront) => {
    	this.setState({ filterFront: value });
    	this.fetchHotelPerformance(value);
    	
  	};

 handleChangeDesk = (e) => {
    console.log('Selected value:', e.target.value);
    this.setState({
      filterFront: e.target.value,
    })
    console.log('new filter ',this.state.filterFront);
  }



	render(){
		const {room_performance_sumary, hotel_performance_sumary } = this.state;
		console.log('room', room_performance_sumary);
		console.log('rate', hotel_performance_sumary.occupancy_rate);
		console.log('STATE', this.state);		

		return(
			<div className="pb-2 px-3 pt-3">
				<div className="dash-title">Dashboard</div>
					<div className="container-background py-3 px-3 my-2">
						<Row>
							<Col className="section-title ">
								Front Desk
							</Col>
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
										<Col xs="12" sm="6" className="text-left">Room Performance</Col>
										<Col xs="12" sm="6" className="text-detail">Details ></Col>
									</Row>
								</div>
								 
								<Row className="p-2">
									<Col xs="12">
										<AverageDailyRate />
									</Col>									
								</Row>
								</div>
							</Col>
							
							<Col xs="12" sm="6">										
								<div className="theBox">
								<div className="theBox-head">
									<Row className="p-2">
										<Col xs="12" sm="6" className="text-left">Hotel Performance</Col>
										<Col xs="12" sm="6" className="text-detail">Details ></Col>
									</Row>
								</div>
													
								<Row className="p-2 text-center">
									<Col xs="12" sm="4">
									{}
									<OccupancyRate dataOccupancy={[this.state.occupancy_rate]} />
									</Col>
									<Col xs="12" sm="4"><AverageDailyRateCircular dataAverage={[this.state.average_daily_rate]} /></Col>
									<Col xs="12" sm="4"><TotalRevenue /></Col>
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
										<Col xs="12" sm="6" className="text-left">Booking Status</Col>
										<Col xs="12" sm="6" className="text-detail">Details ></Col>
									</Row>
								</div>
								<Row className="p-2 text-center">
									<Col>
										<ul className="list-unstyled">
											<li><IconConfirmed /></li>
											<li className="text-number py-2">25</li>
											<li className="text-detail-value">Confirmed</li>
										</ul>
									</Col>
									<Col>
										<ul className="list-unstyled">
											<li><IconUnconfirmed /></li>
											<li className="text-number py-2">5</li>
											<li className="text-detail-value">Unconfirmed</li>
										</ul>
									</Col>
									<Col>
										<ul className="list-unstyled">
											<li><IconNoShow /></li>
											<li className="text-number py-2">5</li>
											<li className="text-detail-value">No Show</li>
										</ul>
									</Col>
									<Col>
										<ul className="list-unstyled">
											<li><IconCancel /></li>
											<li className="text-number py-2">5</li>
											<li className="text-detail-value">Cancel</li>
										</ul></Col>
									<Col>
										<ul className="list-unstyled">
											<li><IconCheckIn /></li>
											<li className="text-number py-2">5</li>
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
										<Col xs="12" sm="6" className="text-left">Transaction (in Room)</Col>
										<Col xs="12" sm="6" className="text-detail">Details ></Col>
									</Row>
								</div>								
								<Row className="p-2 text-center">
									<Col>
										<ul className="list-unstyled">
											<li><IconOccupied /></li>
											<li className="text-number py-2">25</li>
											<li className="text-detail-value">Occupied</li>
										</ul>
									</Col>
									<Col>
										<ul className="list-unstyled">
											<li><IconAvailable /></li>
											<li className="text-number py-2">50</li>
											<li className="text-detail-value">Available</li>
										</ul>
									</Col>
									<Col>
										<ul className="list-unstyled">
											<li><IconDNR /></li>
											<li className="text-number py-2">11</li>
											<li className="text-detail-value">DNR</li>
										</ul>
									</Col>
									<Col>
										<ul className="list-unstyled">
											<li><IconCheckIn /></li>
											<li className="text-number py-2">7</li>
											<li className="text-detail-value">Checked-In</li>
										</ul>
									</Col>
									<Col>
										<ul className="list-unstyled">
											<li><IconCheckOut /></li>
											<li className="text-number py-2">3</li>
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
										<Col xs="12" sm="6" className="text-left">Payment Tracker</Col>
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
							    <tr>
							      <td>201</td>
							      <td>900 <span className="f10">SAR</span></td>
							    </tr>
							    <tr  className="text-blue">
							      <td>309</td>
							      <td>
								      <ul className="list-inline mb-0">
								      	<li className="list-inline-item mr-0">500 <span className="f10">SAR</span></li>
								      	<li className="list-inline-item float-right"><span><IconTracker /></span></li>
								      </ul>
							      </td>
							    </tr>
							    <tr>
							      <td>483</td>
							      <td>1200 <span className="f10">SAR</span></td>
							    </tr>
							  </tbody>
							  <tfoot>
							    <tr>
								    <th className="font-weight-bold bg-tab-bottom">Total</th>
								    <th className="font-weight-bold bg-tab-bottom">2500 SAR</th>
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
										<Col xs="12" sm="6" className="text-left">Pending Folio</Col>
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
										    <tr>
										      <td>201</td>
										      <td>900 <span className="f10">SAR</span></td>
										    </tr>
										    <tr className="text-blue">
										      <td>309</td>
										      <td>
											      <ul className="list-inline mb-0">
											      	<li className="list-inline-item mr-0">500 <span className="f10">SAR</span></li>
											      	<li className="list-inline-item float-right"><span><IconTracker /></span></li>
											      </ul>
										      </td>
										    </tr>
										    <tr>
										      <td>483</td>
										      <td>1200 <span className="f10">SAR</span></td>
										    </tr>
										  </tbody>
										  <tfoot>
										    <tr>
											    <th className="font-weight-bold bg-tab-bottom">Total</th>
											    <th className="font-weight-bold bg-tab-bottom">2500 SAR</th>
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
										<Col xs="12" sm="6" className="text-left">Reservation Source</Col>
										<Col xs="12" sm="6" className="text-detail">Details ></Col>
									</Row>
								</div>
								<Row className="p-2">
									<Col xs="12 text-left">
										<ChartReservationSource />
									</Col>
								</Row>
								</div>
							</Col>
							<Col xs="12" sm="6"> 
								<div className="theBox">
								<div className="theBox-head">
									<Row className="p-2">
										<Col xs="12" sm="6" className="text-left">Cancelation Rate</Col>
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
										<Col xs="12" sm="6" className="text-left">Guest Segment</Col>
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
										<Col xs="12" sm="6" className="text-left">Guest Feedback</Col>
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
													<td>Average Rating</td>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td className="border-right">
														<ul className="list-unstyled">
															<li className="text-number f14">375</li>
															<li className="text-detail-value f12">Forms Sent</li>
														</ul>
													</td>
													<td className="border-right">
														<ul className="list-unstyled">
															<li className="text-number f14">347</li>
															<li className="text-detail-value f12">Who Rated</li>
														</ul>
													</td>
													<td>
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
												<td className="border-right">
													<ul className="list-unstyled">
															<li className="text-number f14">260</li>
															<li className="text-detail-value f12 green-circle">Vote Yes</li>
													</ul>
												</td>
												<td className="border-right">
													<ul className="list-unstyled">
															<li className="text-number f14">87</li>
															<li className="text-detail-value f12 red-circle">Vote No</li>
														</ul>
												</td>
												<td className=" ">
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
										<Col xs="12" sm="6" className="text-left">Sales Perfomance</Col>
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
										<Col xs="12" sm="6" className="text-left">Room Tracking</Col>
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
													<li className="text-number f14">500</li>
													<li className="text-detail-value f12">Hours Usage</li>
												</ul>
											</Col>
											<Col>
												<ul className="list-unstyled">
													<li className="text-number f14 text-red">5,589.5</li>
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
													<li className="text-number f14">15</li>
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

export default FrontDash;