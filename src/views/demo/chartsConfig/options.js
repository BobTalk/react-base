/*
 * @Author: heyongqiang 1498833800@qq.com
 * @Date: 2023-02-23 17:12:28
 * @LastEditors: heyongqiang 1498833800@qq.com
 * @LastEditTime: 2023-02-23 17:13:53
 * @FilePath: /react-base/src/views/demo/chartsConfig/options.js
 * @Description: 图表默认配置
 */
const optionsConfig = {
    "Bar": {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                axisTick: {
                    alignWithLabel: true
                }
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: 'Direct',
                type: 'bar',
                barWidth: '60%',
                data: [10, 52, 200, 334, 390, 330, 220]
            }
        ]

    }

}

export default optionsConfig