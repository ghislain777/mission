(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[9],{1978:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var r=a(9),o=a.n(r),n=a(18),c=a(25);class l{getTouslesLocalites(e,t,a,r){return Object(n.a)(o.a.mark((function r(){var n;return o.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e+=1,r.next=3,c.b.get("/localites?itemsPerPage="+t+"&page="+e+"&id="+a);case 3:return n=r.sent,r.abrupt("return",n.data);case 5:case"end":return r.stop()}}),r)})))()}ajoutLocalite(e){return Object(n.a)(o.a.mark((function t(){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.b.post("/localites",e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}miseajourLocalite(e){return Object(n.a)(o.a.mark((function t(){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.b.put("/localites/"+e.id,e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}suppressionLocalite(e){return Object(n.a)(o.a.mark((function t(){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.b.delete("/localites/"+e.id,{method:"DELETE",herdears:{Accept:"application/json"}});case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}}},1996:function(e,t,a){"use strict";a.r(t);var r=a(7),o=a(22),n=a(0),c=a.n(n),l=a(9),i=a.n(l),s=a(18),u=a(25);class m{getTouslesContacts(e,t,a,r){return Object(s.a)(i.a.mark((function r(){var o;return i.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e+=1,r.next=3,u.b.get("/contacts?itemsPerPage="+t+"&page="+e+"&id="+a);case 3:return o=r.sent,r.abrupt("return",o.data);case 5:case"end":return r.stop()}}),r)})))()}ajoutContact(e){return Object(s.a)(i.a.mark((function t(){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.post("/contacts",e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}miseajourContact(e){return Object(s.a)(i.a.mark((function t(){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.put("/contacts/"+e.id,e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}suppressionContact(e){return Object(s.a)(i.a.mark((function t(){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.delete("/contacts/"+e.id,{method:"DELETE",herdears:{Accept:"application/json"}});case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}}var d=a(83),p=a(469),b=a.n(p),g=a(281),h=a(966),v=a(1961),f=a(1929),j=a(68),E=a(1930),O=a(174),y=a(1955),C=a(233),w=a(232),S=a(280),x=a(136),P=a(470),L=(a(608),a(1951)),k=a(100),q=a(276),N=a(1960),A=a(332),M=a(1959),R=a(1958),T=a(1919),D=a(161),F=a(234),B=(a(609),a(610)),I=(a(611),a(612),a(613),a(1967));function Q(e){var t,a,r,o,n,l,i,s,m,d,p;const b=e.state,g=e.fonctions,h=e.queries,v=e.useform,f=e.onSubmit;return c.a.createElement("div",null,c.a.createElement(q.a,{container:!0,spacing:1,justify:"center"},c.a.createElement(q.a,{item:!0,lg:6,md:6,sm:12,xs:12},c.a.createElement(L.a,{theme:Object(u.a)()},c.a.createElement(y.a,null,c.a.createElement(N.a,{action:c.a.createElement(A.a,{"aria-label":"",onClick:g.AnnulerEnregistrement},"x"),title:"ajout"===b.pagestate.action?"Nouveau contact":"Mise \xe0 jour ",subheader:""}),c.a.createElement(M.a,{className:" px-6 pt-6 pb-6"}," ",c.a.createElement("form",{onSubmit:v.handleSubmit(f)},c.a.createElement(q.a,{container:!0,spacing:4,direction:"column"},c.a.createElement(q.a,{item:!0},c.a.createElement(D.a,{id:"fonction",nom:"fonction",label:"Fonction",valeur:null===(t=b.contact)||void 0===t?void 0:t.fonction,control:v.control,error:v.errors.fonction})),c.a.createElement(q.a,{item:!0},h.queryLocalites.isLoading?c.a.createElement(x.a,{message:"chargement des roles"}):c.a.createElement(F.a,{id:"localite",name:"localite",label:"Localite",table:"localite",control:v.control,options:h.queryLocalites.data.rows,error:v.errors.localite,defaultValue:null!==(a=null===(r=b.contact)||void 0===r||null===(o=r.localite)||void 0===o?void 0:o.id)&&void 0!==a?a:"1",valeur:null!==(n=null===(l=b.contact)||void 0===l?void 0:l.localite)&&void 0!==n?n:""})),c.a.createElement(q.a,{item:!0},c.a.createElement(D.a,{id:"nom",nom:"nom",label:"Nom",valeur:null===(i=b.contact)||void 0===i?void 0:i.nom,control:v.control,error:v.errors.nom})),c.a.createElement(q.a,{item:!0},c.a.createElement(D.a,{id:"prenom",nom:"prenom",label:"Pr\xe9nom",valeur:null===(s=b.contact)||void 0===s?void 0:s.prenom,control:v.control,error:v.errors.prenom})),c.a.createElement(q.a,{item:!0},c.a.createElement(D.a,{id:"telephone",nom:"telephone",label:"T\xe9l\xe9phone",valeur:null===(m=b.contact)||void 0===m?void 0:m.telephone,control:v.control,error:v.errors.telephone})),c.a.createElement(q.a,{item:!0},c.a.createElement(D.a,{id:"typedecontact",nom:"typedecontact",label:"Type de contact",valeur:null===(d=b.contact)||void 0===d?void 0:d.typedecontact,control:v.control,error:v.errors.typedecontact})),c.a.createElement(q.a,{item:!0},c.a.createElement(D.a,{id:"commentaire",nom:"commentaire",label:"Commentaire",valeur:null===(p=b.contact)||void 0===p?void 0:p.commentaire,control:v.control,error:v.errors.commentaire})),c.a.createElement(q.a,{item:!0},c.a.createElement(B.a,{progress:b.progressphoto,acceptedFiles:[".png"],onUpload:e=>g.uploaderphoto(e),onSupprimer:()=>g.supprimerphoto(),titre:"Fichier photo .png(faire glisser ou cliquez ici pour charger)"}))))),c.a.createElement(R.a,null,c.a.createElement(q.a,{container:!0,alignItems:"center",justify:"space-between"},c.a.createElement(q.a,{item:!0},c.a.createElement(O.a,{color:"primary",variant:"contained",type:"submit",onClick:v.handleSubmit(f)},h.mutationMiseajour.isLoading||h.mutationAjout.isLoading?c.a.createElement(T.a,{color:"inherit"}):c.a.createElement(I.a,null),c.a.createElement("span",{className:"pl-2 capitalize"},"ajout"===b.pagestate.action?c.a.createElement(j.a,null,"Enregistrer"):c.a.createElement(j.a,null,"Mettre \xe0 jour")))),c.a.createElement(q.a,{item:!0},c.a.createElement(O.a,{variant:"outlined",color:"secondary",onClick:g.AnnulerEnregistrement},"Annuler")))))))))}var z=e=>{var t,a;const o=e.state,n=e.fonctions,l=e.collonnes,i=e.queries,s=e.useform,m=e.onSubmit;return c.a.createElement("div",{className:"m-sm-30"},c.a.createElement(h.a,{open:o.dialoguephoto.open,"aria-labelledby":"",maxWidth:"md",onClose:n.handleCloseDialoguephoto,objet:o.dialoguephoto.objet},c.a.createElement(v.a,{id:""},o.dialoguephoto.titre),c.a.createElement(f.a,null,c.a.createElement("img",{src:u.c+"/fichiers/"+o.dialoguephoto.fichier,alt:"{objet}",srcset:""}))),c.a.createElement(C.a,{message:o.alert.message,severity:o.alert.severity,open:o.alert.open,handleAlertClose:!0===o.alert.automaticClose?()=>n.handleFermetureAlerte():()=>n.fermerAlerte()}),c.a.createElement("div",{className:"mb-sm-30"},c.a.createElement(w.a,{routeSegments:[{name:o.titre}]})),c.a.createElement("div",{className:"mb-sm-30"},c.a.createElement(j.a,{variant:"h4"},o.titre)),"affichage"===o.pagestate.mode?c.a.createElement(E.a,{in:o.pagestate.affichageTable,direction:"right",unmountOnExit:!0},c.a.createElement("div",null,c.a.createElement(O.a,{className:"mb-4",variant:"contained",color:"primary",onClick:()=>n.handleClicksurNouveau()},"Nouveau contact"),i.queryContacts.isLoading?c.a.createElement(x.a,{message:"Chargement des donn\xe9es...",type:"info"}):i.queryContacts.isError?c.a.createElement(x.a,{message:"Erreur lors du chargement des donn\xe9es::"+i.queryContacts.error,type:"error"}):c.a.createElement(P.a,{tag:"div",blocking:!1},c.a.createElement(L.a,{theme:Object(u.a)()},c.a.createElement(b.a,{title:o.titre,data:i.queryContacts.data.rows.map(e=>({contact:e})),columns:l,options:Object(r.a)(Object(r.a)({},g.a),{},{serverSide:!0,count:i.queryContacts.data.count,rowsPerPageOptions:[20,30,50],rowsPerPage:o.tableconfig.rowsPerPage,textLabels:Object(r.a)(Object(r.a)({},g.a.textLabels),{},{toolbar:Object(r.a)(Object(r.a)({},g.a.textLabels.toolbar),{},{search:"Rechercher par id"})}),onChangePage:e=>n.handleChangePage(e),onChangeRowsPerPage:e=>n.handleChangeRowPerPage(e),onSearchChange:e=>n.handleSearchChange(e),onFilterChange:()=>n.handleFilterChange()})}))),c.a.createElement(y.a,{className:"w-full overflow-auto",elevation:8},c.a.createElement(S.a,{open:o.dialogueSuppressionOuvert,onConfirmDialogClose:n.fermerDialogueSuppression,onYesClick:n.confirmerSuppression,text:null!==(t="Confirmez la suppression de "+(null===(a=o.contact)||void 0===a?void 0:a.nom))&&void 0!==t?t:""})))):c.a.createElement(Q,{state:o,fonctions:n,queries:i,useform:s,onSubmit:m}))},G=a(24),U=a(124),W=a(1968),J=a(1969),V=a(1970),Y=a(1972),H=a(86),K=a(589),X=a(1976),Z=a(1937),$=a(442),_=a(1953);Object(H.a)(e=>{e.palette,Object(G.a)(e,["palette"]);return{userMenu:{display:"flex",alignItems:"center",cursor:"pointer",borderRadius:24,padding:4,"& span":{margin:"0 8px"}},menuItem:{display:"flex",alignItems:"center",minWidth:185}}});function ee(e){const t=Object(H.a)(e=>{e.palette,Object(G.a)(e,["palette"]);return{userMenu:{display:"flex",alignItems:"center",cursor:"pointer",borderRadius:24,padding:4,"& span":{margin:"0 8px"}},menuItem:{display:"flex",alignItems:"center",minWidth:185}}}),a=(t,a)=>{e.handleClickSurAction(t,a)};return[{name:"contact",label:"ID",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var r,o;return null!==(r=null===(o=e.id)||void 0===o?void 0:o.toLocaleString("fr-FR"))&&void 0!==r?r:""}}},{name:"contact",label:"Fonction",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var r;return null!==(r=null===e||void 0===e?void 0:e.fonction)&&void 0!==r?r:""}}},{name:"contact",label:"Localite",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var r,o;return null!==(r=null===(o=e.Localite)||void 0===o?void 0:o.nom)&&void 0!==r?r:""}}},{name:"contact",label:"Nom",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var r;return null!==(r=null===e||void 0===e?void 0:e.nom)&&void 0!==r?r:""}}},{name:"contact",label:"Pr\xe9nom",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var r;return null!==(r=null===e||void 0===e?void 0:e.prenom)&&void 0!==r?r:""}}},{name:"contact",label:"T\xe9l\xe9phone",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var r;return null!==(r=null===e||void 0===e?void 0:e.telephone)&&void 0!==r?r:""}}},{name:"contact",label:"Type de contact",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var r;return null!==(r=null===e||void 0===e?void 0:e.typedecontact)&&void 0!==r?r:""}}},{name:"contact",label:"Commentaire",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var r;return null!==(r=null===e||void 0===e?void 0:e.commentaire)&&void 0!==r?r:""}}},{name:"contact",label:"Photo",options:{filter:!1,sort:!1,display:!0,customBodyRender:(t,a,r)=>{var o,n,l,i,s;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"flex items-center"},c.a.createElement(K.a,{onClick:()=>e.handleClickSurphoto(t)},c.a.createElement(O.a,null,c.a.createElement(X.a,{variant:"rounded",className:"w-48 h-48",src:"/fichiers/photocontact/".concat(t.photo)}))),c.a.createElement("div",{className:"ml-3"},c.a.createElement("h5",{className:"my-0 text-15"},null!==(o=t.nom)&&void 0!==o?o:""),c.a.createElement("small",{className:"text-muted"},(null!==(n=t.telephone)&&void 0!==n?n:"")+"/"+(null!==(l=t.email)&&void 0!==l?l:"")),c.a.createElement("br",null),c.a.createElement("small",{className:"text-muted"},null!==(i=null===(s=t.Commune)||void 0===s?void 0:s.nom)&&void 0!==i?i:""))))}}},{name:"contact",label:"Actions",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,r,o)=>c.a.createElement("div",null,c.a.createElement(U.j,{menuButton:c.a.createElement("div",{className:t.userMenu},c.a.createElement(Z.a,{xsDown:!0},c.a.createElement(O.a,{size:"small",variant:"outlined",color:"primary",endIcon:c.a.createElement(Y.a,null)},"Actions")))},(e=>{switch(e.statut){case"Annul\xe9":return[{id:1,nom:"D\xe9tails",action:e=>a(e,"D\xe9tails"),icon:c.a.createElement(W.a,{color:"primary"})}];case"Nouveau":return[{id:1,nom:"D\xe9tails",action:e=>a(e,"D\xe9tails"),icon:c.a.createElement(W.a,{color:"primary"})},{id:2,nom:"Modifier",action:e=>a(e,"Modifier"),icon:c.a.createElement(J.a,{color:"primary"})},{id:3,nom:"Supprimer",action:e=>a(e,"Supprimer"),icon:c.a.createElement(V.a,{color:"error"})}];default:return[{id:2,nom:"Modifier",action:e=>a(e,"Modifier"),icon:c.a.createElement(J.a,{color:"primary"})}]}})(e).map(t=>c.a.createElement(c.a.Fragment,null,c.a.createElement($.a,{onClick:()=>t.action(e),key:t.id,value:t.statut},t.icon,"   ",c.a.createElement("span",{className:"ml-5"},t.nom)),c.a.createElement(_.a,null)))))}}]}var te=a(79),ae=a(971),re=a(279),oe=a(1978);t.default=()=>{const e={contact:{fonction:"",localite:"1",nom:"",prenom:"",telephone:"",typedecontact:"",commentaire:"",photo:""},contact1:null,titre:"Gestion des contacts",tableconfig:{page:0,rowsPerPage:30,recherche:"",filtre:""},pagestate:{mode:"affichage",action:"ajout",affichageTable:!0},alert:{severity:"severity",message:"",open:!1,automaticClose:!1},dialogueSuppressionOuvert:!1,dialoguephoto:{open:!1,fichier:"",titre:"",objet:""},progressphoto:0},t=Object(n.useState)(e),a=Object(o.a)(t,2),l=a[0],i=a[1];let s=new m,u=new oe.a;const p=Object(d.useQueryClient)(),b=e=>{var t=Math.round(100*e.loaded/e.total);i(Object(r.a)(Object(r.a)({},l),{},{progressphoto:t}))},g={handleFermetureAlerte:()=>{i(Object(r.a)(Object(r.a)({},l),{},{titre:"Gestion des contacts",alert:Object(r.a)(Object(r.a)({},l.alert),{},{open:!1}),pagestate:Object(r.a)(Object(r.a)({},l.pagestate),{},{mode:"affichage",affichageTable:!0})}))},handleClicksurNouveau:()=>{i(Object(r.a)(Object(r.a)({},l),{},{contact:null,titre:"Nouveau contact ",pagestate:{mode:"edition",action:"ajout",affichageTable:!1}}))},fermerAlerte:()=>{i(Object(r.a)(Object(r.a)({},l),{},{alert:Object(r.a)(Object(r.a)({},l.alert),{},{open:!1})}))},AnnulerEnregistrement:()=>{console.log("Annulation de l'enregistrement"),i(Object(r.a)(Object(r.a)({},l),{},{titre:"Gestion des contacts",pagestate:{mode:"affichage",action:"ajout",affichageTable:!0}}))},fermerDialogueSuppression:()=>{i(Object(r.a)(Object(r.a)({},l),{},{dialogueSuppressionOuvert:!1}))},confirmerSuppression:()=>{O.mutate(l.contact)},handleCloseDialoguephoto:()=>{i(Object(r.a)(Object(r.a)({},l),{},{dialoguephoto:Object(r.a)(Object(r.a)({},l.dialoguephoto),{},{open:!1})}))},handleChangeRowPerPage:e=>{i(Object(r.a)(Object(r.a)({},l),{},{tableconfig:Object(r.a)(Object(r.a)({},l.tableconfig),{},{rowsPerPage:e})}))},handleSearchChange:e=>{i(Object(r.a)(Object(r.a)({},l),{},{tableconfig:Object(r.a)(Object(r.a)({},l.tableconfig),{},{recherche:e})}))},handleChangePage:e=>{i(Object(r.a)(Object(r.a)({},l),{},{tableconfig:Object(r.a)(Object(r.a)({},l.tableconfig),{},{page:e})}))},handleClickSurAction:(e,t)=>{switch(console.log(t),t){case"D\xe9tails":console.log("action details");break;case"Modifier":i(Object(r.a)(Object(r.a)({},l),{},{titre:"Mise \xe0 jour ",contact:e,pagestate:{mode:"edition",action:"misajour",affichageTable:!1}}));break;case"Supprimer":i(Object(r.a)(Object(r.a)({},l),{},{contact:e,dialogueSuppressionOuvert:!0}))}},handleProgressphoto:b,uploaderphoto:e=>{e&&E.mutate({fichier:e,objet:"photocontact",handleprogress:b})},supprimerphoto:()=>{console.log("Suppression du fichier")},handleClickSurphoto:e=>{i(Object(r.a)(Object(r.a)({},l),{},{dialoguephoto:{open:!0,titre:"photo",fichier:e.photo,objet:"photocontact"}}))}},h=Object(d.useQuery)(["Contacts",l.tableconfig.page,l.tableconfig.rowsPerPage,l.tableconfig.recherche,l.tableconfig.filtre],()=>s.getTouslesContacts(l.tableconfig.page,l.tableconfig.rowsPerPage,l.tableconfig.recherche,l.tableconfig.filtre),{keepPreviousData:!0}),v=Object(d.useQuery)(["Localites",l.tableconfig.page,l.tableconfig.rowsPerPage,l.tableconfig.recherche,l.tableconfig.filtre],()=>u.getTouslesLocalites(0,1e3,l.tableconfig.recherche,l.tableconfig.filtre),{keepPreviousData:!0}),f=Object(d.useMutation)(s.ajoutContact,{onSuccess:()=>{p.invalidateQueries("Contacts"),i(Object(r.a)(Object(r.a)({},l),{},{alert:{message:"Enregistrement r\xe9ussi",open:!0,severity:"success",automaticClose:!0}}))},onError:()=>{p.invalidateQueries("Contacts"),i(Object(r.a)(Object(r.a)({},l),{},{alert:{message:"Echec lors de l'enregistrement",open:!0,severity:"error",automaticClose:!0}}))}}),j=Object(d.useMutation)(s.miseajourContact,{onSuccess:()=>{p.invalidateQueries("Contacts"),i(Object(r.a)(Object(r.a)({},l),{},{alert:{message:"Mise \xe0 jour R\xe9ussie...",open:!0,severity:"success",automaticClose:!0}}))},onError:()=>{p.invalidateQueries("Contacts"),i(Object(r.a)(Object(r.a)({},l),{},{alert:{message:"Echec lors de la mise \xe0 jour",open:!0,severity:"error",automaticClose:!0}}))}}),E=Object(d.useMutation)(ae.a,{onSuccess:e=>{i(Object(r.a)(Object(r.a)({},l),{},{contact:Object(r.a)(Object(r.a)({},l.contact),{},{photo:e}),alert:{message:"Upload du fichier r\xe9ussi",open:!0,severity:"success",automaticClose:!1},progressphoto:100}))},onError:()=>{i(Object(r.a)(Object(r.a)({},l),{},{alert:{automaticClose:!1,message:"Echec de chargement du fichier sur le serveur",open:!0,severity:"error"}}))}}),O=Object(d.useMutation)(s.suppressionContact,{onSuccess:()=>{i(Object(r.a)(Object(r.a)({},l),{},{dialogueSuppressionOuvert:!1,alert:{message:"Supr\xe9ssion r\xe9ussie",open:!0,severity:"success"}}))},onError:()=>{i({alert:{message:"Echec lors de la supr\xe9ssion",open:!0,severity:"error"}})},onSettled:()=>{p.invalidateQueries("Contacts")}}),y={queryContacts:h,mutationMiseajour:j,mutationAjout:f,mutationSuppression:O,queryLocalites:v,mutationUploadphoto:E},C=ee(g),w=k.b().shape({fonction:k.c().required("Le champs Fonction est requis"),localite:k.c().required("Le champs Localite est requis"),nom:k.c().required("Le champs Nom est requis"),prenom:k.c().required("Le champs Prenom est requis"),telephone:k.c().required("Le champs Telephone est requis"),typedecontact:k.c().required("Le champs Typedecontact est requis"),commentaire:k.c().required("Le champs Commentaire est requis")}),S=Object(te.c)({resolver:Object(re.yupResolver)(w),defaultValues:{contact:l.contact}});return c.a.createElement(z,{state:l,fonctions:g,collonnes:C,queries:y,useform:S,onSubmit:e=>{var t;let a=Object(r.a)(Object(r.a)({},l.contact),e);void 0!==(null===(t=l.contact)||void 0===t?void 0:t.id)?y.mutationMiseajour.mutate(Object(r.a)({},a)):y.mutationAjout.mutate(Object(r.a)({},a))}})}}}]);