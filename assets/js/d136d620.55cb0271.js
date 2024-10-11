"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3089],{5680:(e,n,a)=>{a.d(n,{xA:()=>g,yg:()=>d});var r=a(6540);function o(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function t(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?t(Object(a),!0).forEach((function(n){o(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):t(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,r,o=function(e,n){if(null==e)return{};var a,r,o={},t=Object.keys(e);for(r=0;r<t.length;r++)a=t[r],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(r=0;r<t.length;r++)a=t[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=r.createContext({}),s=function(e){var n=r.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},g=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var a=e.components,o=e.mdxType,t=e.originalType,p=e.parentName,g=i(e,["components","mdxType","originalType","parentName"]),c=s(a),u=o,d=c["".concat(p,".").concat(u)]||c[u]||m[u]||t;return a?r.createElement(d,l(l({ref:n},g),{},{components:a})):r.createElement(d,l({ref:n},g))}));function d(e,n){var a=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var t=a.length,l=new Array(t);l[0]=u;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[c]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<t;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5204:(e,n,a)=>{a.r(n),a.d(n,{contentTitle:()=>l,default:()=>c,frontMatter:()=>t,metadata:()=>i,toc:()=>p});var r=a(8168),o=(a(6540),a(5680));const t={},l="Configure LLM",i={unversionedId:"gpt-researcher/llms/llms",id:"gpt-researcher/llms/llms",isDocsHomePage:!1,title:"Configure LLM",description:"As described in the introduction, the default LLM is OpenAI due to its superior performance and speed.",source:"@site/docs/gpt-researcher/llms/llms.md",sourceDirName:"gpt-researcher/llms",slug:"/gpt-researcher/llms/llms",permalink:"/docs/gpt-researcher/llms/llms",editUrl:"https://github.com/assafelovic/gpt-researcher/tree/master/docs/docs/gpt-researcher/llms/llms.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Vector Stores",permalink:"/docs/gpt-researcher/context/vector-stores"},next:{title:"Running with Ollama",permalink:"/docs/gpt-researcher/llms/running-with-ollama"}},p=[{value:"Custom OpenAI",id:"custom-openai",children:[{value:"Custom OpenAI API LLM",id:"custom-openai-api-llm",children:[],level:3},{value:"Custom OpenAI API Embedding",id:"custom-openai-api-embedding",children:[],level:3},{value:"Azure OpenAI",id:"azure-openai",children:[],level:3}],level:2},{value:"Ollama",id:"ollama",children:[],level:2},{value:"Groq",id:"groq",children:[{value:"Sign up",id:"sign-up",children:[],level:3},{value:"Update env vars",id:"update-env-vars",children:[],level:3}],level:2},{value:"Anthropic",id:"anthropic",children:[],level:2},{value:"Mistral AI",id:"mistral-ai",children:[],level:2},{value:"Together AI",id:"together-ai",children:[],level:2},{value:"HuggingFace",id:"huggingface",children:[],level:2},{value:"Google Gemini",id:"google-gemini",children:[],level:2},{value:"Google VertexAI",id:"google-vertexai",children:[],level:2},{value:"Cohere",id:"cohere",children:[],level:2},{value:"Fireworks",id:"fireworks",children:[],level:2},{value:"Bedrock",id:"bedrock",children:[],level:2}],s={toc:p},g="wrapper";function c(e){let{components:n,...a}=e;return(0,o.yg)(g,(0,r.A)({},s,a,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"configure-llm"},"Configure LLM"),(0,o.yg)("p",null,"As described in the ",(0,o.yg)("a",{parentName:"p",href:"/docs/gpt-researcher/gptr/config"},"introduction"),", the default LLM is OpenAI due to its superior performance and speed.\nWith that said, GPT Researcher supports various open/closed source LLMs, and you can easily switch between them by adding the ",(0,o.yg)("inlineCode",{parentName:"p"},"LLM_PROVIDER")," env variable and corresponding configuration params.\nCurrent supported LLMs are ",(0,o.yg)("inlineCode",{parentName:"p"},"openai"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"anthropic"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"azure_openai"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"cohere"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"google_vertexai"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"google_genai"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"fireworks"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"ollama"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"together"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"mistralai"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"huggingface"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"groq")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"bedrock"),"."),(0,o.yg)("p",null,"Using any model will require updating the ",(0,o.yg)("inlineCode",{parentName:"p"},"SMART_LLM")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"FAST_LLM")," env vars. You might also need to include the LLM provider API Key.\nTo learn more about support customization options see ",(0,o.yg)("a",{parentName:"p",href:"/gpt-researcher/config"},"here"),"."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Please note"),": GPT Researcher is optimized and heavily tested on GPT models. Some other models might run intro context limit errors, and unexpected responses.\nPlease provide any feedback in our ",(0,o.yg)("a",{parentName:"p",href:"https://discord.gg/DUmbTebB"},"Discord community")," channel, so we can better improve the experience and performance."),(0,o.yg)("p",null,"Below you can find examples for how to configure the various supported LLMs."),(0,o.yg)("h2",{id:"custom-openai"},"Custom OpenAI"),(0,o.yg)("p",null,"Create a local OpenAI API using ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/ggerganov/llama.cpp/blob/master/examples/server/README.md#quick-start"},"llama.cpp Server"),"."),(0,o.yg)("h3",{id:"custom-openai-api-llm"},"Custom OpenAI API LLM"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},'# set the custom OpenAI API url\nOPENAI_BASE_URL="http://localhost:1234/v1"\n# set the custom OpenAI API key\nOPENAI_API_KEY="Your Key"\n\n# specify the custom OpenAI API llm model  \nFAST_LLM="openai:gpt-4o-mini"\n# specify the custom OpenAI API llm model  \nSMART_LLM="openai:gpt-4o"\n\n')),(0,o.yg)("h3",{id:"custom-openai-api-embedding"},"Custom OpenAI API Embedding"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},'# use a custom OpenAI API EMBEDDING provider\nEMBEDDING_PROVIDER="custom"\n\n# set the custom OpenAI API url\nOPENAI_BASE_URL="http://localhost:1234/v1"\n# set the custom OpenAI API key\nOPENAI_API_KEY="Your Key"\n\n# specify the custom OpenAI API embedding model   \nOPENAI_EMBEDDING_MODEL="custom_model"\n')),(0,o.yg)("h3",{id:"azure-openai"},"Azure OpenAI"),(0,o.yg)("p",null,"See also the documentation in the Langchain ",(0,o.yg)("a",{parentName:"p",href:"https://api.python.langchain.com/en/latest/chat_models/langchain_openai.chat_models.azure.AzureChatOpenAI.html"},"Azure OpenAI")," page."),(0,o.yg)("p",null,"On Azure OpenAI you will need to create deployments for each model you want to use. Please also specify the model names/deployment names in your ",(0,o.yg)("inlineCode",{parentName:"p"},".env")," file:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"EMBEDDING_PROVIDER=azure_openai\nAZURE_OPENAI_API_KEY=[Your Key]\nAZURE_OPENAI_ENDPOINT=https://<your-endpoint>.openai.azure.com/\nOPENAI_API_VERSION=2024-05-01-preview\nFAST_LLM=openai:gpt-4o-mini\nSMART_LLM=openai:gpt-4o\n")),(0,o.yg)("h2",{id:"ollama"},"Ollama"),(0,o.yg)("p",null,"GPT Researcher supports both Ollama LLMs and embeddings. You can choose each or both.\nTo use ",(0,o.yg)("a",{parentName:"p",href:"http://www.ollama.com"},"Ollama")," you can set the following environment variables"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"# Use ollama for both, LLM and EMBEDDING provider\n# Ollama endpoint to use\nOLLAMA_BASE_URL=http://localhost:11434\n\n# Specify one of the LLM models supported by Ollama\nFAST_LLM=ollama:llama3\n# Specify one of the LLM models supported by Ollama \nSMART_LLM=ollama:llama3 \n# The temperature to use, defaults to 0.55\nTEMPERATURE=0.55\n")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Optional")," - You can also use ollama for embeddings"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"EMBEDDING_PROVIDER=ollama\n# Specify one of the embedding models supported by Ollama \nOLLAMA_EMBEDDING_MODEL=nomic-embed-text\n")),(0,o.yg)("h2",{id:"groq"},"Groq"),(0,o.yg)("p",null,"GroqCloud provides advanced AI hardware and software solutions designed to deliver amazingly fast AI inference performance.\nTo leverage Groq in GPT-Researcher, you will need a GroqCloud account and an API Key. (",(0,o.yg)("strong",{parentName:"p"},"NOTE:")," Groq has a very ",(0,o.yg)("em",{parentName:"p"},"generous free tier"),".)"),(0,o.yg)("h3",{id:"sign-up"},"Sign up"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"You can signup here: ",(0,o.yg)("a",{parentName:"p",href:"https://console.groq.com/login"},"https://console.groq.com/login"))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Once you are logged in, you can get an API Key here: ",(0,o.yg)("a",{parentName:"p",href:"https://console.groq.com/keys"},"https://console.groq.com/keys"))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Once you have an API key, you will need to add it to your ",(0,o.yg)("inlineCode",{parentName:"p"},"systems environment")," using the variable name:\n",(0,o.yg)("inlineCode",{parentName:"p"},'GROQ_API_KEY="*********************"')))),(0,o.yg)("h3",{id:"update-env-vars"},"Update env vars"),(0,o.yg)("p",null,"And finally, you will need to configure the GPT-Researcher Provider and Model variables:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"# To use Groq set the llm provider to groq\nGROQ_API_KEY=[Your Key]\n\n# Set one of the LLM models supported by Groq\nFAST_LLM=groq:Mixtral-8x7b-32768\n# Set one of the LLM models supported by Groq\nSMART_LLM=groq:Mixtral-8x7b-32768 \n# The temperature to use defaults to 0.55\nTEMPERATURE=0.55\n")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"NOTE:")," As of the writing of this Doc (May 2024), the available Language Models from Groq are:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Llama3-70b-8192"),(0,o.yg)("li",{parentName:"ul"},"Llama3-8b-8192"),(0,o.yg)("li",{parentName:"ul"},"Mixtral-8x7b-32768"),(0,o.yg)("li",{parentName:"ul"},"Gemma-7b-it")),(0,o.yg)("h2",{id:"anthropic"},"Anthropic"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://www.anthropic.com/"},"Anthropic")," is an AI safety and research company, and is the creator of Claude. This page covers all integrations between Anthropic models and LangChain."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"ANTHROPIC_API_KEY=[Your key]\nFAST_LLM=anthropic:claude-2.1\nSMART_LLM=anthropic:claude-3-opus-20240229\n")),(0,o.yg)("h2",{id:"mistral-ai"},"Mistral AI"),(0,o.yg)("p",null,"Sign up for a ",(0,o.yg)("a",{parentName:"p",href:"https://console.mistral.ai/users/api-keys/"},"Mistral API key"),".\nThen update the corresponding env vars, for example:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"ANTHROPIC_API_KEY=[Your key]\nFAST_LLM=mistralai:open-mistral-7b\nSMART_LLM=mistralai:mistral-large-latest\n")),(0,o.yg)("h2",{id:"together-ai"},"Together AI"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://www.together.ai/"},"Together AI")," offers an API to query ",(0,o.yg)("a",{parentName:"p",href:"https://docs.together.ai/docs/inference-models"},"50+ leading open-source models")," in a couple lines of code.\nThen update corresponding env vars, for example:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"TOGETHER_API_KEY=[Your key]\nFAST_LLM=together:meta-llama/Llama-3-8b-chat-hf\nSMART_LLM=together:meta-llama/Llama-3-70b-chat-hf\n")),(0,o.yg)("h2",{id:"huggingface"},"HuggingFace"),(0,o.yg)("p",null,"This integration requires a bit of extra work. Follow ",(0,o.yg)("a",{parentName:"p",href:"https://python.langchain.com/v0.1/docs/integrations/chat/huggingface/"},"this guide")," to learn more.\nAfter you've followed the tutorial above, update the env vars:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"HUGGINGFACE_API_KEY=[Your key]\nFAST_LLM=huggingface:HuggingFaceH4/zephyr-7b-beta\nSMART_LLM=huggingface:HuggingFaceH4/zephyr-7b-beta\n")),(0,o.yg)("h2",{id:"google-gemini"},"Google Gemini"),(0,o.yg)("p",null,"Sign up ",(0,o.yg)("a",{parentName:"p",href:"https://ai.google.dev/gemini-api/docs/api-key"},"here")," for obtaining a Google Gemini API Key and update the following env vars:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"GOOGLE_API_KEY=[Your key]\nFAST_LLM=google_genai:gemini-1.5-flash\nSMART_LLM=google_genai:gemini-1.5-pro\n")),(0,o.yg)("h2",{id:"google-vertexai"},"Google VertexAI"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"FAST_LLM=google_vertexai:gemini-1.5-flash-001\nSMART_LLM=google_vertexai:gemini-1.5-pro-001\n")),(0,o.yg)("h2",{id:"cohere"},"Cohere"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"COHERE_API_KEY=[Your key]\nFAST_LLM=cohere:command\nSMART_LLM=cohere:command-nightly\n")),(0,o.yg)("h2",{id:"fireworks"},"Fireworks"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"FIREWORKS_API_KEY=[Your key]\nFAST_LLM=fireworks:accounts/fireworks/models/mixtral-8x7b-instruct\nSMART_LLM=fireworks:accounts/fireworks/models/mixtral-8x7b-instruct\n")),(0,o.yg)("h2",{id:"bedrock"},"Bedrock"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"FAST_LLM=bedrock:anthropic.claude-3-sonnet-20240229-v1:0\nSMART_LLM=bedrock:anthropic.claude-3-sonnet-20240229-v1:0\n")))}c.isMDXComponent=!0}}]);