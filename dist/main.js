(()=>{"use strict";const n="https://rickandmortyapi.com/api/character/",a=async a=>{const e=a?`${n}+${a}`:n;try{const n=await fetch(e);return await n.json()}catch(n){console.log("Error",n)}},e=()=>location.hash.slice(1).toLocaleLowerCase().split("/")[1]||"/",t=()=>"\n    <div class='error404'>\n    <h2>Error 404</h2>\n    </div>\n    \n    ",c={"/":async()=>`\n    <div class="characters">\n        ${(await a()).results.map((n=>`<article class="character-item">\n            <a href='#/${n.id}/'>\n              <img src='${n.image}' alt='foto de ${n.name}'>\n              <h2>${n.name}</h2>\n            </a>\n        </article>`)).join("")}\n\n    </div>\n    `,"/:id":async()=>{const n=e(),t=await a(n);return console.log("holi"),console.log(t),`\n    <div class='Characters-inner'>\n        <article class='Character-card'>\n            <img src='${t.image}' alt='image of ${t.name}'>\n            <h2>${t.name}</h2>\n        </article>\n\n        <article class='Character-card'>\n            <h3>Episodes:${t.episode.length}</h3>\n            <h3>Status:${t.status}</h3>\n            <h3>Species:${t.species}</h3>\n            <h3>Gender:${t.gender}</h3>\n            <h3>Origin:${t.origin.name}</h3>\n            <h3>Last Location:${t.location.name}</h3>\n        </article>\n    \n    </div>\n\n    \n    `},"/contact":"Contact"},s=async()=>{const n=document.getElementById("Header"),a=document.getElementById("content");n.innerHTML=await(console.log("hola bebe header"),"\n    <div class='header-main'>\n        <div class='header-logo'>\n            <h1>\n                <a href='#'>\n                SPA project\n                </a>\n\n            </h1>\n        </div>\n        <div class='header-nav'>\n            <a href='#/about/ '>\n            About\n            </a>\n        </div>\n\n    </div>\n    \n    \n    ");let s=e();console.log(s);let i=await(n=>n.length<=3?"/"===n?n:"/:id":n)(s),o=c[i]?c[i]:t;a.innerHTML=await o()};console.log("Hola bebe que mas pues"),window.addEventListener("load",s),window.addEventListener("hashchange",s)})();