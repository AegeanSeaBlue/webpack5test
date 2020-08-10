// 使用 G2/core 壳子
import React, {Component, createRef} from 'react';
/*import {
  registerEngine,
  registerGeometry,
  registerAction,
  registerInteraction,
  registerComponentController,
  Chart
} from '@antv/g2/lib/core';
import Line from '@antv/g2/lib/geometry/line';
import Axis from '@antv/g2/lib/chart/controller/axis';
import Tooltip from '@antv/g2/lib/chart/controller/tooltip';
import TooltipAction from '@antv/g2/lib/interaction/action/component/tooltip';
import * as CanvasEngine from '@antv/g-canvas';*/
import {Chart} from '@antv/g2';

const data = [
  {genre: 'Sports', sold: 275},
  {genre: 'Strategy', sold: 115},
  {genre: 'Action', sold: 120},
  {genre: 'Shooter', sold: 350},
  {genre: 'Other', sold: 150}
];
// 按需注入
/*registerEngine('canvas', CanvasEngine);
registerGeometry('line', Line);
registerComponentController('axis', Axis);
registerComponentController('tooltip', Tooltip);
registerAction('tooltip', TooltipAction);
registerInteraction('tooltip', {
  start: [
    {trigger: 'plot:mousemove', action: 'tooltip:show', throttle: {wait: 50, leading: true, trailing: false}},
    {trigger: 'plot:touchmove', action: 'tooltip:show', throttle: {wait: 50, leading: true, trailing: false}}
  ],
  end: [
    {trigger: 'plot:mouseleave', action: 'tooltip:hide'},
    {trigger: 'plot:leave', action: 'tooltip:hide'},
    {trigger: 'plot:touchend', action: 'tooltip:hide'}
  ]
});*/
// 创建折线图，后面的代码没有任何区别


export default class ChartSection extends Component {
  constructor(props) {
    super(props);
    this.chartRef = createRef();
  }

  componentDidMount() {
    const chart = new Chart({
      container: this.chartRef.current,
      autoFit: true
    });
    console.log(chart);
    chart.on('point:mouseenter', (event) => {
      console.log(event);
    });

    chart.tooltip({
      showCrosshairs: true
    });

// Step 2: Load the data.
    chart.data(data);

// Step 3: Declare the grammar of graphics, draw column chart.
    chart.area().position('genre*sold');

// Step 4: Render chart.
    chart.render();
  }

  render() {
    return <div style={{width: '100%', height: '100%'}} ref={this.chartRef}></div>;
  }
}