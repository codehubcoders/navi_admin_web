
  export const data ={
 
      labels: ["12/1", "12/2", "12/3", "12/4", "12/5", "12/6", "12/7", "12/8", "12/9", "12/10"],
      datasets: [
        {
          label: "# of Votes",
          data: [2528, 3854,  4563, 5672, 8732,3512, 5421, 5687, 6432, 9875],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(94, 114, 228, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
          pointBorderWidth: 0,
          spacing:10
        },
      ],
    }

    export const option ={
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

      
  
    export const multiData ={
 
      labels: ["12/1", "12/2", "12/3", "12/4", "12/5", "12/6", "12/7", "12/8", "12/9", "12/10"],
      datasets: [
        {
          label: "",
          data: [2528, 3854,  4563, 5672, 8732,3512, 5421, 5687, 6432, 9875],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
          ],
          borderColor: [
            "rgba(94, 114, 228, 1)",
          ],
          borderWidth: 1,
          pointBorderWidth: 0,
          spacing:10
        },
        {
          label: "",
          data: [1000, 3000,  4000, 5672, 5000,2000, 6000, 10000, 5000, 9800],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
          ],
          borderColor: [
            "rgba(255, 153, 51, 1)",
          ],
          borderWidth: 1,
          pointBorderWidth: 0,
          spacing:10
        },
        {
          label: "",
          data: [2000, 9000,  7563, 2672,7732,1512, 2421, 9687, 4432, 2875],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
          ],
          borderColor: [
            "rgba(0, 151, 194, 1)",
          ],
          borderWidth: 1,
          pointBorderWidth: 0,
          spacing:10
        },
      ],
    }

    export const multiOption ={
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

    export const multiData2 ={
 
      labels: ["12/1", "12/2", "12/3", "12/4", "12/5", "12/6", "12/7", "12/8", "12/9", "12/10"],
      datasets: [
        {
          label: "",
          data: [2528, 3854,  4563, 5672, 8732,3512, 5421, 5687, 6432, 9875],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
          ],
          borderColor: [
            "rgba(94, 114, 228, 1)",
          ],
          borderWidth: 1,
          pointBorderWidth: 0,
          spacing:10
        },
        {
          label: "",
          data: [1000, 3000,  4000, 5672, 5000,2000, 6000, 10000, 5000, 9800],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
          ],
          borderColor: [
            "rgba(245, 54, 92, 1)",
          ],
          borderWidth: 1,
          pointBorderWidth: 0,
          spacing:10
        },
       
      ],
    }

   

    export const smallData ={
 
      labels: ["5시", "7시", "9시","11시","13시","15시","17시","19시","21시","23시"],
      datasets: [
        {
          label: "",
          data: [2528, 3854,  4563, 5672, 8732,3512, 5421, 5687, 6432, 9875],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
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
    export const optionSmall ={
      // responsive: true,
      maintainAspectRatio: false,
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
            stepSize: 2000
          },
        },
      },
    }