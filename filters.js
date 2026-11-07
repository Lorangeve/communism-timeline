// 苏联脉络也包含苏俄时期及相关人物的早期文献，并不把国家成立年份前移。
import {people} from './data.js';
const sovietPeople=new Set(['lenin','stalin','trotsky','bukharin',...people.filter(p=>p.topics?.includes('soviet')).map(p=>p.id)]);
const sovietEvents=new Set(['october','international','ussr','dissolution']);
export function matchesRegion(item,region){return region==='all'||(region==='soviet'?(item.topics?.includes('soviet')||sovietPeople.has(item.id)||sovietEvents.has(item.id)||item.authors?.some(id=>sovietPeople.has(id)))===true:item.region===region);}
