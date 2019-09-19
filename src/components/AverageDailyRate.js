import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import Chart from 'react-apexcharts';


class AverageDailyRate extends Component{
	constructor(props) {
        super(props);

        this.state = {
          options: {
            colors: ['#3A5794', '#A5C351', '#E14A84'],
            chart: {
              stacked: false,
            },
            stroke: {
              width: [0, 2, 5],
              curve: 'smooth'
            },
            plotOptions: {
              bar: {
                columnWidth: '50%'
              }
            },

            fill: {
              opacity: [0.85, 0.25, 1],
              gradient: {
                inverseColors: false,
                shade: 'light',
                type: "vertical",
                opacityFrom: 0.85,
                opacityTo: 0.55,
                stops: [0, 100, 100, 100]
              }
            },
            labels: ['01/01/2003', '02/01/2003', '03/01/2003', '04/01/2003', '05/01/2003', '06/01/2003', '07/01/2003', '08/01/2003', '09/01/2003', '10/01/2003', '11/01/2003'
            ],
            markers: {
              size: 2
            },
            xaxis: {
              type: 'datetime'
            },
            yaxis: {
              title: {
                text: 'Points',
              },
              min: 0
            },
            tooltip: {
              shared: true,
              intersect: false,
              y: {
                formatter: function (y) {
                  if (typeof y !== "undefined") {
                    return y.toFixed(0) + " points";
                  }
                  return y;
                }
              }
            }
          },
          

          series: [{
            name: 'Revenue (per Room Type)',
            type: 'column',
            data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
          }, {
            name: 'Occupancy Rate',
            type: 'line',
            data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
          }, {
            name: 'Average Daily Rate',
            type: 'line',
            data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
          }],
        }
      }


	render(){
		return(
			<React.Fragment>
						<Row className="text-center">
							<Col xs="12" className="text-center">
								<Chart options={this.state.options} series={this.state.series} type="line" height="330" />
							</Col>              
            </Row>
			</React.Fragment>
		);
	}
}

export default AverageDailyRate;