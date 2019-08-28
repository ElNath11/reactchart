import React , {Component} from 'react';
import Chart from './Chart';


class ChartFront extends Component{

	constructor(){
    super();
    this.state = {
      chartData:{}
    }
  }

  componentWillMount(){
    this.getChartData();
  }

  getChartData(){
      this.setState({
        chartData: {
        labels: ['Boston', 'Seattle', 'New York', 'DC', 'Arizona'],
        datasets:[
          {
            label: 'Population',
            data:[
            3443434,
            3980000,
            4554333,
            5646454,
            4339900
            ],
            backgroundColor:[
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(255, 99, 132, 0.6)'
            ]
          }
        ]
      }
      });    
  }

	render(){
		return(
			<div>
				<Chart chartData={this.state.chartData} location="New York" legendPosition="bottom"/>
			</div>
		);
	}
}

export default ChartFront;