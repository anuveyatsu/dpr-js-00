import React from 'react';
import ReactDOM from 'react-dom';
import Plotly from 'plotly.js/lib/core';

class Plot extends React.Component {
  componentDidMount() {
    const data = {
      x: [1, 2, 3, 4],
      y: [10, 15, 13, 17],
      type: 'scatter'
    };
    Plotly.newPlot('plot', data);
  }

  render() {
    return (
      <div id="plot"></div>
    );
  }
}


ReactDOM.render(
  <Plot />,
  document.getElementById('root')
);
