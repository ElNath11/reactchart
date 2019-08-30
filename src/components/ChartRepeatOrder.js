import React, { Component } from 'react';
import {  Row, Col } from 'reactstrap';
import Chart from 'react-apexcharts';


class ChartRepeatOrder extends Component{
	constructor(props){
		super(props);

		this.state = {

     optionsRadial: {
        plotOptions: {
          radialBar: {
            
            hollow: {
              margin: 0,
              size: '70%',
              background: '#fff',
              image: undefined,
              imageOffsetX: 0,
              imageOffsetY: 0,
              position: 'front',
              dropShadow: {
                enabled: true,
                top: 3,
                left: 0,
                blur: 4,
                opacity: 0.24
              }
            },
            track: {
              background: '#fff',
              strokeWidth: '67%',
              margin: 0, // margin is in pixels
              dropShadow: {
                enabled: true,
                top: -3,
                left: 0,
                blur: 4,
                opacity: 0.35
              }
            },

            dataLabels: {
              showOn: 'always',
              name: {
                offsetY: -20,
                show: true,
                color: '#888',
                fontSize: '14px'
              },
              value: {
                formatter: function (val) {
                  return val+'%';
                },
                color: '#e74c3c',
                fontSize: '30px',
                show: true,
              }
            }
          }
        },
        fill: {
          type: 'solid',
          colors: ['#e74c3c']
        },
        stroke: {
          lineCap: 'butt'
        },
        labels: ['Yes'],

      },     
      seriesRadial: [75]



    }
}


	render(){
		return(
			<React.Fragment>
						<Row className="text-center ui segment">
							<Col xs="12" sm="6" className="text-center">
								<Chart options={this.state.optionsRadial} series={this.state.seriesRadial} type="radialBar" width="100%"/>
							</Col>
              <Col xs="12" sm="6" className="text-left">
                  <ul className="list-unstyled pb-3 pt-4">
                      <li className="red-circle">260 visitors voted yes</li>
                      <li className="grey-circle">87 visitors voted no</li>
                  </ul>
                  <hr className="line"></hr>
                  <p><span className="text-red">350 </span>Total visitors who voted</p>
              </Col>
						</Row>           
            <Row>              
            <Col>
                <div className="col bg-white pretty-box border-s px-0 text-center mt-3">
                  <div className="row col-12 m-0 px-3 border-bottom">
                    <div className="col-6 border-right">Respondents</div>
                    <div className="col-6">Average Rating</div>
                  </div>
                  <div className="row px-3 pb-3">
                    <div className="col px-0">
                      <ul className="list-unstyled mb-0  border-right">
                        <li className="f24 text-orange">15</li>
                        <li className="f10 text-black">Check-out</li>
                      </ul>
                    </div>
                    <div className="col px-0">
                      <ul className="list-unstyled mb-0  border-right">
                        <li className="f24 text-orange">10</li>
                        <li className="f10 text-black">Who rated</li>
                      </ul>
                    </div>
                    <div className="col px-0">
                      <ul className="list-unstyled mb-0 ">
                        <li className="f24 text-green py-2">8/10</li>
                      </ul>
                    </div>
                  </div>
                </div>

              </Col>
            </Row>
			</React.Fragment>
		);
	}
}

export default ChartRepeatOrder;