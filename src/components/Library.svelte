<script lang="ts">
import {works,date,authorNames,type Region} from '../history';
let {region,selected,select}:{region:Region;selected:string;select:(id:string,jump?:boolean)=>void}=$props();
let search=$state('');
let filtered=$derived(works.filter(w=>(region==='all'||w.region===region)&&`${w.name} ${authorNames(w)} ${w.end}`.toLowerCase().includes(search.trim().toLowerCase())));
</script>
<section class="library"><div class="library-heading"><div><p class="eyebrow">A LIBRARY ACROSS TIME</p><h2>时代的书页</h2><p>按写作完成时间排列。写作、发表与后来的整理出版，分别标明。</p></div><input type="search" aria-label="搜索文献或作者" placeholder="搜索文献、作者…" bind:value={search}></div><div id="books">{#each filtered as w(w.id)}<button class="book-card" class:selected={selected===w.id} onclick={()=>{select(w.id,true);document.querySelector('#sky')?.scrollIntoView({block:'center'});}}><span class="book-year">{w.end.slice(0,4)} <span>✦</span></span><h3>{w.name}</h3><p>{authorNames(w)}</p><div><span>{w.dateLabel||'写作'} · {date(w.start)}{w.start===w.end?'':' — '+date(w.end)}</span><span>发表 · {w.published}</span></div><span class="book-action">在星河中定位 ↗</span></button>{/each}</div>{#if !filtered.length}<p>没有匹配的文献，试试其他书名或作者。</p>{/if}</section>
