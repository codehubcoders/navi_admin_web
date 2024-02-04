
  export const data ={
 
      labels: ["12/1", "12/2", "12/3", "12/4", "12/5", "12/6", "12/7", "12/8", "12/9", "12/10"],
      datasets: [
        {
          label: "# of Votes",
          data: [2528, 3854,  4563, 5672, 8732,3512, 5421, 5687, 6432, 9875],
          backgroundColor: [
            "rgba(94, 114, 228, 1)",
          ],
          borderColor: [
            "rgba(94, 114, 228, 1)",
          ],
          
          borderWidth: 1,
          pointBorderWidth: 0,
          spacing:10
        },
      ],
    }

    export const option ={
   
        events: [],
      responsive: true,
      plugins: {
        legend: {
          display: false,
        },
      },
      elements: {
        line: {
          tension: 0.4,
        },
        point: {
          radius: 0,
        },
      },
      scales: {
        x: {
          grid: {
            display: false,
          },
          ticks: {
            font: {
                  size: 9,
              }
          },
        },

        y: {
          border: {
            display: false,
          },
          beginAtZero: false,

          ticks: {
            display: false, //y축 텍스트 삭제
            stepSize: 1500
          },
        },
      },
    
    }

      
  