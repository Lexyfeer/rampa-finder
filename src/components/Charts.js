import React, { Component } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
// import Chart from './nodemodules/chartjs/dist/Chart.bundle.js';
// dist/Chart.bundle.min.js
// import '.nodemodules/chartjs/dist/Chart.min.css';

class Chart extends Component {
  constructor(props) {
    super(props) //it marks props as not defined when it doesn't appear in both constructor and super
    this.state = {
      chartData: {
        labels: ['Myrna', 'Liz', 'Lexy', 'Karen', 'Chío'],
        datasets: [{
          label: 'Sleep time',
          data: [2, 4, 2, 0, 7],
          backgroundColor: ['turquoise', 'palegreen', 'lightcoral', 'orange', 'pink'],
        }]
      }
    }
    // this.chart = React.createRef()
    // console.log(this.chart);
  }
  render(){
    // const growthChart = document.querySelectorAll(growthChart);

    // <canvas ref={ this.chart } className="growthChart" width="50%" height="17%"></canvas>
    return (
      <div className="chart">
      Aquí va la gráfica
      <Bar
        data = {this.state.chartData}
        width = {100}
        height = {50}
        options = {{
          responsive: true,
          title: { //This should also be an object with the option requirements
            display: true,
            text: 'Hackathon sleeping hours',
            fontSize: 30,
          },
          legend: { //Description label from the dataset
            display: true,
            position: 'left', //right position makes it disapear
            fontSize: 25,
          },
          tooltips: { //Ghost labels that appear over every bar or charted element
            enabled: false,

          },
        }} //The "maintainAspectRatio: false" distortions the proportion
      />
      </div>
    )
  }
}

export default Chart;
