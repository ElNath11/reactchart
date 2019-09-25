import React, { Component } from 'react';
import {Bar} from 'react-chartjs-2';

import ReactDOM from 'react-dom';
import Chart from 'chart.js';

class ChartMix extends React.Component {
  constructor(props) {
        
        super(props);
        this.state = {
          chart: null,
  }
}
  componentDidMount() {
    this.configureChart();
  }

  configureChart = () => {
    const chartCanvas = ReactDOM.findDOMNode(this.chart);

    const mixedChart = new Chart(chartCanvas, {
      type: "bar",
      data: {
        datasets: [
          {
            label: "Bar Dataset",
            data: [7, 3, 0, 10, 0, 0, 0, 10, 0, 15, 0, 0],
            type: "bar",
            backgroundColor: "#DE924B"
          },         
          {
            label: "Line Dataset",
            data: [95, 73, 95, 85, 120, 20, 40, 70, 95, 75, 20, 85, 100],
            pointHoverRadius: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
            type: "line",
            backgroundColor: "rgba(0,50,0,0.75)",
            fill: "start",
            // pointRadius: 0,
            pointStyle: "circle",
            pointBackgroundColor: "rgba(0, 0, 0, 0)",
            pointBorderColor: "rgba(0, 0, 0, 0)"
          },   
          {
            label: "Line Dataset",
            data: [95, 73, 95, 85, 120, 80, 100, 70, 95, 75, 100, 85, 100],
            pointHoverRadius: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
            type: "line",
            backgroundColor: "rgba(0,255,0,0.75)",
            fill: "start",
            // pointRadius: 0,
            pointStyle: "circle",
            pointBackgroundColor: "rgba(0, 0, 0, 0)",
            pointBorderColor: "rgba(0, 0, 0, 0)"
          }
        ],
        labels: this.props.mixLabels
      },
      options: {
        elements: {
          line: {
            tension: 0.000001
          }
        },
        tooltips: {
          displayColors: false
        },
        legend: {
          display: true,
          position: "bottom"
        },
        scales: {
          yAxes: [
            {
              display: true,
              // stacked: true,
              ticks: {
                beginAtZero: true
              }
            }
          ],
          xAxes: [
            {
              display: true,
              stacked: true,
              barThickness: 25,
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    });
  };

  render() {

    return (
      <div>
        <canvas
          ref={chart => {
            this.chart = chart;
          }}
        />
      </div>
    );
  }
}



export default ChartMix;