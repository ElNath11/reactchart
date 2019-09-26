import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import Chart from 'react-apexcharts';


class AverageDailyRate extends Component{
 


	constructor(props) {
        
        super(props);
        this.state = {
          seriesRevenue: this.props.seriesRevenue,  

          options: {
            colors: ['#A4DC72', '#FFBD58', '#A3A0FB'],
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
            labels: this.props.dataLab,
            markers: {
              size: 2
            },
            xaxis: {
              type: 'text'
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
            data: props.seriesRevenue
          }, {
            name: 'Occupancy Rate',
            type: 'area',
            data: props.seriesOccu
          }, {
            name: 'Average Daily Rate',
            type: 'line',
            data: props.seriesAverage
          }],      

        }
      }

	render(){
    console.log('PROPS revenue', this.props.revenue);
    console.log('STATE revenue', this.state.revenue);

    const seriesRevenue = this.props.revenue;
    const seriesOccu = this.props.seriesOccu;
    const seriesAverage = this.props.seriesAverage;

    const series = 
           [{
            name: 'Revenue (per Room Type)',
            type: 'column',
            data: this.props.seriesRevenue
          }, {
            name: 'Occupancy Rate',
            type: 'area',
            data: this.props.seriesOccu
          }, {
            name: 'Average Daily Rate',
            type: 'line',
            data: this.props.seriesAverage
          }];

		return(
			<React.Fragment>
						<Row className="text-center">
							<Col xs="12" className="text-center">

								<Chart options={this.state.options} series={series} type="line" height="330" />
							</Col>              
            </Row>
			</React.Fragment>
		);
	}
}

export default AverageDailyRate;