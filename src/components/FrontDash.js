import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import Chart from 'react-apexcharts';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


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

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

	render(){
		return(
			<div className="bg-grey pb-2 px-3 pt-3">
				<div className="dash-title">Dashboard</div>

					<div className="container-background py-3 px-3 my-2">
						<Row>
							<Col className="section-title ">
								Front Desk
							</Col>
							<Col className="text-right">
								<Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
							        <DropdownToggle caret>
							          Today
							        </DropdownToggle>
							        <DropdownMenu>
							          <DropdownItem header>Header</DropdownItem>
							          <DropdownItem>Months</DropdownItem>
							        </DropdownMenu>  
							      </Dropdown>
							</Col>
						</Row>
					{/* Row 1 */}
						<Row className="py-2">
							<Col xs="12" sm="6"> 
								<div className="theBox">
								<div className="theBox-head">
									<Row className="p-2">
										<Col xs="12" sm="6" className="text-left">Room Statistic Overview</Col>
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
										<Col xs="12" sm="6" className="text-left">Revenue</Col>
										<Col xs="12" sm="6" className="text-detail">Details ></Col>
									</Row>
								</div>
								<Row className="p-2 text-center">
									<Col xs="12" sm="4"><OccupancyRate /></Col>
									<Col xs="12" sm="4"><AverageDailyRateCircular /></Col>
									<Col xs="12" sm="4"><TotalRevenue /></Col>
								</Row>
								<Row className="p-2 text-center">
									<Col xs="12" sm="4">
										<ul className="list-unstyled">
											<li className="text-number">135</li>
											<li className="text-detail-value">Rooms</li>
										</ul>
									</Col>
									<Col xs="12" sm="4">
										<ul className="list-unstyled">
											<li className="text-number">475</li>
											<li className="text-detail-value">In SAR</li>
										</ul>
									</Col>
									<Col xs="12" sm="4">
										<ul className="list-unstyled">
											<li className="text-number">15,970</li>
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
								<Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
							        <DropdownToggle caret>
							          Today
							        </DropdownToggle>
							        <DropdownMenu>
							          <DropdownItem header>Header</DropdownItem>
							          <DropdownItem>Months</DropdownItem>
							        </DropdownMenu>  
							      </Dropdown>
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
								<Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
							        <DropdownToggle caret>
							          Today
							        </DropdownToggle>
							        <DropdownMenu>
							          <DropdownItem header>Header</DropdownItem>
							          <DropdownItem>Months</DropdownItem>
							        </DropdownMenu>  
							      </Dropdown>
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
								<Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
							        <DropdownToggle caret>
							          Today
							        </DropdownToggle>
							        <DropdownMenu>
							          <DropdownItem header>Header</DropdownItem>
							          <DropdownItem>Months</DropdownItem>
							        </DropdownMenu>  
							      </Dropdown>
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