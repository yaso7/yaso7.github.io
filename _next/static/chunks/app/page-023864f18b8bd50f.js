(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{6045:(e,s,r)=>{Promise.resolve().then(r.bind(r,8813))},8813:(e,s,r)=>{"use strict";r.r(s),r.d(s,{default:()=>B});var a=r(5155),t=r(6874),i=r.n(t),l=r(6766),n=r(9621),c=r(2138),d=r(1264),o=r(2894),m=r(9099),x=r(8175),h=r(2115),u=r(9708),f=r(2085),p=r(2596),g=r(9688);function j(){for(var e=arguments.length,s=Array(e),r=0;r<e;r++)s[r]=arguments[r];return(0,g.QP)((0,p.$)(s))}let b=(0,f.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),v=h.forwardRef((e,s)=>{let{className:r,variant:t,size:i,asChild:l=!1,...n}=e,c=l?u.DX:"button";return(0,a.jsx)(c,{className:j(b({variant:t,size:i,className:r})),ref:s,...n})});v.displayName="Button";let N=h.forwardRef((e,s)=>{let{className:r,...t}=e;return(0,a.jsx)("div",{ref:s,className:j("rounded-lg border bg-card text-card-foreground shadow-sm",r),...t})});N.displayName="Card",h.forwardRef((e,s)=>{let{className:r,...t}=e;return(0,a.jsx)("div",{ref:s,className:j("flex flex-col space-y-1.5 p-6",r),...t})}).displayName="CardHeader",h.forwardRef((e,s)=>{let{className:r,...t}=e;return(0,a.jsx)("div",{ref:s,className:j("text-2xl font-semibold leading-none tracking-tight",r),...t})}).displayName="CardTitle",h.forwardRef((e,s)=>{let{className:r,...t}=e;return(0,a.jsx)("div",{ref:s,className:j("text-sm text-muted-foreground",r),...t})}).displayName="CardDescription";let y=h.forwardRef((e,s)=>{let{className:r,...t}=e;return(0,a.jsx)("div",{ref:s,className:j("p-6 pt-0",r),...t})});y.displayName="CardContent",h.forwardRef((e,s)=>{let{className:r,...t}=e;return(0,a.jsx)("div",{ref:s,className:j("flex items-center p-6 pt-0",r),...t})}).displayName="CardFooter";let w=(0,f.F)("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function k(e){let{className:s,variant:r,...t}=e;return(0,a.jsx)("div",{className:j(w({variant:r}),s),...t})}var A=r(7768);let C=A.bL,S=h.forwardRef((e,s)=>{let{className:r,...t}=e;return(0,a.jsx)(A.B8,{ref:s,className:j("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",r),...t})});S.displayName=A.B8.displayName;let P=h.forwardRef((e,s)=>{let{className:r,...t}=e;return(0,a.jsx)(A.l9,{ref:s,className:j("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",r),...t})});P.displayName=A.l9.displayName;let D=h.forwardRef((e,s)=>{let{className:r,...t}=e;return(0,a.jsx)(A.UC,{ref:s,className:j("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",r),...t})});D.displayName=A.UC.displayName;var I=r(3527);function R(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:.1,[s,r]=(0,h.useState)(!1),a=(0,h.useRef)(null);return(0,h.useEffect)(()=>{let s=new IntersectionObserver(e=>{let[s]=e;r(s.isIntersecting)},{threshold:e}),t=a.current;return t&&s.observe(t),()=>{t&&s.unobserve(t)}},[e]),{ref:a,isInView:s}}function F(e){let{children:s,className:r,delay:t=0}=e,{ref:i,isInView:l}=R(.1);return(0,a.jsx)(I.P.div,{ref:i,initial:{opacity:0,y:20},animate:l?{opacity:1,y:0}:{opacity:0,y:20},transition:{duration:.5,delay:t},className:r,children:s})}function U(e){let{children:s,className:r,staggerDelay:t=.1}=e,{ref:i,isInView:l}=R(.1);return(0,a.jsx)(I.P.div,{ref:i,variants:{hidden:{opacity:0},show:{opacity:1,transition:{staggerChildren:t}}},initial:"hidden",animate:l?"show":"hidden",className:r,children:s})}function _(e){let{children:s,className:r}=e;return(0,a.jsx)(I.P.div,{variants:{hidden:{opacity:0,y:20},show:{opacity:1,y:0,transition:{duration:.5}}},className:r,children:s})}function M(e){let{children:s,className:r,delay:t=0}=e;return(0,a.jsx)(I.P.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{duration:.5,delay:t},className:r,children:s})}var T=r(9881),E=r(760);function z(){let[e,s]=(0,h.useState)(!1);return(0,h.useEffect)(()=>{let e=()=>{window.scrollY>500?s(!0):s(!1)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]),(0,a.jsx)(E.N,{children:e&&(0,a.jsx)(I.P.div,{className:"fixed bottom-8 right-8 z-50",initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},transition:{duration:.2},children:(0,a.jsx)(v,{size:"icon",className:"rounded-full shadow-lg",onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})},"aria-label":"Scroll to top",children:(0,a.jsx)(T.A,{className:"h-5 w-5"})})})})}function B(){return(0,a.jsxs)("div",{className:"flex min-h-screen flex-col",children:[(0,a.jsx)("header",{className:"sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",children:(0,a.jsxs)("div",{className:"container flex h-16 items-center justify-between",children:[(0,a.jsxs)(i(),{href:"/",className:"flex items-center gap-2 font-bold text-xl",children:[(0,a.jsx)(n.A,{className:"h-6 w-6"}),(0,a.jsx)("span",{children:"DevPortfolio"})]}),(0,a.jsxs)("nav",{className:"hidden md:flex gap-6",children:[(0,a.jsx)(i(),{href:"#about",className:"text-sm font-medium hover:underline underline-offset-4",children:"About"}),(0,a.jsx)(i(),{href:"#skills",className:"text-sm font-medium hover:underline underline-offset-4",children:"Skills"}),(0,a.jsx)(i(),{href:"#projects",className:"text-sm font-medium hover:underline underline-offset-4",children:"Projects"}),(0,a.jsx)(i(),{href:"#contact",className:"text-sm font-medium hover:underline underline-offset-4",children:"Contact"})]}),(0,a.jsx)(v,{asChild:!0,children:(0,a.jsx)(i(),{href:"#contact",children:"Let's Talk"})})]})}),(0,a.jsxs)("main",{className:"flex-1",children:[(0,a.jsx)("section",{className:"container py-24 md:py-32 space-y-8",children:(0,a.jsxs)("div",{className:"flex flex-col md:flex-row gap-8 items-center",children:[(0,a.jsxs)("div",{className:"flex-1 space-y-4",children:[(0,a.jsx)(M,{delay:.1,children:(0,a.jsx)(k,{className:"text-sm",variant:"outline",children:"Available for hire"})}),(0,a.jsx)(M,{delay:.2,children:(0,a.jsxs)("h1",{className:"text-4xl md:text-6xl font-bold",children:["Hi, I'm ",(0,a.jsx)("span",{className:"text-primary",children:"Alex"})," ",(0,a.jsx)("br",{}),"Full Stack Developer"]})}),(0,a.jsx)(M,{delay:.3,children:(0,a.jsx)("p",{className:"text-xl text-muted-foreground",children:"I build accessible, user-friendly web applications that solve real-world problems."})}),(0,a.jsx)(M,{delay:.4,children:(0,a.jsxs)("div",{className:"flex gap-4",children:[(0,a.jsx)(v,{asChild:!0,children:(0,a.jsxs)(i(),{href:"#projects",children:["View Projects ",(0,a.jsx)(c.A,{className:"ml-2 h-4 w-4"})]})}),(0,a.jsx)(v,{variant:"outline",asChild:!0,children:(0,a.jsx)(i(),{href:"#contact",children:"Contact Me"})})]})})]}),(0,a.jsx)(I.P.div,{className:"flex-1 flex justify-center",initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.5,delay:.3},children:(0,a.jsx)("div",{className:"relative w-72 h-72 md:w-80 md:h-80 overflow-hidden rounded-full border-4 border-primary",children:(0,a.jsx)(l.default,{src:"/placeholder.svg?height=320&width=320",alt:"Developer portrait",fill:!0,className:"object-cover",priority:!0})})})]})}),(0,a.jsx)("section",{id:"about",className:"bg-muted/40 py-16",children:(0,a.jsxs)("div",{className:"container space-y-6",children:[(0,a.jsx)(F,{children:(0,a.jsxs)("div",{className:"space-y-2 text-center",children:[(0,a.jsx)(k,{children:"About Me"}),(0,a.jsx)("h2",{className:"text-3xl font-bold",children:"My Background"}),(0,a.jsx)("p",{className:"text-muted-foreground max-w-2xl mx-auto",children:"With over 5 years of experience in web development, I specialize in creating responsive, accessible, and performant web applications."})]})}),(0,a.jsxs)("div",{className:"grid md:grid-cols-2 gap-8 pt-8",children:[(0,a.jsx)(F,{delay:.2,children:(0,a.jsxs)("div",{className:"space-y-4",children:[(0,a.jsx)("h3",{className:"text-xl font-semibold",children:"My Journey"}),(0,a.jsx)("p",{className:"text-muted-foreground",children:"I started my journey as a self-taught developer, learning HTML, CSS, and JavaScript. Over the years, I've expanded my skills to include modern frameworks and technologies like React, Next.js, Node.js, and more."}),(0,a.jsx)("p",{className:"text-muted-foreground",children:"I've worked with startups and established companies, helping them build and scale their web applications. My focus is always on creating intuitive user experiences while maintaining clean, efficient code."}),(0,a.jsx)("div",{className:"pt-4",children:(0,a.jsx)(v,{variant:"outline",asChild:!0,children:(0,a.jsx)(i(),{href:"/resume.pdf",target:"_blank",children:"Download Resume"})})})]})}),(0,a.jsx)(F,{delay:.3,children:(0,a.jsxs)("div",{className:"space-y-4",children:[(0,a.jsx)("h3",{className:"text-xl font-semibold",children:"Education & Experience"}),(0,a.jsxs)("div",{className:"space-y-4",children:[(0,a.jsxs)("div",{className:"border-l-2 border-primary pl-4 space-y-1",children:[(0,a.jsx)("h4",{className:"font-medium",children:"Senior Frontend Developer"}),(0,a.jsx)("p",{className:"text-sm text-muted-foreground",children:"TechCorp Inc. • 2021 - Present"})]}),(0,a.jsxs)("div",{className:"border-l-2 border-primary pl-4 space-y-1",children:[(0,a.jsx)("h4",{className:"font-medium",children:"Full Stack Developer"}),(0,a.jsx)("p",{className:"text-sm text-muted-foreground",children:"WebSolutions • 2019 - 2021"})]}),(0,a.jsxs)("div",{className:"border-l-2 border-primary pl-4 space-y-1",children:[(0,a.jsx)("h4",{className:"font-medium",children:"Junior Developer"}),(0,a.jsx)("p",{className:"text-sm text-muted-foreground",children:"StartupXYZ • 2018 - 2019"})]}),(0,a.jsxs)("div",{className:"border-l-2 border-primary pl-4 space-y-1",children:[(0,a.jsx)("h4",{className:"font-medium",children:"B.S. Computer Science"}),(0,a.jsx)("p",{className:"text-sm text-muted-foreground",children:"Tech University • 2014 - 2018"})]})]})]})})]})]})}),(0,a.jsx)("section",{id:"skills",className:"py-16 container",children:(0,a.jsxs)("div",{className:"space-y-6",children:[(0,a.jsx)(F,{children:(0,a.jsxs)("div",{className:"space-y-2 text-center",children:[(0,a.jsx)(k,{children:"Skills"}),(0,a.jsx)("h2",{className:"text-3xl font-bold",children:"My Expertise"}),(0,a.jsx)("p",{className:"text-muted-foreground max-w-2xl mx-auto",children:"I've worked with a variety of technologies and frameworks to create modern web applications."})]})}),(0,a.jsxs)(U,{className:"grid grid-cols-2 md:grid-cols-4 gap-6 pt-8",children:[(0,a.jsx)(_,{children:(0,a.jsx)(N,{className:"text-center",children:(0,a.jsxs)(y,{className:"pt-6",children:[(0,a.jsx)("div",{className:"rounded-full w-12 h-12 flex items-center justify-center bg-primary/10 mx-auto mb-4",children:(0,a.jsx)(n.A,{className:"h-6 w-6 text-primary"})}),(0,a.jsx)("h3",{className:"font-semibold mb-2",children:"Frontend"}),(0,a.jsx)("p",{className:"text-sm text-muted-foreground",children:"React, Next.js, TypeScript, Tailwind CSS"})]})})}),(0,a.jsx)(_,{children:(0,a.jsx)(N,{className:"text-center",children:(0,a.jsxs)(y,{className:"pt-6",children:[(0,a.jsx)("div",{className:"rounded-full w-12 h-12 flex items-center justify-center bg-primary/10 mx-auto mb-4",children:(0,a.jsx)(n.A,{className:"h-6 w-6 text-primary"})}),(0,a.jsx)("h3",{className:"font-semibold mb-2",children:"Backend"}),(0,a.jsx)("p",{className:"text-sm text-muted-foreground",children:"Node.js, Express, PostgreSQL, MongoDB"})]})})}),(0,a.jsx)(_,{children:(0,a.jsx)(N,{className:"text-center",children:(0,a.jsxs)(y,{className:"pt-6",children:[(0,a.jsx)("div",{className:"rounded-full w-12 h-12 flex items-center justify-center bg-primary/10 mx-auto mb-4",children:(0,a.jsx)(n.A,{className:"h-6 w-6 text-primary"})}),(0,a.jsx)("h3",{className:"font-semibold mb-2",children:"DevOps"}),(0,a.jsx)("p",{className:"text-sm text-muted-foreground",children:"Docker, CI/CD, AWS, Vercel"})]})})}),(0,a.jsx)(_,{children:(0,a.jsx)(N,{className:"text-center",children:(0,a.jsxs)(y,{className:"pt-6",children:[(0,a.jsx)("div",{className:"rounded-full w-12 h-12 flex items-center justify-center bg-primary/10 mx-auto mb-4",children:(0,a.jsx)(n.A,{className:"h-6 w-6 text-primary"})}),(0,a.jsx)("h3",{className:"font-semibold mb-2",children:"Tools"}),(0,a.jsx)("p",{className:"text-sm text-muted-foreground",children:"Git, GitHub, VS Code, Figma"})]})})})]})]})}),(0,a.jsx)("section",{id:"projects",className:"py-16 bg-muted/40",children:(0,a.jsxs)("div",{className:"container space-y-6",children:[(0,a.jsx)(F,{children:(0,a.jsxs)("div",{className:"space-y-2 text-center",children:[(0,a.jsx)(k,{children:"Projects"}),(0,a.jsx)("h2",{className:"text-3xl font-bold",children:"My Work"}),(0,a.jsx)("p",{className:"text-muted-foreground max-w-2xl mx-auto",children:"Here are some of the projects I've worked on. Each project showcases different skills and technologies."})]})}),(0,a.jsxs)(C,{defaultValue:"all",className:"w-full max-w-3xl mx-auto",children:[(0,a.jsxs)(S,{className:"grid grid-cols-4 mb-8",children:[(0,a.jsx)(P,{value:"all",children:"All"}),(0,a.jsx)(P,{value:"frontend",children:"Frontend"}),(0,a.jsx)(P,{value:"fullstack",children:"Full Stack"}),(0,a.jsx)(P,{value:"mobile",children:"Mobile"})]}),(0,a.jsx)(D,{value:"all",className:"space-y-6",children:(0,a.jsx)(U,{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-6",staggerDelay:.15,children:L.map((e,s)=>(0,a.jsx)(_,{children:(0,a.jsx)(H,{project:e})},s))})}),(0,a.jsx)(D,{value:"frontend",className:"space-y-6",children:(0,a.jsx)(U,{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-6",staggerDelay:.15,children:L.filter(e=>"frontend"===e.category).map((e,s)=>(0,a.jsx)(_,{children:(0,a.jsx)(H,{project:e})},s))})}),(0,a.jsx)(D,{value:"fullstack",className:"space-y-6",children:(0,a.jsx)(U,{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-6",staggerDelay:.15,children:L.filter(e=>"fullstack"===e.category).map((e,s)=>(0,a.jsx)(_,{children:(0,a.jsx)(H,{project:e})},s))})}),(0,a.jsx)(D,{value:"mobile",className:"space-y-6",children:(0,a.jsx)(U,{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-6",staggerDelay:.15,children:L.filter(e=>"mobile"===e.category).map((e,s)=>(0,a.jsx)(_,{children:(0,a.jsx)(H,{project:e})},s))})})]})]})}),(0,a.jsx)("section",{id:"contact",className:"py-16 container",children:(0,a.jsxs)("div",{className:"space-y-6",children:[(0,a.jsx)(F,{children:(0,a.jsxs)("div",{className:"space-y-2 text-center",children:[(0,a.jsx)(k,{children:"Contact"}),(0,a.jsx)("h2",{className:"text-3xl font-bold",children:"Get In Touch"}),(0,a.jsx)("p",{className:"text-muted-foreground max-w-2xl mx-auto",children:"Have a project in mind or want to discuss potential opportunities? Feel free to reach out!"})]})}),(0,a.jsxs)("div",{className:"grid md:grid-cols-2 gap-8 pt-8 max-w-4xl mx-auto",children:[(0,a.jsx)(F,{delay:.2,children:(0,a.jsxs)("div",{className:"space-y-4",children:[(0,a.jsx)("h3",{className:"text-xl font-semibold",children:"Contact Information"}),(0,a.jsx)("p",{className:"text-muted-foreground",children:"I'm currently available for freelance work and full-time positions. If you have a project that needs some creative touch, I'd love to hear about it!"}),(0,a.jsxs)("div",{className:"space-y-3 pt-4",children:[(0,a.jsxs)(I.P.div,{className:"flex items-center gap-3",initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{duration:.5,delay:.3},children:[(0,a.jsx)(d.A,{className:"h-5 w-5 text-primary"}),(0,a.jsx)("span",{children:"alex@example.com"})]}),(0,a.jsxs)(I.P.div,{className:"flex items-center gap-3",initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{duration:.5,delay:.4},children:[(0,a.jsx)(o.A,{className:"h-5 w-5 text-primary"}),(0,a.jsx)("a",{href:"https://linkedin.com",target:"_blank",rel:"noopener noreferrer",className:"hover:underline",children:"linkedin.com/in/alexdev"})]}),(0,a.jsxs)(I.P.div,{className:"flex items-center gap-3",initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{duration:.5,delay:.5},children:[(0,a.jsx)(m.A,{className:"h-5 w-5 text-primary"}),(0,a.jsx)("a",{href:"https://github.com",target:"_blank",rel:"noopener noreferrer",className:"hover:underline",children:"github.com/alexdev"})]}),(0,a.jsxs)(I.P.div,{className:"flex items-center gap-3",initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{duration:.5,delay:.6},children:[(0,a.jsx)(x.A,{className:"h-5 w-5 text-primary"}),(0,a.jsx)("a",{href:"https://twitter.com",target:"_blank",rel:"noopener noreferrer",className:"hover:underline",children:"@alexdev"})]})]})]})}),(0,a.jsx)(F,{delay:.3,children:(0,a.jsxs)("div",{className:"space-y-4",children:[(0,a.jsx)("h3",{className:"text-xl font-semibold",children:"Send Me a Message"}),(0,a.jsxs)("form",{className:"space-y-4",children:[(0,a.jsxs)("div",{className:"grid gap-4",children:[(0,a.jsxs)("div",{className:"grid gap-2",children:[(0,a.jsx)("label",{htmlFor:"name",className:"text-sm font-medium",children:"Name"}),(0,a.jsx)("input",{id:"name",className:"flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",placeholder:"Your name"})]}),(0,a.jsxs)("div",{className:"grid gap-2",children:[(0,a.jsx)("label",{htmlFor:"email",className:"text-sm font-medium",children:"Email"}),(0,a.jsx)("input",{id:"email",type:"email",className:"flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",placeholder:"Your email"})]}),(0,a.jsxs)("div",{className:"grid gap-2",children:[(0,a.jsx)("label",{htmlFor:"message",className:"text-sm font-medium",children:"Message"}),(0,a.jsx)("textarea",{id:"message",className:"flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",placeholder:"Your message"})]})]}),(0,a.jsx)(v,{type:"submit",className:"w-full",children:"Send Message"})]})]})})]})]})})]}),(0,a.jsx)("footer",{className:"border-t py-6 md:py-8",children:(0,a.jsxs)("div",{className:"container flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left",children:[(0,a.jsxs)("div",{className:"flex items-center gap-2 font-semibold",children:[(0,a.jsx)(n.A,{className:"h-5 w-5"}),(0,a.jsx)("span",{children:"DevPortfolio"})]}),(0,a.jsxs)("div",{className:"text-sm text-muted-foreground",children:["\xa9 ",new Date().getFullYear()," Alex Developer. All rights reserved."]}),(0,a.jsxs)("div",{className:"flex gap-4",children:[(0,a.jsx)("a",{href:"https://github.com",target:"_blank",rel:"noopener noreferrer","aria-label":"GitHub",children:(0,a.jsx)(m.A,{className:"h-5 w-5"})}),(0,a.jsx)("a",{href:"https://linkedin.com",target:"_blank",rel:"noopener noreferrer","aria-label":"LinkedIn",children:(0,a.jsx)(o.A,{className:"h-5 w-5"})}),(0,a.jsx)("a",{href:"https://twitter.com",target:"_blank",rel:"noopener noreferrer","aria-label":"Twitter",children:(0,a.jsx)(x.A,{className:"h-5 w-5"})})]})]})}),(0,a.jsx)(z,{})]})}let L=[{title:"E-commerce Platform",description:"A full-stack e-commerce platform with payment integration and admin dashboard.",image:"/placeholder.svg?height=200&width=300",tags:["Next.js","TypeScript","Stripe","Tailwind CSS"],demoUrl:"#",githubUrl:"#",category:"fullstack"},{title:"Portfolio Website",description:"A responsive portfolio website for a photographer showcasing their work.",image:"/placeholder.svg?height=200&width=300",tags:["React","GSAP","Styled Components"],demoUrl:"#",githubUrl:"#",category:"frontend"},{title:"Task Management App",description:"A collaborative task management application with real-time updates.",image:"/placeholder.svg?height=200&width=300",tags:["React","Firebase","Material UI"],demoUrl:"#",githubUrl:"#",category:"fullstack"},{title:"Weather App",description:"A mobile app that provides real-time weather forecasts based on location.",image:"/placeholder.svg?height=200&width=300",tags:["React Native","OpenWeather API"],demoUrl:"#",githubUrl:"#",category:"mobile"},{title:"Blog Platform",description:"A content management system for creating and managing blog posts.",image:"/placeholder.svg?height=200&width=300",tags:["Next.js","MongoDB","Tailwind CSS"],demoUrl:"#",githubUrl:"#",category:"fullstack"},{title:"Fitness Tracker",description:"A mobile application for tracking workouts and fitness progress.",image:"/placeholder.svg?height=200&width=300",tags:["React Native","Redux","Firebase"],demoUrl:"#",githubUrl:"#",category:"mobile"}];function H(e){let{project:s}=e;return(0,a.jsxs)(N,{className:"overflow-hidden",children:[(0,a.jsx)("div",{className:"aspect-video relative",children:(0,a.jsx)(l.default,{src:s.image||"/placeholder.svg",alt:s.title,fill:!0,className:"object-cover"})}),(0,a.jsxs)(y,{className:"p-4",children:[(0,a.jsx)("h3",{className:"font-semibold text-lg mb-2",children:s.title}),(0,a.jsx)("p",{className:"text-sm text-muted-foreground mb-4",children:s.description}),(0,a.jsx)("div",{className:"flex flex-wrap gap-2 mb-4",children:s.tags.map((e,s)=>(0,a.jsx)(k,{variant:"secondary",className:"text-xs",children:e},s))}),(0,a.jsxs)("div",{className:"flex gap-2",children:[(0,a.jsx)(v,{size:"sm",variant:"outline",asChild:!0,children:(0,a.jsx)("a",{href:s.demoUrl,target:"_blank",rel:"noopener noreferrer",children:"Live Demo"})}),(0,a.jsx)(v,{size:"sm",variant:"outline",asChild:!0,children:(0,a.jsxs)("a",{href:s.githubUrl,target:"_blank",rel:"noopener noreferrer",children:[(0,a.jsx)(m.A,{className:"h-4 w-4 mr-1"})," Code"]})})]})]})]})}}},e=>{var s=s=>e(e.s=s);e.O(0,[133,441,684,358],()=>s(6045)),_N_E=e.O()}]);