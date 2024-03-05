import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

function Steps() {
  const chartRef = useRef(null);
  
  useEffect(() => {
    // Destroy existing chart if it exists
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    // Create new chart
    const ctx = document.getElementById('stepsChart').getContext('2d');
    const chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5'],
        datasets: [{
          label: 'Steps',
          data: [2000, 2200, 2100, 2300, 2400],
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }]
      },
      options: {
        plugins: {
          tooltip: {
            mode: 'index',
            intersect: false,
          }
        },
        scales: {
          x: {
            display: true,
            title: {
              display: true,
              text: 'Day'
            },
            ticks: {
              color: 'white' // Set x-axis ticks color to white
            }
          },
          y: {
            display: true,
            title: {
              display: true,
              text: 'Steps'
            },
            ticks: {
              color: 'white' // Set y-axis ticks color to white
            }
          }
        },
        elements: {
          point: {
            radius: 0 // Disable data point radius
          }
        },
        color: 'white' // Set chart text color to white
      }
    });

    // Update chart reference
    chartRef.current = chart;

    // Cleanup function
    return () => {
      // Destroy the chart when component unmounts
      chartRef.current.destroy();
    };
  }, []);

  return (
    <div style={{ width: '370px', height: '400px' }}>
      <canvas id="stepsChart" width="500" height="200"></canvas>
    </div>
  );
}

export default Steps;
