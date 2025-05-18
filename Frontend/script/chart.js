const entries = JSON.parse(localStorage.getItem("journalData")) || [];

const moodMap = {
  happy: 1,
  okay: 2,
  sad: 3,
  anxious: 4,
  angry: 5,
  excited:6,
  bored:7,
  stressed:8,
  relaxed:9,
  grateful:10,
  neutral: 0
};

const labels = entries.map(entry => entry.date);
const moods = entries.map(entry => moodMap[entry.mood] || 0);
const stress = entries.map(entry => parseInt(entry.stress));

const ctx = document.getElementById("moodChart").getContext("2d");

new Chart(ctx, {
  type: "line",
  data: {
    labels: labels,
    datasets: [
      {
        label: "Mood (0-10)",
        data: moods,
        borderColor: "#68b0ab",
        backgroundColor: "rgba(105, 173, 163, 0.2)",
        fill: true,
        tension: 0.4,
        pointRadius: 6,
        pointHoverRadius: 8
      },
      {
        label: "Stress (0-10)",
        data: stress,
        borderColor: "#f76c6c",
        backgroundColor: "rgba(247, 108, 108, 0.2)",
        fill: true,
        tension: 0.4,
        pointRadius: 6,
        pointHoverRadius: 8
      }
    ]
  },
  options: {
    responsive: true,
    animation: {
      duration: 1500,
      easing: 'easeInOutQuart'
    },
    plugins: {
      legend: {
        labels: {
          color: "#333",
          font: {
            size: 14
          }
        }
      },
      tooltip: {
        backgroundColor: "#fff",
        titleColor: "#333",
        bodyColor: "#555",
        borderColor: "#ccc",
        borderWidth: 1
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 10,
        ticks: {
          color: "#333"
        }
      },
      x: {
        ticks: {
          color: "#333"
        }
      }
    }
  }
});
