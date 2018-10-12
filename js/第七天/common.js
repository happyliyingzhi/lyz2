/**
 * Created by 李英芝 on 2018/5/28.
 */
/**
 * 通过id获得元素
 * @param idStr id名
 * @returns {Element}
 */
function id(idStr){
    return document.getElementById(idStr);
}

/**
 * 通过标签名获得元素
 * @param tag 标签名
 * @returns {NodeList}
 */
function tagName(tag){
    return document.getElementsByTagName(tag);
}
/**
 * 通过类获得元素
 * @param Class 类名
 * @returns {NodeList}
 */
function className(Class){
    return   document.getElementsByClassName(Class);
}