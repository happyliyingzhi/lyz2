/**
 * Created by ��Ӣ֥ on 2018/6/2.
 */
function animate (target){
    //��ռ�ʱ��
    clearInterval(timeID);
    //2.���õ�400�ļ�ʱ��
    setInterval(function () {
         //3.�Ȼ�ȡ���ӿ�ʼ��λ��
         var leftBox=box.offsetLeft;
        //4.���ò���
            var step=10;
           leftBox=leftBox+step;
        //5.�ж����һ���ľ���
        if(leftBox<target){
            box.style.left=leftBox+"px";
        }else{
            //6.������400����ôǿ������400
            box.style.left=target+"px";
            //7.��da400���λ�õ�ʱ�򣬼�ʱ��Ӧ��ֹͣ
            clearInterval(timeID);
        }
        },100)
}
