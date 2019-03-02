import * as React from "react";
import echarts from "echarts";

interface Props {
  chartId: string;
  style: React.CSSProperties;
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
      title: {
        // text: "技术栈"
      },
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
        containLabel: true
      },
      xAxis: [
        {
          type: "category",
          data: ["TS", "Antd", "Sass", "React", "Node"],
          axisTick: {
            alignWithLabel: true
          }
        }
      ],
      yAxis: [
        {
          type: "value"
        }
      ],
      series: [
        {
          name: "熟悉程度",
          type: "bar",
          data: [65, 72, 86, 70, 80]
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
