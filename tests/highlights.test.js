import test from 'node:test';
import assert from 'node:assert/strict';
import {pickHighlight,createHighlightController,MIN_HOLD_MS,concurrentEvents} from '../highlights.js';
const entry=(id,time,priority=50,type='event',end=String(time))=>({id,start:String(time),end,priority,type});
test('只选择已经发生的事件，后续重点到达后才切换',()=>{const es=[entry('a',1917,90),entry('b',1918,100)];assert.equal(pickHighlight(es,1916),null);assert.equal(pickHighlight(es,1917.5).entry.id,'a');assert.equal(pickHighlight(es,1918.5).entry.id,'b');});
test('同一十年内过时事件退出候选，持续事件不会遗漏',()=>{const es=[entry('meeting',1962,99,'event','1962-02-07'),entry('movement',1966,98,'event','1976-10')];assert.equal(pickHighlight(es,1962.5).entry.id,'meeting');assert.equal(pickHighlight(es,1966.5).entry.id,'movement');assert.equal(pickHighlight(es,1969).entry.id,'movement');});
test('高速播放下仍至少显示六秒，之后直接切至当前有效重点',()=>{const c=createHighlightController(),es=[entry('a',1917,90),entry('b',1918,100)];assert.equal(c.update(es,1917.5,0).entry.id,'a');assert.equal(c.update(es,1918.5,1000).entry.id,'a');assert.equal(c.update(es,1918.5,MIN_HOLD_MS).entry.id,'b');});
test('回溯不能保留未来事件，同期列表含跨年持续事件并排除未来',()=>{const c=createHighlightController(),es=[entry('long',1950,50,'event','1970'),entry('meeting',1962,99),entry('future',1966,100)];c.update(es,1966.5,0);assert.equal(c.update(es,1962.5,100).entry.id,'meeting');assert.deepEqual(concurrentEvents(es,1962.5).map(e=>e.id),['meeting','long']);});
test('只选文献时以完成日期为准；重置清除最短停留限制',()=>{const c=createHighlightController(),book={...entry('book',1920,100,'work'),end:'1931'};assert.equal(pickHighlight([book],1921),null);c.update([entry('a',1917)],1917.5,0);c.reset();assert.equal(c.update([book],1931,1).entry.id,'book');});
