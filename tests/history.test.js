import test from 'node:test';
import assert from 'node:assert/strict';
import {people,works,events} from '../data.js';
import {nodes,knotsFor,trajectory,toYear} from '../galaxy.js';
test('文献作者有效，写作节点位于作者生卒区间内',()=>{for(const work of works){assert(work.authors.length);assert(toYear(work.start)<=toYear(work.end));for(const id of work.authors){const person=people.find(p=>p.id===id);assert(person,`${work.id}: ${id}`);assert(toYear(work.end)>=toYear(person.start));assert(toYear(work.end)<=toYear(person.end));}}});
test('共同作者的轨迹在文献星点上真正交汇',()=>{for(const node of nodes.filter(n=>n.type==='work')){for(const id of node.authors){const person=people.find(p=>p.id===id);assert(Math.abs(trajectory(knotsFor(person),node.time)-node.y)<1e-9,`${id} 未经过 ${node.id}`);}}});
test('条目 ID 唯一，日期顺序正确，来源可定位',()=>{const all=[...people,...events,...works];assert.equal(new Set(all.map(x=>x.id)).size,all.length);for(const item of all){assert(Number.isFinite(toYear(item.start)));assert(Number.isFinite(toYear(item.end)));assert(toYear(item.start)<=toYear(item.end));assert.equal(new URL(item.source).protocol,'https:');}});
test('扩充人物后所有轨道仍在画面内，颜色均有效',async()=>{const {laneFor,colorFor}=await import('../galaxy.js');for(const p of people){assert(laneFor(p.id)>0&&laneFor(p.id)<.8,p.id);assert.equal(typeof colorFor(p.id),'string');assert(colorFor(p.id).length>3);for(const k of knotsFor(p))assert(k.y>0&&k.y<1,p.id);}});
