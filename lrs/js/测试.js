
$(function(){
    function setCookie(c_name, value, expiredays) {
        var exdate = new Date();　　　　
              exdate.setDate(exdate.getDate() + expiredays);　　　　
        document.cookie = c_name + "=" + escape(value) + ((expiredays == null) ? "": ";expires=" + exdate.toGMTString());
    }
    function getCookie(c_name) {
        var that = this;　　　　
        if (document.cookie.length > 0) {
            //检查这个cookie是否存在，不存在就为 -1
            c_start = document.cookie.indexOf(c_name + "=")
            if (c_start != -1) {
                //获取cookie值的开始位置
                c_start = c_start + c_name.length + 1;
                //通过";"号是否存在来判断结束位置
                c_end = document.cookie.indexOf(";", c_start);
    
                if (c_end == -1){
                    c_end = document.cookie.length;
                }
                //通过substring()得到了值
                return unescape(document.cookie.substring(c_start, c_end))　　 
            }　　　　
        }　　　　
        return ""　　
    }
    setCookie('aaa','sure',1);
})