document.addEventListener('DOMContentLoaded', function () {
    const previousRevenue = 29000; // Previous month's revenue
    const currentRevenue = 35200; // Current month's revenue

    const revenueChange = ((currentRevenue - previousRevenue) / previousRevenue) * 100;
    document.getElementById('revenueChange').textContent = `${revenueChange.toFixed(1)}%`;

    const ctx = document.getElementById('revenueChart').getContext('2d');
    const gradient = ctx.createLinearGradient(0, 0, 0, 100);
    gradient.addColorStop(0, 'rgba(106, 27, 154, 0.5)');
    gradient.addColorStop(1, 'rgba(106, 27, 154, 0)');

    const data = {
        labels: ['Previous', 'Current'],
        datasets: [{
            data: [previousRevenue, currentRevenue],
            borderColor: '#6a1b9a',
            backgroundColor: gradient,
            fill: true,
            tension: 0.4
        }]
    };

    const config = {
        type: 'line',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                x: {
                    display: false
                },
                y: {
                    display: false
                }
            }
        }
    };

    new Chart(ctx, config);
});
