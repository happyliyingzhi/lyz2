$(function () {
    var errMsg;
    $.each($("input"), function (i, val) {
      $(val).blur(function () {
        if ($(val).attr("name") == "userName") {
          $(".nameMsg").remove();
          var userName = val.value;
          var regName = /[a-zA-Z]\w{4,16}/
          if (userName == "" || userName.trim() == "") {
            errMsg = "<span class='nameMsg' style='color:red;'>用户名不能为空</span>";
          } else if (!regName.test(userName)) {
            errMsg = "<span class='nameMsg' style='color:red;'>由英文字母和数字组成的4-16位字符，以字母开头</span>";
          } else {
            errMsg = "<span class='nameMsg' style='color:red;'>OK！</span>";
          }
          $(this).parent().append(errMsg);
        } else if ($(val).attr("name") == "nickName") {
          $(".nickMsg").remove();
          var nickName = val.value;
          var regName = /[\u4e00-\u9fa5]{2,6}/
          if (nickName == "" || nickName.trim() == "") {
            errMsg = "<span class='nickMsg' style='color:red;'>昵称不能为空</span>";
          } else if (!regName.test(nickName)) {
            errMsg = "<span class='nickMsg' style='color:red;'>由2-6个汉字组成</span>";
          } else {
            errMsg = "<span class='nickMsg' style='color:red;'>OK！</span>";
          }
          $(this).parent().append(errMsg);
        } else if ($(val).attr("name") == "email") {
          $(".emailMsg").remove();
          var email = val.value;
          var regEmail = /^\w+@\w+((\.\w+)+)$/;
          if (email == "" || email.trim() == "") {
            errMsg = "<span class='emailMsg' style='color:red;'>邮箱不能为空</span>";
          } else if (!regEmail.test(email)) {
            errMsg = "<span class='emailMsg' style='color:red;'>邮箱账号@域名。如good@tom.com、whj@sina.com.cn</span>";
          } else {
            errMsg = "<span class='emailMsg' style='color:red;'>OK！</span>";
          }
          $(this).parent().append(errMsg);
        } else if ($(val).attr("name") == "pwd") {
          $(".pwdMsg").remove();
          var pwd = val.value;
          var regPwd = /^\w{4,10}$/;
          if (pwd == "" || pwd.trim() == "") {
            errMsg = "<span class='pwdMsg' style='color:red;'>密码不能为空</span>";
          } else if (!regPwd.test(pwd)) {
            errMsg = "<span class='pwdMsg' style='color:red;'>格式错误</span>";
          } else {
            errMsg = "<span class='pwdMsg' style='color:red;'>OK！</span>";
          }
        //   $(this).parent().append(errMsg);
        // } else if ($(val).attr("name") == "pwd2") {
        //   $(".pwd2Msg").remove();
        //   var pwd2 = val.value;
        //   var pwd = $("input")[3].value;
        //   if (pwd2 == "" || pwd2.trim() == "" || !pwd2.equals(pwd)) {
        //     errMsg = "<span class='pwd2Msg' style='color:red;'>两次输入密码不一致</span>";
        //   } else {
        //     errMsg = "<span class='pwd2Msg' style='color:red;'>OK！</span>";
        //   }
          $(this).parent().append(errMsg);
        } else if ($(val).attr("name") == "phone") {
          $(".phoneMsg").remove();
          var phone = val.value;
          var regPhone = /[13,15,18]\d{9}/;
          if (phone == "" || phone.trim() == "") {
            errMsg = "<span class = 'phoneMsg' style = 'color:red;' > 手机号不能为空 </span>"
          } else if (!regPhone.test(phone)) {
            errMsg = "<span class = 'phoneMsg' style = 'color:red;' > 格式错误 </span>"
          } else {
            errMsg = "<span class = 'phoneMsg' style = 'color:red;' > OK！ </span>"
          }
          $(this).parent().append(errMsg);
        } else if ($(val).attr("name") == "date") {
          $(".dateMsg").remove();
          var birthday = val.value;
          var regDate = /(199\d|200\d)[-/](0\d|1[0-2])[-/](0\d|[1-2]\d|30|31)/;
          if (birthday == "" || birthday.trim() == "") {
            errMsg = "<span class='dateMsg' style='color:red;'>请输入生日</span>";
          } else if (!regDate.test(birthday)) {
            errMsg = "<span class='dateMsg' style='color:red;'>格式错误</span>";
          } else {
            errMsg = "<span class='dateMsg' style='color:red;'>OK！</span>";
          }
          $(this).parent().append(errMsg);
        }
      });
    });
  });
