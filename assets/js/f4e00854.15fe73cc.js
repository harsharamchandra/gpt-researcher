"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1238],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(r),h=a,d=m["".concat(l,".").concat(h)]||m[h]||u[h]||i;return r?n.createElement(d,o(o({ref:t},c),{},{components:r})):n.createElement(d,o({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5377:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const i={},o="Retrievers",s={unversionedId:"gpt-researcher/retrievers",id:"gpt-researcher/retrievers",isDocsHomePage:!1,title:"Retrievers",description:"Retrievers are search engines used to find the most relevant documents for a given research task.",source:"@site/docs/gpt-researcher/retrievers.md",sourceDirName:"gpt-researcher",slug:"/gpt-researcher/retrievers",permalink:"/docs/gpt-researcher/retrievers",editUrl:"https://github.com/assafelovic/gpt-researcher/tree/master/docs/docs/gpt-researcher/retrievers.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Tailored Research",permalink:"/docs/gpt-researcher/tailored-research"},next:{title:"Configure LLM",permalink:"/docs/gpt-researcher/llms"}},l=[{value:"Web Search Engines",id:"web-search-engines",children:[],level:2},{value:"Custom Retrievers",id:"custom-retrievers",children:[{value:"Example",id:"example",children:[],level:3},{value:"Response Format",id:"response-format",children:[],level:3}],level:2}],p={toc:l};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"retrievers"},"Retrievers"),(0,a.kt)("p",null,"Retrievers are search engines used to find the most relevant documents for a given research task.\nYou can specify your preferred web search or use any custom retriever of your choice."),(0,a.kt)("h2",{id:"web-search-engines"},"Web Search Engines"),(0,a.kt)("p",null,"GPT Researcher defaults to using the ",(0,a.kt)("a",{parentName:"p",href:"https://app.tavily.com"},"Tavily")," search engine for retrieving search results.\nBut you can also use other search engines by specifying the ",(0,a.kt)("inlineCode",{parentName:"p"},"RETRIEVER")," env var. Please note that each search engine has its own API Key requirements and usage limits."),(0,a.kt)("p",null,"For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"RETRIEVER=bing\n")),(0,a.kt)("p",null,"You can also specify multiple retrievers by separating them with commas. The system will use each specified retriever in sequence.\nFor example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"RETRIEVER=tavily, arxiv\n")),(0,a.kt)("p",null,"Thanks to our community, we have integrated the following web search engines:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://app.tavily.com"},"Tavily")," - Default"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.microsoft.com/en-us/bing/apis/bing-web-search-api"},"Bing")," - Env: ",(0,a.kt)("inlineCode",{parentName:"li"},"RETRIEVER=bing")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developers.google.com/custom-search/v1/overview"},"Google")," - Env: ",(0,a.kt)("inlineCode",{parentName:"li"},"RETRIEVER=google")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://serpapi.com/"},"Serp API")," - Env: ",(0,a.kt)("inlineCode",{parentName:"li"},"RETRIEVER=serpapi")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://serper.dev/"},"Serper")," - Env: ",(0,a.kt)("inlineCode",{parentName:"li"},"RETRIEVER=serper")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://searx.github.io/searx/"},"Searx")," - Env: ",(0,a.kt)("inlineCode",{parentName:"li"},"RETRIEVER=searx")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://pypi.org/project/duckduckgo-search/"},"Duckduckgo")," - Env: ",(0,a.kt)("inlineCode",{parentName:"li"},"RETRIEVER=duckduckgo")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://info.arxiv.org/help/api/index.html"},"Arxiv")," - Env: ",(0,a.kt)("inlineCode",{parentName:"li"},"RETRIEVER=arxiv")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.exa.ai/reference/getting-started"},"Exa")," - Env: ",(0,a.kt)("inlineCode",{parentName:"li"},"RETRIEVER=exa")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.ncbi.nlm.nih.gov/home/develop/api/"},"PubMedCentral")," - Env: ",(0,a.kt)("inlineCode",{parentName:"li"},"RETRIEVER=pubmed_central"))),(0,a.kt)("h2",{id:"custom-retrievers"},"Custom Retrievers"),(0,a.kt)("p",null,"You can also use any custom retriever of your choice by specifying the ",(0,a.kt)("inlineCode",{parentName:"p"},"RETRIEVER=custom")," env var.\nCustom retrievers allow you to use any search engine that provides an API to retrieve documents and is widely used for enterprise research tasks."),(0,a.kt)("p",null,"In addition to setting the ",(0,a.kt)("inlineCode",{parentName:"p"},"RETRIEVER")," env, you also need to set the following env vars:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"RETRIEVER_ENDPOINT"),": The endpoint URL of the custom retriever."),(0,a.kt)("li",{parentName:"ul"},"Additional arguments required by the retriever should be prefixed with ",(0,a.kt)("inlineCode",{parentName:"li"},"RETRIEVER_ARG_")," (e.g., RETRIEVER_ARG_API_KEY).")),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"RETRIEVER=custom\nRETRIEVER_ENDPOINT=https://api.myretriever.com\nRETRIEVER_ARG_API_KEY=YOUR_API_KEY\n")),(0,a.kt)("h3",{id:"response-format"},"Response Format"),(0,a.kt)("p",null,"For the custom retriever to work correctly, the response from the endpoint should be in the following format:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "url": "http://example.com/page1",\n    "raw_content": "Content of page 1"\n  },\n  {\n    "url": "http://example.com/page2",\n    "raw_content": "Content of page 2"\n  }\n]\n')),(0,a.kt)("p",null,"The system assumes this response format and processes the list of sources accordingly."),(0,a.kt)("p",null,"Missing a retriever? Feel free to contribute to this project by submitting issues or pull requests on our ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/assafelovic/gpt-researcher"},"GitHub")," page."))}c.isMDXComponent=!0}}]);