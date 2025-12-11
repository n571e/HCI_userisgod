// Visualizations using Chart.js

// Wait for Chart.js to load
document.addEventListener('DOMContentLoaded', () => {
    // Delay to ensure slide transitions are complete
    setTimeout(() => {
        initializeCharts();
    }, 100);
});

function initializeCharts() {
    // Chart for Slide 15 - RQ2 Explanation Comparison
    const explanationChartCanvas = document.getElementById('explanationChart');

    if (explanationChartCanvas) {
        const ctx = explanationChartCanvas.getContext('2d');

        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: [
                    'TLDR\n(仅摘要)',
                    'Template\n(仅社交信号)',
                    'TLDR + Template\n(模板+摘要)',
                    'LLM Synthesis\n(Social-RAG)'
                ],
                datasets: [{
                    label: '帮助理解与群组相关性 (评分)',
                    data: [3.2, 2.8, 4.5, 4.8],
                    backgroundColor: [
                        'rgba(108, 117, 125, 0.7)',
                        'rgba(220, 53, 69, 0.7)',
                        'rgba(0, 153, 68, 0.7)',
                        'rgba(0, 102, 204, 0.9)'
                    ],
                    borderColor: [
                        'rgb(108, 117, 125)',
                        'rgb(220, 53, 69)',
                        'rgb(0, 153, 68)',
                        'rgb(0, 102, 204)'
                    ],
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        display: true,
                        position: 'top',
                        labels: {
                            font: {
                                size: 14,
                                weight: 'bold'
                            },
                            padding: 15
                        }
                    },
                    title: {
                        display: true,
                        text: '离线评估：不同解释类型的有效性比较',
                        font: {
                            size: 18,
                            weight: 'bold'
                        },
                        padding: {
                            top: 10,
                            bottom: 20
                        }
                    },
                    tooltip: {
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        titleFont: {
                            size: 14
                        },
                        bodyFont: {
                            size: 13
                        },
                        padding: 12,
                        cornerRadius: 8,
                        callbacks: {
                            label: function (context) {
                                let label = context.dataset.label || '';
                                if (label) {
                                    label += ': ';
                                }
                                label += context.parsed.y.toFixed(1);
                                label += ' / 5.0';
                                return label;
                            },
                            afterLabel: function (context) {
                                if (context.dataIndex === 3) {
                                    return '\n⭐ PaperPing 使用的方法';
                                } else if (context.dataIndex === 2) {
                                    return '\n显著优于 TLDR (p<0.001)';
                                }
                                return '';
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 5,
                        ticks: {
                            stepSize: 1,
                            font: {
                                size: 12
                            }
                        },
                        title: {
                            display: true,
                            text: '评分 (1-5)',
                            font: {
                                size: 14,
                                weight: 'bold'
                            }
                        },
                        grid: {
                            color: 'rgba(0, 0, 0, 0.05)'
                        }
                    },
                    x: {
                        ticks: {
                            font: {
                                size: 11
                            },
                            maxRotation: 0,
                            minRotation: 0
                        },
                        grid: {
                            display: false
                        }
                    }
                },
                animation: {
                    duration: 2000,
                    easing: 'easeOutQuart',
                    onComplete: function () {
                        // Add significance markers
                        const chart = this;
                        const ctx = chart.ctx;
                        const meta = chart.getDatasetMeta(0);

                        // Draw significance line between TLDR and LLM Synthesis
                        const bar1 = meta.data[0];
                        const bar4 = meta.data[3];

                        ctx.save();
                        ctx.strokeStyle = '#e74c3c';
                        ctx.lineWidth = 2;
                        ctx.setLineDash([5, 3]);

                        // Draw connecting line
                        ctx.beginPath();
                        ctx.moveTo(bar1.x, bar1.y - 20);
                        ctx.lineTo(bar1.x, bar1.y - 40);
                        ctx.lineTo(bar4.x, bar4.y - 40);
                        ctx.lineTo(bar4.x, bar4.y - 20);
                        ctx.stroke();

                        // Draw significance text
                        ctx.setLineDash([]);
                        ctx.fillStyle = '#e74c3c';
                        ctx.font = 'bold 12px Arial';
                        ctx.textAlign = 'center';
                        ctx.fillText('p < 0.001 ***', (bar1.x + bar4.x) / 2, bar1.y - 45);

                        ctx.restore();
                    }
                }
            }
        });
    }
}

// Additional visualization functions

// Create usage pattern timeline chart (could be added to slide 16)
function createUsagePatternChart(canvasId) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12'],
            datasets: [
                {
                    label: 'Human Recommendations',
                    data: [12, 15, 14, 18, 16, 15, 17, 19, 16, 18, 20, 19],
                    borderColor: 'rgb(0, 153, 68)',
                    backgroundColor: 'rgba(0, 153, 68, 0.1)',
                    tension: 0.4,
                    fill: true
                },
                {
                    label: 'PaperPing Recommendations',
                    data: [0, 0, 8, 12, 15, 18, 20, 22, 21, 23, 22, 24],
                    borderColor: 'rgb(0, 102, 204)',
                    backgroundColor: 'rgba(0, 102, 204, 0.1)',
                    tension: 0.4,
                    fill: true
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: '3个月部署期间的推荐活动'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: '推荐数量'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: '时间（周）'
                    }
                }
            }
        }
    });
}

// Create deployment statistics pie chart
function createDeploymentStatsChart(canvasId) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Lab Channels', 'Project Teams', 'Interest Groups', 'Seminars'],
            datasets: [{
                data: [8, 5, 3, 2],
                backgroundColor: [
                    'rgba(0, 102, 204, 0.8)',
                    'rgba(0, 153, 68, 0.8)',
                    'rgba(103, 126, 234, 0.8)',
                    'rgba(118, 75, 162, 0.8)'
                ],
                borderColor: [
                    'rgb(0, 102, 204)',
                    'rgb(0, 153, 68)',
                    'rgb(103, 126, 234)',
                    'rgb(118, 75, 162)'
                ],
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    position: 'right',
                },
                title: {
                    display: true,
                    text: '部署的18个频道类型分布'
                }
            }
        }
    });
}

// Create relevance comparison radar chart
function createRelevanceRadarChart(canvasId) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['相关性', '简洁性', '有趣程度', '易理解性', '信任度'],
            datasets: [
                {
                    label: 'TLDR (仅摘要)',
                    data: [3.2, 4.0, 2.8, 3.5, 3.0],
                    borderColor: 'rgba(108, 117, 125, 0.8)',
                    backgroundColor: 'rgba(108, 117, 125, 0.2)',
                },
                {
                    label: 'Social-RAG',
                    data: [4.8, 3.8, 4.5, 4.6, 4.4],
                    borderColor: 'rgba(0, 102, 204, 0.8)',
                    backgroundColor: 'rgba(0, 102, 204, 0.2)',
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            scales: {
                r: {
                    beginAtZero: true,
                    max: 5,
                    ticks: {
                        stepSize: 1
                    }
                }
            },
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: '不同维度的评估对比'
                }
            }
        }
    });
}

// Interactive hover effects for data points
function addInteractiveEffects() {
    // Add pulsing effect to important statistics
    const statNumbers = document.querySelectorAll('.stat-number, .stat-value');
    statNumbers.forEach(stat => {
        stat.addEventListener('mouseenter', function () {
            this.style.transform = 'scale(1.1)';
            this.style.transition = 'transform 0.3s ease';
        });

        stat.addEventListener('mouseleave', function () {
            this.style.transform = 'scale(1)';
        });
    });
}

// Initialize interactive effects when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    addInteractiveEffects();
});
