function show( arr){
	 $.jqplot._noToImageButton = true;
	 $('#transactionNoticeMonitor_id').children().remove();
	 var plot1 = $.jqplot("transactionNoticeMonitor_id", [arr], {
         seriesColors: ["rgba(78, 135, 194, 0.7)", "rgb(211, 235, 59)"],
         title: '交易通知监控',
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
             	fill: true
             }
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
                //	 formatString: "%Y-%m-%d %H:%M",
                     angle: -30
                 },
                 drawMajorGridlines: true,
                 drawMajorGridlines: false
             },
             yaxis: {
             	label:'通知数',
                 pad: 0,
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
    	url:'queryTransactionNoticeMonitor.html',
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
    			arr.push([data.datas[i].time, data.datas[i].count]);
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