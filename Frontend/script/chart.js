  const entries = JSON.parse(localStorage.getItem("journalData")) || [];

  const moodMap = {
    happy: 5,
    okay: 3,
    sad: 2,
    anxious: 1,
    angry: 1
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
          label: "Mood (1-5)",
          data: moods,
          borderColor: "#68b0ab",
          backgroundColor: "#c9e4de",
          tension: 0.3
        },
        {
          label: "Stress (0-10)",
          data: stress,
          borderColor: "#f76c6c",
          backgroundColor: "#ffe3e3",
          tension: 0.3
        }
      ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          max: 10
        }
      }
    }
  });
