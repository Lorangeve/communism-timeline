import test from 'node:test';
import assert from 'node:assert/strict';
import {pickHighlight,createHighlightController,MIN_HOLD_MS} from '../highlights.js';
const entry=(id,time,priority=50,type='event')=>({id,start:String(time),end:String(time),priority,type});
test('同一十年内始终选最高优先级，密集节点不抢占',()=>{
 const entries=[entry('a',1917,100),entry('b',1918,80),entry('c',1919,90)];
 for(const year of [1910,1917,1918.5,1919.99])assert.equal(pickHighlight(entries,year).entry.id,'a');
 assert.deepEqual(pickHighlight(entries,1918).start,1910);
 assert.equal(pickHighlight(entries,1918).end,1919);
});
test('高速跨越多个时间段仍至少显示六秒，并直接选择当前时段',()=>{
 const controller=createHighlightController(),entries=[entry('a',1917,100),entry('b',1921,100),entry('c',1931,100)];
 assert.equal(controller.update(entries,1917,0).entry.id,'a');
 assert.equal(controller.update(entries,1921,1000).entry.id,'a');
 assert.equal(controller.update(entries,1931,MIN_HOLD_MS-1).entry.id,'a');
 assert.equal(controller.update(entries,1931,MIN_HOLD_MS).entry.id,'c');
});
test('重置后按新的地区与图例立即重新选择；只选文献时按完成日期定位',()=>{
 const controller=createHighlightController();controller.update([entry('a',1917)],1917,0);controller.reset();
 const book={...entry('book',1920,100,'work'),end:'1931'};
 assert.equal(controller.update([book],1931,1).entry.id,'book');
 assert.equal(pickHighlight([book],1921),null);
});
test('空时间段保留上一份重点，优先级相同时选择确定且不修改输入',()=>{
 const controller=createHighlightController(),entries=[entry('b',1918),entry('a',1917)];
 assert.equal(controller.update(entries,1918,0).entry.id,'a');
 assert.equal(controller.update(entries,1940,10000).entry.id,'a');
 assert.equal(entries[0].id,'b');
});
