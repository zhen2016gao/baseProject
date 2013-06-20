var config = {
	pageSize : 99,
	loadMsg : '数据加载中，请稍候',
	pageList : [ 10, 15, 25, 50, 100 ],
	pageSize : 10,
	tableHeight : 400,
	numValidType : 'length[1,6]'
};

/**
 * 格式化金额
 * 
 * @param num
 *            要格式化的金额(单位:分)
 * @param n
 *            保留小数位
 * @returns
 */
function formatNum(num, digit) {
	num = num * 0.01;
	num = String(num.toFixed(digit));
	var re = /(-?\d+)(\d{3})/;
	while (re.test(num))
		num = num.replace(re, "$1,$2");
	return num;
}

function formatNumTo(num){
	return formatNum(num, 2);
}