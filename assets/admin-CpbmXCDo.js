import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css              */import{a as f}from"./axios-CdwnNvdk.js";const w=`
<div id="view-modal" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 hidden">
  <div class="bg-white w-full max-w-2xl p-6 rounded-xl shadow-lg relative">
    <h2 class="text-2xl font-semibold mb-4">Détails de la voiture</h2>
    <div id="view-modal-body" class="space-y-2 text-sm text-gray-700"></div>
    <div class="mt-6 flex justify-end">
      <button id="close-view-modal" class="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700">Fermer</button>
    </div>
  </div>
</div>
`,b=document.getElementById("car-modal"),x=document.getElementById("open-modal-btn"),E=document.getElementById("close-modal-btn"),m=document.getElementById("modal-content");document.getElementById("car-form");document.getElementById("success-message");const h=document.getElementById("fieldsError"),p=localStorage.getItem("access");window.addEventListener("DOMContentLoaded",()=>{p?$():window.location.href="/login"});async function $(){var n;try{const e=await f.get("/vehicules/");console.log("Données admin :",e.data),L(e.data)}catch(e){console.error("Erreur d'accès à /vehicules :",((n=e.response)==null?void 0:n.data)||e.message),e.response&&e.response.status===401&&(localStorage.removeItem("access"),localStorage.removeItem("refresh"),window.location.href="/login")}}function L(n){const e=document.getElementById("voitures-list");e.innerHTML=" ",n.forEach(o=>{var d,r;const s=document.createElement("tr");s.classList.add("border-b","text-sm"),s.innerHTML=`
          <td class="p-4"><img src="data:image/jpeg;base64,${((r=(d=o.images)==null?void 0:d[0])==null?void 0:r.image_base64)||"#"}" alt="Image voiture" class="w-20 h-14 object-cover rounded-md"></td>
          <td class="p-4">${o.modele||"N/A"}</td>
          <td class="p-4">${o.annee||"N/A"}</td>
          <td class="p-4">${o.cylindres||"N/A"}</td>
          <td class="p-4">${o.transmission||"N/A"}</td>
          <td class="p-4">${o.carburant||"N/A"}</td>
          <td class="p-4">${o.kilometrage||"N/A"} km</td>
          <td class="p-4">${o.prix?o.prix+" USD":"N/A"}</td>
          <td class="p-4 space-x-2">
              <button class="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded text-xs" onclick="afficherVoiture('${o.id}')">Afficher</button>
             
              <button class="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded text-xs" onclick="supprimerVoiture('${o.id}','${o.modele}', '${o.marque}')">Supprimer</button>
          </td>
      `,e.appendChild(s)})}document.getElementById("logout-button").addEventListener("click",()=>{localStorage.removeItem("access"),window.location.href="/login"});x.addEventListener("click",()=>{b.classList.remove("hidden"),document.body.classList.add("overflow-hidden"),setTimeout(()=>{m.classList.remove("scale-95","opacity-0"),m.classList.add("scale-100","opacity-100")},10)});function u(){m.classList.remove("scale-100","opacity-100"),m.classList.add("scale-95","opacity-0"),document.body.classList.remove("overflow-hidden"),setTimeout(()=>{b.classList.add("hidden")},200)}E.addEventListener("click",u);window.addEventListener("click",n=>{n.target===b&&u()});async function A(n){var g;n.preventDefault();const e=document.getElementById("car-form"),o=new FormData(e);document.querySelectorAll('input[name="equipement[]"]').forEach(t=>{t.value.trim()!==""&&o.append("equipements",t.value)});const d=document.querySelectorAll('input[name="images[]"]');async function r(t){return new Promise(a=>{const i=new Image,c=new FileReader;c.onload=function(v){i.onload=function(){const l=document.createElement("canvas");l.width=i.width,l.height=i.height,l.getContext("2d").drawImage(i,0,0),l.toBlob(y=>{a(new File([y],t.name.replace(/\.(png|jpg)$/,".jpeg"),{type:"image/jpeg"}))},"image/jpeg",.9)},i.src=v.target.result},c.readAsDataURL(t)})}for(const t of d)if(t.files.length>0){const a=t.files[0],i=a.name.split(".").pop().toLowerCase();if(["png","jpg"].includes(i)){const c=await r(a);o.append("images_files",c)}else o.append("images_files",a)}try{const t=await fetch("https://api.jsdgrandslacs.org/vehicules/",{method:"POST",mode:"cors",headers:{Authorization:`Bearer ${p}`,Accept:"application/json"},body:o}),a=await t.json();t.ok?(setTimeout(()=>{document.getElementById("success-message").classList.add("hidden"),typeof u=="function"&&u()},2e3),e.reset(),location.reload(),console.log(a)):(console.log(t.status),console.log(JSON.stringify(a,null,2)))}catch(t){console.error("Erreur lors de l'envoi :",t),console.error("Erreur lors de l'envoi :",((g=t.response)==null?void 0:g.data)||t.message),alert("Une erreur est survenue lors de l'envoi du formulaire.")}}function I(){const n=document.getElementById("equipment-container"),e=document.createElement("div");e.classList.add("flex","items-center","mb-4"),e.innerHTML=`
  <input type="text" name="equipement[]" class="p-2 border border-gray-300 rounded-md mr-2 w-full" placeholder="Nom de l'équipement">
  <button type="button" class="bg-red-500 text-white px-4 py-2 rounded-md" onclick="removeField(this)">Supprimer</button>
    `,n.appendChild(e)}function B(n){const e=n.parentElement;e.parentElement.children.length>1?e.remove():(h.textContent="Vous ne pouvez pas supprimer le dernier champ.",setTimeout(()=>{h.textContent=" "},2e3))}function k(){const n=document.getElementById("image-container"),e=document.createElement("div");e.classList.add("my-1","flex","items-center","mb-4"),e.innerHTML=`
    <input type="file" name="images[]" accept="image/*" class="p-2 border border-gray-300 rounded-md w-full">
    `,n.appendChild(e)}function N(n,e){const o=`
    <div id="suppressionModal" style="
      position: fixed;
      top: 0; left: 0; right: 0; bottom: 0;
      background: rgba(0, 0, 0, 0.5);
      display: flex; align-items: center; justify-content: center;
      z-index: 9999;
    ">
      <div style="
        background: white;
        padding: 20px 30px;
        border-radius: 8px;
        text-align: center;
        max-width: 400px;
        box-shadow: 0 0 10px rgba(0,0,0,0.2);
      ">
        <h3>Suppression réussie</h3>
        <p>La voiture <strong>${e} ${n}</strong> a été supprimée avec succès.</p>
        <button id="btnOkSuppression" style="
          margin-top: 15px;
          padding: 10px 20px;
          background-color: #4CAF50;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        ">OK</button>
      </div>
    </div>
  `;document.body.insertAdjacentHTML("beforeend",o),document.getElementById("btnOkSuppression").onclick=function(){document.getElementById("suppressionModal").remove(),location.reload()}}window.removeField=B;window.addEquipmentField=I;window.addImageField=k;window.submitForm=A;window.afficherVoiture=async function(n){var e,o;console.log(n);try{document.getElementById("view-modal")||document.body.insertAdjacentHTML("beforeend",w);const s=document.getElementById("view-modal"),d=document.getElementById("view-modal-body"),r=document.getElementById("close-view-modal"),t=(await f.get(`/vehicules/${n}/`,{headers:{Authorization:`Bearer ${p}`}})).data;d.innerHTML=`
      <div><strong>Modèle :</strong> ${t.modele||"N/A"}</div>
      <div><strong>Marque :</strong> ${t.marque||"N/A"}</div>
      <div><strong>Kilométrage :</strong> ${t.kilometrage||"N/A"} km</div>
      <div><strong>Prix :</strong> <span class="text-xl text-blue-900 font-bold" > ${t.prix?t.prix+" USD":"N/A"}<span></div>
      <div class="text-sm/6 font-semibold text-gray-900 mb-5"> ${t.modele||"N/A"} de couleur ${t.couleur||"N/A"}, année de fabrication : ${t.annee||"N/A"}, cylindres : ${t.cylindres||"N/A"}, ${t.carburant||"N/A"}, ${t.equipements||"N/A"}, ${t.pilotage||"N/A"}, transmission : ${t.pilotage||"N/A"} </div>
      <div class="grid grid-cols-2 gap-2 mt-2">
        ${((e=t.images)==null?void 0:e.map(a=>`
            <img src="data:image/jpeg;base64,${a.image_base64}" alt="image voiture" class="w-full h-32 object-cover rounded-md">
          `).join(""))||""}
      </div>
    `,s.classList.remove("hidden"),r.addEventListener("click",()=>{s.classList.add("hidden")}),s.addEventListener("click",a=>{a.target===s&&s.classList.add("hidden")})}catch(s){console.error("Erreur lors de l'affichage :",((o=s.response)==null?void 0:o.data)||s.message),alert("Impossible de charger les détails du véhicule.")}};window.supprimerVoiture=async function(n,e,o){var s;console.log(n);try{const d=await f.delete(`/vehicules/${n}/`,{headers:{Authorization:`Bearer ${p}`}});console.log("Voiture supprimée avec succès :",e),N(e,o)}catch(d){console.error("Erreur lors de la suppression :",((s=d.response)==null?void 0:s.data)||d.message),alert("Échec de la suppression du véhicule.")}};
