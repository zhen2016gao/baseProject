function showConcurrent( arr){
	
	 $.jqplot._noToImageButton = true;
	 $('#m_concurrent_id').children().remove();
	 var plot1 = $.jqplot("m_concurrent_id", [arr], {
         seriesColors: ["rgba(78, 135, 194, 0.7)", "rgb(211, 235, 59)"],
         title: '并发用户请求数',
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
                     formatString: "%Y-%m-%d %H:%M",
                     angle: -30
                 },
                 drawMajorGridlines: true,
                 drawMajorGridlines: false
             },
             yaxis: {
             	label:'并发用户数',
                 pad: 0,
                 rendererOptions: {
                     minorTicks: 1
                 }
             }
         }
     });
}


function showTransactionSuccessRate(suc, err, ticks){
	 $('#m_transactionSuccessRate_id').children().remove();
    var plot1 = $.jqplot('m_transactionSuccessRate_id', [err, suc], {
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

function showProcessRequestNumber(arr){

    $.jqplot._noToImageButton = true;
    $('#m_processRequestNumber_id').children().remove();
    var plot1 = $.jqplot("m_processRequestNumber_id", [arr], {
        seriesColors: ["rgba(78, 135, 194, 0.7)", "rgb(211, 235, 59)"],
        title: '已处理请求数',
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
                	  formatString: "%Y-%m-%d %H:%M",
                      angle: -30
                  },
                  drawMajorGridlines: true,
                  drawMajorGridlines: false
            },
            yaxis: {
            	label:'已处理请求数',
                pad: 0,
                rendererOptions: {
                    minorTicks: 1
                }
            }
        }
    });
}

