import React from 'react'
export const options = {
    responsive: true,
    title: {
        display: true,
        text: 'Lượng người đăng ký hàng tháng'
    },
    scales: {
        xAxes: [
            {
                display: true,
                scaleLabel: {
                    show: true,
                    labelString: 'Tháng'
                }
            }
        ],
        yAxes: [
            {
                display: true,
                scaleLabel: {
                    show: true,
                    labelString: 'Value'
                },
                ticks: {
                    suggestedMin:0,
                }
            }
        ]
    },

}