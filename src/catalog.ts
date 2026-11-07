import raw from '../catalog.json';
export interface BookMetadata {status:string;source:'douban';url:string;title?:string;author?:string;publisher?:string;published?:string;isbn?:string;note?:string;checkedAt?:string;}
export interface Reading {provider:'weread'|'anna';url:string;title:string;author?:string;bookId?:string;match:'work'|'collection'|'search';note:string;}
export interface CatalogItem {metadata:BookMetadata;reading:Reading|null;checkedAt:string;}
export const catalog=raw as unknown as Record<string,CatalogItem>;
export function readingFor(id:string,title:string,author:string):Reading {const book=catalog[id];if(book?.reading)return book.reading;return {provider:'anna',url:`https://annas-archive.gl/search?q=${encodeURIComponent((book?.metadata.status==='verified'&&book.metadata.isbn)?book.metadata.isbn:title.replace(/[《》]/g,'')+' '+author)}`,title,match:'search',note:'微信读书暂未核实到匹配原著；此处打开安娜的图书馆检索结果，不代表已找到对应版本。'};}
