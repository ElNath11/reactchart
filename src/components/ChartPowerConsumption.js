import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import Chart from 'react-apexcharts';


class ChartPowerConsumption extends Component{
	constructor(props){
		super(props);

		this.state = {

     optionsRadial: {
        plotOptions: {
          radialBar: {
            
            hollow: {
              margin: 0,
              size: '65%',
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
              strokeWidth: '90%',
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
              name: {
                show: false,
              },
              value: {
                formatter: function (val) {
                  return val+'%';
                },
                offsetY: 2,
                color: '#666666',
                fontSize: '18px',
                show: true,

              }
            }
          }
        },
        fill: {
          type: 'solid',
          colors: ['#F44336']
        },
        stroke: {
          lineCap: 'butt'
        },
        labels: ['Occupancy Rate'],

      },     
      seriesRadial: [35]
    }
}


	render(){
		return(
			<React.Fragment>
						<Row className="text-center">
							<Col xs="12" className="text-center">
								<Chart options={this.state.optionsRadial} series={this.state.seriesRadial} type="radialBar" width="100%" height="229px"/>
							</Col>              
						</Row>            
			</React.Fragment>
		);
	}
}

export default ChartPowerConsumption;