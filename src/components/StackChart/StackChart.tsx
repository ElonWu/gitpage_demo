import * as React from "react";
import echarts from "echarts";

interface Props {
  chartId: string;
  style?: React.CSSProperties;
}

abstract class AbstractChart<P extends Props> extends React.Component<P> {
  constructor(P) {
    super(P);
    this.state = {};
  }
  componentDidMount() {
    this.chartInit();
  }

  chartInit() {
    const { chartId } = this.props;
    console.log(chartId);
    const myChart = echarts.init(document.getElementById(chartId));

    myChart.setOption({
      color: ["#3398DB"],
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
          data: ["TS", "Antd", "Sass", "React", "Node"],
          axisTick: {
            show: false
          },
          splitLine: {
            show: false
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
      ],
      yAxis: [
        {
          type: "value",
          axisTick: {
            show: false
          },
          splitLine: {
            show: false
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
      series: [
        {
          name: "熟悉程度",
          type: "bar",
          // barGap: "100%",
          barCategoryGap: "50%",
          data: [65, 72, 86, 70, 80],
          itemStyle: {
            barBorderRadius: [4, 4, 0, 0]
          }
        }
      ]
    });
  }

  render() {
    const { chartId = "e-chart", style = {} } = this.props;
    return (
      <div
        id={chartId}
        className="chart"
        style={Object.assign({ height: "20rem" }, style)}
      />
    );
  }
}

export class StackChart extends AbstractChart<Props> {}
