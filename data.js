// 公历日期；只有年份的条目用年份显示，不虚构月日。
export const people = [
{id:'marx',name:'卡尔·马克思',start:'1818-05-05',end:'1883-03-14',region:'world',role:'理论奠基',description:'与恩格斯共同发展马克思主义，研究资本主义经济与阶级关系。1848 年共同发表《共产党宣言》。',source:'https://www.marxists.org/archive/marx/bio/marx-engels.pdf'},
{id:'engels',name:'弗里德里希·恩格斯',start:'1820-11-28',end:'1895-08-05',region:'world',role:'理论奠基',description:'与马克思长期合作，参与国际工人运动；马克思逝世后整理出版《资本论》第二、三卷。',source:'https://www.marxists.org/archive/marx/bio/marx-engels.pdf'},
{id:'lenin',name:'弗拉基米尔·列宁',start:'1870-04-22',end:'1924-01-21',region:'world',role:'俄国革命',description:'布尔什维克领导人，领导十月革命，参与建立苏维埃政权与共产国际。',source:'https://en.wikipedia.org/wiki/Vladimir_Lenin'},
{id:'rosa',name:'罗莎·卢森堡',start:'1871-03-05',end:'1919-01-15',region:'world',role:'德国工人运动',description:'马克思主义理论家，参与创立德国共产党，强调群众行动与社会主义民主。1919 年被杀害。',source:'https://en.wikipedia.org/wiki/Rosa_Luxemburg'},
{id:'chen',name:'陈独秀',start:'1879-10-09',end:'1942-05-27',region:'china',role:'早期传播与建党',description:'《新青年》创办人，中国共产党主要创始人之一，曾任中共中央主要领导人。',source:'https://zh.wikipedia.org/wiki/陈独秀'},
{id:'li',name:'李大钊',start:'1889-10-29',end:'1927-04-28',region:'china',role:'早期传播与建党',description:'在中国较早系统传播马克思主义，中国共产党主要创始人之一。1927 年在北京被绞杀。',source:'https://www.12371.cn/2021/11/08/VIDE1636376282381773.shtml'},
{id:'mao',name:'毛泽东',start:'1893-12-26',end:'1976-09-09',region:'china',role:'中国革命与建设',description:'中国共产党和中华人民共和国的主要领导人。其领导时期既有国家建设，也经历大跃进、文化大革命等严重曲折。',source:'https://zh.wikipedia.org/wiki/毛泽东'},
{id:'zhou',name:'周恩来',start:'1898-03-05',end:'1976-01-08',region:'china',role:'中国革命与建设',description:'中国共产党主要领导人之一，中华人民共和国首任国务院总理，长期参与外交与国家建设。',source:'https://zh.wikipedia.org/wiki/周恩来'},
{"id": "stalin", "name": "约瑟夫·斯大林", "start": "1878-12-18", "end": "1953-03-05", "region": "world", "role": "苏联政治与建设", "description": "布尔什维克与苏联领导人。其执政时期推动工业化、农业集体化并领导苏联参与反法西斯战争，也发生大饥荒、大清洗与大规模政治迫害。生卒日期采用公历，出生日期采用档案所载的 1878 年 12 月 18 日，而非过去官方采用的 1879 年 12 月 21 日。", "source": "https://encyclopedia.1914-1918-online.net/article/stalin-joseph/"},
{"id": "trotsky", "name": "列夫·托洛茨基", "start": "1879-11-07", "end": "1940-08-21", "region": "world", "role": "俄国革命与左翼反对派", "description": "十月革命主要组织者之一，参与创建和领导红军，提出不断革命理论。后与斯大林发生政治冲突，被逐出苏联；1938 年参与创建第四国际。1940 年 8 月 20 日在墨西哥遇刺，翌日去世。", "source": "https://encyclopedia.1914-1918-online.net/article/trotsky-leon/"},
{"id": "bukharin", "name": "尼古拉·布哈林", "start": "1888-10-09", "end": "1938-03-15", "region": "world", "role": "苏联经济理论与政治", "description": "布尔什维克理论家，研究帝国主义与过渡经济，曾担任共产国际领导职务。1920 年代支持新经济政策，后在政治斗争中失势；1938 年莫斯科审判后被处决，1988 年获平反。", "source": "https://en.wikipedia.org/wiki/Nikolai_Bukharin"},
{"id": "gramsci", "name": "安东尼奥·葛兰西", "start": "1891-01-22", "end": "1937-04-27", "region": "world", "role": "意大利共产主义与文化理论", "description": "意大利共产党创始人之一，研究文化领导权、知识分子与社会变革。1926 年被法西斯政权监禁，在狱中及后续受监管治疗期间撰写《狱中札记》。", "source": "https://www.casamuseogramsci.it/en/antonio-gramsci-eng/biography/"}
];
export const events = [
{id:'manifesto',name:'《共产党宣言》发表',start:'1848-02',end:'1848-02',region:'world',description:'马克思、恩格斯合著的纲领性文献在伦敦出版，系统阐述阶级斗争与共产主义主张。此条为出版节点，起止时间相同。',source:'https://en.wikipedia.org/wiki/The_Communist_Manifesto'},
{id:'first',name:'第一国际',start:'1864',end:'1876',region:'world',description:'国际工人协会联合多个国家的工人组织与不同社会主义流派，马克思参与其领导工作。1876 年正式解散。',source:'https://www.nationalww2museum.org/war/articles/joseph-stalin-and-dissolution-comintern'},
{id:'commune',name:'巴黎公社',start:'1871-03-18',end:'1871-05-28',region:'world',description:'巴黎的革命自治实践。3 月 18 日起义，3 月 28 日正式宣告公社成立；5 月 28 日被镇压。此处以起义至镇压为展示区间。',source:'https://www.assemblee-nationale.fr/dyn/histoire-et-patrimoine/troisieme-republique/la-commune-de-paris'},
{id:'october',name:'十月革命',start:'1917-11-07',end:'1917-11-08',region:'world',description:'布尔什维克在彼得格勒发动起义并推翻临时政府。这里展示彼得格勒起义的公历日期，对应俄历 10 月 25—26 日，不代表后续内战的结束。',source:'https://en.wikipedia.org/wiki/October_Revolution'},
{id:'international',name:'共产国际',start:'1919',end:'1943',region:'world',description:'1919 年在莫斯科成立，推动各国共产党间的组织联系。1943 年解散。',source:'https://www.historians.org/resource/what-was-the-third-international/'},
{id:'cpc',name:'中共一大',start:'1921-07-23',end:'1921-08',region:'china',description:'在上海开幕，后转移至嘉兴南湖，标志中国共产党成立。闭幕日期存在研究分歧，因此仅标注到 1921 年 8 月；7 月 1 日为建党纪念日。',source:'https://zh.wikipedia.org/wiki/中国共产党第一次全国代表大会'},
{id:'ussr',name:'苏联存续',start:'1922-12-30',end:'1991-12-26',region:'world',description:'苏维埃社会主义共和国联盟于 1922 年成立，1991 年解体。国家存续时间不等于整个共产主义运动的起止时间。',source:'https://en.wikipedia.org/wiki/Soviet_Union'},
{id:'march',name:'红军长征',start:'1934-10',end:'1936-10',region:'china',description:'各路红军进行战略转移。1935 年中央红军到达陕北，1936 年红军三大主力会师；此处采用各路红军长征的整体时间范围。',source:'https://zh.wikipedia.org/wiki/长征'},
{id:'prc',name:'中华人民共和国成立',start:'1949-10-01',end:'1949-10-01',region:'china',description:'开国大典在北京举行，中华人民共和国成立。此条为成立节点，不是国家存续区间。',source:'https://english.www.gov.cn/archive/china_abc/2014/08/27/content_281474983873388.htm'},
{id:'leap',name:'大跃进',start:'1958',end:'1962',region:'china',description:'以快速提高工农业产量为目标的运动，严重政策失误与其他因素共同造成经济困难和大饥荒。此处采用 1958—1962 年的常见分期。',source:'https://en.wikipedia.org/wiki/Great_Leap_Forward'},
{id:'cultural',name:'文化大革命',start:'1966-05',end:'1976-10',region:'china',description:'中国发生的长期政治运动，造成广泛政治迫害、社会动荡与文化损失。通常以 1966 年 5 月至 1976 年 10 月为起止。',source:'https://zh.wikipedia.org/wiki/文化大革命'},
{id:'reform',name:'十一届三中全会',start:'1978-12-18',end:'1978-12-22',region:'china',description:'会议推动党和国家工作重心转向经济建设，成为改革开放的重要历史节点。此处只展示会议日期，不将改革开放视为已结束。',source:'https://zh.wikipedia.org/wiki/中国共产党第十一届中央委员会第三次全体会议'},
{id:'dissolution',name:'苏联解体',start:'1991-12-26',end:'1991-12-26',region:'world',description:'苏联最高苏维埃共和国院通过宣言，确认苏联终止存在，国际共产主义运动进入新的历史阶段。',source:'https://en.wikipedia.org/wiki/Dissolution_of_the_Soviet_Union'}
];

