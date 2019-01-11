function data_visualization1() {

    //////////////////////////////////////////////////////////////////////////////////////
    //第一个部分
    //////////////////////////////////////////////////////////////////////////////////////
    let myChart_1 = echarts.init(document.getElementById('data-visual-area1'));

    let option_1 = {
        title: {
            text: '特征、产率分布散点图1',
            left: 'center',
            top: 'top'
        },
        toolbox: {
            feature: {
                restore: {},
                saveAsImage: {}
            }
        },
        dataZoom: [{
            id: 'dataZoomX',
            type: 'slider',
            xAxisIndex: [0],
            filterMode: 'filter',
            handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
            handleSize: '80%',
            handleStyle: {
                color: '#fff',
                shadowBlur: 3,
                shadowColor: 'rgba(0, 0, 0, 0.6)',
                shadowOffsetX: 2,
                shadowOffsetY: 2
            }
        },
            {
                id: 'dataZoomY',
                type: 'slider',
                yAxisIndex: [0],
                filterMode: 'filter',
                handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
                handleSize: '80%',
                handleStyle: {
                    color: '#fff',
                    shadowBlur: 3,
                    shadowColor: 'rgba(0, 0, 0, 0.6)',
                    shadowOffsetX: 2,
                    shadowOffsetY: 2
                }
            },
            {
                type: 'inside',
                xAxisIndex: [0],
                filterMode: 'filter'
            }],
        xAxis: {
            name: []
        },
        yAxis: {
            position: 'left',
            nameLocation: 'middle',
            nameGap: 35,
            name: []
        },
        tooltip: {
            formatter: function (params) {
                return [
                    'x轴数值：' + params.data[0].toFixed(1),
                    'y轴数值：' + params.data[1].toFixed(2)
                ].join('<br/>');
            }
        },
        series: [{
            symbolSize: 10,
            data: [],
            type: 'scatter'
        }]
    };

    $.get('./Dataset/train.json').done(function (data) {

        $('#selectx1').on('change', function () {
            datax();
            namex();
            draw()
        });

        $('#selecty1').on('change', function () {
            datay();
            namey();
            draw()
        });

        function datax() {
            let datax = $('#selectx1').val();
            let xval = data.rows[datax];
            return xval
        }

        function datay() {
            let datay = $('#selecty1').val();
            let yval = data.rows[datay];
            return yval
        }

        function namex() {
            let namex = $('#selectx1').val();
            return namex
        }

        function namey() {
            let namey = $('#selecty1').val();
            return namey
        }

        function draw() {
            let dataset = [];
            let xlabel = namex();
            let ylabel = namey();
            let name = ['yield', 'A1', 'A2', 'A3', 'A4', 'A6', 'A8', 'A10', 'A12', 'A13', 'A15', 'A17', 'A18', 'A19',
                'A21', 'A22', 'A23', 'A25','A27', 'B1', 'B2', 'B3', 'B6', 'B8', 'B12', 'B13', 'B14', 'id'];

            for (let i = 0; i < 1396; i++) {
                dataset.push([datax()[i], datay()[i]])
            }

            myChart_1.setOption({
                xAxis: {
                    name: name[xlabel]
                },
                yAxis: {
                    name: name[ylabel]
                },
                series: [{
                    data: dataset
                }]
            });
        }
        draw();
    });

    myChart_1.setOption(option_1);
}


