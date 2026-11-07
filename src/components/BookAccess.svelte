<script lang="ts">
import {catalog,readingFor} from '../catalog';
import {authorNames,type Entry} from '../history';
let {item}:{item:Entry}=$props();
let book=$derived(catalog[item.id]);
let reading=$derived(readingFor(item.id,item.name,authorNames(item)));
</script>
<section class="book-access" aria-label="书目版本与阅读入口">
<p class="eyebrow">阅读这部文献</p>
<a class="read-button" href={reading.url} target="_blank" rel="noopener noreferrer">{reading.provider==='weread'?(reading.match==='collection'?'微信读书 · 选集入口':'微信读书 · 打开阅读'):'安娜的图书馆 · 检索'} ↗</a>
{#if reading.match==='collection'}<p class="reading-title">{reading.title}</p>{/if}
<p class="access-note">{reading.note}</p>
{#if book?.metadata.status==='verified'}
<div class="edition"><p class="edition-label">豆瓣参考版本</p><h3>{book.metadata.title}</h3><dl><dt>作者 / 编者</dt><dd>{book.metadata.author}</dd><dt>出版社</dt><dd>{book.metadata.publisher}</dd><dt>版本出版</dt><dd>{book.metadata.published}</dd>{#if book.metadata.isbn}<dt>ISBN</dt><dd>{book.metadata.isbn}</dd>{/if}</dl>{#if book.metadata.note}<p class="access-note">{book.metadata.note}</p>{/if}<a class="source" href={book.metadata.url} target="_blank" rel="noopener noreferrer">豆瓣书目 ↗</a></div>
{:else}<p class="access-note">豆瓣版本待核实，暂不展示版本字段。</p><a class="source" href={book?.metadata.url} target="_blank" rel="noopener noreferrer">在豆瓣查找版本 ↗</a>{/if}
<p class="access-note">版本出版时间与上方作品首次发表时间分别记录。</p>
</section>
