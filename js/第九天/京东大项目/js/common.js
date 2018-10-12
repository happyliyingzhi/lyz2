/**
 * Created by itcast on 2018 04/02.
 */

/**
 * 根据传入的id返回当前这个元素.
 * @param string id 元素的id名
 * @returns {Element} 返回的就是获取的元素.
 */
function id(id){
  return document.getElementById(id);
}

/**
 * 根据标签名 返回获取到的标签
 * @param string tagName  标签名
 * @returns {NodeList}  返回的元素们
 */
function tagName(tagName){
  return document.getElementsByTagName(tagName);
}



/**
 * 给元素设置文本
 * @param 元素
 * @param 设置的文本
 */
function setText(ele,txt){
  //检测浏览器的能力,能力检测.
  if(ele.textContent != undefined){
    //如果进到这里里面来了,说明ele.textContent有值,说明当前这个浏览器支持textContent.
    ele.textContent = txt;
  }else {
    //如果进到这里来了,说明ele.textContent是undefined.说明当前这个浏览器不支持textContent.
    ele.innerText = txt;
  }
}


/**
 * 获取元素的文本
 * @param 元素
 * @returns {*} 获取到的文本
 */
function getText(ele){
  //能力检测
  if(ele.textContent != undefined){
    return ele.textContent;
  }else {
    return ele.innerText;
  }
}