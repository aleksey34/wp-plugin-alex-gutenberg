(()=>{"use strict";var e,t={963:()=>{const e=window.wp.blocks,t=window.React,l=window.wp.components,r=window.wp.blockEditor,n=(window.wp.i18n,({data:e})=>{const{title:l,description:r,placeholder:n,btnName:a}=e;return(0,t.createElement)("div",{className:"news_sletter"},(0,t.createElement)("div",{className:"side_bar_sub_heading"},(0,t.createElement)("h6",null,l||"Newsletter","  ")),(0,t.createElement)("p",null,r||"Subscribe to our email newsletter for useful tips and resources."),(0,t.createElement)("form",null,(0,t.createElement)("div",{className:"form-group blog_form"},(0,t.createElement)("input",{type:"email",className:"form-control",id:"exampleInputEmail1",placeholder:n||"Email Address"})),(0,t.createElement)("div",{className:"search_btn-3"},(0,t.createElement)("button",{className:"btn btn-default",type:"submit"},a||"Subscribe"))))}),a=JSON.parse('{"u2":"alex-gutenberg/newsletter-widget"}');(0,e.registerBlockType)(a.u2,{edit:function({attributes:{title:e,description:a,placeholder:o,btnName:i},setAttributes:c}){const s=(e,t)=>{c({[e]:t})};return(0,t.createElement)(t.Fragment,null,(0,t.createElement)("div",null,(0,t.createElement)("br",null),(0,t.createElement)("h2",null,"Newsletter Widget"),(0,t.createElement)("hr",null),(0,t.createElement)(l.TextControl,{label:"Enter title",value:e,onChange:e=>{s("title",e)}}),(0,t.createElement)(l.TextControl,{label:"Enter description",value:a,onChange:e=>{s("description",e)}}),(0,t.createElement)(l.TextControl,{label:"Enter field placeholder",value:o,onChange:e=>{s("placeholder",e)}}),(0,t.createElement)(l.TextControl,{label:"Enter submit button name",value:i,onChange:e=>{s("btnName",e)}})),(0,t.createElement)("hr",null),(0,t.createElement)("div",{...(0,r.useBlockProps)(),style:{display:"flex",flexWrap:"wrap"}},(0,t.createElement)(n,{data:{title:e,description:a,placeholder:o,btnName:i}})))},save:function({attributes:{title:e,description:l,placeholder:r,btnName:a}}){return(0,t.createElement)(n,{data:{title:e,description:l,placeholder:r,btnName:a}})}})}},l={};function r(e){var n=l[e];if(void 0!==n)return n.exports;var a=l[e]={exports:{}};return t[e](a,a.exports,r),a.exports}r.m=t,e=[],r.O=(t,l,n,a)=>{if(!l){var o=1/0;for(u=0;u<e.length;u++){for(var[l,n,a]=e[u],i=!0,c=0;c<l.length;c++)(!1&a||o>=a)&&Object.keys(r.O).every((e=>r.O[e](l[c])))?l.splice(c--,1):(i=!1,a<o&&(o=a));if(i){e.splice(u--,1);var s=n();void 0!==s&&(t=s)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[l,n,a]},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={998:0,807:0};r.O.j=t=>0===e[t];var t=(t,l)=>{var n,a,[o,i,c]=l,s=0;if(o.some((t=>0!==e[t]))){for(n in i)r.o(i,n)&&(r.m[n]=i[n]);if(c)var u=c(r)}for(t&&t(l);s<o.length;s++)a=o[s],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(u)},l=globalThis.webpackChunkalex_gutenberg=globalThis.webpackChunkalex_gutenberg||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))})();var n=r.O(void 0,[807],(()=>r(963)));n=r.O(n)})();