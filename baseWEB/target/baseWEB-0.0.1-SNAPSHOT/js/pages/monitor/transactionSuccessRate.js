function show(suc, err, ticks){
	 $('#transactionSuccessRate_id').children().remove();
	
    var plot1 = $.jqplot('transactionSuccessRate_id', [err, suc], {
    	 seriesColors: ["#FF0000", "rgba(78, 135, 194, 0.7)"],
    	 title: '交易成功失败率',
    	 highlighter: {
             show: true,
             sizeAdjust: 2,
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
        series:[
            {label:'失败率'},
            {label:'成功率'}
        ],
        legend: {
            show: true,
            placement: 'insideGrid'
        },
        axes: {
            xaxis: {
            	label:'时间',
                renderer: $.jqplot.CategoryAxisRenderer,
                ticks: ticks
            },
            yaxis: {
            	label:'交易成功失败率(%)'
            }
        }
    });
}

function query(){
	 $.ajax({
	     	type:'POST',
	     	url:'queryTransactionSuccessRate.html',
	     	data:{
	     		start :  1,
	     		end : 10,
	     		dateType: 'D',
	     		startTime: $("#startTime").datebox('getValue'),
	     		endTime: $("#endTime").datebox('getValue')
	     	},
	     	datatype:'json',
	     	async : false,
	     	success:function(data){
	     		 var suc = new Array();//成功率
	     		 var err = new Array();//失败率
	     		 var ticks = new Array();//刻度
	     		for(var i in data.datas){
	     			suc.push(data.datas[i].paySucSizeInt);
	     			err.push(data.datas[i].errSizeInt);
	     			ticks.push(data.datas[i].addTime);
	     		}
	     		show(suc, err, ticks);
	     	},
	     	error:function(){
	     		alert('查询错误！');
	     	}
	     		
	     });
}

$(document).ready(function(){
	
    query();
	
});