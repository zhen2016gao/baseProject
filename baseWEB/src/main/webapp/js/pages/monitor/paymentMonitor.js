function showPaymentMonitorLine( arr){
	
	 $.jqplot._noToImageButton = true;
	 
	 var maxNumber = $("#maxNumber").val() == null || $("#maxNumber").val() == '' ? 0 : $("#maxNumber").val();
	 var minNumber = $("#minNumber").val() == null || $("#minNumber").val() == '' ? 0 : $("#minNumber").val();
	 var avgNumber = $("#avgNumber").val() == null || $("#avgNumber").val() == '' ? 0 : $("#avgNumber").val();
	 
	 $('#paymentMonitor_line_id').children().remove();
	 var plot1 = $.jqplot("paymentMonitor_line_id", [arr], {
         seriesColors: ["rgba(78, 135, 194, 0.7)", "rgb(211, 235, 59)"],
         title: '支付功能监控',
         highlighter: {
        	 tooltipLocation: 'e',
             show: true,
             sizeAdjust: 1,
             tooltipOffset: 20
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
                     angle: -30
                 },
                 drawMajorGridlines: true,
                 drawMajorGridlines: false
             },
             yaxis: {
             	label:'交易耗时(s)',
                 pad: 0,
                 rendererOptions: {
                     minorTicks: 1
                 }
             }
         },
         canvasOverlay: {
             show: true,
             objects: [
               { rectangle: { ymax: minNumber, xminOffset: "0px", xmaxOffset: "0px", yminOffset: "0px", ymaxOffset: "0px",
                         color: "rgba(0, 0, 200, 0.3)", showTooltip: true, tooltipLocation: 'n',tooltipFormatString: "低于最低阀值【"+minNumber+"】" } },
               { rectangle: { ymin: maxNumber, xminOffset: "0px", xmaxOffset: "0px", yminOffset: "0px", ymaxOffset: "0px",
                         color: "rgba(200, 0, 0, 0.3)", showTooltip: true, tooltipLocation: 'n',tooltipFormatString: "超过最高阀值【"+maxNumber+"】" } },
               {
                 horizontalLine : {
                	 name:'avgLine',
                	 y: avgNumber,
                	 lineWidth : 5,
                	 color: '#76EE00',
                     shadow: false,
                     showTooltip:true,
                     tooltipLocation: 'n',
                     tooltipFormatString:'平均耗时【'+ avgNumber +'】'
                 }      	 
               }
                         
             ]
           } 
     });
}

function showPaymentMonitorPie(data){
	 $('#paymentMonitor_Pie_id').children().remove();
	 var plot1 = jQuery.jqplot ('paymentMonitor_Pie_id', [data], 
             { 
         	  title: '失败交易占比(%)',
               seriesDefaults: {
                 renderer: jQuery.jqplot.PieRenderer, 
                 rendererOptions: {
                   showDataLabels: true
                 }
               }, 
               legend: { show:true, location: 'e' }
             }
           );
}

function query(){
	 $.ajax({
     	type:'POST',
     	url:'queryPaymentMonitor.html',
     	data:{
     		start : 1,
     		end : 5,
     		dateType:'D',
     		/*startTime: '2011-11-14',
     		endTime: '2011-11-15'*/
     		startTime: $("#startTime").datebox('getValue'),
     		endTime: $("#endTime").datebox('getValue')
     	},
     	datatype:'json',
     	async : false,
     	success:function(data){
     		var picArr = new Array();
     		var lineArr = new Array();
     		for(var i in data.pie){
     			picArr.push([data.pie[i].respCode, data.pie[i].respCodePre]);
     		}
     		
     		for(var i in data.line){
     			lineArr.push([data.line[i].rspTime, data.line[i].minusTime]);
     		}
     		
     		showPaymentMonitorLine(lineArr);
     		showPaymentMonitorPie(picArr);
     	},
     	error:function(){
     		alert('查询错误！');
     	}
     		
     });
}

$(document).ready(function () {
	query();
	
});