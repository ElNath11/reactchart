import React from "react";
import Chart from "react-apexcharts";
import { Row, Col } from 'reactstrap';

class ChartGuestSegment extends React.Component {
  constructor(props) {
    super(props);

    this.appendToState = () => {
      this.setState({
        series: [5000, 1500, 4000, 2000, 1200, 2300],
      });

      /*console.log(this.state.series, "Before update");*/
    };
    this.update = appendToState => {
      setTimeout(function() {
        appendToState();
      }, 6000);
    };

    this.state = {
      series: [5000, 1500, 4000, 2000, 1200, 2300],

      options: {
        colors: ['#4BA0E1', '#E67E22', '#E1E4EE', '#FFC06A', '#4D4F5C', '#A3A0FB'],
            labels: ['Blue Program', 'Bronze Program', 'Silver Program', 'Golden Program', 'Platinum Program', 'VIP Program'],
        plotOptions: {
          pie: {
             size: 85,
            offsetX: -10,
            offsetY: 0,
            expandOnClick: true,
            donut: {
              size: "80%",
              labels: {
                show: true,
                name: {
                  show: true,
                  fontSize: "10px",
                  fontFamily: undefined,
                  offsetY: 0
                },

                total: {
                  show: true,
                  label: "Total",
                  color: "#999999",
                  offsetY: -50,
                  offsetX: 20,
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
                offsetX: -20,
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
                      type="donut" width="100%" height="240px"/>
              </Col>              
            </Row>            
      </React.Fragment>
    );
  }
}

export default ChartGuestSegment;
