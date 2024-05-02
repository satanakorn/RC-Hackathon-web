const ctx = document.getElementById('pie-chart');

  new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['Easy' , 'Medium' , 'Hard'],
      datasets: [{
        label: 'ระดับความยาก',
        data: [4,5,3],
        color: "#fff",
        borderWidth: 1,
        backgroundColor : ['#C6F3B7' , '#57AF6C' , '#53C6E2']
      }]
    },
    options: {
      title: {
        
        display: true,
        text : "All quizs"
      },
      responsive: true,
      plugins: {
        legend: {
          labels: {
            color: "white",
            font: {
              size: 18
            }
          }
        }
      }
    }
  });