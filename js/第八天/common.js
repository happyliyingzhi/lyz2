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
