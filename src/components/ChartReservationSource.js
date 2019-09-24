import React from "react";
import Chart from "react-apexcharts";
import { Row, Col } from 'reactstrap';

class ChartCurrentCustomer extends React.Component {
  constructor(props) {
    super(props);

    this.appendToState = () => {
      this.setState({
        series: [5000, 1500, 4000],
      });

      /*console.log(this.state.series, "Before update");*/
    };
    this.update = appendToState => {
      setTimeout(function() {
        appendToState();
      }, 6000);
    };

    this.state = {
      series: [5000, 1500, 4000],

      options: {
        colors: ['#A3A0FB', '#FFC06A', '#A4DC72'],
            labels: ['Direct Booking', 'Website', 'OTA`s'],
        plotOptions: {
          pie: {
             size: 125,
            offsetX: -10,
            offsetY: 0,
            expandOnClick: true,
            donut: {
              size: "80%",
              labels: {
                show: true,
                name: {
                  show: true,
                  fontSize: "12px",
                  fontFamily: undefined,
                  offsetY: 0
                },

                total: {
                  show: true,
                  label: "Total Cancellation Rate",
                  color: "#999999",
                  offsetY: 10,
                  offsetX: 0,
                 formatter: function(w) {
                  return (
                    w.globals.seriesTotals.reduce((a, b) => {
                      return a + b;
                    }, 0)
                  );
                }

                }
              }
            }
          }
        },
        legend: {
          position: 'right',
                offsetY: 0,
                offsetX: 80,
                height: 150,
                horizontalAlign: 'left',
                formatter: function(seriesName, opts) {
                  return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
              },
          markers: {
            width: 8,
            height: 8
          },
          itemMargin: {
            horizontal: 2
          }
        },
        dataLabels: {
          enabled: false
        }
      }
    };
  }

  componentDidMount() {
    /*console.log(this.state.series, "Before update");*/
    this.update(this.appendToState);
  }

  render() {
    return (
      <React.Fragment>
            <Row className="">
              <Col xs="12" className="">
                <Chart options={this.state.options}
                      series={this.state.series}
                      type="donut" width="100%" height="276px"/>
              </Col>              
            </Row>            
      </React.Fragment>
    );
  }
}

export default ChartCurrentCustomer;
