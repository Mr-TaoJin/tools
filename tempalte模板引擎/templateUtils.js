template.helper('dateFormat', function(date, format) {
        date = new Date(date);
        var map = {
            "M": date.getMonth() + 1, //月份 
            "d": date.getDate(), //日 
            "h": date.getHours(), //小时 
            "m": date.getMinutes(), //分 
            "s": date.getSeconds(), //秒 
            "q": Math.floor((date.getMonth() + 3) / 3), //季度 
            "S": date.getMilliseconds() //毫秒 
        };
        format = format.replace(/([yMdhmsqS])+/g, function(all, t) {
            var v = map[t];
            if (v !== undefined) {
                if (all.length > 1) {
                    v = '0' + v;
                    v = v.substr(v.length - 2);
                }
                return v;
            } else if (t ==='y') {
                return (date.getFullYear() + '').substr(4 - all.length);
            }
            return all;
        });
        return format;
   });


template.helper('Math_PI', function(num) {
	if(typeof num=='string'){
		num = parseFloat(num);
	}
    return num.toFixed(2);
});

template.helper('Math_PI4ROUND', function(num) {
	if(typeof num=='string'){
		num = parseFloat(num);
	}
    return num.toFixed(0);
});

template.helper('ABS', function(num) {
	if(typeof num=='string'){
		num = parseFloat(num);
	}
    return Math.abs(num);
});

template.helper('jiequString', function(content,startIndex,endIndex) {
	var result = content.substring(startIndex,endIndex);
    return result;
});

template.helper('getListLength', function(list) {
    return list.length;
});

