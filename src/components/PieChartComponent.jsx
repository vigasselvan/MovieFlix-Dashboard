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
            text: 'Genres Distribution',
          },
        },
      };

      return (
        <div className='pieContainer' style={{ width: '40vw', margin: '20px auto' }}>
          <Pie data={chartData} options={options} />
          <h1>Genres Distribution</h1>
        </div>
      );
    }

    export default PieChartComponent;