// 跟随视野拖动至边缘时，按停留位置平滑滚动；全景与全局端点不再外推。
export function panTimeline(start,span,pointerX,width,elapsed){
 if(span>=182||width<=64)return start;
 const left=32,right=width-32,zone=Math.min(48,(right-left)/4);
 const strength=pointerX<left+zone?-Math.min(1,(left+zone-pointerX)/zone):pointerX>right-zone?Math.min(1,(pointerX-(right-zone))/zone):0;
 return Math.max(1818,Math.min(2000-span,start+strength*span*.25*Math.max(0,Math.min(.1,elapsed))));
}
