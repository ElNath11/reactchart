import React from "react";
import ApexChart from "react-apexcharts";

class OptionFull extends React.Component {
  constructor(props) {
    super(props);

    this.appendToState = () => {
      this.setState({
        series: [30, 20, 10, 10, 30],
      });

      console.log(this.state.series, "Before update");
    };
    this.update = appendToState => {
      setTimeout(function() {
        appendToState();
      }, 6000);
    };

    this.state = {
      series: [30, 20, 10, 10, 30],

      options: {
        colors: ['#e74c3c', '#2ecc71', '#3498db', '#9b59b6', '#1abc9c'],
            labels: ['Change Plan', 'Price', 'Location', 'Others', 'Poor of Services'],
        plotOptions: {
          pie: {
            size: 125,            
            expandOnClick: false,
            donut: {
              size: "70%",
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
                  offsetY: 0,
                 formatter: function(w) {
                  return (
                    w.globals.seriesTotals.reduce((a, b) => {
                      return a + b;
                    }, 0) /
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
          
          position: 'right',
                offsetY: 0,
                height: 230,
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
    console.log(this.state.series, "Before update");
    this.update(this.appendToState);
  }

  render() {
    return (
      <div className="chart">
        <ApexChart
          options={this.state.options}
          series={this.state.series}
          type="donut"
          width="100%"
        />
      </div>
    );
  }
}

export default OptionFull;
