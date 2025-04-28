import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css              */import"./index-C-8w-1ED.js";import{a as c}from"./axios-CdwnNvdk.js";const m=document.getElementById("menu-button"),n=document.getElementById("menu"),u=document.getElementById("bod");m.addEventListener("click",()=>{n.classList.toggle("hidden")});document.getElementById("com1").addEventListener("click",()=>{n.classList.contains("hidden")||n.classList.add("hidden")});document.getElementById("com2").addEventListener("click",()=>{n.classList.contains("hidden")||n.classList.add("hidden")});document.getElementById("com3").addEventListener("click",()=>{n.classList.contains("hidden")||n.classList.add("hidden")});u.addEventListener("click",()=>{n.classList.contains("hidden")||n.classList.add("hidden")});function p(e){document.getElementById("photo").src=e,document.getElementById("photo").classList.remove("zoom-in"),document.getElementById("photo").classList.add("zoom-in")}window.changeValue=p;function g(){let o=`mailto:exemple@email.com?subject=${encodeURIComponent("Sujet de l'email")}&body=${encodeURIComponent(`Bonjour,

Voici un message automatique.

Cordialement.`)}`;window.location.href=o}window.envoyerMail=g;function v(){const e=JSON.parse(localStorage.getItem("voitureSelectionnee"));let s="worldltdhopebusiness@gmail.com",t="[HOPE BUSINESS WORLD] Commande : "+e.marque+" "+e.modele+" de "+Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(e.prix),o=`Bonjour,
    
Vous avez sélectionné une voiture de marque ${e.marque}, modèle ${e.modele}, année ${e.annee}, avec une cylindrée de ${e.cylindres} et une transmission ${e.transmission}. Ce véhicule, de couleur ${e.couleur}, est équipé d’une boîte de vitesses ${e.pilotage}, dispose de ${e.places} places et ${e.portes} portes, et fonctionne au ${e.carburant}. Avec un kilométrage de ${e.kilometrage} km, ce véhicule est proposé au prix de ${e.prix} USD. 

En plus des caractéristiques standards, il est doté d’équipements supplémentaires tels que ${e.equipements.toString().replace(",",", ")}. Afin de finaliser votre achat, vous devez également voir le véhicule en présentiel, permettant ainsi de mieux visualiser son état et ses finitions.
    
Cette commande témoigne d’une volonté du client d’acquérir un véhicule fiable, adapté à ses attentes en matière de confort, de performance et de sécurité.
    
Vous recevrez dans peu de temps un message sur votre mail ou numéro de téléphone.
Vous pouvez révoir les images de la voiture en cliquant sur ce lien : ${window.location.href}
    

➡ Votre téléphone : +243 _______

    Nos coordonnées :
    
    AV.P.E. Lumumba
    Bukavu, BP. 285
    DR Congo
    📞 Tel: +243 997 671 960
    📞 Tel: +243 822 633 356

    Le Directeur
    Albert Bisimwa Bagula
    HOPE BUSINESS WORLD LTD

        `,i=`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(s)}&su=${encodeURIComponent(t)}&body=${encodeURIComponent(o)}`;document.getElementById("orderModal").classList.add("hidden"),window.open(i,"_blank")}window.ouvrirGmail=v;function $(){const e=JSON.parse(localStorage.getItem("voitureSelectionnee"));let s="243997671960",t=`*[HOPE BUSINESS WORLD] COMMANDE VOITURE*

*Marque* : ${e.marque}
*Modèle* : ${e.modele}
*Année* : ${e.annee}
*Cylindrée* : ${e.cylindres}
*Transmission* : ${e.transmission}
*Couleur* : ${e.couleur}
*Boîte de vitesses* : ${e.pilotage}
*Places* : ${e.places}
*Portes* : ${e.portes}
*Carburant* : ${e.carburant}
*Kilométrage* : ${e.kilometrage} km
*Prix* : ${e.prix} USD

*Équipements supplémentaires* : ${e.equipements}

Pour finaliser votre achat, une visite en présentiel est recommandée afin d’évaluer l’état du véhicule.

Vous recevrez également un message sur votre e-mail ou votre numéro de téléphone. Vous pouvez révoir les images de la voiture en cliquant sur ce lien :
${window.location.href}

*Nos coordonnées* :

*Adresse* : AV. P.E. Lumumba, Bukavu, BP. 285, DR Congo
*Tel*   : +243 997 671 960
*Tel*   : +243 822 633 356
*Email* : worldltdhopebusiness@gmail.com

*Le Directeur*
Albert Bisimwa Bagula
*HOPE BUSINESS WORLD LTD*`,o=encodeURIComponent(t),i=`https://wa.me/${s}?text=${o}`;document.getElementById("orderModal").classList.add("hidden"),window.open(i,"_blank")}window.openWhatsapp=$;function E(){document.getElementById("orderModal").classList.remove("hidden"),document.body.classList.add("overflow-hidden")}window.openModal=E;function y(){document.getElementById("orderModal").classList.add("hidden"),document.body.classList.remove("overflow-hidden")}window.closeModal=y;let h=localStorage.getItem("connexion"),I=JSON.parse(localStorage.getItem("userBusiness"));document.getElementById("com3").innerText="Se connecter";h=="1"&&(document.getElementById("userLogin").innerHTML=`
        <div class="size-12 rounded-full flex justify-center items-center">
            <img src="${I.image}" class="size-12 rounded-full" alt="Profile">
        </div>
    `,document.getElementById("com3").innerText="Se deconnecter");async function B(){var i,l;const e=localStorage.getItem("idVoiture"),t=(await c.get(`/vehicules/${e}/`)).data;if(console.log(t),!t)return;const o=document.getElementById("imageView");t.images.forEach(d=>{var r;const a=document.createElement("div");a.className="size-25 border-2 border-gray-100 rounded-md flex justify-center items-center mt-4",a.innerHTML=` 
  <button onclick="changeValue('data:image/jpeg;base64,${((r=d==null?void 0:d.image_base64)==null?void 0:r.replace(/'/g,"\\'"))||""}')">
    <img class="size-25 object-cover hover:cursor-pointer rounded-md" src="data:image/jpeg;base64,${(d==null?void 0:d.image_base64)||""}" alt="Image véhicule">
  </button>
`,o.appendChild(a)}),document.getElementById("photo").src=`data:image/jpeg;base64,${((l=(i=t.images)==null?void 0:i[0])==null?void 0:l.image_base64)||"#"}`,document.getElementById("modMaq").textContent=`${t.marque} ${t.modele}`,document.getElementById("mar").textContent=`: ${t.modele}`,document.getElementById("referenc").textContent=`: ${t.reference||"Non défini"}`,document.getElementById("annee").textContent=`: ${t.annee||"Non précisée"}`,document.getElementById("cylynd").textContent=`: ${t.cylindres||"Non précisée"}`,document.getElementById("pil").textContent=`: ${t.pilotage||"Non précisé"}`,document.getElementById("trans").textContent=`: ${t.transmission||"Non précisée"}`,document.getElementById("prix").textContent=`: ${t.prix||"Non précisé"} USD`,document.getElementById("equipe").textContent=`: ${t.equipements||"Non défini"}`,document.getElementById("hist").textContent=`: ${t.historique||"Non défini"}`,document.getElementById("locat").textContent=`: ${t.localisation||"Non défini"}`,document.getElementById("dist").textContent=`: ${t.kilometrage||"Non défini"} Km`,document.getElementById("porte").textContent=`: ${t.portes||"Non défini"}`,document.getElementById("place").textContent=`: ${t.places||"Non défini"}`,document.getElementById("carb").textContent=`: ${t.carburant||"Non défini"}`,document.getElementById("color").textContent=`: ${t.couleur||"Non défini"}`}document.addEventListener("DOMContentLoaded",B);
