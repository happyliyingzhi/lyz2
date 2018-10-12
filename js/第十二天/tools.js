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
function getClient(){
    return{
        clientWidth:window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth||0,
        clientHeight:window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight||0

    }
}