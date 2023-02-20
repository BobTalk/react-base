/*
 * @Author: heyongqiang 1498833800@qq.com
 * @Date: 2022-10-12 10:34:45
 * @LastEditors: heyongqiang 1498833800@qq.com
 * @LastEditTime: 2023-02-20 09:41:46
 * @FilePath: /react-base/src/components/echarts/Bar/config.ts
 * @Description: 柱子配置
 */
const options = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    tooltip: {
        show: true
    },
    grid: {
        right: 0,
        left: 0,
        contain: true
    },
    series: [
        {
            data: [
                120,
                {
                    value: 200,
                    itemStyle: {
                        color: '#a90000'
                    }
                },
                150,
                80,
                70,
                110,
                130
            ],
            type: 'bar'
        }
    ]
}

export {
    options
}