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
              size: '65%',
              background: '#fff',
              image: undefined,
              imageOffsetX: 0,
              imageOffsetY: 0,
              position: 'front',
              dropShadow: {
                enabled: true,
                top: 0,
                left: 0,
                blur: 0
              }
            },
            track: {
              background: '#fff',
              strokeWidth: '90%',
              margin: 0, // margin is in pixels
              dropShadow: {
                enabled: true,
                top: 0,
                left: 0,
                blur: 0
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
                fontSize: '14px',
                show: true,

              }
            }
          }
        },
        fill: {
          type: 'solid',
          colors: ['#FFBD58']
        },
        stroke: {
          lineCap: 'butt'
        },
        labels: ['Occupancy Rate'],

      },     
      seriesRadial: [17]
    }
}

      

  handleChange(e) {    
    this.setState({
        seriesRadial: [85]
    });
}

	render(){
		return(
			<React.Fragment>
						<Row className="text-center">
							<Col xs="12" className="text-center">
              <h2 className="text-detail-value f14 orange-circle mb-0 pt-3">Occupancy Rate</h2>
								<Chart options={this.state.optionsRadial} series={this.props.dataOccupancy} type="radialBar" width="100%" height="272px"/>
							</Col>              
						</Row>            
			</React.Fragment>
		);
	}
}

export default ChartRoomMissused;