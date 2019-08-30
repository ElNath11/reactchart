import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import Chart from 'react-apexcharts';


class ChartRoomMissused extends Component{
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
                color: '#666666',
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
        labels: ['Room Missused'],

      },     
      seriesRadial: [34]
    }
}


	render(){
		return(
			<React.Fragment>
						<Row className="text-center">
							<Col xs="12" className="text-center">
								<Chart options={this.state.optionsRadial} series={this.state.seriesRadial} type="radialBar" width="100%"/>
							</Col>              
						</Row>            
			</React.Fragment>
		);
	}
}

export default ChartRoomMissused;