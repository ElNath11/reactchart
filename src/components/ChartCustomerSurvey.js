import React from "react";
import Chart from "react-apexcharts";
import { Row, Col } from 'reactstrap';

class ChartCustomerSurvey extends React.Component {
  constructor(props) {
    super(props);

    this.appendToState = () => {
      this.setState({
        series: [75, 25],
      });

      /*console.log(this.state.series, "Before update");*/
    };
    this.update = appendToState => {
      setTimeout(function() {
        appendToState();
      }, 6000);
    };

    this.state = {
      series: [75, 25],

      options: {
        colors: ['#A4DC72', '#F44336'],
            labels: ['Say Yes', 'Say No'],
        plotOptions: {
          pie: {
             size: 80,
            offsetX: 0,
            offsetY: 0,
            expandOnClick: true,
            donut: {
              size: "80%",
              labels: {
                show: true,
                name: {
                  show: true,
                  fontSize: "14px",
                  fontFamily: undefined,
                  offsetY: 0
                },

                total: {
                  show: true,
                  label: "Total",
                  fontSize: "8px",
                  color: "#999999",
                  offsetY: -50,
                  offsetX: 20,
                 formatter: function(w) {
                  return (
                    w.globals.seriesTotals.reduce((a, b) => {
                      return a + b;
                    }, 0)/
                      w.globals.series.length +
                    "%"
                  );
                }

                }
              }
            }
          }
        },
        legend: {
          show: false,
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
            <Row className="pb-1">
              <Col xs="12" className="mb-1">
                <Chart options={this.state.options}
                      series={this.state.series}
                      type="donut" width="100%" height="245px"/>
              </Col>              
            </Row>            
      </React.Fragment>
    );
  }
}

export default ChartCustomerSurvey;
