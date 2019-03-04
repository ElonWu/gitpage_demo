import * as React from "react";
import echarts from "echarts";

interface Props {
  chartId: string;
  style?: React.CSSProperties;
}
interface State {}

const DEFAULT_CONFIG = {
  color: ["#d26457", "#389ee5", "#5cc494"],
  backgroundColor: "#fefefe",
  tooltip: {
    trigger: "axis",
    axisPointer: {
      // 坐标轴指示器，坐标轴触发有效
      type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
    }
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    top: "6%",
    containLabel: true
  },
  xAxis: [
    {
      type: "category",
      axisTick: {
        render: false
      },
      splitLine: {
        render: false
      },
      axisLabel: {
        color: "#c3c3c3",
        fontSize: "10px"
      },
      axisLine: {
        lineStyle: {
          clor: "#c3c3c3",
          type: "dashed",
          opacity: 0.6
        }
      }
    }
  ],
  yAxis: [
    {
      type: "value",
      axisTick: {
        render: false
      },
      splitLine: {
        render: false
      },
      axisLabel: {
        formatter: "{value} %",
        color: "#c3c3c3",
        fontSize: "10px"
      },
      axisLine: {
        lineStyle: {
          clor: "#c3c3c3",
          type: "dashed",
          opacity: 0.6
        }
      }
    }
  ]
};

abstract class AbstractChart<
  P extends Props,
  S extends State
> extends React.Component<P, S> {
  chartInit(opt?: any) {
    const { chartId } = this.props;
    console.log(chartId);
    const myChart = echarts.init(document.getElementById(chartId));

    myChart.setOption(Object.assign({}, DEFAULT_CONFIG, opt || {}));
  }

  render() {
    const { chartId = "e-chart", style = {} } = this.props;
    return (
      <div
        id={chartId}
        className="chart"
        style={Object.assign({ height: "20rem", padding: ".2erm" }, style)}
      />
    );
  }
}

export class BarChart extends AbstractChart<Props, State> {
  componentDidMount() {
    this.renderBarChart();
  }

  renderBarChart() {
    this.chartInit({
      color: ["#389ee5"],
      yAxis: [Object.assign(DEFAULT_CONFIG.yAxis[0], { min: 40 })],
      series: [
        {
          name: "常用程度",
          type: "bar",
          // barGap: "100%",
          barCategoryGap: "50%",
          data: [
            { value: 70, name: "TS" },
            { value: 64, name: "Node" },
            { value: 75, name: "Express" },
            { value: 80, name: "Antd" },
            { value: 79, name: "React" },
            { value: 76, name: "Sass" },
            { value: 45, name: "GraphQL" }
          ],
          itemStyle: {
            barBorderRadius: [4, 4, 0, 0]
          }
        }
      ]
    });
  }
}
export class LineChart extends AbstractChart<Props, State> {
  componentDidMount() {
    this.renderLineChart();
  }

  renderLineChart() {
    this.chartInit({
      yAxis: [Object.assign(DEFAULT_CONFIG.yAxis[0], { min: 40 })],
      series: [
        {
          name: "常用程度",
          type: "line",
          data: [
            { value: 70, name: "TS" },
            { value: 64, name: "Node" },
            { value: 75, name: "Express" },
            { value: 80, name: "Antd" },
            { value: 79, name: "React" },
            { value: 76, name: "Sass" },
            { value: 45, name: "GraphQL" }
          ],
          itemStyle: {
            barBorderRadius: [4, 4, 0, 0]
          }
        },
        {
          name: "掌握程度",
          type: "line",
          data: [
            { value: 80, name: "TS" },
            { value: 74, name: "Node" },
            { value: 75, name: "Express" },
            { value: 50, name: "Antd" },
            { value: 79, name: "React" },
            { value: 66, name: "Sass" },
            { value: 85, name: "GraphQL" }
          ],
          itemStyle: {
            barBorderRadius: [4, 4, 0, 0]
          }
        }
      ]
    });
  }
}

export class PieChart extends AbstractChart<Props, State> {
  componentDidMount() {
    this.renderPieChart();
  }

  renderPieChart() {
    this.chartInit({
      xAxis: [],
      yAxis: [],
      series: [
        {
          name: "常用程度",
          type: "pie",
          data: [
            { value: 70, name: "TS" },
            { value: 64, name: "Node" },
            { value: 75, name: "Express" },
            { value: 80, name: "Antd" },
            { value: 79, name: "React" },
            { value: 76, name: "Sass" },
            { value: 45, name: "GraphQL" }
          ].sort((prev, next) => prev.value - next.value),
          roseType: "radius",
          label: {
            normal: {
              textStyle: {
                color: "rgba(0, 0, 0, 0.3)"
              }
            }
          },
          labelLine: {
            normal: {
              lineStyle: {
                color: "rgba(0, 0, 0, 0.3)"
              },
              smooth: 0.2,
              length: 10,
              length2: 20
            }
          },
          itemStyle: {
            normal: {
              color: "#5cc494",
              shadowBlur: 200,
              shadowColor: "rgba(0, 0, 0, 0.5)"
            }
          },

          animationType: "scale",
          animationEasing: "elasticOut"
        }
      ]
    });
  }
}
