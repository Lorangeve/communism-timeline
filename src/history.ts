import {people as rawPeople, events as rawEvents, works as rawWorks} from '../data.js';
export {matchesRegion} from '../filters.js';
export type Region='all'|'world'|'china'|'soviet';
export interface Entry {id:string;name:string;start:string;end:string;region:string;description:string;source:string;type:'person'|'event'|'work';authors?:string[];published?:string;dateLabel?:string;role?:string;priority?:number;topics?:string[];participantRoles?:Record<string,string>;outcome?:{summary:string;source:string};assessment?:{summary:string;title:string;source:string};}
export const people:Entry[]=rawPeople.map(p=>({...p,type:'person'}));
export const events:Entry[]=rawEvents.map(p=>({...p,type:'event'}));
export const works:Entry[]=rawWorks.map(p=>({...p,type:'work'}));
export const all=[...people,...events,...works];
export const date=(s:string)=>s.split('-').map((n,i)=>`${Number(n)}${['年','月','日'][i]}`).join('');
export const authorNames=(w:Entry)=>(w.authors||[]).map(id=>people.find(p=>p.id===id)?.name).join('、');
export const pct=(y:number)=>100*(y-1818)/182;
