<script lang="ts">
import {events,people,date,matchesRegion,type Region} from '../history';
import {participants} from '../../data.js';
let {openEntry}:{openEntry:(id:string)=>void}=$props();
let query=$state(''),scope=$state<Region>('all');
const names=(id:string)=>((participants as Record<string,string[]>)[id]||[]).map(pid=>people.find(p=>p.id===pid)?.name||'').join('、');
let filtered=$derived(events.filter(e=>matchesRegion(e,scope)&&`${e.name} ${names(e.id)} ${e.start} ${e.end}`.includes(query.trim())));
</script>
<details class="events-overview"><summary>展开所有事件表 · {events.length} 个事件</summary><div class="event-filters"><input type="search" aria-label="搜索所有事件" placeholder="搜索事件、人物或年份…" bind:value={query}/><select aria-label="事件表地区" bind:value={scope}><option value="all">全部地区</option><option value="world">世界背景</option><option value="china">中国脉络</option><option value="soviet">苏联脉络</option></select><span aria-live="polite">找到 {filtered.length} 个事件</span></div><div class="event-table-scroll"><table><thead><tr><th scope="col">事件</th><th scope="col">开始时间</th><th scope="col">结束时间</th><th scope="col">关联人物</th><th scope="col">查看</th></tr></thead><tbody>{#each filtered as event}<tr><th scope="row">{event.name}</th><td>{date(event.start)}</td><td>{date(event.end)}</td><td>{names(event.id)||'集体事件，未指定个人'}</td><td><button aria-label={`查看${event.name}`} onclick={()=>openEntry(event.id)}>定位星图 ↗</button></td></tr>{/each}</tbody></table></div>{#if !filtered.length}<p class="detail-note">没有匹配事件，请调整关键词或地区。</p>{/if}</details>
