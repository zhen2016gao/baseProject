

function show(count, time){

	 $('#transactionNoticeQueue_id').children().remove();
    var plot1 = $.jqplot('transactionNoticeQueue_id', [count], {
    	 seriesColors: ["rgba(78, 135, 194, 0.7)"],
    	 title:'交易通知队列',
    	 highlighter: {
             show: true,
             sizeAdjust: 1,
             tooltipOffset: 9,
             tooltipContentEditor : function(str, seriesIndex, pointIndex, plot){
            	 var data = plot.data[seriesIndex][pointIndex];
            	return data ; 
             }
         },
        seriesDefaults:{
            renderer:$.jqplot.BarRenderer,
            rendererOptions: {
            	fillToZero: true,
            	barPadding : 0,//两个柱间的距离
            	barMargin : 50,//设置不同分类的柱间距离
            	barWidth : 50//柱的宽度
            	}
        },
        axes: {
            xaxis: {
            	label:'时间',
                renderer: $.jqplot.CategoryAxisRenderer,
                ticks: time
            },
            yaxis: {
            	label:'通知队列(个)',
                tickOptions: {formatString: '%d'}
            }
        }
    });

}

function query(){
	$.ajax({
     	type:'POST',
     	url:'queryTransactionNoticeQueue.html',
     	data:{
     		start:1,
     		end:5,
     		dateType:'D',
     		startTime: $("#startTime").datebox('getValue'),
     		endTime: $("#endTime").datebox('getValue')
     	},
     	datatype:'json',
     	async : false,
     	success:function(data){
     		var time = new Array();
     		var count = new Array();
     		
     		for(var i in data.datas){
     			time.push(data.datas[i].time);
     			count.push(data.datas[i].count);
     		}
     		show(count ,time);
     	},
     	error:function(){
     		alert('查询错误！');
     	}
     		
     });
}

$(document).ready(function(){
	query();
	
	
});