function data_visualization2() {
    //////////////////////////////////////////////////////////////////////////////////////
    //第二个部分
    //////////////////////////////////////////////////////////////////////////////////////
    let myChart_2 = echarts.init(document.getElementById('data-visual-area2'));

    let option_2 = {
        title: {
            text: '特征、产率分布散点图2',
            left: 'center',
            top: 'top'
        },
        toolbox: {
            feature: {
                restore: {},
                saveAsImage: {}
            }
        },
        dataZoom: [{
            id: 'dataZoomX',
            type: 'slider',
            xAxisIndex: [0],
            filterMode: 'filter',
            handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
            handleSize: '80%',
            handleStyle: {
                color: '#fff',
                shadowBlur: 3,
                shadowColor: 'rgba(0, 0, 0, 0.6)',
                shadowOffsetX: 2,
                shadowOffsetY: 2
            }
        },
            {
                id: 'dataZoomY',
                type: 'slider',
                yAxisIndex: [0],
                filterMode: 'filter',
                handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
                handleSize: '80%',
                handleStyle: {
                    color: '#fff',
                    shadowBlur: 3,
                    shadowColor: 'rgba(0, 0, 0, 0.6)',
                    shadowOffsetX: 2,
                    shadowOffsetY: 2
                }
            },
            {
                type: 'inside',
                xAxisIndex: [0],
                filterMode: 'filter'
            }],
        xAxis: {
            name: []
        },
        yAxis: {
            position: 'left',
            nameLocation: 'middle',
            nameGap: 35,
            name: []
        },
        tooltip: {
            formatter: function (params) {
                return [
                    'x轴数值：' + params.data[0].toFixed(1),
                    'y轴数值：' + params.data[1].toFixed(2)
                ].join('<br/>');
            }
        },
        series: [{
            symbolSize: 10,
            data: [],
            type: 'scatter'
        }]
    };

    $.get('./Dataset/train.json').done(function (data) {

        $('#selectx2').on('change', function () {
            datax();
            namex();
            draw()
        });

        $('#selecty2').on('change', function () {
            datay();
            namey();
            draw()
        });

        function datax() {
            let datax = $('#selectx2').val();
            let xval = data.rows[datax];
            return xval
        }

        function datay() {
            let datay = $('#selecty2').val();
            let yval = data.rows[datay];
            return yval
        }

        function namex() {
            let namex = $('#selectx2').val();
            return namex
        }

        function namey() {
            let namey = $('#selecty2').val();
            return namey
        }

        function draw() {
            let dataset = [];
            let xlabel = namex();
            let ylabel = namey();
            let name = ['yield', 'A1', 'A2', 'A3', 'A4', 'A6', 'A8', 'A10', 'A12', 'A13', 'A15', 'A17', 'A18', 'A19',
                'A21', 'A22', 'A23', 'A25','A27', 'B1', 'B2', 'B3', 'B6', 'B8', 'B12', 'B13', 'B14', 'id'];

            for (let i = 0; i < 1396; i++) {
                dataset.push([datax()[i], datay()[i]])
            }

            myChart_2.setOption({
                xAxis: {
                    name: name[xlabel]
                },
                yAxis: {
                    name: name[ylabel]
                },
                series: [{
                    data: dataset
                }]
            });
        }
        draw();
    });

    myChart_2.setOption(option_2);
}

function data_visualization3() {
    //////////////////////////////////////////////////////////////////////////////////////
    //第三个部分
    //////////////////////////////////////////////////////////////////////////////////////
    let myChart_3 = echarts.init(document.getElementById('data-visual-area3'));

    let option_3 = {
        title: {
            text: '特征、产率分布散点图3',
            left: 'center',
            top: 'top'
        },
        toolbox: {
            feature: {
                restore: {},
                saveAsImage: {}
            }
        },
        dataZoom: [{
            id: 'dataZoomX',
            type: 'slider',
            xAxisIndex: [0],
            filterMode: 'filter',
            handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
            handleSize: '80%',
            handleStyle: {
                color: '#fff',
                shadowBlur: 3,
                shadowColor: 'rgba(0, 0, 0, 0.6)',
                shadowOffsetX: 2,
                shadowOffsetY: 2
            }
        },
            {
                id: 'dataZoomY',
                type: 'slider',
                yAxisIndex: [0],
                filterMode: 'filter',
                handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
                handleSize: '80%',
                handleStyle: {
                    color: '#fff',
                    shadowBlur: 3,
                    shadowColor: 'rgba(0, 0, 0, 0.6)',
                    shadowOffsetX: 2,
                    shadowOffsetY: 2
                }
            },
            {
                type: 'inside',
                xAxisIndex: [0],
                filterMode: 'filter'
            }],
        xAxis: {
            name: []
        },
        yAxis: {
            position: 'left',
            nameLocation: 'middle',
            nameGap: 35,
            name: []
        },
        tooltip: {
            formatter: function (params) {
                return [
                    'x轴数值：' + params.data[0].toFixed(1),
                    'y轴数值：' + params.data[1].toFixed(2)
                ].join('<br/>');
            }
        },
        series: [{
            symbolSize: 10,
            data: [],
            type: 'scatter'
        }]
    };

    $.get('./Dataset/train.json').done(function (data) {

        $('#selectx3').on('change', function () {
            datax();
            namex();
            draw()
        });

        $('#selecty3').on('change', function () {
            datay();
            namey();
            draw()
        });

        function datax() {
            let datax = $('#selectx3').val();
            let xval = data.rows[datax];
            return xval
        }

        function datay() {
            let datay = $('#selecty3').val();
            let yval = data.rows[datay];
            return yval
        }

        function namex() {
            let namex = $('#selectx3').val();
            return namex
        }

        function namey() {
            let namey = $('#selecty3').val();
            return namey
        }

        function draw() {
            let dataset = [];
            let xlabel = namex();
            let ylabel = namey();
            let name = ['yield', 'A1', 'A2', 'A3', 'A4', 'A6', 'A8', 'A10', 'A12', 'A13', 'A15', 'A17', 'A18', 'A19',
                'A21', 'A22', 'A23', 'A25','A27', 'B1', 'B2', 'B3', 'B6', 'B8', 'B12', 'B13', 'B14', 'id'];

            for (let i = 0; i < 1396; i++) {
                dataset.push([datax()[i], datay()[i]])
            }

            myChart_3.setOption({
                xAxis: {
                    name: name[xlabel]
                },
                yAxis: {
                    name: name[ylabel]
                },
                series: [{
                    data: dataset
                }]
            });
        }
        draw();
    });

    myChart_3.setOption(option_3);
}

