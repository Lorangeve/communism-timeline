<script lang="ts">
import {fade} from 'svelte/transition';
import {works,date,authorNames,type Entry} from '../history';
import {toYear} from '../../galaxy.js';
let {item,year,select,reduced}:{item:Entry;year:number;select:(id:string,jump?:boolean)=>void;reduced:boolean}=$props();
let status=$derived(year<toYear(item.start)?'future':year>=toYear(item.end)?'ended':'active');
</script>
<aside id="detail" aria-live="polite">{#key item.id}<div in:fade={{duration:reduced?0:160}}><p class="eyebrow">{item.type==='work'?'文献档案':item.type==='person'?'人物档案':'历史事件'} / {item.region==='china'?'中国脉络':'世界背景'}</p><div class="detail-symbol">{item.type==='work'?'✦':item.type==='person'?'◉':'✧'}</div><h2>{item.name}</h2>
{#if item.type==='work'}<p class="authors">{authorNames(item)}</p><dl class="work-dates"><dt>{item.dateLabel||'写作时间'}</dt><dd>{date(item.start)}{item.start===item.end?'':' — '+date(item.end)}</dd><dt>首次发表 / 版本</dt><dd>{item.published}</dd></dl>{:else}<p class="detail-dates">{date(item.start)}<br><span>— {date(item.end)}</span></p>{/if}
<div class="status">{status==='future'?'尚未抵达':status==='active'?(item.type==='work'?'写作中':item.type==='person'?'在世':'进行中'):(item.type==='work'?'已抵达文献节点':item.type==='person'?'已逝世':'已结束 / 已完成')}</div><p class="description">{item.description}</p><a class="source" href={item.source} target="_blank" rel="noopener noreferrer">查阅资料 / 原文 ↗</a><button class="jump" onclick={()=>select(item.id,true)}>定位到{item.type==='work'?'文献星点':item.type==='person'?'出生时间':'事件起点'} →</button>
{#if item.type==='person'}<div class="related"><p>代表文献</p>{#each works.filter(w=>w.authors?.includes(item.id)) as w}<button onclick={()=>select(w.id,true)}>{w.name} <small>{w.end.slice(0,4)}</small></button>{:else}<span>本图谱暂无收录</span>{/each}</div>{/if}<p class="detail-note">{item.type==='work'?'星点优先以写作完成时间定位；出版节点与特殊版本另作说明。':item.type==='person'?'生命区间不等于政治活动区间。':'事件的起止口径见条目说明。'}</p></div>{/key}</aside>