// 文献星点按写作完成时间定位；另列首次发表时间，避免将两者混同。
export const works = [
{id:'manuscripts',name:'《1844年经济学哲学手稿》',authors:['marx'],start:'1844',end:'1844',published:'1932 年',region:'world',description:'讨论异化劳动等问题的早期手稿，生前未完整发表。星点位于写作年，1932 年是完整发表年。',source:'https://www.marxists.org/archive/marx/works/1844/manuscripts/preface.htm'},
{id:'ideology',name:'《德意志意识形态》',authors:['marx','engels'],start:'1845',end:'1846',published:'1932 年（完整发表）',region:'world',description:'马克思、恩格斯共同写作的手稿，阐述唯物史观。写于 1845 年秋至 1846 年中，完整版本到 1932 年才发表。',source:'https://www.marxists.org/archive/marx/works/1845/german-ideology/'},
{id:'manifesto-work',name:'《共产党宣言》',authors:['marx','engels'],start:'1847-12',end:'1848-01',published:'1848 年 2 月',region:'world',description:'马克思、恩格斯共同起草的纲领性文献。星河中两条作者轨迹在写作完成节点交汇；与下方 1848 年 2 月的发表事件分开标示。',source:'https://www.marxists.org/archive/marx/works/1848/communist-manifesto/'},
{id:'capital',name:'《资本论》第一卷',authors:['marx'],start:'1867',end:'1867',published:'1867 年',dateLabel:'首卷出版节点',region:'world',description:'系统分析资本主义生产方式。写作历经多年，星点以第一卷首版出版年 1867 年定位，不将其误作全书写作起止。第二、三卷由恩格斯整理，分别于 1885、1894 年出版。',source:'https://www.marxists.org/archive/marx/works/1867-c1/'},
{id:'civil-war',name:'《法兰西内战》',authors:['marx'],start:'1871-04',end:'1871-05',published:'1871 年 6 月',region:'world',description:'马克思为国际工人协会撰写的宣言，分析巴黎公社。它与巴黎公社有关，但作品星点并不表示作者本人参加了巴黎起义。',source:'https://www.marxists.org/archive/marx/works/1871/civil-war-france/'},
{id:'gotha',name:'《哥达纲领批判》',authors:['marx'],start:'1875-04',end:'1875-05',published:'1891 年（恩格斯首次发表）',region:'world',description:'批评德国工人党纲领草案，讨论劳动、分配以及共产主义社会的不同阶段。写于 1875 年 4 月至 5 月初，1891 年才由恩格斯首次发表。',source:'https://www.marxists.org/archive/marx/works/1875/gotha/'},
{id:'duhring',name:'《反杜林论》',authors:['engels'],start:'1876-09',end:'1878-06',published:'1877—1878 年连载；1878 年成书',region:'world',description:'恩格斯围绕哲学、政治经济学和社会主义展开论述。马克思参与审阅并撰写其中一章，主要作者仍标为恩格斯。',source:'https://www.marxists.org/archive/marx/works/1877/anti-duhring/'},
{id:'utopian',name:'《社会主义从空想到科学的发展》',authors:['engels'],start:'1880',end:'1880',published:'1880 年（法文版）',region:'world',description:'从《反杜林论》有关章节改编而成，介绍社会主义思想与历史发展的关系。',source:'https://www.marxists.org/archive/marx/works/1880/soc-utop/'},
{id:'reform-work',name:'《社会改良还是社会革命？》',authors:['rosa'],start:'1898',end:'1899',published:'1899 年（初版）',region:'world',description:'卢森堡回应伯恩施坦的论点，讨论日常改良斗争与社会变革目标之间的关系。初版源于 1898—1899 年的文章。',source:'https://www.marxists.org/archive/luxemburg/1900/reform-revolution/'},
{id:'what',name:'《怎么办？》',authors:['lenin'],start:'1901',end:'1902',published:'1902 年',region:'world',description:'列宁讨论政治意识、工人运动与革命组织建设问题的著作。',source:'https://www.marxists.org/archive/lenin/works/1901/witbd/'},
{id:'imperialism',name:'《帝国主义是资本主义的最高阶段》',authors:['lenin'],start:'1916',end:'1916',published:'1917 年',region:'world',description:'列宁分析垄断、金融资本和国际竞争的著作。写作时间与首次出版时间分列。',source:'https://www.marxists.org/archive/lenin/works/1916/imp-hsc/'},
{id:'state',name:'《国家与革命》',authors:['lenin'],start:'1917-08',end:'1917-09',published:'1918 年',region:'world',description:'列宁讨论国家、革命与过渡问题，重新解读马克思、恩格斯的相关论述。写于 1917 年 8—9 月，1918 年出版。',source:'https://www.marxists.org/archive/lenin/works/1917/staterev/'},
{id:'my-marxism',name:'《我的马克思主义观》',authors:['li'],start:'1919',end:'1919',published:'1919 年（《新青年》分期刊载）',dateLabel:'发表年份',region:'china',description:'李大钊较系统介绍马克思主义的文章，是马克思主义早期在中国传播的重要文献。此条以发表年份定位。',source:'https://www.history.pku.edu.cn/szdw/bxqbjs/343f136ec28245e0aed7485168b6f307.htm'},
{id:'practice',name:'《实践论》',authors:['mao'],start:'1937-07',end:'1937-07',published:'1950 年（修订后公开发表）',region:'china',description:'讨论认识与实践的关系。写作时间按《毛泽东选集》所标 1937 年 7 月；1950 年公开发表的是经过修订的文本。',source:'https://www.marxists.org/reference/archive/mao/selected-works/volume-1/mswv1_16.htm'},
{id:'contradiction',name:'《矛盾论》',authors:['mao'],start:'1937-08',end:'1937-08',published:'1952 年（修订后收入《毛泽东选集》第二版第一卷）',region:'china',description:'讨论矛盾的普遍性、特殊性及主要矛盾等问题。写作时间按选集标注的 1937 年 8 月；后来的公开文本经过修订。',source:'https://www.marxists.org/reference/archive/mao/selected-works/volume-1/mswv1_17.htm'},
{id:'protracted',name:'《论持久战》',authors:['mao'],start:'1938-05',end:'1938-06',published:'1938 年',region:'china',description:'基于 1938 年在延安的讲演，分析抗日战争的进程与战略，提出持久战的论述。',source:'https://www.marxists.org/reference/archive/mao/selected-works/volume-2/mswv2_09.htm'},
{id:'democracy',name:'《新民主主义论》',authors:['mao'],start:'1940-01',end:'1940-01',published:'1940 年 2 月',region:'china',description:'讨论中国革命的性质，以及新民主主义的政治、经济与文化纲领。',source:'https://www.marxists.org/reference/archive/mao/selected-works/volume-2/mswv2_26.htm'},
{"id": "national-question", "name": "《马克思主义和民族问题》", "authors": ["stalin"], "start": "1912", "end": "1913", "published": "1913 年", "region": "world", "description": "斯大林讨论民族概念、民族自决及工人运动与民族问题关系的文章。写于 1912 年末至 1913 年初，1913 年刊载。", "source": "https://www.marxists.org/reference/archive/stalin/works/1913/03a.htm"},
{"id": "foundations", "name": "《论列宁主义基础》", "authors": ["stalin"], "start": "1924-04", "end": "1924-04", "published": "1924 年", "region": "world", "description": "基于斯大林 1924 年 4 月的讲演，阐述其对列宁主义的概括。条目反映作者的理论立场，并不意味着各共产主义流派对此持相同看法。", "source": "https://www.marxists.org/reference/archive/stalin/works/1924/foundations-leninism/"},
{"id": "results", "name": "《总结与展望》", "authors": ["trotsky"], "start": "1906", "end": "1906", "published": "1906 年", "region": "world", "description": "托洛茨基总结 1905 年俄国革命，阐述不断革命的早期论点，讨论俄国革命与国际革命的关系。", "source": "https://www.marxists.org/archive/trotsky/1931/tpr/rp-index.htm"},
{"id": "betrayed", "name": "《被背叛的革命》", "authors": ["trotsky"], "start": "1936", "end": "1936", "published": "1936 年（法文版）；1937 年（英文版）", "region": "world", "description": "托洛茨基在流亡期间对苏联经济、官僚体制与斯大林领导方式的批判。这是作者对苏联的分析，不能视为当时各方共享的判断。", "source": "https://www.marxists.org/archive/trotsky/1936/revbet/"},
{"id": "world-economy", "name": "《帝国主义和世界经济》", "authors": ["bukharin"], "start": "1915", "end": "1917", "published": "1917 年（俄文版）；1929 年（英文版）", "region": "world", "description": "布哈林分析世界经济、资本集中与帝国主义竞争。主要写作始于 1915 年，1917 年修订并出版；列宁作序，序言并不等于全书共同署名。", "source": "https://www.marxists.org/archive/bukharin/works/1917/imperial/"},
{"id": "notebooks", "name": "《狱中札记》", "authors": ["gramsci"], "start": "1929", "end": "1935", "published": "1948—1951 年（意大利文主题编排版）", "region": "world", "description": "葛兰西在监禁和受监管治疗期间撰写的笔记，讨论文化领导权、国家、市民社会与知识分子。生前未整理成书，身后由编辑整理出版，故写作与出版时间分列。", "source": "https://www.marxists.org/archive/gramsci/prison_notebooks/index.htm"}
];

works.sort((a,b)=>a.end.localeCompare(b.end));

// 只编码明确的共同写作或参与关系，不把思想影响当作实际会面。
export const participants = {first:['marx'],october:['lenin','trotsky'],international:['lenin'],cpc:['mao'],march:['mao','zhou'],prc:['mao','zhou']};
