/**
 * Created by ��Ӣ֥ on 2018/5/29.
 */
/**
 * id���Ĺ�������
 * @param id��
 * @returns {Element}
 */
function id(id){
    return document.getElementById(id);
}
/**
 * ��ǩ������
 * @param tag��
 * @returns {NodeList}
 */
function  tagName(tag){
    return document.getElementsByTagName(tag);
}
/**
 * �������
 * @param Class��
 * @returns {NodeList}
 */
function className(Class){
    return   document.getElementsByClassName(Class);
}
/**
 * name������
 * @param Name��
 * @returns {NodeList}
 * @constructor
 */
function Name(Name){
     return document.getElementsByName(Name);
}
/**
 * �����һ��Ԫ�صĽڵ�
 * @param ele
 * @returns {*}
 */
function getNextElement(ele) {
    //1.�жϵ�ǰ������Ƿ�֧�����µķ���
    if(ele.nextElementSibling){
        //ֻҪ���ܽ�������ж�,��ô�ʹ�����֧��������µķ���
        return ele.nextElementSibling;
    }else  {
        //�������ߵ�����һ��,��ϲ��,��ǰ�û��õ����Ϲ�ie,������
        //2.�����Ȼ����һ���ڵ�
        var node = ele.nextSibling;
        //����ҵ��Ĳ���Ԫ�ؽڵ�,��ô�ͼ���������
        while (node.nodeType != 1){
            //������ﲻ����1,�Ǿʹ������ҵ��Ĳ���һ��Ԫ�ؽڵ�,�Ǿͼ���������
            node = node.nextSibling;
            //����ҵ�������ڵ����͵���1,��ô��ϲ��,�ҵ�����һ��Ԫ�ؽڵ�,����ѭ��,��������ڵ�
        }
        return node;
    }
}
/**
 * ����ie8��һ��Ԫ�ؽڵ�
 * @param ele
 * @returns {*}
 */
function getpreviousElement(ele){
    //1���ж�һ���Ƿ��ܵõ�
    if(ele.previousElementSibling){
        return ele.previousElementSibling;
    }else{
        //����ѭ����ֱ���ҵ���һ��Ԫ�ؽڵ㣬����ѭ��
        var node=ele.previousSibling;
        while(node.nodeType !=1){
            node=ele.previousSibling;
        }
    }
    return node;
}
/**
 * �õ���һ�����һ���ڵ�Ԫ��
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
 * ��õ�һ���ڵ�Ԫ��
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
/**
 * Created by ��Ӣ֥ on 2018/6/4.
 */
/**
 * ������������
 * @param ele Ԫ��
 * @param target Ŀ�����
 */
function animateSlow(ele,target){
    //���ü�ʱ��֮ǰ,��ռ�ʱ��
    clearInterval(ele.timerID);
    //���ü�ʱ��
    ele.timerID = setInterval(function () {
        //��ȡ��ǰ��leftֵ
        var currentLeft = ele.offsetLeft;
        //���㲽��.
        var step = (target - currentLeft)/3;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        //����
        currentLeft += step;
        //��ֵ:��Ϊ���������1,������ζ��ḳֵ��.
        ele.style.left = currentLeft + "px";
        //console.log(currentLeft);
        if(currentLeft == target){
            clearInterval(ele.timerID);
        }
    },50);
}

/**
 * ��������
 * @param ele Ԫ��
 * @param target Ŀ��
 */
function animate(ele,target){
    clearInterval(ele.timeID);
    ele.timeID=setInterval(function () {
        var currentLeft=ele.offsetLeft;
        //��ȡ��ǰλ�ñ�Ŀ��λ��ҪС�����������������ǰλ�ñ�Ŀ��λ��Ҫ�󣬲���Ϊ��
        var step=currentLeft>target?-9:9;
        //����
        currentLeft+=step;
        //��ֵ
        //console.log(currentLeft);
        //���Ŀ��λ�ü�ȥ��ǰ�ĵ�λ�ã�������һ�����ͱ�ʾ�������ģ�ֱ�Ӹ�ֵ
        if(Math.abs(target-currentLeft)>Math.abs(step)){
            ele.style.left=currentLeft+"px";
        }else{
            ele.style.left=target+"px";
            clearInterval(ele.timeID);
        }
    },30);

}


/**
 * ���Ԫ�ص���ʽ����
 * @param ele Ŀ��Ԫ��
 * @param attr Ŀ��������
 * @returns {*} Ŀ������ֵ
 */
function getStyle(ele,attr) {
    //�������
    if(ele.currentStyle){
        //�����������,��ô��������������ie8
        return ele.currentStyle[attr];
    }else {
        //�����������,��ô���������ǻ�����߹ȸ�
        return window.getComputedStyle(ele,null)[attr];
    }

}
/**
 * ��Բ�ͬ������ļ��ݣ���ù�����ȥ�ľ���
 * @returns {{top: (Number|number), left: (Number|number)}}
 */

function getScroll() {
    //���ö�·�����ж�
    return {
        top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
        left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0

    }
}
/**
 * ��ת������client�ļ���
 * @returns {{clientWidth: (Number|number), clientHeight: (Number|number)}}
 */
//��װ�������ļ��ݵĺ���
function getClient() {
    return {
        clientWidth: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0,
        clientHeight: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0

    }
};
/**
 * ie8��ie8֮ǰ�������,��֧��e.pageX��e.pageY, �������ie8����ǰ�������Ҫ������.
 * ��ô���e.pageX��e.pageY��Ҫ�����ݴ���.
 * @param e
 * @returns {{pageX: (Number|number), pageY: (Number|number)}}
 */
//���pageλ�õļ��ݷ���
function getPage(e) {
    e = e || window.event;
    return {
        pageX: e.pageX || e.clientX + document.documentElement.scrollLeft,
        pageY: e.clientY || e.clientY+document.documentElement.scrollTop
    }
};
/**
 * ��ֹð�ݵļ���
 * @param e
 * @returns {boolean}
 */
function stopBubble(e){
    e=e||window.event;
    if(e.stopPropagation){
        //����ܽ���ǰ������ǹȸ��
        return e.stopPropagation();
    }else{
        return e.cancelBubble=true;
    }
}
/**
 * ����ͬʱע����ͬ���¼�
 * @param ele   ˭����
 * @param type �ַ�������
 * @param fun  ����
 */
function setEvent(ele,type,fun) {
    if(ele.attachEvent){
        ele.attachEvent("on"+type,fun);
    }else{
        ele.addEventListener(type,fun,false);
    }
}
/**
 * �Ƴ����ݵ��¼�
 * @param ele   ˭����
 * @param type �ַ�������
 * @param fun  ����
 */
function setRemoveEvent(ele,type,fun) {
    //�������
    if(ele.detachEvent){
        //���������������ie8
        ele.detachEvent("on"+type,fun);
    }else{
        //����ȸ����
        ele.removeEventListener(type,fun,false);
    }
}
