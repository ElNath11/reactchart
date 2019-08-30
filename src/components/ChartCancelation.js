import React, { Component } from 'react';
import Chart from 'react-apexcharts';

class ChartReservation extends Component{ 
 constructor(props) {
        super(props);

 this.state = {


   
          plotOptions: {
            dataLabels: {
              enabled: false
            },

            responsive: [{
              breakpoint: 480,
              options: {
                chart: {
                  width: 200
                },
                legend: {
                  show: false
                }
              }
            }],
            colors: ['#e74c3c', '#2ecc71', '#3498db', '#9b59b6', '#1abc9c'],
            labels: ['Change Plan', 'Price', 'Location', 'Others', 'Poor of Services'],
            legend: {
                position: 'right',
                offsetY: 0,
                height: 230,
              formatter: function(seriesName, opts) {
                  return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]+'%'
              },
            },
          },
          series: [30, 20, 10, 10, 30],
        }
      }

	render(){
		return(
		<div id="chart">
            <Chart options={this.state.plotOptions} series={this.state.series} type="donut" width="600" />
          </div>
		);
	}
}

export default ChartReservation;