import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css              */import"./index-C-8w-1ED.js";import{a as y}from"./axios-CdwnNvdk.js";import{S as v}from"./scrollreveal.es-Be0Qd0M9.js";const h=document.getElementById("carousel"),E=h.children,b=E.length;let x=0;function L(){x=(x+1)%b,h.style.transform=`translateX(-${x*100}%)`}setInterval(L,3e3);async function I(){localStorage.getItem("access");try{const t=document.getElementById("containerc");t.innerHTML="";const o=document.createElement("div");o.className="flex flex-col items-center justify-center h-100 w-full animate-fadeIn",o.innerHTML=`
        <div class="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
        <p class="mt-4 text-gray-600 text-lg font-medium">Chargement des véhicules en cours...</p>
        
    `,t.appendChild(o);const i=(await y.get("/vehicules/")).data,l=document.getElementById("marqueF"),c=document.getElementById("modeleF");let s=[],m=[];i.forEach((e,n)=>{s.includes(e.marque)||s.push(e.marque),m.includes(e.modele)||m.push(e.modele)}),s.forEach((e,n)=>{let a=document.createElement("option");a.value=e.toLowerCase(),a.textContent=e.toUpperCase(),l.appendChild(a)}),m.forEach((e,n)=>{let a=document.createElement("option");a.value=e.toLowerCase(),a.textContent=e.toUpperCase(),c.appendChild(a)}),t.innerHTML="",i.length==0?t.innerHTML=`
     <div class="flex flex-col items-center w-full mt-5 justify-center">
          <img class="lg:w-160" src="src/assets/images/main/void.png" alt="">
          <div>
            <p class="text-xl mt-4 text-center">Pas de résultat</p>
          </div>
      </div>
    `:i.forEach((e,n)=>{var d,u;const a=document.createElement("div");a.className="max-w-xs bg-white rounded-md shadow-md overflow-hidden",a.innerHTML=`
        <img class="w-full h-48 object-cover rounded-md" src="data:image/jpeg;base64,${((u=(d=e.images)==null?void 0:d[0])==null?void 0:u.image_base64)||"#"}" alt="${e.modele}">
        <div class="p-4">
          <h2 class="text-lg font-semibold mb-2">${e.marque} ${e.modele}</h2>
          <p class="text-gray-600 text-sm">${e.pilotage||"NA"}, couleur 
          ${e.couleur||"NA"},
          ${e.kilometrage||"NA"} KM,</p>
          <p class="text-gray-600 text-sm">
          ${e.places||"NA"} places, 
          ${e.portes||"NA"} portes, 
          ${e.carburant||"NA"} ...</p>
          <p class="text-blue-800 font-bold mt-2">${e.prix||"Prix non défini"} USD</p>
        </div>
      `,t.appendChild(a),a.addEventListener("click",()=>{localStorage.setItem("idVoiture",e.id),window.location.href="/details"})})}catch(t){console.error("Erreur lors du chargement des véhicules :",t);const o=document.getElementById("containerc");o.innerHTML=`
     <div class="flex flex-col items-center w-full mt-5 justify-center">
          <img class="lg:w-160" src="src/assets/images/main/void.png" alt="">
          <div>
            <p class="text-xl mt-4 text-center">Pas de résultat</p>
          </div>
      </div>
    `}}document.addEventListener("DOMContentLoaded",I);v().reveal("#contact",{delay:300,distance:"100px",origin:"bottom",duration:800,easing:"ease-in-out",reset:!1});document.getElementById("link-contact").addEventListener("click",function(t){t.preventDefault(),document.querySelector("#contact").scrollIntoView({behavior:"smooth"})});document.getElementById("link-contacts").addEventListener("click",function(t){t.preventDefault(),document.querySelector("#contact").scrollIntoView({behavior:"smooth"})});v().reveal("#products",{delay:300,distance:"100px",origin:"bottom",duration:800,easing:"ease-in-out",reset:!1});document.getElementById("link-product").addEventListener("click",function(t){t.preventDefault(),document.querySelector("#products").scrollIntoView({behavior:"smooth"})});v().reveal("#contact",{delay:300,distance:"100px",origin:"bottom",duration:800,easing:"ease-in-out",reset:!1});document.getElementById("link-contactF").addEventListener("click",function(t){t.preventDefault(),document.querySelector("#contact").scrollIntoView({behavior:"smooth"})});v().reveal("#products",{delay:300,distance:"100px",origin:"bottom",duration:800,easing:"ease-in-out",reset:!1});document.getElementById("link-productF").addEventListener("click",function(t){t.preventDefault(),document.querySelector("#products").scrollIntoView({behavior:"smooth"})});const $=document.getElementById("menu-button"),p=document.getElementById("menu"),B=document.getElementById("outBody"),C=document.getElementById("link-product"),k=document.getElementById("link-contact");$.addEventListener("click",()=>{p.classList.remove("hidden"),document.body.classList.add("overflow-hidden")});B.addEventListener("click",()=>{p.classList.add("hidden"),document.body.classList.remove("overflow-hidden")});C.addEventListener("click",()=>{document.body.classList.contains("overflow-hidden")&&document.body.classList.remove("overflow-hidden"),p.classList.contains("hidden")||p.classList.add("hidden")});k.addEventListener("click",()=>{document.body.classList.contains("overflow-hidden")&&document.body.classList.remove("overflow-hidden"),p.classList.contains("hidden")||p.classList.add("hidden")});async function N(t){localStorage.getItem("access");try{const o=document.getElementById("containerc");o.innerHTML="";const r=document.createElement("div");r.className="flex flex-col items-center justify-center h-100 w-full animate-fadeIn",r.innerHTML=`
        <div class="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
        <p class="mt-4 text-gray-600 text-lg font-medium">Chargement des véhicules en cours...</p>
        
    `,o.appendChild(r);const l=(await y.get("/vehicules/")).data;let c=[];l.forEach((s,m)=>{let e=s.marque.toLowerCase(),n=s.modele.toLowerCase();(e.includes(t.toLowerCase())||n.includes(t.toLowerCase()))&&c.push(s)}),o.innerHTML="",c.length==0?o.innerHTML=`
     <div class="flex flex-col items-center w-full mt-5 justify-center">
          <img class="lg:w-160" src="src/assets/images/main/void.png" alt="">
          <div>
            <p class="text-xl mt-4 text-center">Pas de résultat</p>
          </div>
      </div>
    `:c.forEach((s,m)=>{var n,a;const e=document.createElement("div");e.className="max-w-xs bg-white rounded-md shadow-md overflow-hidden",e.innerHTML=`
        <img class="w-full h-48 object-cover rounded-md" src="data:image/jpeg;base64,${((a=(n=s.images)==null?void 0:n[0])==null?void 0:a.image_base64)||"#"}" alt="${s.modele}">
        <div class="p-4">
          <h2 class="text-lg font-semibold mb-2">${s.marque} ${s.modele}</h2>
          <p class="text-gray-600 text-sm">${s.pilotage||"NA"}, couleur 
          ${s.couleur||"NA"},
          ${s.kilometrage||"NA"} KM,</p>
          <p class="text-gray-600 text-sm">
          ${s.places||"NA"} places, 
          ${s.portes||"NA"} portes, 
          ${s.carburant||"NA"} ...</p>
          <p class="text-blue-800 font-bold mt-2">${s.prix||"Prix non défini"} USD</p>
        </div>
      `,o.appendChild(e),e.addEventListener("click",()=>{localStorage.setItem("idVoiture",s.id),window.location.href="/details"})})}catch(o){console.error("Erreur lors du chargement des véhicules :",o);const r=document.getElementById("containerc");r.innerHTML=`
     <div class="flex flex-col items-center w-full mt-5 justify-center">
          <img class="lg:w-160" src="src/assets/images/main/void.png" alt="">
          <div>
            <p class="text-xl mt-4 text-center">Pas de résultat</p>
          </div>
      </div>
    `}}async function M(t,o,r,i){localStorage.getItem("access");try{const l=document.getElementById("containerc");l.innerHTML="";const c=document.createElement("div");c.className="flex flex-col items-center justify-center h-100 w-full animate-fadeIn",c.innerHTML=`
        <div class="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
        <p class="mt-4 text-gray-600 text-lg font-medium">Chargement des véhicules en cours...</p>
        
    `,l.appendChild(c);const m=(await y.get("/vehicules/")).data;let e=[];m.forEach((n,a)=>{let d=n.marque.toLowerCase(),u=n.modele.toLowerCase(),g=n.prix;d.includes(t.toLowerCase())&&u.includes(o.toLowerCase())&&parseInt(g,10)<=parseInt(i,10)&&parseInt(g,10)>=parseInt(r,10)&&e.push(n)}),l.innerHTML="",e.length==0?l.innerHTML=`
     <div class="flex flex-col items-center w-full mt-5 justify-center">
          <img class="lg:w-160" src="src/assets/images/main/void.png" alt="">
          <div>
            <p class="text-xl mt-4 text-center">Pas de résultat</p>
          </div>
      </div>
    `:e.forEach((n,a)=>{var u,g;const d=document.createElement("div");d.className="max-w-xs bg-white rounded-md shadow-md overflow-hidden",d.innerHTML=`
        <img class="w-full h-48 object-cover rounded-md" src="data:image/jpeg;base64,${((g=(u=n.images)==null?void 0:u[0])==null?void 0:g.image_base64)||"#"}" alt="${n.modele}">
        <div class="p-4">
          <h2 class="text-lg font-semibold mb-2">${n.marque} ${n.modele}</h2>
          <p class="text-gray-600 text-sm">${n.pilotage||"NA"}, couleur 
          ${n.couleur||"NA"},
          ${n.kilometrage||"NA"} KM,</p>
          <p class="text-gray-600 text-sm">
          ${n.places||"NA"} places, 
          ${n.portes||"NA"} portes, 
          ${n.carburant||"NA"} ...</p>
          <p class="text-blue-800 font-bold mt-2">${n.prix||"Prix non défini"} USD</p>
        </div>
      `,l.appendChild(d),d.addEventListener("click",()=>{localStorage.setItem("idVoiture",n.id),window.location.href="/details"})})}catch(l){console.error("Erreur lors du chargement des véhicules :",l);const c=document.getElementById("containerc");c.innerHTML=`
     <div class="flex flex-col items-center w-full mt-5 justify-center">
          <img class="lg:w-160" src="src/assets/images/main/void.png" alt="">
          <div>
            <p class="text-xl mt-4 text-center">Pas de résultat</p>
          </div>
      </div>
    `}}const w=document.getElementById("vehiculeS"),f=document.getElementById("searchValue");f.addEventListener("keydown",function(t){if(console.log("Okay"),t.key==="Enter"){console.log(f.value),document.getElementById("products").scrollIntoView({behavior:"smooth"});let o=f.value;N(o),w.innerText=`Recherche ...'${o}'`,f.value=""}});document.getElementById("filter").addEventListener("click",()=>{let t=document.getElementById("marqueF").value,o=document.getElementById("modeleF").value,r=document.getElementById("upperP").value,i=document.getElementById("lowerP").value;M(t,o,i,r),w.innerText="Filtre ... plus"});
