/**
 * Created by ��Ӣ֥ on 2018/6/2.
 */
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