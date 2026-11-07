import {toYear} from './galaxy.js';
// 编辑优先级，只用于自动导览，不代表人物或历史的价值排名。可逐条覆盖。
export const highlightPriority={
 'manifesto-work':100,manifesto:95,first:90,commune:98,capital:100,gotha:90,state:95,imperialism:90,what:90,protracted:92,
 'my-marxism':95,practice:90,contradiction:90,democracy:90,
 'self-cultivation':95,'emancipate-mind':98,'southern-talks':98,
 october:100,prc:100,reform:100,dissolution:100,cpc:98,march:95,
 cultural:98,leap:95,'great-purge':98,'patriotic-war':98,
 'twentieth-congress':95,perestroika:95,vostok:90,
 marx:95,engels:90,lenin:95,mao:95,liu:90,deng:95,
 stalin:90,trotsky:85,'chen-yun':85,zhou:90,zhu:85,
};
export const FOCUS_YEARS=10;
export const MIN_HOLD_MS=6000;
const moment=entry=>toYear(entry.type==='work'?entry.end:entry.start);
const rank=entry=>entry.priority??highlightPriority[entry.id]??50;
export function pickHighlight(entries,year){
 const start=Math.floor(year/FOCUS_YEARS)*FOCUS_YEARS,end=start+FOCUS_YEARS;
 const candidates=entries.filter(e=>e.type==='person'?
  [toYear(e.start),toYear(e.end)].some(t=>t>=start&&t<end):moment(e)>=start&&moment(e)<end);
 // 没有新的事件或文献时，用仍在世的人物作背景，不让资料栏突然空白。
 const pool=candidates.length?candidates:entries.filter(e=>e.type==='person'&&toYear(e.start)<=year&&toYear(e.end)>=year);
 const entry=[...pool].sort((a,b)=>rank(b)-rank(a)||moment(a)-moment(b)||a.id.localeCompare(b.id))[0];
 return entry?{entry,start,end:end-1}:null;
}
export function createHighlightController(){
 let current=null,changedAt=-Infinity;
 return {
  reset(){current=null;changedAt=-Infinity;},
  update(entries,year,now){
   if(current&&now-changedAt<MIN_HOLD_MS)return current;
   if(current&&Math.floor(year/FOCUS_YEARS)*FOCUS_YEARS===current.start)return current;
   const next=pickHighlight(entries,year);
   if(!next)return current;
   if(current?.entry.id!==next.entry.id)changedAt=now;
   current=next;return current;
  }
 };
}
