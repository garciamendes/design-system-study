import{R as h,r as g}from"./index-DmM0KDA7.js";import{j as S}from"./index-BIwgqnKK.js";var k="colors",E="sizes",f="space",ke={gap:f,gridGap:f,columnGap:f,gridColumnGap:f,rowGap:f,gridRowGap:f,inset:f,insetBlock:f,insetBlockEnd:f,insetBlockStart:f,insetInline:f,insetInlineEnd:f,insetInlineStart:f,margin:f,marginTop:f,marginRight:f,marginBottom:f,marginLeft:f,marginBlock:f,marginBlockEnd:f,marginBlockStart:f,marginInline:f,marginInlineEnd:f,marginInlineStart:f,padding:f,paddingTop:f,paddingRight:f,paddingBottom:f,paddingLeft:f,paddingBlock:f,paddingBlockEnd:f,paddingBlockStart:f,paddingInline:f,paddingInlineEnd:f,paddingInlineStart:f,top:f,right:f,bottom:f,left:f,scrollMargin:f,scrollMarginTop:f,scrollMarginRight:f,scrollMarginBottom:f,scrollMarginLeft:f,scrollMarginX:f,scrollMarginY:f,scrollMarginBlock:f,scrollMarginBlockEnd:f,scrollMarginBlockStart:f,scrollMarginInline:f,scrollMarginInlineEnd:f,scrollMarginInlineStart:f,scrollPadding:f,scrollPaddingTop:f,scrollPaddingRight:f,scrollPaddingBottom:f,scrollPaddingLeft:f,scrollPaddingX:f,scrollPaddingY:f,scrollPaddingBlock:f,scrollPaddingBlockEnd:f,scrollPaddingBlockStart:f,scrollPaddingInline:f,scrollPaddingInlineEnd:f,scrollPaddingInlineStart:f,fontSize:"fontSizes",background:k,backgroundColor:k,backgroundImage:k,borderImage:k,border:k,borderBlock:k,borderBlockEnd:k,borderBlockStart:k,borderBottom:k,borderBottomColor:k,borderColor:k,borderInline:k,borderInlineEnd:k,borderInlineStart:k,borderLeft:k,borderLeftColor:k,borderRight:k,borderRightColor:k,borderTop:k,borderTopColor:k,caretColor:k,color:k,columnRuleColor:k,fill:k,outline:k,outlineColor:k,stroke:k,textDecorationColor:k,fontFamily:"fonts",fontWeight:"fontWeights",lineHeight:"lineHeights",letterSpacing:"letterSpacings",blockSize:E,minBlockSize:E,maxBlockSize:E,inlineSize:E,minInlineSize:E,maxInlineSize:E,width:E,minWidth:E,maxWidth:E,height:E,minHeight:E,maxHeight:E,flexBasis:E,gridTemplateColumns:E,gridTemplateRows:E,borderWidth:"borderWidths",borderTopWidth:"borderWidths",borderRightWidth:"borderWidths",borderBottomWidth:"borderWidths",borderLeftWidth:"borderWidths",borderStyle:"borderStyles",borderTopStyle:"borderStyles",borderRightStyle:"borderStyles",borderBottomStyle:"borderStyles",borderLeftStyle:"borderStyles",borderRadius:"radii",borderTopLeftRadius:"radii",borderTopRightRadius:"radii",borderBottomRightRadius:"radii",borderBottomLeftRadius:"radii",boxShadow:"shadows",textShadow:"shadows",transition:"transitions",zIndex:"zIndices"},Ge=(e,t)=>typeof t=="function"?{"()":Function.prototype.toString.call(t)}:t,V=()=>{const e=Object.create(null);return(t,r,...n)=>{const o=(i=>JSON.stringify(i,Ge))(t);return o in e?e[o]:e[o]=r(t,...n)}},L=Symbol.for("sxs.internal"),ie=(e,t)=>Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)),ue=e=>{for(const t in e)return!0;return!1},{hasOwnProperty:Ye}=Object.prototype,ne=e=>e.includes("-")?e:e.replace(/[A-Z]/g,t=>"-"+t.toLowerCase()),Ze=/\s+(?![^()]*\))/,F=e=>t=>e(...typeof t=="string"?String(t).split(Ze):[t]),fe={appearance:e=>({WebkitAppearance:e,appearance:e}),backfaceVisibility:e=>({WebkitBackfaceVisibility:e,backfaceVisibility:e}),backdropFilter:e=>({WebkitBackdropFilter:e,backdropFilter:e}),backgroundClip:e=>({WebkitBackgroundClip:e,backgroundClip:e}),boxDecorationBreak:e=>({WebkitBoxDecorationBreak:e,boxDecorationBreak:e}),clipPath:e=>({WebkitClipPath:e,clipPath:e}),content:e=>({content:e.includes('"')||e.includes("'")||/^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(e)?e:`"${e}"`}),hyphens:e=>({WebkitHyphens:e,hyphens:e}),maskImage:e=>({WebkitMaskImage:e,maskImage:e}),maskSize:e=>({WebkitMaskSize:e,maskSize:e}),tabSize:e=>({MozTabSize:e,tabSize:e}),textSizeAdjust:e=>({WebkitTextSizeAdjust:e,textSizeAdjust:e}),userSelect:e=>({WebkitUserSelect:e,userSelect:e}),marginBlock:F((e,t)=>({marginBlockStart:e,marginBlockEnd:t||e})),marginInline:F((e,t)=>({marginInlineStart:e,marginInlineEnd:t||e})),maxSize:F((e,t)=>({maxBlockSize:e,maxInlineSize:t||e})),minSize:F((e,t)=>({minBlockSize:e,minInlineSize:t||e})),paddingBlock:F((e,t)=>({paddingBlockStart:e,paddingBlockEnd:t||e})),paddingInline:F((e,t)=>({paddingInlineStart:e,paddingInlineEnd:t||e}))},re=/([\d.]+)([^]*)/,Ke=(e,t)=>e.length?e.reduce((r,n)=>(r.push(...t.map(o=>o.includes("&")?o.replace(/&/g,/[ +>|~]/.test(n)&&/&.*&/.test(o)?`:is(${n})`:n):n+" "+o)),r),[]):t,qe=(e,t)=>e in Je&&typeof t=="string"?t.replace(/^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/,(r,n,o,i)=>n+(o==="stretch"?`-moz-available${i};${ne(e)}:${n}-webkit-fill-available`:`-moz-fit-content${i};${ne(e)}:${n}fit-content`)+i):String(t),Je={blockSize:1,height:1,inlineSize:1,maxBlockSize:1,maxHeight:1,maxInlineSize:1,maxWidth:1,minBlockSize:1,minHeight:1,minInlineSize:1,minWidth:1,width:1},W=e=>e?e+"-":"",ve=(e,t,r)=>e.replace(/([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g,(n,o,i,l,a)=>l=="$"==!!i?n:(o||l=="--"?"calc(":"")+"var(--"+(l==="$"?W(t)+(a.includes("$")?"":W(r))+a.replace(/\$/g,"-"):a)+")"+(o||l=="--"?"*"+(o||"")+(i||"1")+")":"")),Xe=/\s*,\s*(?![^()]*\))/,Qe=Object.prototype.toString,D=(e,t,r,n,o)=>{let i,l,a;const s=(d,m,p)=>{let c,u;const b=y=>{for(c in y){const $=c.charCodeAt(0)===64,U=$&&Array.isArray(y[c])?y[c]:[y[c]];for(u of U){const C=/[A-Z]/.test(x=c)?x:x.replace(/-[^]/g,R=>R[1].toUpperCase()),I=typeof u=="object"&&u&&u.toString===Qe&&(!n.utils[C]||!m.length);if(C in n.utils&&!I){const R=n.utils[C];if(R!==l){l=R,b(R(u)),l=null;continue}}else if(C in fe){const R=fe[C];if(R!==a){a=R,b(R(u)),a=null;continue}}if($&&(v=c.slice(1)in n.media?"@media "+n.media[c.slice(1)]:c,c=v.replace(/\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g,(R,j,P,M,z,B)=>{const _=re.test(j),K=.0625*(_?-1:1),[q,de]=_?[M,j]:[j,M];return"("+(P[0]==="="?"":P[0]===">"===_?"max-":"min-")+q+":"+(P[0]!=="="&&P.length===1?de.replace(re,(He,ee,te)=>Number(ee)+K*(P===">"?1:-1)+te):de)+(z?") and ("+(z[0]===">"?"min-":"max-")+q+":"+(z.length===1?B.replace(re,(He,ee,te)=>Number(ee)+K*(z===">"?-1:1)+te):B):"")+")"})),I){const R=$?p.concat(c):[...p],j=$?[...m]:Ke(m,c.split(Xe));i!==void 0&&o(ge(...i)),i=void 0,s(u,j,R)}else i===void 0&&(i=[[],m,p]),c=$||c.charCodeAt(0)!==36?c:`--${W(n.prefix)}${c.slice(1).replace(/\$/g,"-")}`,u=I?u:typeof u=="number"?u&&C in et?String(u)+"px":String(u):ve(qe(C,u??""),n.prefix,n.themeMap[C]),i[0].push(`${$?`${c} `:`${ne(c)}:`}${u}`)}}var v,x};b(d),i!==void 0&&o(ge(...i)),i=void 0};s(e,t,r)},ge=(e,t,r)=>`${r.map(n=>`${n}{`).join("")}${t.length?`${t.join(",")}{`:""}${e.join(";")}${t.length?"}":""}${Array(r.length?r.length+1:0).join("}")}`,et={animationDelay:1,animationDuration:1,backgroundSize:1,blockSize:1,border:1,borderBlock:1,borderBlockEnd:1,borderBlockEndWidth:1,borderBlockStart:1,borderBlockStartWidth:1,borderBlockWidth:1,borderBottom:1,borderBottomLeftRadius:1,borderBottomRightRadius:1,borderBottomWidth:1,borderEndEndRadius:1,borderEndStartRadius:1,borderInlineEnd:1,borderInlineEndWidth:1,borderInlineStart:1,borderInlineStartWidth:1,borderInlineWidth:1,borderLeft:1,borderLeftWidth:1,borderRadius:1,borderRight:1,borderRightWidth:1,borderSpacing:1,borderStartEndRadius:1,borderStartStartRadius:1,borderTop:1,borderTopLeftRadius:1,borderTopRightRadius:1,borderTopWidth:1,borderWidth:1,bottom:1,columnGap:1,columnRule:1,columnRuleWidth:1,columnWidth:1,containIntrinsicSize:1,flexBasis:1,fontSize:1,gap:1,gridAutoColumns:1,gridAutoRows:1,gridTemplateColumns:1,gridTemplateRows:1,height:1,inlineSize:1,inset:1,insetBlock:1,insetBlockEnd:1,insetBlockStart:1,insetInline:1,insetInlineEnd:1,insetInlineStart:1,left:1,letterSpacing:1,margin:1,marginBlock:1,marginBlockEnd:1,marginBlockStart:1,marginBottom:1,marginInline:1,marginInlineEnd:1,marginInlineStart:1,marginLeft:1,marginRight:1,marginTop:1,maxBlockSize:1,maxHeight:1,maxInlineSize:1,maxWidth:1,minBlockSize:1,minHeight:1,minInlineSize:1,minWidth:1,offsetDistance:1,offsetRotate:1,outline:1,outlineOffset:1,outlineWidth:1,overflowClipMargin:1,padding:1,paddingBlock:1,paddingBlockEnd:1,paddingBlockStart:1,paddingBottom:1,paddingInline:1,paddingInlineEnd:1,paddingInlineStart:1,paddingLeft:1,paddingRight:1,paddingTop:1,perspective:1,right:1,rowGap:1,scrollMargin:1,scrollMarginBlock:1,scrollMarginBlockEnd:1,scrollMarginBlockStart:1,scrollMarginBottom:1,scrollMarginInline:1,scrollMarginInlineEnd:1,scrollMarginInlineStart:1,scrollMarginLeft:1,scrollMarginRight:1,scrollMarginTop:1,scrollPadding:1,scrollPaddingBlock:1,scrollPaddingBlockEnd:1,scrollPaddingBlockStart:1,scrollPaddingBottom:1,scrollPaddingInline:1,scrollPaddingInlineEnd:1,scrollPaddingInlineStart:1,scrollPaddingLeft:1,scrollPaddingRight:1,scrollPaddingTop:1,shapeMargin:1,textDecoration:1,textDecorationThickness:1,textIndent:1,textUnderlineOffset:1,top:1,transitionDelay:1,transitionDuration:1,verticalAlign:1,width:1,wordSpacing:1},pe=e=>String.fromCharCode(e+(e>25?39:97)),N=e=>(t=>{let r,n="";for(r=Math.abs(t);r>52;r=r/52|0)n=pe(r%52)+n;return pe(r%52)+n})(((t,r)=>{let n=r.length;for(;n;)t=33*t^r.charCodeAt(--n);return t})(5381,JSON.stringify(e))>>>0),G=["themed","global","styled","onevar","resonevar","allvar","inline"],tt=e=>{if(e.href&&!e.href.startsWith(location.origin))return!1;try{return!!e.cssRules}catch{return!1}},rt=e=>{let t;const r=()=>{const{cssRules:o}=t.sheet;return[].map.call(o,(i,l)=>{const{cssText:a}=i;let s="";if(a.startsWith("--sxs"))return"";if(o[l-1]&&(s=o[l-1].cssText).startsWith("--sxs")){if(!i.cssRules.length)return"";for(const d in t.rules)if(t.rules[d].group===i)return`--sxs{--sxs:${[...t.rules[d].cache].join(" ")}}${a}`;return i.cssRules.length?`${s}${a}`:""}return a}).join("")},n=()=>{if(t){const{rules:a,sheet:s}=t;if(!s.deleteRule){for(;Object(Object(s.cssRules)[0]).type===3;)s.cssRules.splice(0,1);s.cssRules=[]}for(const d in a)delete a[d]}const o=Object(e).styleSheets||[];for(const a of o)if(tt(a)){for(let s=0,d=a.cssRules;d[s];++s){const m=Object(d[s]);if(m.type!==1)continue;const p=Object(d[s+1]);if(p.type!==4)continue;++s;const{cssText:c}=m;if(!c.startsWith("--sxs"))continue;const u=c.slice(14,-3).trim().split(/\s+/),b=G[u[0]];b&&(t||(t={sheet:a,reset:n,rules:{},toString:r}),t.rules[b]={group:p,index:s,cache:new Set(u)})}if(t)break}if(!t){const a=(s,d)=>({type:d,cssRules:[],insertRule(m,p){this.cssRules.splice(p,0,a(m,{import:3,undefined:1}[(m.toLowerCase().match(/^@([a-z]+)/)||[])[1]]||4))},get cssText(){return s==="@media{}"?`@media{${[].map.call(this.cssRules,m=>m.cssText).join("")}}`:s}});t={sheet:e?(e.head||e).appendChild(document.createElement("style")).sheet:a("","text/css"),rules:{},reset:n,toString:r}}const{sheet:i,rules:l}=t;for(let a=G.length-1;a>=0;--a){const s=G[a];if(!l[s]){const d=G[a+1],m=l[d]?l[d].index:i.cssRules.length;i.insertRule("@media{}",m),i.insertRule(`--sxs{--sxs:${a}}`,m),l[s]={group:i.cssRules[m+1],index:m,cache:new Set([a])}}nt(l[s])}};return n(),t},nt=e=>{const t=e.group;let r=t.cssRules.length;e.apply=n=>{try{t.insertRule(n,r),++r}catch{}}},H=Symbol(),ot=V(),me=(e,t)=>ot(e,()=>(...r)=>{let n={type:null,composers:new Set};for(const o of r)if(o!=null)if(o[L]){n.type==null&&(n.type=o[L].type);for(const i of o[L].composers)n.composers.add(i)}else o.constructor!==Object||o.$$typeof?n.type==null&&(n.type=o):n.composers.add(it(o,e));return n.type==null&&(n.type="span"),n.composers.size||n.composers.add(["PJLV",{},[],[],{},[]]),at(e,n,t)}),it=({variants:e,compoundVariants:t,defaultVariants:r,...n},o)=>{const i=`${W(o.prefix)}c-${N(n)}`,l=[],a=[],s=Object.create(null),d=[];for(const c in r)s[c]=String(r[c]);if(typeof e=="object"&&e)for(const c in e){m=s,p=c,Ye.call(m,p)||(s[c]="undefined");const u=e[c];for(const b in u){const y={[c]:String(b)};String(b)==="undefined"&&d.push(c);const v=u[b],x=[y,v,!ue(v)];l.push(x)}}var m,p;if(typeof t=="object"&&t)for(const c of t){let{css:u,...b}=c;u=typeof u=="object"&&u||{};for(const v in b)b[v]=String(b[v]);const y=[b,u,!ue(u)];a.push(y)}return[i,n,l,a,s,d]},at=(e,t,r)=>{const[n,o,i,l]=st(t.composers),a=typeof t.type=="function"||t.type.$$typeof?(p=>{function c(){for(let u=0;u<c[H].length;u++){const[b,y]=c[H][u];p.rules[b].apply(y)}return c[H]=[],null}return c[H]=[],c.rules={},G.forEach(u=>c.rules[u]={apply:b=>c[H].push([u,b])}),c})(r):null,s=(a||r).rules,d=`.${n}${o.length>1?`:where(.${o.slice(1).join(".")})`:""}`,m=p=>{p=typeof p=="object"&&p||lt;const{css:c,...u}=p,b={};for(const x in i)if(delete u[x],x in p){let $=p[x];typeof $=="object"&&$?b[x]={"@initial":i[x],...$}:($=String($),b[x]=$!=="undefined"||l.has(x)?$:i[x])}else b[x]=i[x];const y=new Set([...o]);for(const[x,$,U,C]of t.composers){r.rules.styled.cache.has(x)||(r.rules.styled.cache.add(x),D($,[`.${x}`],[],e,j=>{s.styled.apply(j)}));const I=he(U,b,e.media),R=he(C,b,e.media,!0);for(const j of I)if(j!==void 0)for(const[P,M,z]of j){const B=`${x}-${N(M)}-${P}`;y.add(B);const _=(z?r.rules.resonevar:r.rules.onevar).cache,K=z?s.resonevar:s.onevar;_.has(B)||(_.add(B),D(M,[`.${B}`],[],e,q=>{K.apply(q)}))}for(const j of R)if(j!==void 0)for(const[P,M]of j){const z=`${x}-${N(M)}-${P}`;y.add(z),r.rules.allvar.cache.has(z)||(r.rules.allvar.cache.add(z),D(M,[`.${z}`],[],e,B=>{s.allvar.apply(B)}))}}if(typeof c=="object"&&c){const x=`${n}-i${N(c)}-css`;y.add(x),r.rules.inline.cache.has(x)||(r.rules.inline.cache.add(x),D(c,[`.${x}`],[],e,$=>{s.inline.apply($)}))}for(const x of String(p.className||"").trim().split(/\s+/))x&&y.add(x);const v=u.className=[...y].join(" ");return{type:t.type,className:v,selector:d,props:u,toString:()=>v,deferredInjector:a}};return ie(m,{className:n,selector:d,[L]:t,toString:()=>(r.rules.styled.cache.has(n)||m(),n)})},st=e=>{let t="";const r=[],n={},o=[];for(const[i,,,,l,a]of e){t===""&&(t=i),r.push(i),o.push(...a);for(const s in l){const d=l[s];(n[s]===void 0||d!=="undefined"||a.includes(d))&&(n[s]=d)}}return[t,r,n,new Set(o)]},he=(e,t,r,n)=>{const o=[];e:for(let[i,l,a]of e){if(a)continue;let s,d=0,m=!1;for(s in i){const p=i[s];let c=t[s];if(c!==p){if(typeof c!="object"||!c)continue e;{let u,b,y=0;for(const v in c){if(p===String(c[v])){if(v!=="@initial"){const x=v.slice(1);(b=b||[]).push(x in r?r[x]:v.replace(/^@media ?/,"")),m=!0}d+=y,u=!0}++y}if(b&&b.length&&(l={["@media "+b.join(", ")]:l}),!u)continue e}}}(o[d]=o[d]||[]).push([n?"cv":`${s}-${i[s]}`,l,m])}return o},lt={},ct=V(),dt=(e,t)=>ct(e,()=>(...r)=>{const n=()=>{for(let o of r){o=typeof o=="object"&&o||{};let i=N(o);if(!t.rules.global.cache.has(i)){if(t.rules.global.cache.add(i),"@import"in o){let l=[].indexOf.call(t.sheet.cssRules,t.rules.themed.group)-1;for(let a of[].concat(o["@import"]))a=a.includes('"')||a.includes("'")?a:`"${a}"`,t.sheet.insertRule(`@import ${a};`,l++);delete o["@import"]}D(o,[],[],e,l=>{t.rules.global.apply(l)})}}return""};return ie(n,{toString:n})}),ut=V(),ft=(e,t)=>ut(e,()=>r=>{const n=`${W(e.prefix)}k-${N(r)}`,o=()=>{if(!t.rules.global.cache.has(n)){t.rules.global.cache.add(n);const i=[];D(r,[],[],e,a=>i.push(a));const l=`@keyframes ${n}{${i.join("")}}`;t.rules.global.apply(l)}return n};return ie(o,{get name(){return o()},toString:o})}),gt=class{constructor(e,t,r,n){this.token=e==null?"":String(e),this.value=t==null?"":String(t),this.scale=r==null?"":String(r),this.prefix=n==null?"":String(n)}get computedValue(){return"var("+this.variable+")"}get variable(){return"--"+W(this.prefix)+W(this.scale)+this.token}toString(){return this.computedValue}},pt=V(),mt=(e,t)=>pt(e,()=>(r,n)=>{n=typeof r=="object"&&r||Object(n);const o=`.${r=(r=typeof r=="string"?r:"")||`${W(e.prefix)}t-${N(n)}`}`,i={},l=[];for(const s in n){i[s]={};for(const d in n[s]){const m=`--${W(e.prefix)}${s}-${d}`,p=ve(String(n[s][d]),e.prefix,s);i[s][d]=new gt(d,p,s,e.prefix),l.push(`${m}:${p}`)}}const a=()=>{if(l.length&&!t.rules.themed.cache.has(r)){t.rules.themed.cache.add(r);const s=`${n===e.theme?":root,":""}.${r}{${l.join(";")}}`;t.rules.themed.apply(s)}return r};return{...i,get className(){return a()},selector:o,toString:a}}),ht=V(),bt=V(),xt=e=>{const t=(r=>{let n=!1;const o=ht(r,i=>{n=!0;const l="prefix"in(i=typeof i=="object"&&i||{})?String(i.prefix):"",a=typeof i.media=="object"&&i.media||{},s=typeof i.root=="object"?i.root||null:globalThis.document||null,d=typeof i.theme=="object"&&i.theme||{},m={prefix:l,media:a,theme:d,themeMap:typeof i.themeMap=="object"&&i.themeMap||{...ke},utils:typeof i.utils=="object"&&i.utils||{}},p=rt(s),c={css:me(m,p),globalCss:dt(m,p),keyframes:ft(m,p),createTheme:mt(m,p),reset(){p.reset(),c.theme.toString()},theme:{},sheet:p,config:m,prefix:l,getCssText:p.toString,toString:p.toString};return String(c.theme=c.createTheme(d)),c});return n||o.reset(),o})(e);return t.styled=(({config:r,sheet:n})=>bt(r,()=>{const o=me(r,n);return(...i)=>{const l=o(...i),a=l[L].type,s=h.forwardRef((d,m)=>{const p=d&&d.as||a,{props:c,deferredInjector:u}=l(d);return delete c.as,c.ref=m,u?h.createElement(h.Fragment,null,h.createElement(p,c),h.createElement(u,null)):h.createElement(p,c)});return s.className=l.className,s.displayName=`Styled.${a.displayName||a.name||a}`,s.selector=l.selector,s.toString=()=>l.selector,s[L]=l[L],s}}))(t),t};function $e(e,t=[]){let r=[];function n(i,l){const a=g.createContext(l),s=r.length;r=[...r,l];const d=p=>{var x;const{scope:c,children:u,...b}=p,y=((x=c==null?void 0:c[e])==null?void 0:x[s])||a,v=g.useMemo(()=>b,Object.values(b));return S.jsx(y.Provider,{value:v,children:u})};d.displayName=i+"Provider";function m(p,c){var y;const u=((y=c==null?void 0:c[e])==null?void 0:y[s])||a,b=g.useContext(u);if(b)return b;if(l!==void 0)return l;throw new Error(`\`${p}\` must be used within \`${i}\``)}return[d,m]}const o=()=>{const i=r.map(l=>g.createContext(l));return function(a){const s=(a==null?void 0:a[e])||i;return g.useMemo(()=>({[`__scope${e}`]:{...a,[e]:s}}),[a,s])}};return o.scopeName=e,[n,yt(o,...t)]}function yt(...e){const t=e[0];if(e.length===1)return t;const r=()=>{const n=e.map(o=>({useScope:o(),scopeName:o.scopeName}));return function(i){const l=n.reduce((a,{useScope:s,scopeName:d})=>{const p=s(i)[`__scope${d}`];return{...a,...p}},{});return g.useMemo(()=>({[`__scope${t.scopeName}`]:l}),[l])}};return r.scopeName=t.scopeName,r}function ae(e){const t=g.useRef(e);return g.useEffect(()=>{t.current=e}),g.useMemo(()=>(...r)=>{var n;return(n=t.current)==null?void 0:n.call(t,...r)},[])}var Y=globalThis!=null&&globalThis.document?g.useLayoutEffect:()=>{};function be(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function Ce(...e){return t=>{let r=!1;const n=e.map(o=>{const i=be(o,t);return!r&&typeof i=="function"&&(r=!0),i});if(r)return()=>{for(let o=0;o<n.length;o++){const i=n[o];typeof i=="function"?i():be(e[o],null)}}}}function we(...e){return g.useCallback(Ce(...e),e)}var Ee=g.forwardRef((e,t)=>{const{children:r,...n}=e,o=g.Children.toArray(r),i=o.find(kt);if(i){const l=i.props.children,a=o.map(s=>s===i?g.Children.count(l)>1?g.Children.only(null):g.isValidElement(l)?l.props.children:null:s);return S.jsx(oe,{...n,ref:t,children:g.isValidElement(l)?g.cloneElement(l,void 0,a):null})}return S.jsx(oe,{...n,ref:t,children:r})});Ee.displayName="Slot";var oe=g.forwardRef((e,t)=>{const{children:r,...n}=e;if(g.isValidElement(r)){const o=$t(r),i=vt(n,r.props);return r.type!==g.Fragment&&(i.ref=t?Ce(t,o):o),g.cloneElement(r,i)}return g.Children.count(r)>1?g.Children.only(null):null});oe.displayName="SlotClone";var St=({children:e})=>S.jsx(S.Fragment,{children:e});function kt(e){return g.isValidElement(e)&&e.type===St}function vt(e,t){const r={...t};for(const n in t){const o=e[n],i=t[n];/^on[A-Z]/.test(n)?o&&i?r[n]=(...a)=>{i(...a),o(...a)}:o&&(r[n]=o):n==="style"?r[n]={...o,...i}:n==="className"&&(r[n]=[o,i].filter(Boolean).join(" "))}return{...e,...r}}function $t(e){var n,o;let t=(n=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:n.get,r=t&&"isReactWarning"in t&&t.isReactWarning;return r?e.ref:(t=(o=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:o.get,r=t&&"isReactWarning"in t&&t.isReactWarning,r?e.props.ref:e.props.ref||e.ref)}var Ct=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],Z=Ct.reduce((e,t)=>{const r=g.forwardRef((n,o)=>{const{asChild:i,...l}=n,a=i?Ee:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),S.jsx(a,{...l,ref:o})});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{}),se="Avatar",[wt,Er]=$e(se),[Et,Re]=wt(se),je=g.forwardRef((e,t)=>{const{__scopeAvatar:r,...n}=e,[o,i]=g.useState("idle");return S.jsx(Et,{scope:r,imageLoadingStatus:o,onImageLoadingStatusChange:i,children:S.jsx(Z.span,{...n,ref:t})})});je.displayName=se;var ze="AvatarImage",Ie=g.forwardRef((e,t)=>{const{__scopeAvatar:r,src:n,onLoadingStatusChange:o=()=>{},...i}=e,l=Re(ze,r),a=Rt(n,i.referrerPolicy),s=ae(d=>{o(d),l.onImageLoadingStatusChange(d)});return Y(()=>{a!=="idle"&&s(a)},[a,s]),a==="loaded"?S.jsx(Z.img,{...i,ref:t,src:n}):null});Ie.displayName=ze;var Pe="AvatarFallback",Be=g.forwardRef((e,t)=>{const{__scopeAvatar:r,delayMs:n,...o}=e,i=Re(Pe,r),[l,a]=g.useState(n===void 0);return g.useEffect(()=>{if(n!==void 0){const s=window.setTimeout(()=>a(!0),n);return()=>window.clearTimeout(s)}},[n]),l&&i.imageLoadingStatus!=="loaded"?S.jsx(Z.span,{...o,ref:t}):null});Be.displayName=Pe;function Rt(e,t){const[r,n]=g.useState("idle");return Y(()=>{if(!e){n("error");return}let o=!0;const i=new window.Image,l=a=>()=>{o&&n(a)};return n("loading"),i.onload=l("loaded"),i.onerror=l("error"),i.src=e,t&&(i.referrerPolicy=t),()=>{o=!1}},[e,t]),r}var jt=je,zt=Ie,It=Be,Pt=g.createContext({color:"currentColor",size:"1em",weight:"regular",mirrored:!1}),We=function(t,r,n){var o=n.get(t);return o?o(r):(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),null)};function xe(e,t){if(e==null)return{};var r={},n=Object.keys(e),o,i;for(i=0;i<n.length;i++)o=n[i],!(t.indexOf(o)>=0)&&(r[o]=e[o]);return r}var le=g.forwardRef(function(e,t){var r=e.alt,n=e.color,o=e.size,i=e.weight,l=e.mirrored,a=e.children,s=e.renderPath,d=xe(e,["alt","color","size","weight","mirrored","children","renderPath"]),m=g.useContext(Pt),p=m.color,c=p===void 0?"currentColor":p,u=m.size,b=m.weight,y=b===void 0?"regular":b,v=m.mirrored,x=v===void 0?!1:v,$=xe(m,["color","size","weight","mirrored"]);return h.createElement("svg",Object.assign({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o??u,height:o??u,fill:n??c,viewBox:"0 0 256 256",transform:l||x?"scale(-1, 1)":void 0},$,d),!!r&&h.createElement("title",null,r),a,h.createElement("rect",{width:"256",height:"256",fill:"none"}),s(i??y,n??c))});le.displayName="IconBase";var O=new Map;O.set("bold",function(e){return h.createElement(h.Fragment,null,h.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});O.set("duotone",function(e){return h.createElement(h.Fragment,null,h.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});O.set("fill",function(){return h.createElement(h.Fragment,null,h.createElement("path",{d:"M104,192a8.5,8.5,0,0,1-5.7-2.3l-56-56a8.1,8.1,0,0,1,11.4-11.4L104,172.7,210.3,66.3a8.1,8.1,0,0,1,11.4,11.4l-112,112A8.5,8.5,0,0,1,104,192Z"}))});O.set("light",function(e){return h.createElement(h.Fragment,null,h.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});O.set("thin",function(e){return h.createElement(h.Fragment,null,h.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});O.set("regular",function(e){return h.createElement(h.Fragment,null,h.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var Bt=function(t,r){return We(t,r,O)},Me=g.forwardRef(function(e,t){return h.createElement(le,Object.assign({ref:t},e,{renderPath:Bt}))});Me.displayName="Check";var T=new Map;T.set("bold",function(e){return h.createElement(h.Fragment,null,h.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),h.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});T.set("duotone",function(e){return h.createElement(h.Fragment,null,h.createElement("circle",{cx:"128",cy:"96",r:"64",opacity:"0.2"}),h.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:e,strokeMiterlimit:"10",strokeWidth:"16"}),h.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});T.set("fill",function(){return h.createElement(h.Fragment,null,h.createElement("path",{d:"M231.9,212a120.7,120.7,0,0,0-67.1-54.2,72,72,0,1,0-73.6,0A120.7,120.7,0,0,0,24.1,212a7.7,7.7,0,0,0,0,8,7.8,7.8,0,0,0,6.9,4H225a7.8,7.8,0,0,0,6.9-4A7.7,7.7,0,0,0,231.9,212Z"}))});T.set("light",function(e){return h.createElement(h.Fragment,null,h.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),h.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});T.set("thin",function(e){return h.createElement(h.Fragment,null,h.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),h.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});T.set("regular",function(e){return h.createElement(h.Fragment,null,h.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:e,strokeMiterlimit:"10",strokeWidth:"16"}),h.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var Wt=function(t,r){return We(t,r,T)},Ae=g.forwardRef(function(e,t){return h.createElement(le,Object.assign({ref:t},e,{renderPath:Wt}))});Ae.displayName="User";function ye(e,t,{checkForDefaultPrevented:r=!0}={}){return function(o){if(e==null||e(o),r===!1||!o.defaultPrevented)return t==null?void 0:t(o)}}function Mt({prop:e,defaultProp:t,onChange:r=()=>{}}){const[n,o]=At({defaultProp:t,onChange:r}),i=e!==void 0,l=i?e:n,a=ae(r),s=g.useCallback(d=>{if(i){const p=typeof d=="function"?d(e):d;p!==e&&a(p)}else o(d)},[i,e,o,a]);return[l,s]}function At({defaultProp:e,onChange:t}){const r=g.useState(e),[n]=r,o=g.useRef(n),i=ae(t);return g.useEffect(()=>{o.current!==n&&(i(n),o.current=n)},[n,o,i]),r}function Lt(e){const t=g.useRef({value:e,previous:e});return g.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}function Nt(e){const[t,r]=g.useState(void 0);return Y(()=>{if(e){r({width:e.offsetWidth,height:e.offsetHeight});const n=new ResizeObserver(o=>{if(!Array.isArray(o)||!o.length)return;const i=o[0];let l,a;if("borderBoxSize"in i){const s=i.borderBoxSize,d=Array.isArray(s)?s[0]:s;l=d.inlineSize,a=d.blockSize}else l=e.offsetWidth,a=e.offsetHeight;r({width:l,height:a})});return n.observe(e,{box:"border-box"}),()=>n.unobserve(e)}else r(void 0)},[e]),t}function Ot(e,t){return g.useReducer((r,n)=>t[r][n]??r,e)}var Le=e=>{const{present:t,children:r}=e,n=Tt(t),o=typeof r=="function"?r({present:n.isPresent}):g.Children.only(r),i=we(n.ref,_t(o));return typeof r=="function"||n.isPresent?g.cloneElement(o,{ref:i}):null};Le.displayName="Presence";function Tt(e){const[t,r]=g.useState(),n=g.useRef({}),o=g.useRef(e),i=g.useRef("none"),l=e?"mounted":"unmounted",[a,s]=Ot(l,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return g.useEffect(()=>{const d=J(n.current);i.current=a==="mounted"?d:"none"},[a]),Y(()=>{const d=n.current,m=o.current;if(m!==e){const c=i.current,u=J(d);e?s("MOUNT"):u==="none"||(d==null?void 0:d.display)==="none"?s("UNMOUNT"):s(m&&c!==u?"ANIMATION_OUT":"UNMOUNT"),o.current=e}},[e,s]),Y(()=>{if(t){let d;const m=t.ownerDocument.defaultView??window,p=u=>{const y=J(n.current).includes(u.animationName);if(u.target===t&&y&&(s("ANIMATION_END"),!o.current)){const v=t.style.animationFillMode;t.style.animationFillMode="forwards",d=m.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=v)})}},c=u=>{u.target===t&&(i.current=J(n.current))};return t.addEventListener("animationstart",c),t.addEventListener("animationcancel",p),t.addEventListener("animationend",p),()=>{m.clearTimeout(d),t.removeEventListener("animationstart",c),t.removeEventListener("animationcancel",p),t.removeEventListener("animationend",p)}}else s("ANIMATION_END")},[t,s]),{isPresent:["mounted","unmountSuspended"].includes(a),ref:g.useCallback(d=>{d&&(n.current=getComputedStyle(d)),r(d)},[])}}function J(e){return(e==null?void 0:e.animationName)||"none"}function _t(e){var n,o;let t=(n=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:n.get,r=t&&"isReactWarning"in t&&t.isReactWarning;return r?e.ref:(t=(o=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:o.get,r=t&&"isReactWarning"in t&&t.isReactWarning,r?e.props.ref:e.props.ref||e.ref)}var ce="Checkbox",[Ft,Rr]=$e(ce),[Dt,Vt]=Ft(ce),Ne=g.forwardRef((e,t)=>{const{__scopeCheckbox:r,name:n,checked:o,defaultChecked:i,required:l,disabled:a,value:s="on",onCheckedChange:d,form:m,...p}=e,[c,u]=g.useState(null),b=we(t,C=>u(C)),y=g.useRef(!1),v=c?m||!!c.closest("form"):!0,[x=!1,$]=Mt({prop:o,defaultProp:i,onChange:d}),U=g.useRef(x);return g.useEffect(()=>{const C=c==null?void 0:c.form;if(C){const I=()=>$(U.current);return C.addEventListener("reset",I),()=>C.removeEventListener("reset",I)}},[c,$]),S.jsxs(Dt,{scope:r,state:x,disabled:a,children:[S.jsx(Z.button,{type:"button",role:"checkbox","aria-checked":A(x)?"mixed":x,"aria-required":l,"data-state":_e(x),"data-disabled":a?"":void 0,disabled:a,value:s,...p,ref:b,onKeyDown:ye(e.onKeyDown,C=>{C.key==="Enter"&&C.preventDefault()}),onClick:ye(e.onClick,C=>{$(I=>A(I)?!0:!I),v&&(y.current=C.isPropagationStopped(),y.current||C.stopPropagation())})}),v&&S.jsx(Ut,{control:c,bubbles:!y.current,name:n,value:s,checked:x,required:l,disabled:a,form:m,style:{transform:"translateX(-100%)"},defaultChecked:A(i)?!1:i})]})});Ne.displayName=ce;var Oe="CheckboxIndicator",Te=g.forwardRef((e,t)=>{const{__scopeCheckbox:r,forceMount:n,...o}=e,i=Vt(Oe,r);return S.jsx(Le,{present:n||A(i.state)||i.state===!0,children:S.jsx(Z.span,{"data-state":_e(i.state),"data-disabled":i.disabled?"":void 0,...o,ref:t,style:{pointerEvents:"none",...e.style}})})});Te.displayName=Oe;var Ut=e=>{const{control:t,checked:r,bubbles:n=!0,defaultChecked:o,...i}=e,l=g.useRef(null),a=Lt(r),s=Nt(t);g.useEffect(()=>{const m=l.current,p=window.HTMLInputElement.prototype,u=Object.getOwnPropertyDescriptor(p,"checked").set;if(a!==r&&u){const b=new Event("click",{bubbles:n});m.indeterminate=A(r),u.call(m,A(r)?!1:r),m.dispatchEvent(b)}},[a,r,n]);const d=g.useRef(A(r)?!1:r);return S.jsx("input",{type:"checkbox","aria-hidden":!0,defaultChecked:o??d.current,...i,tabIndex:-1,ref:l,style:{...e.style,...s,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function A(e){return e==="indeterminate"}function _e(e){return A(e)?"indeterminate":e?"checked":"unchecked"}var Ht=Ne,Gt=Te,Yt=Object.defineProperty,Zt=Object.defineProperties,Kt=Object.getOwnPropertyDescriptors,X=Object.getOwnPropertySymbols,Fe=Object.prototype.hasOwnProperty,De=Object.prototype.propertyIsEnumerable,Se=(e,t,r)=>t in e?Yt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Q=(e,t)=>{for(var r in t||(t={}))Fe.call(t,r)&&Se(e,r,t[r]);if(X)for(var r of X(t))De.call(t,r)&&Se(e,r,t[r]);return e},Ve=(e,t)=>Zt(e,Kt(t)),qt=(e,t)=>{var r={};for(var n in e)Fe.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&X)for(var n of X(e))t.indexOf(n)<0&&De.call(e,n)&&(r[n]=e[n]);return r},Jt={white:"#FFF",black:"#000",whiteLight:"#f1f1f1",gray100:"#E1E1E6",gray200:"#A9A9B2",gray400:"#7C7C8A",gray500:"#505059",gray600:"#323238",gray700:"#29292E",gray800:"#202024",gray900:"#121214",green300:"#00B37E",green500:"#00875F",green700:"#015F43",green900:"#00291D"},Xt={1:"0.25rem",2:"0.5rem",3:"0.75rem",4:"1rem",5:"1.25rem",6:"1.5rem",7:"1.75rem",8:"2rem",10:"2.5rem",12:"3rem",16:"4rem",20:"5rem",40:"10rem",64:"16rem",80:"20rem"},Qt={px:"1px",xs:"4px",sm:"6px",md:"8px",lg:"16px",full:"99999px"},er={default:"Roboto, sans-serif",code:"monospace"},tr={xxs:"0.625rem",xs:"0.75rem",sm:"0.875rem",md:"1rem",lg:"1.125rem",xl:"1.25rem","2xl":"1.5rem","4xl":"2rem","5xl":"2.25rem","6xl":"3rem","7xl":"4rem","8xl":"4.5rem","9xl":"6rem"},rr={regular:"400",medium:"500",bold:"700"},nr={shorter:"125%",short:"140%",base:"160%",tall:"180%"},{styled:w,css:jr,globalCss:zr,keyframes:Ue,getCssText:Ir,theme:Pr,createTheme:Br,config:Wr}=xt({themeMap:Ve(Q({},ke),{height:"space",width:"space"}),theme:{colors:Jt,space:Xt,fontSizes:tr,fontWeights:rr,fonts:er,lineHeights:nr,radii:Qt}}),Mr=w("div",{padding:"$4",borderRadius:"$md",backgroundColor:"$gray800",border:"1px solid $gray600"}),or=w("p",{fontFamily:"$default",lineHeight:"$base",margin:0,color:"$gray100",variants:{size:{xxs:{fontSize:"xxs"},xs:{fontSize:"xs"},sm:{fontSize:"sm"},md:{fontSize:"md"},lg:{fontSize:"lg"},xl:{fontSize:"xl"},"2xl":{fontSize:"$2xl"},"4xl":{fontSize:"$4xl"},"5xl":{fontSize:"$5xl"},"6xl":{fontSize:"$6xl"},"7xl":{fontSize:"$7xl"},"8xl":{fontSize:"$8xl"},"9xl":{fontSize:"$9xl"}}},defaultVariants:{size:"md"}}),Ar=w("h2",{fontFamily:"$default",lineHeight:"$shorter",margin:0,color:"$gray100",variants:{size:{sm:{fontSize:"$xl"},md:{fontSize:"$2xl"},lg:{fontSize:"$4xl"},"2xl":{fontSize:"$5xl"},"3xl":{fontSize:"$6xl"},"4xl":{fontSize:"$7xl"},"5xl":{fontSize:"$8xl"},"6xl":{fontSize:"$9xl"}}},defaultVariants:{size:"md"}}),ir=w(jt,{borderRadius:"$full",display:"inline-block",width:"$12",height:"$12",overflow:"hidden"}),ar=w(zt,{width:"100%",height:"100%",objectFit:"cover",borderRadius:"inherit"}),sr=w(It,{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"$gray600",color:"$gray800",svg:{width:"$6",height:"$6"}}),Lr=e=>S.jsxs(ir,{children:[S.jsx(ar,Q({},e)),S.jsx(sr,{delayMs:600,children:S.jsx(Ae,{})})]}),lr=w("button",{all:"unset",borderRadius:"$sm",fontSize:"$sm",fontWeight:"$medium",fontFamily:"$default",textAlign:"center",minWidth:120,boxSizing:"border-box",padding:"0 $4",display:"flex",alignItems:"center",justifyContent:"center",gap:"$2",cursor:"pointer",svg:{width:"$4",height:"$4"},"&:disabled":{cursor:"not-allowed"},"&:focus":{boxShadow:"0 0 0 2px $colors$gray100"},variants:{variant:{primary:{color:"$white",background:"$green500","&:not(:disabled):hover":{background:"$green300"},"&:disabled":{backgroundColor:"$gray200"}},secondary:{color:"$green300",border:"2px solid $green500","&:not(:disabled):hover":{background:"$green500",color:"$white"},"&:disabled":{color:"$gray200",borderColor:"$gray200"}},tertiary:{color:"$gray100","&:not(:disabled):hover":{color:"$white"},"&:disabled":{color:"$gray600"}}},size:{sm:{height:38},md:{height:46}}},defaultVariants:{variant:"primary",size:"md"}});lr.displayName="Button";var cr=w("div",{backgroundColor:"$gray900",borderRadius:"$sm",boxSizing:"border-box",border:"2px solid $gray900",display:"flex",algreenms:"center",variants:{size:{sm:{padding:"$2 $3"},md:{padding:"$3 $4"}}},"&:has(input:focus)":{borderColor:"$green300"},"&:has(input:disabled)":{opacity:.5,cursor:"not-allowed"},defaultVariants:{size:"md"}}),dr=w("span",{fontFamily:"$default",fontSize:"$sm",color:"$gray400",fontWeight:"regular"}),ur=w("input",{fontFamily:"$default",fontSize:"$sm",color:"$white",fontWeight:"regular",background:"transparent",border:0,width:"100%","&:focus":{outline:0},"&:disabled":{cursor:"not-allowed"},"&::placeholder":{color:"$gray400"}}),fr=e=>{var t=e,{prefix:r}=t,n=qt(t,["prefix"]);return S.jsxs(cr,{children:[!!r&&S.jsx(dr,{children:r}),S.jsx(ur,Q({},n))]})};fr.displayName="TextInput";var gr=w("textarea",{backgroundColor:"$gray900",padding:"$3 $4",borderRadius:"$sm",boxSizing:"border-box",border:"2px solid $gray900",fontFamily:"$default",fontSize:"$sm",color:"$white",fontWeight:"$regular",resize:"vertical",minHeight:80,"&:focus":{outline:0,borderColor:"$green300"},"&:disabled":{opacity:.5,cursor:"not-allowed"},"&:placeholder":{color:"$gray400"}});gr.displayName="TextArea";var pr=w(Ht,{all:"unset",width:"$6",height:"$6",backgroundColor:"$gray900",borderRadius:"$xs",lineHeight:0,cursor:"pointer",overflow:"hidden",boxSizing:"border-box",display:"flex",justifyContent:"center",algreenms:"center",border:"2px solid $gray900",'&[data-state="checked"]':{backgroundColor:"$green300"},'&:focus, &[data-state="checked"]':{border:"2px solid $green300"}}),mr=Ue({from:{transform:"translateY(-100%)"},to:{transform:"translateY(0)"}}),hr=Ue({from:{transform:"translateY(0)"},to:{transform:"translateY(-100%)"}}),br=w(Gt,{color:"$white",width:"$4",height:"$4",'&[data-state="checked"]':{animation:`${mr} 200ms ease-out`},'&[data-state="unchecked"]':{animation:`${hr} 200ms ease-out`}});function xr(e){return S.jsx(pr,Ve(Q({},e),{children:S.jsx(br,{asChild:!0,children:S.jsx(Me,{weight:"bold"})})}))}xr.displayName="Checkbox";var yr=w("div",{}),Sr=w(or,{color:"$gray200",defaultVariants:{size:"xs"}}),kr=w("div",{display:"grid",gridTemplateColumns:"repeat(var(--steps-size), 1fr)",gap:"$2",marginTop:"$1"}),vr=w("div",{height:"$1",borderRadius:"$px",backgroundColor:"$gray600",variants:{active:{true:{backgroundColor:"$gray100"}}}});function $r({size:e,currentStep:t=1}){return S.jsxs(yr,{children:[S.jsxs(Sr,{children:["Passo ",t," de ",e]}),S.jsx(kr,{css:{"--steps-size":e},children:Array.from({length:e},(r,n)=>n+1).map(r=>S.jsx(vr,{active:t>=r},r))})]})}$r.displayName="MultiStep";export{Lr as A,Mr as B,xr as C,Ar as H,le as I,$r as M,or as T,gr as a,fr as b,lr as c,We as r};
