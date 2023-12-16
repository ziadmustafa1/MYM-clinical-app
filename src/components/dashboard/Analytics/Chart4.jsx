/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const options = {
  legend: {
    show: false,
    position: 'top',
    horizontalAlign: 'left',
  },
  colors: ['#3C50E0', '#80CAEE'],
  chart: {
    fontFamily: 'Satoshi, sans-serif',
    height: 335,
    type: 'area',
    dropShadow: {
      enabled: true,
      color: '#623CEA14',
      top: 10,
      blur: 4,
      left: 0,
      opacity: 0.1,
    },

    toolbar: {
      show: false,
    },
  },
  responsive: [
    {
      breakpoint: 1024,
      options: {
        chart: {
          height: 300,
        },
      },
    },
    {
      breakpoint: 1366,
      options: {
        chart: {
          height: 350,
        },
      },
    },
  ],
  stroke: {
    width: [2, 2],
    curve: 'straight',
  },
  // labels: {
  //   show: false,
  //   position: "top",
  // },
  grid: {
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: true,
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  markers: {
    size: 4,
    colors: '#fff',
    strokeColors: ['#3056D3', '#80CAEE'],
    strokeWidth: 3,
    strokeOpacity: 0.9,
    strokeDashArray: 0,
    fillOpacity: 1,
    discrete: [],
    hover: {
      size: undefined,
      sizeOffset: 5,
    },
  },
  xaxis: {
    type: 'category',
    categories: [
      'Sep',
      'Oct',
      'Nov',
      'Dec',
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
    ],
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    title: {
      style: {
        fontSize: '0px',
      },
    },
    min: 0,
    max: 100,
  },
};


const Chart4 = () => {
  const [state, setState] = useState({
    series: [
      {
        name: 'Product One',
        data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 45],
      },

      {
        name: 'Product Two',
        data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39, 51],
      },
    ],
  });

  return (
    <div className="p-5 ml-5" style={{backgroundColor: '#f7f9fb' , width: "340px"}}>
      <div>
        <h1 className="text-xl font-semibold">Customer Satisfaction</h1>
      </div>
      <div>
        <div id="chartOne" className="-ml-5">
          <ReactApexChart
            options={options}
            series={state.series}
            type="area"
            height={350}
          />
        </div>
      </div>
      <div className='flex justify-between items-center'>
        <div>
        <div className='flex justify-between items-center'><div><svg width="24" height="9" viewBox="0 0 24 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.71094 4.77441H21.6829" stroke="#0080DA" stroke-width="3" stroke-linecap="round"/>
<ellipse cx="11.698" cy="4.77434" rx="4.73019" ry="4.19231" fill="#0095FF"/>
</svg>
</div> <h1 className="pl-2">Last Month</h1> </div>
<h1 className='text-center'>$3,004</h1>
        </div>
        <div>
        <div className='flex justify-between items-center'><div><svg width="24" height="10" viewBox="0 0 24 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.02637 4.84472H21.9983" stroke="#05C283" stroke-width="3" stroke-linecap="round"/>
<ellipse cx="12.0134" cy="4.84465" rx="4.73019" ry="4.19231" fill="#07E098"/>
</svg>
</div> <h1 className="pl-2">This Month</h1> </div>
<h1 className='text-center'>$4,504</h1>
        </div>
      </div>
    </div>
  );
};

export default Chart4;