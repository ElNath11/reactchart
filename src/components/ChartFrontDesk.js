import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import Chart from 'react-apexcharts';


class ChartFrontDesk extends Component{
	constructor(props){
		super(props);

		this.state = {

     optionsRadial: {
        plotOptions: {
          radialBar: {
            startAngle: -135,
            endAngle: 225,
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
                fontSize: '13px'
              },
              value: {
                formatter: function (val) {
                  return val;
                },
                color: '#111',
                fontSize: '30px',
                show: true,
              }
            }
          }
        },
        fill: {
          type: 'solid',
          colors: ['#3498db']
        },
        stroke: {
          lineCap: 'round'
        },
        labels: ['ADR'],

      },
      optionsRadial2: {
        plotOptions: {
          radialBar: {
            startAngle: -135,
            endAngle: 225,
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
                fontSize: '13px'
              },
              value: {
                formatter: function (val) {
                  return val+'%';
                },
                color: '#111',
                fontSize: '30px',
                show: true,
              }
            }
          }
        },
        fill: {
          type: 'solid',
          colors: ['#2ecc71']
        },
        stroke: {
          lineCap: 'round'
        },
        labels: ['Room Occupied'],

      },
      optionsRadial3: {
        plotOptions: {
          radialBar: {
            startAngle: -135,
            endAngle: 225,
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
                fontSize: '13px'
              },
              value: {
                formatter: function (val) {
                  return val;
                },
                color: '#111',
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
          lineCap: 'round'
        },
        labels: ['Total Rev. Services'],

      },
      seriesRadial: [340],
      seriesRadial2: [61],
      seriesRadial3: [3400]


    }
}


	render(){
		return(
			<React.Fragment>
						<Row className="text-center ui segment">
							<Col xs="12" sm="4" className="text-center">
								<Chart options={this.state.optionsRadial} series={this.state.seriesRadial} type="radialBar" width="100%"/>
							</Col>
          					<Col xs="12" sm="4" className="text-center">
          						<Chart options={this.state.optionsRadial2} series={this.state.seriesRadial2} type="radialBar" width="100%"/>
          					</Col>
          					<Col xs="12" sm="4" className="text-center">
          							<Chart options={this.state.optionsRadial3} series={this.state.seriesRadial3} type="radialBar" width="100%"/>
          					</Col>
						</Row>
			</React.Fragment>
		);
	}
}

export default ChartFrontDesk;