// 时间戳转日期（一行代码）
// Date的‘toJSON’方法返回格林威治时间的JSON格式字符串，
// 实际是使用‘toISOString’方法的结果。
// 字符串形如‘2018-08-09T10:20:54.396Z’，
// 转化为北京时间需要额外增加八个时区，我们需要取字符串前19位，
// 然后把‘T’替换为空格，即是我们需要的时间格式。

// 如果时间格式需要毫秒数，只需要获取前23位字符串，和下面一样用replace方法替换。
function time(time = +new Date()) {
    var date = new Date(time + 8 * 3600 * 1000);
    return date.toJSON().substr(0, 19).replace('T', ' ').replace(/-/g, '.');
}
time();
