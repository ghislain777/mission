(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[8],{1984:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var r=a(9),i=a.n(r),n=a(18),o=a(25);class c{getTouslesCommunes(e,t,a,r){return Object(n.a)(i.a.mark((function r(){var n;return i.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e+=1,r.next=3,o.b.get("/communes?itemsPerPage="+t+"&page="+e+"&id="+a);case 3:return n=r.sent,r.abrupt("return",n.data);case 5:case"end":return r.stop()}}),r)})))()}ajoutCommune(e){return Object(n.a)(i.a.mark((function t(){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.post("/communes",e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}miseajourCommune(e){return Object(n.a)(i.a.mark((function t(){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.put("/communes/"+e.id,e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}suppressionCommune(e){return Object(n.a)(i.a.mark((function t(){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.delete("/communes/"+e.id,{method:"DELETE",herdears:{Accept:"application/json"}});case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}}},1985:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var r=a(9),i=a.n(r),n=a(18),o=a(25);class c{getTouslesDistricts(e,t,a,r){return Object(n.a)(i.a.mark((function r(){var n;return i.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e+=1,r.next=3,o.b.get("/districts?itemsPerPage="+t+"&page="+e+"&id="+a);case 3:return n=r.sent,r.abrupt("return",n.data);case 5:case"end":return r.stop()}}),r)})))()}ajoutDistrict(e){return Object(n.a)(i.a.mark((function t(){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.post("/districts",e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}miseajourDistrict(e){return Object(n.a)(i.a.mark((function t(){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.put("/districts/"+e.id,e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}suppressionDistrict(e){return Object(n.a)(i.a.mark((function t(){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.delete("/districts/"+e.id,{method:"DELETE",herdears:{Accept:"application/json"}});case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}}},2004:function(e,t,a){"use strict";a.r(t);var r=a(7),i=a(22),n=a(0),o=a.n(n),c=a(1985),s=a(83),l=a(469),u=a.n(l),m=a(281),d=a(966),p=a(1961),b=a(1929),g=a(68),f=a(1930),v=a(174),j=a(1955),h=a(233),E=a(232),O=a(280),y=a(136),C=a(470),D=(a(608),a(25)),w=a(1951),S=a(100),x=a(276),P=a(1960),k=a(332),q=a(1959),A=a(1958),L=a(1919),R=a(161),M=a(234),N=(a(609),a(610),a(611),a(612),a(613),a(1967));function T(e){var t,a,r,i,n,c,s,l,u,m;const d=e.state,p=e.fonctions,b=e.queries,f=e.useform,h=e.onSubmit;return o.a.createElement("div",null,o.a.createElement(x.a,{container:!0,spacing:1,justify:"center"},o.a.createElement(x.a,{item:!0,lg:6,md:6,sm:12,xs:12},o.a.createElement(w.a,{theme:Object(D.a)()},o.a.createElement(j.a,null,o.a.createElement(P.a,{action:o.a.createElement(k.a,{"aria-label":"",onClick:p.AnnulerEnregistrement},"x"),title:"ajout"===d.pagestate.action?"Nouveau district":"Mise \xe0 jour ",subheader:""}),o.a.createElement(q.a,{className:" px-6 pt-6 pb-6"}," ",o.a.createElement("form",{onSubmit:f.handleSubmit(h)},o.a.createElement(x.a,{container:!0,spacing:4,direction:"column"},o.a.createElement(x.a,{item:!0},o.a.createElement(R.a,{id:"nom",nom:"nom",label:"Nom",valeur:null===(t=d.district)||void 0===t?void 0:t.nom,control:f.control,error:f.errors.nom})),o.a.createElement(x.a,{item:!0},b.queryCommunes.isLoading?o.a.createElement(y.a,{message:"chargement des roles"}):o.a.createElement(M.a,{id:"commune",name:"commune",label:"Commune",table:"commune",control:f.control,options:b.queryCommunes.data.rows,error:f.errors.commune,defaultValue:null!==(a=null===(r=d.district)||void 0===r||null===(i=r.commune)||void 0===i?void 0:i.id)&&void 0!==a?a:"1",valeur:null!==(n=null===(c=d.district)||void 0===c?void 0:c.commune)&&void 0!==n?n:""})),o.a.createElement(x.a,{item:!0},o.a.createElement(R.a,{id:"population",nom:"population",label:"Population",valeur:null===(s=d.district)||void 0===s?void 0:s.population,control:f.control,error:f.errors.population})),o.a.createElement(x.a,{item:!0},o.a.createElement(R.a,{id:"activiteprincipale",nom:"activiteprincipale",label:"Activite principale",valeur:null===(l=d.district)||void 0===l?void 0:l.activiteprincipale,control:f.control,error:f.errors.activiteprincipale})),o.a.createElement(x.a,{item:!0},o.a.createElement(R.a,{id:"superficie",nom:"superficie",label:"Superficie",valeur:null===(u=d.district)||void 0===u?void 0:u.superficie,control:f.control,error:f.errors.superficie})),o.a.createElement(x.a,{item:!0},o.a.createElement(R.a,{id:"description",nom:"description",label:"Description",valeur:null===(m=d.district)||void 0===m?void 0:m.description,control:f.control,error:f.errors.description}))))),o.a.createElement(A.a,null,o.a.createElement(x.a,{container:!0,alignItems:"center",justify:"space-between"},o.a.createElement(x.a,{item:!0},o.a.createElement(v.a,{color:"primary",variant:"contained",type:"submit",onClick:f.handleSubmit(h)},b.mutationMiseajour.isLoading||b.mutationAjout.isLoading?o.a.createElement(L.a,{color:"inherit"}):o.a.createElement(N.a,null),o.a.createElement("span",{className:"pl-2 capitalize"},"ajout"===d.pagestate.action?o.a.createElement(g.a,null,"Enregistrer"):o.a.createElement(g.a,null,"Mettre \xe0 jour")))),o.a.createElement(x.a,{item:!0},o.a.createElement(v.a,{variant:"outlined",color:"secondary",onClick:p.AnnulerEnregistrement},"Annuler")))))))))}var B=e=>{var t,a;const i=e.state,n=e.fonctions,c=e.collonnes,s=e.queries,l=e.useform,S=e.onSubmit;return o.a.createElement("div",{className:"m-sm-30"},o.a.createElement(d.a,{open:i.dialoguephoto.open,"aria-labelledby":"",maxWidth:"md",onClose:n.handleCloseDialoguephoto,objet:i.dialoguephoto.objet},o.a.createElement(p.a,{id:""},i.dialoguephoto.titre),o.a.createElement(b.a,null,o.a.createElement("img",{src:D.c+"/fichiers/"+i.dialoguephoto.fichier,alt:"{objet}",srcset:""}))),o.a.createElement(h.a,{message:i.alert.message,severity:i.alert.severity,open:i.alert.open,handleAlertClose:!0===i.alert.automaticClose?()=>n.handleFermetureAlerte():()=>n.fermerAlerte()}),o.a.createElement("div",{className:"mb-sm-30"},o.a.createElement(E.a,{routeSegments:[{name:i.titre}]})),o.a.createElement("div",{className:"mb-sm-30"},o.a.createElement(g.a,{variant:"h4"},i.titre)),"affichage"===i.pagestate.mode?o.a.createElement(f.a,{in:i.pagestate.affichageTable,direction:"right",unmountOnExit:!0},o.a.createElement("div",null,o.a.createElement(v.a,{className:"mb-4",variant:"contained",color:"primary",onClick:()=>n.handleClicksurNouveau()},"Nouveau district"),s.queryDistricts.isLoading?o.a.createElement(y.a,{message:"Chargement des donn\xe9es...",type:"info"}):s.queryDistricts.isError?o.a.createElement(y.a,{message:"Erreur lors du chargement des donn\xe9es::"+s.queryDistricts.error,type:"error"}):o.a.createElement(C.a,{tag:"div",blocking:!1},o.a.createElement(w.a,{theme:Object(D.a)()},o.a.createElement(u.a,{title:i.titre,data:s.queryDistricts.data.rows.map(e=>({district:e})),columns:c,options:Object(r.a)(Object(r.a)({},m.a),{},{serverSide:!0,count:s.queryDistricts.data.count,rowsPerPageOptions:[20,30,50],rowsPerPage:i.tableconfig.rowsPerPage,textLabels:Object(r.a)(Object(r.a)({},m.a.textLabels),{},{toolbar:Object(r.a)(Object(r.a)({},m.a.textLabels.toolbar),{},{search:"Rechercher par id"})}),onChangePage:e=>n.handleChangePage(e),onChangeRowsPerPage:e=>n.handleChangeRowPerPage(e),onSearchChange:e=>n.handleSearchChange(e),onFilterChange:()=>n.handleFilterChange()})}))),o.a.createElement(j.a,{className:"w-full overflow-auto",elevation:8},o.a.createElement(O.a,{open:i.dialogueSuppressionOuvert,onConfirmDialogClose:n.fermerDialogueSuppression,onYesClick:n.confirmerSuppression,text:null!==(t="Confirmez la suppression de "+(null===(a=i.district)||void 0===a?void 0:a.nom))&&void 0!==t?t:""})))):o.a.createElement(T,{state:i,fonctions:n,queries:s,useform:l,onSubmit:S}))},I=a(24),F=a(124),Q=a(1968),z=a(1969),W=a(1970),J=a(1972),V=a(86),Y=a(1937),G=a(442),H=a(1953);Object(V.a)(e=>{e.palette,Object(I.a)(e,["palette"]);return{userMenu:{display:"flex",alignItems:"center",cursor:"pointer",borderRadius:24,padding:4,"& span":{margin:"0 8px"}},menuItem:{display:"flex",alignItems:"center",minWidth:185}}});function K(e){const t=Object(V.a)(e=>{e.palette,Object(I.a)(e,["palette"]);return{userMenu:{display:"flex",alignItems:"center",cursor:"pointer",borderRadius:24,padding:4,"& span":{margin:"0 8px"}},menuItem:{display:"flex",alignItems:"center",minWidth:185}}}),a=(t,a)=>{e.handleClickSurAction(t,a)};return[{name:"district",label:"ID",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var r,i;return null!==(r=null===(i=e.id)||void 0===i?void 0:i.toLocaleString("fr-FR"))&&void 0!==r?r:""}}},{name:"district",label:"Nom",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var r;return null!==(r=null===e||void 0===e?void 0:e.nom)&&void 0!==r?r:""}}},{name:"district",label:"Commune",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var r,i;return null!==(r=null===(i=e.Commune)||void 0===i?void 0:i.nom)&&void 0!==r?r:""}}},{name:"district",label:"Population",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var r,i;return null!==(r=null===(i=e.population)||void 0===i?void 0:i.toLocaleString("fr-FR"))&&void 0!==r?r:""}}},{name:"district",label:"Activite principale",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var r;return null!==(r=null===e||void 0===e?void 0:e.activiteprincipale)&&void 0!==r?r:""}}},{name:"district",label:"Superficie",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var r,i;return null!==(r=null===(i=e.superficie)||void 0===i?void 0:i.toLocaleString("fr-FR"))&&void 0!==r?r:""}}},{name:"district",label:"Description",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var r;return null!==(r=null===e||void 0===e?void 0:e.description)&&void 0!==r?r:""}}},{name:"district",label:"Actions",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,r,i)=>o.a.createElement("div",null,o.a.createElement(F.j,{menuButton:o.a.createElement("div",{className:t.userMenu},o.a.createElement(Y.a,{xsDown:!0},o.a.createElement(v.a,{size:"small",variant:"outlined",color:"primary",endIcon:o.a.createElement(J.a,null)},"Actions")))},(e=>{switch(e.statut){case"Annul\xe9":return[{id:1,nom:"D\xe9tails",action:e=>a(e,"D\xe9tails"),icon:o.a.createElement(Q.a,{color:"primary"})}];case"Nouveau":return[{id:1,nom:"D\xe9tails",action:e=>a(e,"D\xe9tails"),icon:o.a.createElement(Q.a,{color:"primary"})},{id:2,nom:"Modifier",action:e=>a(e,"Modifier"),icon:o.a.createElement(z.a,{color:"primary"})},{id:3,nom:"Supprimer",action:e=>a(e,"Supprimer"),icon:o.a.createElement(W.a,{color:"error"})}];default:return[{id:2,nom:"Modifier",action:e=>a(e,"Modifier"),icon:o.a.createElement(z.a,{color:"primary"})}]}})(e).map(t=>o.a.createElement(o.a.Fragment,null,o.a.createElement(G.a,{onClick:()=>t.action(e),key:t.id,value:t.statut},t.icon,"   ",o.a.createElement("span",{className:"ml-5"},t.nom)),o.a.createElement(H.a,null)))))}}]}var U=a(79),X=(a(971),a(279)),Z=a(1984);t.default=()=>{const e={district:{nom:"",commune:"1",population:0,activiteprincipale:"",superficie:0,description:""},district1:null,titre:"Districts",tableconfig:{page:0,rowsPerPage:30,recherche:"",filtre:""},pagestate:{mode:"affichage",action:"ajout",affichageTable:!0},alert:{severity:"severity",message:"",open:!1,automaticClose:!1},dialogueSuppressionOuvert:!1,dialoguephoto:{open:!1,fichier:"",titre:"",objet:""}},t=Object(n.useState)(e),a=Object(i.a)(t,2),l=a[0],u=a[1];let m=new c.a,d=new Z.a;const p=Object(s.useQueryClient)(),b={handleFermetureAlerte:()=>{u(Object(r.a)(Object(r.a)({},l),{},{titre:"Districts",alert:Object(r.a)(Object(r.a)({},l.alert),{},{open:!1}),pagestate:Object(r.a)(Object(r.a)({},l.pagestate),{},{mode:"affichage",affichageTable:!0})}))},handleClicksurNouveau:()=>{u(Object(r.a)(Object(r.a)({},l),{},{district:null,titre:"Nouveau district ",pagestate:{mode:"edition",action:"ajout",affichageTable:!1}}))},fermerAlerte:()=>{u(Object(r.a)(Object(r.a)({},l),{},{alert:Object(r.a)(Object(r.a)({},l.alert),{},{open:!1})}))},AnnulerEnregistrement:()=>{console.log("Annulation de l'enregistrement"),u(Object(r.a)(Object(r.a)({},l),{},{titre:"Districts",pagestate:{mode:"affichage",action:"ajout",affichageTable:!0}}))},fermerDialogueSuppression:()=>{u(Object(r.a)(Object(r.a)({},l),{},{dialogueSuppressionOuvert:!1}))},confirmerSuppression:()=>{h.mutate(l.district)},handleCloseDialoguephoto:()=>{u(Object(r.a)(Object(r.a)({},l),{},{dialoguephoto:Object(r.a)(Object(r.a)({},l.dialoguephoto),{},{open:!1})}))},handleChangeRowPerPage:e=>{u(Object(r.a)(Object(r.a)({},l),{},{tableconfig:Object(r.a)(Object(r.a)({},l.tableconfig),{},{rowsPerPage:e})}))},handleSearchChange:e=>{u(Object(r.a)(Object(r.a)({},l),{},{tableconfig:Object(r.a)(Object(r.a)({},l.tableconfig),{},{recherche:e})}))},handleChangePage:e=>{u(Object(r.a)(Object(r.a)({},l),{},{tableconfig:Object(r.a)(Object(r.a)({},l.tableconfig),{},{page:e})}))},handleClickSurAction:(e,t)=>{switch(console.log(t),t){case"D\xe9tails":console.log("action details");break;case"Modifier":u(Object(r.a)(Object(r.a)({},l),{},{titre:"Mise \xe0 jour ",district:e,pagestate:{mode:"edition",action:"misajour",affichageTable:!1}}));break;case"Supprimer":u(Object(r.a)(Object(r.a)({},l),{},{district:e,dialogueSuppressionOuvert:!0}))}}},g=Object(s.useQuery)(["Districts",l.tableconfig.page,l.tableconfig.rowsPerPage,l.tableconfig.recherche,l.tableconfig.filtre],()=>m.getTouslesDistricts(l.tableconfig.page,l.tableconfig.rowsPerPage,l.tableconfig.recherche,l.tableconfig.filtre),{keepPreviousData:!0}),f=Object(s.useQuery)(["Communes",l.tableconfig.page,l.tableconfig.rowsPerPage,l.tableconfig.recherche,l.tableconfig.filtre],()=>d.getTouslesCommunes(0,1e3,l.tableconfig.recherche,l.tableconfig.filtre),{keepPreviousData:!0}),v=Object(s.useMutation)(m.ajoutDistrict,{onSuccess:()=>{p.invalidateQueries("Districts"),u(Object(r.a)(Object(r.a)({},l),{},{alert:{message:"Enregistrement r\xe9ussi",open:!0,severity:"success",automaticClose:!0}}))},onError:()=>{p.invalidateQueries("Districts"),u(Object(r.a)(Object(r.a)({},l),{},{alert:{message:"Echec lors de l'enregistrement",open:!0,severity:"error",automaticClose:!0}}))}}),j=Object(s.useMutation)(m.miseajourDistrict,{onSuccess:()=>{p.invalidateQueries("Districts"),u(Object(r.a)(Object(r.a)({},l),{},{alert:{message:"Mise \xe0 jour R\xe9ussie...",open:!0,severity:"success",automaticClose:!0}}))},onError:()=>{p.invalidateQueries("Districts"),u(Object(r.a)(Object(r.a)({},l),{},{alert:{message:"Echec lors de la mise \xe0 jour",open:!0,severity:"error",automaticClose:!0}}))}}),h=Object(s.useMutation)(m.suppressionDistrict,{onSuccess:()=>{u(Object(r.a)(Object(r.a)({},l),{},{dialogueSuppressionOuvert:!1,alert:{message:"Supr\xe9ssion r\xe9ussie",open:!0,severity:"success"}}))},onError:()=>{u({alert:{message:"Echec lors de la supr\xe9ssion",open:!0,severity:"error"}})},onSettled:()=>{p.invalidateQueries("Districts")}}),E={queryDistricts:g,mutationMiseajour:j,mutationAjout:v,mutationSuppression:h,queryCommunes:f},O=K(b),y=S.b().shape({nom:S.c().required("Le champs Nom est requis"),commune:S.c().required("Le champs Commune est requis"),population:S.a().required("population requis").positive("Le population doit \xeatre positif").integer("Le population doit \xeatre un nombre entier"),activiteprincipale:S.c().required("Le champs Activiteprincipale est requis"),superficie:S.a().required("superficie requis").positive("Le superficie doit \xeatre positif").integer("Le superficie doit \xeatre un nombre entier"),description:S.c().required("Le champs Description est requis")}),C=Object(U.c)({resolver:Object(X.yupResolver)(y),defaultValues:{district:l.district}});return o.a.createElement(B,{state:l,fonctions:b,collonnes:O,queries:E,useform:C,onSubmit:e=>{var t;let a=Object(r.a)(Object(r.a)({},l.district),e);void 0!==(null===(t=l.district)||void 0===t?void 0:t.id)?E.mutationMiseajour.mutate(Object(r.a)({},a)):E.mutationAjout.mutate(Object(r.a)({},a))}})}}}]);