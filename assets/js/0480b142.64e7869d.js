"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8070],{5680:(e,r,t)=>{t.d(r,{xA:()=>l,yg:()=>g});var a=t(6540);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,a,o=function(e,r){if(null==e)return{};var t,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),u=function(e){var r=a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=u(e.components);return a.createElement(s.Provider,{value:r},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},h=a.forwardRef((function(e,r){var t=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(t),h=o,g=p["".concat(s,".").concat(h)]||p[h]||d[h]||n;return t?a.createElement(g,i(i({ref:r},l),{},{components:t})):a.createElement(g,i({ref:r},l))}));function g(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var n=t.length,i=new Array(n);i[0]=h;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c[p]="string"==typeof e?e:o,i[1]=c;for(var u=2;u<n;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},842:(e,r,t)=>{t.r(r),t.d(r,{contentTitle:()=>i,default:()=>p,frontMatter:()=>n,metadata:()=>c,toc:()=>s});var a=t(8168),o=(t(6540),t(5680));const n={},i="FAQ",c={unversionedId:"faq",id:"faq",isDocsHomePage:!1,title:"FAQ",description:"How do I get started?",source:"@site/docs/faq.md",sourceDirName:".",slug:"/faq",permalink:"/docs/faq",editUrl:"https://github.com/assafelovic/gpt-researcher/tree/master/docs/docs/faq.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Roadmap",permalink:"/docs/roadmap"}},s=[{value:"How do I get started?",id:"how-do-i-get-started",children:[],level:3},{value:"What is GPT Researcher?",id:"what-is-gpt-researcher",children:[],level:3},{value:"How much does each research run cost?",id:"how-much-does-each-research-run-cost",children:[],level:3},{value:"How do you ensure the report is factual and accurate?",id:"how-do-you-ensure-the-report-is-factual-and-accurate",children:[],level:3},{value:"What are your plans for the future?",id:"what-are-your-plans-for-the-future",children:[],level:3}],u={toc:s},l="wrapper";function p(e){let{components:r,...t}=e;return(0,o.yg)(l,(0,a.A)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"faq"},"FAQ"),(0,o.yg)("h3",{id:"how-do-i-get-started"},"How do I get started?"),(0,o.yg)("p",null,"It really depends on what you're aiming for. "),(0,o.yg)("p",null,"If you're looking to connect your AI application to the internet with Tavily tailored API, check out the ",(0,o.yg)("a",{parentName:"p",href:"https://docs.tavily.com/docs/tavily-api/introductionn"},"Tavily API")," documentation.\nIf you're looking to build and deploy our open source autonomous research agent GPT Researcher, please see ",(0,o.yg)("a",{parentName:"p",href:"/docs/gpt-researcher/getting-started/introduction"},"GPT Researcher")," documentation.\nYou can also check out demos and examples for inspiration ",(0,o.yg)("a",{parentName:"p",href:"/docs/examples/examples"},"here"),"."),(0,o.yg)("h3",{id:"what-is-gpt-researcher"},"What is GPT Researcher?"),(0,o.yg)("p",null,"GPT Researcher is a popular open source autonomous research agent that takes care of the tedious task of research for you, by scraping, filtering and aggregating over 20+ web sources per a single research task."),(0,o.yg)("p",null,"GPT Researcher is built with best practices for leveraging LLMs (prompt engineering, RAG, chains, embeddings, etc), and is optimized for quick and efficient research. It is also fully customizable and can be tailored to your specific needs."),(0,o.yg)("p",null,"To learn more about GPT Researcher, check out the ",(0,o.yg)("a",{parentName:"p",href:"/docs/gpt-researcher/getting-started/introduction"},"documentation page"),"."),(0,o.yg)("h3",{id:"how-much-does-each-research-run-cost"},"How much does each research run cost?"),(0,o.yg)("p",null,"A research task using GPT Researcher costs around $0.01 per a single run (for GPT-4 usage). We're constantly optimizing LLM calls to reduce costs and improve performance. "),(0,o.yg)("h3",{id:"how-do-you-ensure-the-report-is-factual-and-accurate"},"How do you ensure the report is factual and accurate?"),(0,o.yg)("p",null,"we do our best to ensure that the information we provide is factual and accurate. We do this by using multiple sources, and by using proprietary AI to score and rank the most relevant and accurate information. We also use proprietary AI to filter out irrelevant information and sources."),(0,o.yg)("p",null,"Lastly, by using RAG and other techniques, we ensure that the information is relevant to the context of the research task, leading to more accurate generative AI content and reduced hallucinations."),(0,o.yg)("h3",{id:"what-are-your-plans-for-the-future"},"What are your plans for the future?"),(0,o.yg)("p",null,"We're constantly working on improving our products and services. We're currently working on improving our search API together with design partners, and adding more data sources to our search engine. We're also working on improving our research agent GPT Researcher, and adding more features to it while growing our amazing open source community."),(0,o.yg)("p",null,"If you're interested in our roadmap or looking to collaborate, check out our ",(0,o.yg)("a",{parentName:"p",href:"https://trello.com/b/3O7KBePw/gpt-researcher-roadmap"},"roadmap page"),". "),(0,o.yg)("p",null,"Feel free to ",(0,o.yg)("a",{parentName:"p",href:"mailto:assafelovic@gmail.com"},"contact us")," if you have any further questions or suggestions!"))}p.isMDXComponent=!0}}]);