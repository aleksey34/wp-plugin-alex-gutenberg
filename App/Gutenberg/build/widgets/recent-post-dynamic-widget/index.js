(()=>{"use strict";var e,t={305:()=>{const e=window.wp.blocks,t=window.React,l=window.wp.components,a=window.wp.blockEditor,n=window.wp.data,r=window.wp.date;window.wp.i18n;const c=JSON.parse('{"u2":"alex-gutenberg/recent-post-dynamic-widget"}');(0,e.registerBlockType)(c.u2,{edit:function({attributes:{quantity:e,title:c},setAttributes:m}){let o=(0,n.useSelect)((t=>t("core").getEntityRecords("postType","post",{per_page:e})),[e]);return(0,t.createElement)(t.Fragment,null,(0,t.createElement)("div",null,(0,t.createElement)("br",null),(0,t.createElement)("h2",null,"Recent Post Widget"),(0,t.createElement)("hr",null),(0,t.createElement)(l.TextControl,{label:"Enter widget title",value:c,onChange:e=>{(e=>{m({title:e})})(e)}})),(0,t.createElement)("hr",null),(0,t.createElement)(a.InspectorControls,null,(0,t.createElement)(l.PanelBody,null,(0,t.createElement)(l.SelectControl,{label:"Количество событий в блоке",value:e,options:[{label:"1",value:1},{label:"2",value:2},{label:"3",value:3},{label:"4",value:4},{label:"5",value:5},{label:"6",value:6}],onChange:e=>(e=>{m({quantity:parseInt(e)})})(e),__nextHasNoMarginBottom:!0}))),(0,t.createElement)("div",{...(0,a.useBlockProps)(),style:{display:"flex",flexWrap:"wrap"}},o?.map((e=>(0,t.createElement)("article",{key:e.id,style:{flex:"0 0 33%"},className:"large-entry blog-entry clr"},(0,t.createElement)("div",{className:"blog-entry-inner clr"},(0,t.createElement)("div",{className:"thumbnail"},(0,t.createElement)("a",{href:e.link},(0,t.createElement)("img",{src:e.featured_media_uri,alt:e.title.rendered}))),(0,t.createElement)("header",null,(0,t.createElement)("h2",{className:"blog-entry-header"},e.title.rendered),(0,t.createElement)("ul",{className:"meta obem-default clr"},(0,t.createElement)("li",{className:"meta-author"},`${e.author_name}`),(0,t.createElement)("li",{className:"meta-time"},`${(0,r.date)("j F , Y",e.date)}`),(0,t.createElement)("li",{className:"meta-tag"},e.tags_data?.length&&(0,t.createElement)("span",null,"Tags:"),e.tags_data?.map((e=>(0,t.createElement)("div",null,(0,t.createElement)("span",null,e.name))))),(0,t.createElement)("li",{className:"meta-cat"},e.cats_data?.length&&(0,t.createElement)("span",null,"Categories:"),e.cats_data?.map((e=>(0,t.createElement)("div",null,(0,t.createElement)("span",null,e.name))))),"open"===e.comment_status?e.comment_data?.total_comments>0?(0,t.createElement)("li",null,(0,t.createElement)("span",null,"Comments:"),(0,t.createElement)("span",null,e.comment_data.total_comments)):(0,t.createElement)("li",null,(0,t.createElement)("span",null,"There are not  comments yet")):(0,t.createElement)("li",null,(0,t.createElement)("span",null,"The comments are closed")))),(0,t.createElement)("div",{dangerouslySetInnerHTML:{__html:e.excerpt.rendered}}),(0,t.createElement)("div",{className:"blog-entry-readmore"},(0,t.createElement)("a",{href:`${e.link}`,className:"btn button"},"Read more..."))))))))},save:function(){return null}})}},l={};function a(e){var n=l[e];if(void 0!==n)return n.exports;var r=l[e]={exports:{}};return t[e](r,r.exports,a),r.exports}a.m=t,e=[],a.O=(t,l,n,r)=>{if(!l){var c=1/0;for(i=0;i<e.length;i++){for(var[l,n,r]=e[i],m=!0,o=0;o<l.length;o++)(!1&r||c>=r)&&Object.keys(a.O).every((e=>a.O[e](l[o])))?l.splice(o--,1):(m=!1,r<c&&(c=r));if(m){e.splice(i--,1);var s=n();void 0!==s&&(t=s)}}return t}r=r||0;for(var i=e.length;i>0&&e[i-1][2]>r;i--)e[i]=e[i-1];e[i]=[l,n,r]},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={358:0,714:0};a.O.j=t=>0===e[t];var t=(t,l)=>{var n,r,[c,m,o]=l,s=0;if(c.some((t=>0!==e[t]))){for(n in m)a.o(m,n)&&(a.m[n]=m[n]);if(o)var i=o(a)}for(t&&t(l);s<c.length;s++)r=c[s],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return a.O(i)},l=globalThis.webpackChunkalex_gutenberg=globalThis.webpackChunkalex_gutenberg||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))})();var n=a.O(void 0,[714],(()=>a(305)));n=a.O(n)})();