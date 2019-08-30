import React, { Component } from 'react';
import Chart from 'react-apexcharts';

class ChartReservation extends Component{ 
constructor(props) {
        super(props);

        this.state = {
          options: {
            plotOptions: {
              radialBar: {
                size: 120,
                offsetY: -10,
                startAngle: 0,
                endAngle: 270,
                hollow: {
                  margin: 10,
                  size: '40%',
                  background: 'transparent',
                  image: undefined,
                },
                dataLabels: {
                  name: {
                    show: false,

                  },
                  value: {
                    show: false,
                  }
                }
              }
            },
            colors: ['#e74c3c', '#2ecc71', '#3498db'],
            labels: ['Website', 'Reservation', 'OTAs'],
            legend: {
              show: true,
              floating: true,
              fontSize: '10px',
              position: 'left',
              offsetX: -8,
              offsetY: -5,
              labels: {
                  useSeriesColors: true,
              },
              markers: {
                  size: 10,
              },
              formatter: function(seriesName, opts) {
                  return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
              },
              itemMargin: {
                  horizontal: 1,
              }
            },
            responsive: [{
                breakpoint: 480,
                options: {
                    legend: {
                        show: false
                    }
                }
            }]
          },
          series: [50, 40, 10],
        }
      }




	render(){
		return(
		<div id="chart">
            <Chart options={this.state.options} series={this.state.series} type="radialBar" height="380" />
          </div>
		);
	}
}

export default ChartReservation;