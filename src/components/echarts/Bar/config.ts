/*
 * @Author: heyongqiang 1498833800@qq.com
 * @Date: 2022-10-12 10:34:45
 * @LastEditors: heyongqiang 1498833800@qq.com
 * @LastEditTime: 2022-10-12 10:49:07
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