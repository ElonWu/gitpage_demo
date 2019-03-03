import * as React from "react";
import echarts from "echarts";

interface Props {
  chartId: string;
  style?: React.CSSProperties;
}
interface State {
  showBarChart: boolean;
}
abstract class AbstractChart<
  P extends Props,
  S extends State
> extends React.Component<P, S> {
  chartInit(opt?: any) {
    const { chartId } = this.props;
    console.log(chartId);
    const myChart = echarts.init(document.getElementById(chartId));

    const DEFAULT_CONFIG = {
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
    myChart.setOption(Object.assign({}, DEFAULT_CONFIG, opt || {}));
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

export class StackChart extends AbstractChart<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      showBarChart: true
    };
  }

  componentDidMount() {
    this.shoWBarChart();
  }

  shoWBarChart() {
    // 默认显示柱状图
    this.chartInit({
      series: [
        {
          name: "常用程度",
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
}
