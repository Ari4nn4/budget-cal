import Chart from './node_modules/chart.js/auto'

(async function() {
  const data = {
    labels: [
      'gross',
      'Budget cut',
      'full pay'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 218, 233)',
        'rgb(255, 221, 244)',
        'rgb(255, 179, 222)'
      ],
      hoverOffset: 4
    }]
  };


  new Chart(
    document.getElementById('chart'),
    {
      type: 'pie',
      data: data,
    }
  );

})();