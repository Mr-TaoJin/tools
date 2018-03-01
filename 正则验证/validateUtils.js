//js校验wangao
var ValidateUtils = {
	// 判断参数是否为空
	"isNull" : function(data) {
		return !(data != "" && data != null && data != undefined && data.length != 0);
	},
	// 是否含有中文（也包含日文和韩文）
	"isChineseChar" : function(str) {
		return (/[\u4E00-\u9FA5\uF900-\uFA2D]/.test(str));
	},
	// 同理，是否含有全角符号的函数
	"isFullwidthChar" : function(str) {
		return (/[\uFF00-\uFFEF]/.test(str));
	},
	// QQ校验,先校验是否全是数字,在判断是否是QQ号
	"isQQ" : function(str) {
		return (/^[0-9]*$/.test(str)) && (/[1-9][0-9]{4,}/.test(str));
	},
	// 是否是邮件地址
	"isEmail" : function(str) {
		return (/^([\w\.\-]+)\@(\w+)(\.([\w^\_]+)){1,2}$/.test(str));
	},
	// 邮政编码校验
	"isPostalCode" : function(str) {
		return (/^[a-zA-Z0-9 ]{3,12}$/.test(str));
	},
	// 是否全是数字,不包含符号
	"isDigital" : function(str) {
		return (/^[0-9]*$/.test(str));
	},
	// 校验是否是手机号
	"isPhone" : function(str) {
		return (/^1[34578]\d{9}$/.test(str));
	},
	// 校验是否是密码格式6-21字母和数字组成
	"isPassword" : function(str) {
		return (/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,21}$/.test(str))
	},
	// 校验是否是密码格式6-16字母和数字组成
	"isPassword2" : function(str) {
		return (/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/.test(str))
	},
	// 姓名正则
	"isName" : function(str) {
		return (/^[\u4E00-\u9FA5]{2,4}/.test(str));
	},
	// 昵称正则 要求2-16位由字母、数字、_或汉字组成
	"isNickName" : function(str) {
		return (/^[\u4e00-\u9fff\w]{2,16}$/.test(str));
	},// 判断是否是微信
	"isWeiXin" : function() {
		var ua = window.navigator.userAgent.toLowerCase();
		if (ua.match(/MicroMessenger/i) == 'micromessenger') {
			return true;
		} else {
			return false;
		}
	},//是否手机号
	"isMobile":function(phone){
		return /^1[34578]\d{9}$/.test(phone);
	},
	"dateFormat":function(date, format) {
		if(!date){
			date = new Date(date);
		}
		if(!format){
			format="yyyy-MM-dd hh:mm:ss";
		}
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
    }

}