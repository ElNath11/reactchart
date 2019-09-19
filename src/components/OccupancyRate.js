import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import Chart from 'react-apexcharts';


class ChartRoomMissused extends Component{
	constructor(props){
		super(props);

    this.updateCharts = this.updateCharts.bind(this)

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

  updateCharts() {
   
    const max = 90;
    const min = 30;
    const newMixedSeries = [];
    const newBarSeries = [];

    this.state.seriesMixedChart.map((s) => {
      const data = s.data.map(() => {
        return Math.floor(Math.random() * (max - min + 1)) + min
      })
      newMixedSeries.push({ data: data, type: s.type })
    })

    this.state.seriesBar.map((s) => {
      const data = s.data.map(() => {
        return Math.floor(Math.random() * (180 - min + 1)) + min
      })
      newBarSeries.push({ data, name: s.name })
    })


    this.setState({
      seriesMixedChart: newMixedSeries,
      seriesBar: newBarSeries,
      seriesRadial: [Math.floor(Math.random() * (90 - 50 + 1)) + 50]
    })
  }

  handleChange(event) {
    let value = event.target.value;

    this.state.today = [10];
    this.state.monthly = [35];
    this.state.years = [82];

    this.setState({
        seriesRadial: this.state.value
    });
}

	render(){
		return(
			<React.Fragment>
						<Row className="text-center">
							<Col xs="12" className="text-center">
              <h2 className="text-detail-value f14 orange-circle mb-0 pt-3">Occupancy Rate</h2>
								<Chart options={this.state.optionsRadial} series={this.state.seriesRadial} type="radialBar" width="100%" height="276px"/>
                  <p className="col">
                    <select className="dropdown" id="dd" onChange={(e) => this.handleChange(e)}>
                        <option value="" selected="selected">Select Filter</option>
                        <option value="today">Today</option>
                        <option value="monthly">Monthly</option>
                        <option value="years">Years</option>
                    </select>
                  </p>
							</Col>              
						</Row>            
			</React.Fragment>
		);
	}
}

export default ChartRoomMissused;