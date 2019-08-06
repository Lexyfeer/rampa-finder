import React, { Component } from 'react';
// import Chart from './nodemodules/chartjs/dist/Chart.bundle.js';
// dist/Chart.bundle.min.js
// import '.nodemodules/chartjs/dist/Chart.min.css';

class GrowthChart extends Component {
  constructor() {
    super()
    this.chart = React.createRef()
    console.log(this.chart);
  }
  render(){
    // const growthChart = document.querySelectorAll(growthChart);

    return (
      <div>
      <canvas ref={ this.chart } className="growthChart" width="50%" height="17%"></canvas>
      </div>
    )
  }
}

export default GrowthChart;
