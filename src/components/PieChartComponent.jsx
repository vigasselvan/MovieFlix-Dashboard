    import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
    import { Pie } from 'react-chartjs-2';

    // Register the necessary Chart.js components
    ChartJS.register(ArcElement, Tooltip, Legend);

    function PieChartComponent({ chartData }) {
      const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'right', // or 'top', 'bottom', 'left'
          },
          title: {
            display: true,
            text: 'Your Pie Chart Title',
          },
        },
      };

      return (
        <div style={{ width: '600px', margin: '20px auto' }}>
          <Pie data={chartData} options={options} />
        </div>
      );
    }

    export default PieChartComponent;