function showTransactionProcessTime(arr){

    $.jqplot._noToImageButton = true;
    $('#m_transactionProcessTime_id').children().remove();
    var plot1 = $.jqplot("m_transactionProcessTime_id", [arr], {
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
                	  formatString: "%Y-%m-%d %H:%M",
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

function showTransactionNoticeQueue(count, time){
	 $('#m_transactionNoticeQueue_id').children().remove();
    var plot1 = $.jqplot('m_transactionNoticeQueue_id', [count], {
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

function showTransactionNoticeAcceptQueue(count ,time){
	 $('#m_transactionNoticeAcceptedQueue_id').children().remove();
    var plot1 = $.jqplot('m_transactionNoticeAcceptedQueue_id', [count], {
    	 seriesColors: ["rgba(78, 135, 194, 0.7)"],
    	 title: '交易通知接收队列',
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

function showPaymentMonitorLine( arr){
	 $.jqplot._noToImageButton = true;
	 $('#m_paymentMonitor_line_id').children().remove();
	 var plot1 = $.jqplot("m_paymentMonitor_line_id", [arr], {
        seriesColors: ["rgba(78, 135, 194, 0.7)", "rgb(211, 235, 59)"],
        title: '支付功能监控',
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
                	formatString: "%Y-%m-%d %H:%M",
                    angle: -30
                },
                drawMajorGridlines: true,
                drawMajorGridlines: false
            },
            yaxis: {
            	label:'交易耗时(s)',
                pad: 0,
                /*min:0,
            	max:1000,
            	tickInterval: "100",*/
                rendererOptions: {
                    minorTicks: 1
                }
            }
        }
    });
}

function showPaymentMonitorPie(data){
	 $('#m_paymentMonitor_Pie_id').children().remove();
	 var plot1 = jQuery.jqplot ('m_paymentMonitor_Pie_id', [data], 
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

function showTransactionNoticeMonitor( arr){
	 $.jqplot._noToImageButton = true;
	 $('#m_transactionNoticeMonitor_id').children().remove();
	 var plot1 = $.jqplot("m_transactionNoticeMonitor_id", [arr], {
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
                	formatString: "%Y-%m-%d %H:%M",
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

function getAllDates(){
	//并发用户请求数
	 $.ajax({
    	type:'POST',
    	url:'queryConCurrentUser.html',
    	data:{
    		start : 1,
    		end : 30,
    		dateType: 'M'
    	},
    	datatype:'json',
    	async : false,
    	success:function(data){
    		var arr = new Array();
    		for(var i in data.datas){
    			arr.push([data.datas[i].addTime, data.datas[i].reqCount]);
    		}
    		showConcurrent(arr);
    	},
    	error:function(){
    		alert('查询错误！');
    	}
    });
	 
	//交易成功失败率
	 $.ajax({
	     	type:'POST',
	     	url:'queryTransactionSuccessRate.html',
	     	data:{
	     		start :  1,
	     		end : 5,
	     		dateType: 'M'
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
	     		showTransactionSuccessRate(suc, err, ticks);
	     	},
	     	error:function(){
	     		alert('查询错误！');
	     	}
	     		
	     });
	 
	//已处理请求数
	  $.ajax({
	     	type:'POST',
	     	url:'queryProcessRequestNumber.html',
	     	data:{
	     		start : 1,
	     		end : 30,
	     		dateType: 'M'
	     	},
	     	datatype:'json',
	     	async : false,
	     	success:function(data){
	     		 var arr = new Array();
	     		for(var i in data.datas){
	     			arr.push([data.datas[i].addTime, data.datas[i].handleSize]);
	     		}
	     		showProcessRequestNumber(arr);
	     	},
	     	error:function(){
	     		alert('查询错误！');
	     	}
	     		
	     });
	 
	//交易处理时间
	  $.ajax({
	     	type:'POST',
	     	url:'queryTransactionProcessTime.html',
	     	data:{
	     		start : 1,
	     		end : 30,
	     		dateType: 'M'
	     	},
	     	datatype:'json',
	     	async : false,
	     	success:function(data){
	     		var arr = new Array();
	     		for(var i in data.datas){
	     			arr.push([data.datas[i].addTime, data.datas[i].aveTime]);
	     		}
	     		showTransactionProcessTime(arr);
	     	},
	     	error:function(){
	     		alert('查询错误！');
	     	}
	     		
	     });
	 
	//交易通知队列
	$.ajax({
  	type:'POST',
	url:'queryTransactionNoticeQueue.html',
	data:{
		start:1,
		end:5,
		dateType:'M'
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
		showTransactionNoticeQueue(count ,time);
	},
	error:function(){
		alert('查询错误！');
	}
		
});
	//交易通知接收队列
	$.ajax({
    	type:'POST',
    	url:'queryTransactionNoticeAccept.html',
    	data:{
    		start:1,
    		end:5,
    		dateType:'M'
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
    		showTransactionNoticeAcceptQueue(count ,time);
    	},
    	error:function(){
    		alert('查询错误！');
    	}
    		
    });
	  
	//交易通知监控
	 $.ajax({
    	type:'POST',
    	url:'queryTransactionNoticeMonitor.html',
    	data:{
    		start : 1,
    		end : 30,
    		dateType: 'M'
    	},
    	datatype:'json',
    	async : false,
    	success:function(data){
    		var arr = new Array();
    		for(var i in data.datas){
    			arr.push([data.datas[i].time, data.datas[i].count]);
    		}
    		showTransactionNoticeMonitor(arr);
    	},
    	error:function(){
    		alert('查询错误！');
    	}
    		
    });
	
	//交易功能监控
	 $.ajax({
    	type:'POST',
    	url:'queryPaymentMonitor.html',
    	data:{
    		start : 1,
    		end : 5,
    		dateType:'M'/*,
    		startTime: '2011-11-14 15:50:12',
    		endTime: '2011-11-14 15:54:40'*/
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

function setRefresh(){
	var time = $("#time").val() * 60;
	refresh(time);
}

function refresh( time){
	$('body').stopTime();
	$('body').everyTime(time+'s', getAllDates);
}

function openPage(plugin, url){
    if (parent.$('#tt').tabs('exists', plugin)){
    	parent.$('#tt').tabs('select', plugin);
        var tab = $('#tt').tabs('getSelected');
        parent.$('#tt').tabs('update', {
        	 tab: tab,
             options: {
            	 title:plugin,
                 content: '<iframe src="'+ url+ '" width="100%" height="100%" frameborder="0" scrolling="auto"></iframe>'
             }
        });
        
    } else {
    	parent.$('#tt').tabs('add',{
            title:plugin,
            content: '<iframe src="'+ url+ '" width="100%" height="100%" frameborder="0" scrolling="auto"></iframe>',
            closable:true,
            extractor:function(data){
                return data;
            }
        });
    }
}

$(document).ready(function () {
    
	getAllDates();
	
	var time = $("#time").val() * 60;
	refresh(time);
});