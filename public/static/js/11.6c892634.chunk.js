(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[11],{1978:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(9),r=a.n(n),o=a(18),i=a(25);class l{getTouslesLocalites(e,t,a,n){return Object(o.a)(r.a.mark((function n(){var o;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e+=1,n.next=3,i.b.get("/localites?itemsPerPage="+t+"&page="+e+"&id="+a);case 3:return o=n.sent,n.abrupt("return",o.data);case 5:case"end":return n.stop()}}),n)})))()}ajoutLocalite(e){return Object(o.a)(r.a.mark((function t(){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.post("/localites",e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}miseajourLocalite(e){return Object(o.a)(r.a.mark((function t(){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.put("/localites/"+e.id,e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}suppressionLocalite(e){return Object(o.a)(r.a.mark((function t(){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.delete("/localites/"+e.id,{method:"DELETE",herdears:{Accept:"application/json"}});case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}}},1997:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a(22),o=a(0),i=a.n(o),l=a(9),c=a.n(l),s=a(18),m=a(25);class u{getTouslesEvenements(e,t,a,n){return Object(s.a)(c.a.mark((function n(){var r;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e+=1,n.next=3,m.b.get("/evenements?itemsPerPage="+t+"&page="+e+"&id="+a);case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})))()}ajoutEvenement(e){return Object(s.a)(c.a.mark((function t(){var a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.b.post("/evenements",e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}miseajourEvenement(e){return Object(s.a)(c.a.mark((function t(){var a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.b.put("/evenements/"+e.id,e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}suppressionEvenement(e){return Object(s.a)(c.a.mark((function t(){var a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.b.delete("/evenements/"+e.id,{method:"DELETE",herdears:{Accept:"application/json"}});case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}}var d=a(83),p=a(469),v=a.n(p),b=a(281),g=a(966),h=a(1961),f=a(1929),j=a(68),E=a(1930),O=a(174),y=a(1955),C=a(233),w=a(232),S=a(280),x=a(136),P=a(470),k=(a(608),a(1951)),L=a(100),q=a(276),N=a(1960),D=a(332),M=a(1959),R=a(1958),A=a(1919),T=a(161),B=a(234),F=(a(609),a(610)),I=(a(611),a(612)),Q=(a(613),a(1967));function z(e){var t,a,n,r,o,l,c,s,u,d;const p=e.state,v=e.fonctions,b=e.queries,g=e.useform,h=e.onSubmit;return i.a.createElement("div",null,i.a.createElement(q.a,{container:!0,spacing:1,justify:"center"},i.a.createElement(q.a,{item:!0,lg:6,md:6,sm:12,xs:12},i.a.createElement(k.a,{theme:Object(m.a)()},i.a.createElement(y.a,null,i.a.createElement(N.a,{action:i.a.createElement(D.a,{"aria-label":"",onClick:v.AnnulerEnregistrement},"x"),title:"ajout"===p.pagestate.action?"Nouvel ev\xe8nement":"Mise \xe0 jour ",subheader:""}),i.a.createElement(M.a,{className:" px-6 pt-6 pb-6"}," ",i.a.createElement("form",{onSubmit:g.handleSubmit(h)},i.a.createElement(q.a,{container:!0,spacing:4,direction:"column"},i.a.createElement(q.a,{item:!0},i.a.createElement(T.a,{id:"typedevenement",nom:"typedevenement",label:"Date de levenement",valeur:null===(t=p.evenement)||void 0===t?void 0:t.typedevenement,control:g.control,error:g.errors.typedevenement})),i.a.createElement(q.a,{item:!0},b.queryLocalites.isLoading?i.a.createElement(x.a,{message:"chargement des roles"}):i.a.createElement(B.a,{id:"localite",name:"localite",label:"localite",table:"localite",control:g.control,options:b.queryLocalites.data.rows,error:g.errors.localite,defaultValue:null!==(a=null===(n=p.evenement)||void 0===n||null===(r=n.localite)||void 0===r?void 0:r.id)&&void 0!==a?a:"1",valeur:null!==(o=null===(l=p.evenement)||void 0===l?void 0:l.localite)&&void 0!==o?o:""})),i.a.createElement(q.a,{item:!0},i.a.createElement(T.a,{id:"nom",nom:"nom",label:"Nom",valeur:null===(c=p.evenement)||void 0===c?void 0:c.nom,control:g.control,error:g.errors.nom})),i.a.createElement(q.a,{item:!0},i.a.createElement(T.a,{id:"rapport",nom:"rapport",label:"Rapport",valeur:null===(s=p.evenement)||void 0===s?void 0:s.rapport,control:g.control,error:g.errors.rapport})),i.a.createElement(q.a,{item:!0},i.a.createElement(I.a,{id:"date",nom:"date",label:"date",valeur:p.evenement?p.evenement.date:new Date,error:g.errors.date,control:g.control,handledatechange:v.handledatedatechange})),i.a.createElement(q.a,{item:!0},i.a.createElement(F.a,{progress:p.progressphoto,acceptedFiles:[".png"],onUpload:e=>v.uploaderphoto(e),onSupprimer:()=>v.supprimerphoto(),titre:"Fichier photo .png(faire glisser ou cliquez ici pour charger)"})),i.a.createElement(q.a,{item:!0},i.a.createElement(T.a,{id:"commentaire",nom:"commentaire",label:"Commentaire",valeur:null===(u=p.evenement)||void 0===u?void 0:u.commentaire,control:g.control,error:g.errors.commentaire})),i.a.createElement(q.a,{item:!0},i.a.createElement(T.a,{id:"description",nom:"description",label:"Description",valeur:null===(d=p.evenement)||void 0===d?void 0:d.description,control:g.control,error:g.errors.description}))))),i.a.createElement(R.a,null,i.a.createElement(q.a,{container:!0,alignItems:"center",justify:"space-between"},i.a.createElement(q.a,{item:!0},i.a.createElement(O.a,{color:"primary",variant:"contained",type:"submit",onClick:g.handleSubmit(h)},b.mutationMiseajour.isLoading||b.mutationAjout.isLoading?i.a.createElement(A.a,{color:"inherit"}):i.a.createElement(Q.a,null),i.a.createElement("span",{className:"pl-2 capitalize"},"ajout"===p.pagestate.action?i.a.createElement(j.a,null,"Enregistrer"):i.a.createElement(j.a,null,"Mettre \xe0 jour")))),i.a.createElement(q.a,{item:!0},i.a.createElement(O.a,{variant:"outlined",color:"secondary",onClick:v.AnnulerEnregistrement},"Annuler")))))))))}var G=e=>{var t,a;const r=e.state,o=e.fonctions,l=e.collonnes,c=e.queries,s=e.useform,u=e.onSubmit;return i.a.createElement("div",{className:"m-sm-30"},i.a.createElement(g.a,{open:r.dialoguephoto.open,"aria-labelledby":"",maxWidth:"md",onClose:o.handleCloseDialoguephoto,objet:r.dialoguephoto.objet},i.a.createElement(h.a,{id:""},r.dialoguephoto.titre),i.a.createElement(f.a,null,i.a.createElement("img",{src:m.c+"/fichiers/"+r.dialoguephoto.fichier,alt:"{objet}",srcset:""}))),i.a.createElement(C.a,{message:r.alert.message,severity:r.alert.severity,open:r.alert.open,handleAlertClose:!0===r.alert.automaticClose?()=>o.handleFermetureAlerte():()=>o.fermerAlerte()}),i.a.createElement("div",{className:"mb-sm-30"},i.a.createElement(w.a,{routeSegments:[{name:r.titre}]})),i.a.createElement("div",{className:"mb-sm-30"},i.a.createElement(j.a,{variant:"h4"},r.titre)),"affichage"===r.pagestate.mode?i.a.createElement(E.a,{in:r.pagestate.affichageTable,direction:"right",unmountOnExit:!0},i.a.createElement("div",null,i.a.createElement(O.a,{className:"mb-4",variant:"contained",color:"primary",onClick:()=>o.handleClicksurNouveau()},"Nouvel ev\xe8nement"),c.queryEvenements.isLoading?i.a.createElement(x.a,{message:"Chargement des donn\xe9es...",type:"info"}):c.queryEvenements.isError?i.a.createElement(x.a,{message:"Erreur lors du chargement des donn\xe9es::"+c.queryEvenements.error,type:"error"}):i.a.createElement(P.a,{tag:"div",blocking:!1},i.a.createElement(k.a,{theme:Object(m.a)()},i.a.createElement(v.a,{title:r.titre,data:c.queryEvenements.data.rows.map(e=>({evenement:e})),columns:l,options:Object(n.a)(Object(n.a)({},b.a),{},{serverSide:!0,count:c.queryEvenements.data.count,rowsPerPageOptions:[20,30,50],rowsPerPage:r.tableconfig.rowsPerPage,textLabels:Object(n.a)(Object(n.a)({},b.a.textLabels),{},{toolbar:Object(n.a)(Object(n.a)({},b.a.textLabels.toolbar),{},{search:"Rechercher par id"})}),onChangePage:e=>o.handleChangePage(e),onChangeRowsPerPage:e=>o.handleChangeRowPerPage(e),onSearchChange:e=>o.handleSearchChange(e),onFilterChange:()=>o.handleFilterChange()})}))),i.a.createElement(y.a,{className:"w-full overflow-auto",elevation:8},i.a.createElement(S.a,{open:r.dialogueSuppressionOuvert,onConfirmDialogClose:o.fermerDialogueSuppression,onYesClick:o.confirmerSuppression,text:null!==(t="Confirmez la suppression de "+(null===(a=r.evenement)||void 0===a?void 0:a.nom))&&void 0!==t?t:""})))):i.a.createElement(z,{state:r,fonctions:o,queries:c,useform:s,onSubmit:u}))},U=a(24),W=a(124),H=a(1968),J=a(1969),V=a(1970),Y=a(1972),K=a(86),X=a(589),Z=a(1976),$=a(1937),_=a(442),ee=a(1953),te=a(961),ae=a(1971);Object(K.a)(e=>{e.palette,Object(U.a)(e,["palette"]);return{userMenu:{display:"flex",alignItems:"center",cursor:"pointer",borderRadius:24,padding:4,"& span":{margin:"0 8px"}},menuItem:{display:"flex",alignItems:"center",minWidth:185}}});function ne(e){const t=Object(K.a)(e=>{e.palette,Object(U.a)(e,["palette"]);return{userMenu:{display:"flex",alignItems:"center",cursor:"pointer",borderRadius:24,padding:4,"& span":{margin:"0 8px"}},menuItem:{display:"flex",alignItems:"center",minWidth:185}}}),a=(t,a)=>{e.handleClickSurAction(t,a)};return[{name:"evenement",label:"ID",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var n,r;return null!==(n=null===(r=e.id)||void 0===r?void 0:r.toLocaleString("fr-FR"))&&void 0!==n?n:""}}},{name:"evenement",label:"Date de levenement",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var n;return null!==(n=null===e||void 0===e?void 0:e.typedevenement)&&void 0!==n?n:""}}},{name:"evenement",label:"localite",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var n,r;return null!==(n=null===(r=e.Localite)||void 0===r?void 0:r.nom)&&void 0!==n?n:""}}},{name:"evenement",label:"Nom",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var n;return null!==(n=null===e||void 0===e?void 0:e.nom)&&void 0!==n?n:""}}},{name:"evenement",label:"Rapport",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var n;return null!==(n=null===e||void 0===e?void 0:e.rapport)&&void 0!==n?n:""}}},{name:"evenement",label:"date",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>null==e.date?" ":Object(te.a)(Object(ae.a)(e.date),"dd/MM/yyyy HH:mm")}},{name:"evenement",label:"Photo",options:{filter:!1,sort:!1,display:!0,customBodyRender:(t,a,n)=>{var r,o,l,c,s;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"flex items-center"},i.a.createElement(X.a,{onClick:()=>e.handleClickSurphoto(t)},i.a.createElement(O.a,null,i.a.createElement(Z.a,{variant:"rounded",className:"w-48 h-48",src:"/fichiers/photoevenement/".concat(t.photo)}))),i.a.createElement("div",{className:"ml-3"},i.a.createElement("h5",{className:"my-0 text-15"},null!==(r=t.nom)&&void 0!==r?r:""),i.a.createElement("small",{className:"text-muted"},(null!==(o=t.telephone)&&void 0!==o?o:"")+"/"+(null!==(l=t.email)&&void 0!==l?l:"")),i.a.createElement("br",null),i.a.createElement("small",{className:"text-muted"},null!==(c=null===(s=t.Commune)||void 0===s?void 0:s.nom)&&void 0!==c?c:""))))}}},{name:"evenement",label:"Commentaire",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var n;return null!==(n=null===e||void 0===e?void 0:e.commentaire)&&void 0!==n?n:""}}},{name:"evenement",label:"Description",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var n;return null!==(n=null===e||void 0===e?void 0:e.description)&&void 0!==n?n:""}}},{name:"evenement",label:"Actions",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,n,r)=>i.a.createElement("div",null,i.a.createElement(W.j,{menuButton:i.a.createElement("div",{className:t.userMenu},i.a.createElement($.a,{xsDown:!0},i.a.createElement(O.a,{size:"small",variant:"outlined",color:"primary",endIcon:i.a.createElement(Y.a,null)},"Actions")))},(e=>{switch(e.statut){case"Annul\xe9":return[{id:1,nom:"D\xe9tails",action:e=>a(e,"D\xe9tails"),icon:i.a.createElement(H.a,{color:"primary"})}];case"Nouveau":return[{id:1,nom:"D\xe9tails",action:e=>a(e,"D\xe9tails"),icon:i.a.createElement(H.a,{color:"primary"})},{id:2,nom:"Modifier",action:e=>a(e,"Modifier"),icon:i.a.createElement(J.a,{color:"primary"})},{id:3,nom:"Supprimer",action:e=>a(e,"Supprimer"),icon:i.a.createElement(V.a,{color:"error"})}];default:return[{id:2,nom:"Modifier",action:e=>a(e,"Modifier"),icon:i.a.createElement(J.a,{color:"primary"})}]}})(e).map(t=>i.a.createElement(i.a.Fragment,null,i.a.createElement(_.a,{onClick:()=>t.action(e),key:t.id,value:t.statut},t.icon,"   ",i.a.createElement("span",{className:"ml-5"},t.nom)),i.a.createElement(ee.a,null)))))}}]}var re=a(79),oe=a(971),ie=a(279),le=a(1978);t.default=()=>{const e={evenement:{typedevenement:"",localite:"1",nom:"",rapport:"",date:"",photo:"",commentaire:"",description:""},evenement1:null,titre:"Gestion des \xe9v\xe8nements",tableconfig:{page:0,rowsPerPage:30,recherche:"",filtre:""},pagestate:{mode:"affichage",action:"ajout",affichageTable:!0},alert:{severity:"severity",message:"",open:!1,automaticClose:!1},dialogueSuppressionOuvert:!1,dialoguephoto:{open:!1,fichier:"",titre:"",objet:""},progressphoto:0},t=Object(o.useState)(e),a=Object(r.a)(t,2),l=a[0],c=a[1];let s=new u,m=new le.a;const p=Object(d.useQueryClient)(),v=e=>{var t=Math.round(100*e.loaded/e.total);c(Object(n.a)(Object(n.a)({},l),{},{progressphoto:t}))},b={handleFermetureAlerte:()=>{c(Object(n.a)(Object(n.a)({},l),{},{titre:"Gestion des \xe9v\xe8nements",alert:Object(n.a)(Object(n.a)({},l.alert),{},{open:!1}),pagestate:Object(n.a)(Object(n.a)({},l.pagestate),{},{mode:"affichage",affichageTable:!0})}))},handleClicksurNouveau:()=>{c(Object(n.a)(Object(n.a)({},l),{},{evenement:null,titre:"Nouvel ev\xe8nement ",pagestate:{mode:"edition",action:"ajout",affichageTable:!1}}))},fermerAlerte:()=>{c(Object(n.a)(Object(n.a)({},l),{},{alert:Object(n.a)(Object(n.a)({},l.alert),{},{open:!1})}))},AnnulerEnregistrement:()=>{console.log("Annulation de l'enregistrement"),c(Object(n.a)(Object(n.a)({},l),{},{titre:"Gestion des \xe9v\xe8nements",pagestate:{mode:"affichage",action:"ajout",affichageTable:!0}}))},fermerDialogueSuppression:()=>{c(Object(n.a)(Object(n.a)({},l),{},{dialogueSuppressionOuvert:!1}))},confirmerSuppression:()=>{O.mutate(l.evenement)},handleCloseDialoguephoto:()=>{c(Object(n.a)(Object(n.a)({},l),{},{dialoguephoto:Object(n.a)(Object(n.a)({},l.dialoguephoto),{},{open:!1})}))},handleChangeRowPerPage:e=>{c(Object(n.a)(Object(n.a)({},l),{},{tableconfig:Object(n.a)(Object(n.a)({},l.tableconfig),{},{rowsPerPage:e})}))},handleSearchChange:e=>{c(Object(n.a)(Object(n.a)({},l),{},{tableconfig:Object(n.a)(Object(n.a)({},l.tableconfig),{},{recherche:e})}))},handleChangePage:e=>{c(Object(n.a)(Object(n.a)({},l),{},{tableconfig:Object(n.a)(Object(n.a)({},l.tableconfig),{},{page:e})}))},handleClickSurAction:(e,t)=>{switch(console.log(t),t){case"D\xe9tails":console.log("action details");break;case"Modifier":c(Object(n.a)(Object(n.a)({},l),{},{titre:"Mise \xe0 jour ",evenement:e,pagestate:{mode:"edition",action:"misajour",affichageTable:!1}}));break;case"Supprimer":c(Object(n.a)(Object(n.a)({},l),{},{evenement:e,dialogueSuppressionOuvert:!0}))}},handledatedatechange:e=>{c(Object(n.a)(Object(n.a)({},l),{},{evenement:Object(n.a)(Object(n.a)({},l.evenement),{},{date:e})}))},handleProgressphoto:v,uploaderphoto:e=>{e&&E.mutate({fichier:e,objet:"photoevenement",handleprogress:v})},supprimerphoto:()=>{console.log("Suppression du fichier")},handleClickSurphoto:e=>{c(Object(n.a)(Object(n.a)({},l),{},{dialoguephoto:{open:!0,titre:"photo",fichier:e.photo,objet:"photoevenement"}}))}},g=Object(d.useQuery)(["Evenements",l.tableconfig.page,l.tableconfig.rowsPerPage,l.tableconfig.recherche,l.tableconfig.filtre],()=>s.getTouslesEvenements(l.tableconfig.page,l.tableconfig.rowsPerPage,l.tableconfig.recherche,l.tableconfig.filtre),{keepPreviousData:!0}),h=Object(d.useQuery)(["Localites",l.tableconfig.page,l.tableconfig.rowsPerPage,l.tableconfig.recherche,l.tableconfig.filtre],()=>m.getTouslesLocalites(0,1e3,l.tableconfig.recherche,l.tableconfig.filtre),{keepPreviousData:!0}),f=Object(d.useMutation)(s.ajoutEvenement,{onSuccess:()=>{p.invalidateQueries("Evenements"),c(Object(n.a)(Object(n.a)({},l),{},{alert:{message:"Enregistrement r\xe9ussi",open:!0,severity:"success",automaticClose:!0}}))},onError:()=>{p.invalidateQueries("Evenements"),c(Object(n.a)(Object(n.a)({},l),{},{alert:{message:"Echec lors de l'enregistrement",open:!0,severity:"error",automaticClose:!0}}))}}),j=Object(d.useMutation)(s.miseajourEvenement,{onSuccess:()=>{p.invalidateQueries("Evenements"),c(Object(n.a)(Object(n.a)({},l),{},{alert:{message:"Mise \xe0 jour R\xe9ussie...",open:!0,severity:"success",automaticClose:!0}}))},onError:()=>{p.invalidateQueries("Evenements"),c(Object(n.a)(Object(n.a)({},l),{},{alert:{message:"Echec lors de la mise \xe0 jour",open:!0,severity:"error",automaticClose:!0}}))}}),E=Object(d.useMutation)(oe.a,{onSuccess:e=>{c(Object(n.a)(Object(n.a)({},l),{},{evenement:Object(n.a)(Object(n.a)({},l.evenement),{},{photo:e}),alert:{message:"Upload du fichier r\xe9ussi",open:!0,severity:"success",automaticClose:!1},progressphoto:100}))},onError:()=>{c(Object(n.a)(Object(n.a)({},l),{},{alert:{automaticClose:!1,message:"Echec de chargement du fichier sur le serveur",open:!0,severity:"error"}}))}}),O=Object(d.useMutation)(s.suppressionEvenement,{onSuccess:()=>{c(Object(n.a)(Object(n.a)({},l),{},{dialogueSuppressionOuvert:!1,alert:{message:"Supr\xe9ssion r\xe9ussie",open:!0,severity:"success"}}))},onError:()=>{c({alert:{message:"Echec lors de la supr\xe9ssion",open:!0,severity:"error"}})},onSettled:()=>{p.invalidateQueries("Evenements")}}),y={queryEvenements:g,mutationMiseajour:j,mutationAjout:f,mutationSuppression:O,queryLocalites:h,mutationUploadphoto:E},C=ne(b),w=L.b().shape({typedevenement:L.c().required("Le champs Typedevenement est requis"),localite:L.c().required("Le champs Localite est requis"),nom:L.c().required("Le champs Nom est requis"),rapport:L.c().required("Le champs Rapport est requis"),commentaire:L.c().required("Le champs Commentaire est requis"),description:L.c().required("Le champs Description est requis")}),S=Object(re.c)({resolver:Object(ie.yupResolver)(w),defaultValues:{evenement:l.evenement}});return i.a.createElement(G,{state:l,fonctions:b,collonnes:C,queries:y,useform:S,onSubmit:e=>{var t;let a=Object(n.a)(Object(n.a)({},l.evenement),e);void 0!==(null===(t=l.evenement)||void 0===t?void 0:t.id)?y.mutationMiseajour.mutate(Object(n.a)({},a)):y.mutationAjout.mutate(Object(n.a)({},a))}})}}}]);