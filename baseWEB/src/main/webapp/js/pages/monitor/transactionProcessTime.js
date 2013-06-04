function show(arr){

    $.jqplot._noToImageButton = true;

    $('#transactionProcessTime_id').children().remove();
    var plot1 = $.jqplot("transactionProcessTime_id", [arr], {
        seriesColors: ["rgba(78, 135, 194, 0.7)"],
        title: '交易处理时间',
        highlighter: {
            show: true,
            sizeAdjust: 1,
            tooltipOffset: 9
        },
        grid: {
            background: 'rgb(57,57,57)',
            drawBorder: false,
            shadow: false,
            gridLineColor: '#666666',
            gridLineWidth: 2
        },
        legend: {
            show: false
        },
        seriesDefaults: {
            rendererOptions: {
                smooth: true,
                animation: {
                    show: true
                }
            },
            showMarker: true
        },
        series: [
            {
            	fill: true            }
        ],
        axesDefaults: {
            rendererOptions: {
                baselineWidth: 1.5,
                baselineColor: '#444444',
                drawBaseline: false
            }
        },
        axes: {
            xaxis: {
            	 label:'时间', 
              	renderer: $.jqplot.DateAxisRenderer,
                  tickRenderer: $.jqplot.CanvasAxisTickRenderer,
                  tickOptions: {
                      formatString: "%Y-%m-%d",
                      angle: -30
                  },
                  drawMajorGridlines: true,
                  drawMajorGridlines: false
            },
            yaxis: {
            	label:'交易耗时(s)',
                pad: 0,
               /* min:0,
            	max:5,
            	tickInterval: "0.5",*/
                rendererOptions: {
                    minorTicks: 1
                }
            }
        }
    });


}

function query(){
	 $.ajax({
	     	type:'POST',
	     	url:'queryTransactionProcessTime.html',
	     	data:{
	     		start : 1,
	     		end : 30,
	     		dateType: 'D',
	     		startTime: $("#startTime").datebox('getValue'),
	     		endTime: $("#endTime").datebox('getValue')
	     	},
	     	datatype:'json',
	     	async : false,
	     	success:function(data){
	     		var arr = new Array();
	     		for(var i in data.datas){
	     			arr.push([data.datas[i].addTime, data.datas[i].aveTime]);
	     		}
	     		show(arr);
	     	},
	     	error:function(){
	     		alert('查询错误！');
	     	}
	     		
	     });
}

$(document).ready(function () {
     query();
});