import React from 'react';
import ReactDOM from 'react-dom';
import VegaLite from 'react-vega-lite';
import spec from '../vl_spec.json'

const data = spec['data']
console.log(data)

ReactDOM.render(
  <VegaLite spec={spec} data={data} />,
  document.getElementById('root')
);
