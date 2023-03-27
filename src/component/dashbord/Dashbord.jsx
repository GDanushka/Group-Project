import React, { useState } from "react";
import "./Dashbord.css";
import Charts from "react-apexcharts";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sideBar/Sidebar";

const Dashbord = () => {
  const [chartdata, setchartdata] = useState({
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        tickPlacement: "off",
        labels: {
          style: {
            colors: ["#ffffff"],
          },
        },
        categories: [
          "1991",
          "1992",
          "1993",
          "1994",
          "1995",
          "1996",
          "1997",
          "1998",
        ],
        title: {
          text: "years",
          style: {
            color: "#fff",
          },
        },
        labels: {
          formatter: function (val) {
            return  val;
          },
          style: {
            color: "#fffff",
          },
        },
      },

      fill: {
        colors: ["#0fe8c9"],
      },
      dataLabels: {
        style: {
          colors: ["f00000"],
          fontSize: 10,
        },
        style: {
          color: ["#fff"],
        },
      },

      yaxis: {
        labels: {
          style: {
            colors: ["#ffffff"],
          },
        },
        title: {
          text: "sales",
          style: {
            color: "#fff",
          },
        },
      },
    },
    series: [
      {
        name: "series-2",
        data: [30, 40, 25, 50, 49, 10, 70, 91],
      },
    ],
  });

  const [monthdata, setmonthdata] = useState({
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
      },
    },
    series: [
      {
        name: "series-2",
        data: [50, 20, 5, 50, 15, 10, 80, 91],
      },
    ],
  });

  const [yeardata, setyeardata] = useState({
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
      },
    },
    series: [
      {
        name: "series-2",
        data: [15, 51, 44, 30, 19, 17, 90, 95],
      },
    ],
  });

  const [button, setbutton] = useState({});
  const buttonSet = (bool) => {
    setbutton(bool);
  };

  const [action, setaction] = useState({});
  const changeAction = (name) => {
    setaction(name);
  };

  const [chartType, setchartType] = useState({});
  const typeButton = (bool) => {
    setchartType(bool);
  };

  const [barType, setbarType] = useState({});
  const changeType = (type) => {
    setbarType(type);
  };

  function chartDisplay(params, bool) {
    if (bool === true) {
      return (
        <Charts
          options={params.options}
          series={params.series}
          type="area"
          height="400"
          width="800"
        />
      );
    } else {
      return (
        <Charts
          options={chartdata.options}
          series={chartdata.series}
          type="area"
          height="400"
          width="800"
        />
      );
    }
  }

  function PieChart(chartdata) {
    return (
      <Charts
        options={chartdata.option}
        series={chartdata.series}
        type="pie"
        width="500"
        height="500"
      />
    );
  }

  const [changeColor, setchangeColor] = useState(1);

  return (
    
      <div className="Dashbord">
      <div className="row1">
        <Navbar />
      </div>

      <div className="column1">
        <Sidebar />
      </div>

      <div className="content">
        <p className="heading">Dashboard</p>
        <div className="buttonGroup">
          <div className="btnSection">
            <div className="chartSection">
              <div
                className={
                  changeColor === 1 ? "chartSection active" : "chartSection"
                }
                onClick={() => {
                  changeAction(chartdata);
                  buttonSet(true);
                  setchangeColor(1);
                }}
              >
                Last Week
              </div>
            </div>

            <div className="chartSection">
              <div
                className={
                  changeColor === 2 ? "chartSection active" : "chartSection"
                }
                onClick={() => {
                  changeAction(monthdata);
                  buttonSet(true);
                  setchangeColor(2);
                }}
              >
                Last Month
              </div>
            </div>

            <div className="chartSection">
              <div
                className={
                  changeColor === 3 ? "chartSection active" : "chartSection"
                }
                onClick={() => {
                  changeAction(yeardata);
                  buttonSet(true);
                  setchangeColor(3);
                }}
              >
                Last Year
              </div>
            </div>
          </div>
        </div>

        <div className="Chart1">{chartDisplay(action, button)}</div>

        <div className="setChart">
          <div
            className="type"
            onClick={() => {
              changeType("area");
            }}
          >
            Area
          </div>
          <div
            className="type"
            onClick={() => {
              changeType("bar");
            }}
          >
            bar
          </div>
          <div
            className="type"
            onClick={() => {
              changeType("line");
            }}
          >
            line
          </div>
        </div>
        <div className="pieChartSection">
        <div className="pieChart">
          <div className="pieChart1">
            <Charts
              type="donut"
              width={330}
              options={{
                labels: ["ram", "motherbord", "hard", "monitor", "cpu"],

                title: {
                  text: "sales",
                  style: {
                    color: "#fff",
                  },
                },
              }}
              series={[25, 15, 40, 68, 95]}
            />
          </div>

          <div className="pieChart1">
            <Charts
              type="donut"
              width={330}
              options={{
                labels: ["ram", "motherbord", "hard", "monitor", "cpu"],

                title: {
                  text: "sales",
                  style: {
                    color: "#fff",
                  },
                },
              }}
              series={[25, 15, 40, 68, 95]}
            />
          </div>

          <div className="pieChart1">
            <Charts
              type="donut"
              width={330}
              options={{
                labels: ["ram", "motherbord", "hard", "monitor", "cpu"],

                title: {
                  text: "sales",
                  style: {
                    color: "#000",
                  },
                },
              }}
              series={[25, 15, 40, 68, 95]}
            />
          </div>
        </div>
      </div>
      </div>

      
    </div>
 
  );
};

export default Dashbord;
