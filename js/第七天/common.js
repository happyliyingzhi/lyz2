/**
 * Created by ��Ӣ֥ on 2018/5/28.
 */
/**
 * ͨ��id���Ԫ��
 * @param idStr id��
 * @returns {Element}
 */
function id(idStr){
    return document.getElementById(idStr);
}

/**
 * ͨ����ǩ�����Ԫ��
 * @param tag ��ǩ��
 * @returns {NodeList}
 */
function tagName(tag){
    return document.getElementsByTagName(tag);
}
/**
 * ͨ������Ԫ��
 * @param Class ����
 * @returns {NodeList}
 */
function className(Class){
    return   document.getElementsByClassName(Class);
}