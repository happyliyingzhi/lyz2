/**
 * Created by 李英芝 on 2018/5/29.
 */
/**
 * id名的公共属性
 * @param id名
 * @returns {Element}
 */
function id(id){
    return document.getElementById(id);
}
/**
 * 标签的属性
 * @param tag名
 * @returns {NodeList}
 */
function  tagName(tag){
    return document.getElementsByTagName(tag);
}
/**
 * 类的属性
 * @param Class名
 * @returns {NodeList}
 */
function className(Class){
    return   document.getElementsByClassName(Class);
}
/**
 * name的属性
 * @param Name名
 * @returns {NodeList}
 * @constructor
 */
function Name(Name){
     return document.getElementsByName(Name);
}
/**
 * 获得下一个元素的节点
 * @param ele
 * @returns {*}
 */
function getNextElement(ele) {
    //1.判断当前浏览器是否支持最新的方法
    if(ele.nextElementSibling){
        //只要你能进入这个判断,那么就代表你支持这个最新的方法
        return ele.nextElementSibling;
    }else  {
        //如果真的走到了这一步,恭喜你,当前用户用的是上古ie,美滋滋
        //2.首先先获得下一个节点
        var node = ele.nextSibling;
        //如果找到的不是元素节点,那么就继续往下找
        while (node.nodeType != 1){
            //如果这里不等于1,那就代表你找到的不是一个元素节点,那就继续往下找
            node = node.nextSibling;
            //如果找到的这个节点类型等于1,那么恭喜你,找到了下一个元素节点,结束循环,返回这个节点
        }
        return node;
    }
}
/**
 * 兼容ie8上一个元素节点
 * @param ele
 * @returns {*}
 */
function getpreviousElement(ele){
    //1先判断一下是否能得到
    if(ele.previousElementSibling){
        return ele.previousElementSibling;
    }else{
        //进入循环，直到找到上一个元素节点，跳出循环
        var node=ele.previousSibling;
        while(node.nodeType !=1){
            node=ele.previousSibling;
        }
    }
    return node;
}
/**
 * 得到第一个最后一个节点元素
 * @param ele
 * @returns {*}
 */
function getLastElement(ele){
    if(ele.lastElementChild){
        return ele.lastElementChild;
    }else{
        var node=ele.lastChild;
        while(node.nodeType !=1){
            node=node.previousSibling;
        }
        return node;
    }

}
/**
 * 获得第一个节点元素
 * @param ele
 * @returns {*}
 */
function getFirstElement(ele) {
    if(ele.firstElementChild){
        return ele.firstElementChild;
    }else {
        var node1 = ele.firstChild;
        while(node1.nodeType !=1){
            node1 = node1.nextSibling;
        }
        return node1;
    }
}