function data_visualization4() {

    //////////////////////////////////////////////////////////////////////////////////////
    //第四个部分
    //////////////////////////////////////////////////////////////////////////////////////
    let myChart_4 = echarts.init(document.getElementById('data-visual-area4'));

    let option_4 = {
        title: {
            text: '特征、产率分布散点图4',
            left: 'center',
            top: 'top'
        },
        toolbox: {
            feature: {
                restore: {},
                saveAsImage: {}
            }
        },
        dataZoom: [{
            id: 'dataZoomX',
            type: 'slider',
            xAxisIndex: [0],
            filterMode: 'filter',
            handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
            handleSize: '80%',
            handleStyle: {
                color: '#fff',
                shadowBlur: 3,
                shadowColor: 'rgba(0, 0, 0, 0.6)',
                shadowOffsetX: 2,
                shadowOffsetY: 2
            }
        },
            {
                id: 'dataZoomY',
                type: 'slider',
                yAxisIndex: [0],
                filterMode: 'filter',
                handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
                handleSize: '80%',
                handleStyle: {
                    color: '#fff',
                    shadowBlur: 3,
                    shadowColor: 'rgba(0, 0, 0, 0.6)',
                    shadowOffsetX: 2,
                    shadowOffsetY: 2
                }
            },
            {
                type: 'inside',
                xAxisIndex: [0],
                filterMode: 'filter'
            }],
        xAxis: {
            name: []
        },
        yAxis: {
            position: 'left',
            nameLocation: 'middle',
            nameGap: 35,
            name: []
        },
        tooltip: {
            formatter: function (params) {
                return [
                    'x轴数值：' + params.data[0].toFixed(1),
                    'y轴数值：' + params.data[1].toFixed(2)
                ].join('<br/>');
            }
        },
        series: [{
            symbolSize: 10,
            data: [],
            type: 'scatter'
        }]
    };

    $.get('./Dataset/train.json').done(function (data) {

        $('#selectx4').on('change', function () {
            datax();
            namex();
            draw()
        });

        $('#selecty4').on('change', function () {
            datay();
            namey();
            draw()
        });

        function datax() {
            let datax = $('#selectx4').val();
            let xval = data.rows[datax];
            return xval
        }

        function datay() {
            let datay = $('#selecty4').val();
            let yval = data.rows[datay];
            return yval
        }

        function namex() {
            let namex = $('#selectx4').val();
            return namex
        }

        function namey() {
            let namey = $('#selecty4').val();
            return namey
        }

        function draw() {
            let dataset = [];
            let xlabel = namex();
            let ylabel = namey();
            let name = ['yield', 'A1', 'A2', 'A3', 'A4', 'A6', 'A8', 'A10', 'A12', 'A13', 'A15', 'A17', 'A18', 'A19',
                'A21', 'A22', 'A23', 'A25','A27', 'B1', 'B2', 'B3', 'B6', 'B8', 'B12', 'B13', 'B14', 'id'];

            for (let i = 0; i < 1396; i++) {
                dataset.push([datax()[i], datay()[i]])
            }

            myChart_4.setOption({
                xAxis: {
                    name: name[xlabel]
                },
                yAxis: {
                    name: name[ylabel]
                },
                series: [{
                    data: dataset
                }]
            });
        }
        draw();
    });

    myChart_4.setOption(option_4);
}