import test from 'node:test';
import assert from 'node:assert/strict';
import {people,events,participants} from '../data.js';
import {panTimeline} from '../timeline-pan.js';
test('全部人物有独立结局来源，评价栏使用国内党史文献出处',()=>{
 for(const p of people){assert(p.outcome?.summary,p.id);assert.equal(new URL(p.outcome.source).protocol,'https:');if(p.assessment){assert(p.assessment.title);assert(['www.12371.cn','www.dswxyjy.org.cn'].includes(new URL(p.assessment.source).hostname),p.id);}}
});
test('新增重点会议与反右运动具有起止时间、毛泽东关联和角色',()=>{
 for(const id of ['gutian','zunyi','wayaobao','seventh-congress','second-plenum','eighth-congress','anti-rightist','lushan','seven-thousand']){const e=events.find(e=>e.id===id);assert(e?.start&&e?.end,id);assert(participants[id].includes('mao'));assert(e.participantRoles.mao);assert(e.priority>0);}
 assert.equal(events.find(e=>e.id==='seven-thousand').end,'1962-02-07');assert.equal(events.find(e=>e.id==='zunyi').start,'1935-01-15');
});
test('拖动在边缘平移，中央区域及全景保持稳定，且不会超出1818—2000',()=>{
 assert(panTimeline(1900,70,490,500,.1)>1900);assert(panTimeline(1900,70,5,500,.1)<1900);assert.equal(panTimeline(1900,70,250,500,.1),1900);assert.equal(panTimeline(1818,182,499,500,.1),1818);assert.equal(panTimeline(1818,70,0,500,.1),1818);assert.equal(panTimeline(1930,70,600,500,.1),1930);
 let start=1900;for(let i=0;i<1000;i++)start=panTimeline(start,70,500,500,.1);assert.equal(start,1930);
});
