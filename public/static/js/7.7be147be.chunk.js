(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[7],{1983:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var r=a(9),n=a.n(r),o=a(18),c=a(25);class i{getTouslesPrefectures(e,t,a,r){return Object(o.a)(n.a.mark((function r(){var o;return n.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e+=1,r.next=3,c.b.get("/prefectures?itemsPerPage="+t+"&page="+e+"&id="+a);case 3:return o=r.sent,r.abrupt("return",o.data);case 5:case"end":return r.stop()}}),r)})))()}ajoutPrefecture(e){return Object(o.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.b.post("/prefectures",e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}miseajourPrefecture(e){return Object(o.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.b.put("/prefectures/"+e.id,e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}suppressionPrefecture(e){return Object(o.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.b.delete("/prefectures/"+e.id,{method:"DELETE",herdears:{Accept:"application/json"}});case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}}},1984:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var r=a(9),n=a.n(r),o=a(18),c=a(25);class i{getTouslesCommunes(e,t,a,r){return Object(o.a)(n.a.mark((function r(){var o;return n.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e+=1,r.next=3,c.b.get("/communes?itemsPerPage="+t+"&page="+e+"&id="+a);case 3:return o=r.sent,r.abrupt("return",o.data);case 5:case"end":return r.stop()}}),r)})))()}ajoutCommune(e){return Object(o.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.b.post("/communes",e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}miseajourCommune(e){return Object(o.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.b.put("/communes/"+e.id,e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}suppressionCommune(e){return Object(o.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.b.delete("/communes/"+e.id,{method:"DELETE",herdears:{Accept:"application/json"}});case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}}},2003:function(e,t,a){"use strict";a.r(t);var r=a(7),n=a(22),o=a(0),c=a.n(o),i=a(1984),s=a(83),u=a(469),l=a.n(u),m=a(281),p=a(966),d=a(1961),b=a(1929),f=a(68),g=a(1930),j=a(174),v=a(1955),h=a(233),O=a(232),E=a(280),C=a(136),y=a(470),P=(a(608),a(25)),w=a(1951),x=a(100),S=a(276),k=a(1960),A=a(332),q=a(1959),D=a(1958),M=a(1919),N=a(161),R=a(234),L=(a(609),a(610),a(611),a(612),a(613),a(1967));function T(e){var t,a,r,n,o,i,s;const u=e.state,l=e.fonctions,m=e.queries,p=e.useform,d=e.onSubmit;return c.a.createElement("div",null,c.a.createElement(S.a,{container:!0,spacing:1,justify:"center"},c.a.createElement(S.a,{item:!0,lg:6,md:6,sm:12,xs:12},c.a.createElement(w.a,{theme:Object(P.a)()},c.a.createElement(v.a,null,c.a.createElement(k.a,{action:c.a.createElement(A.a,{"aria-label":"",onClick:l.AnnulerEnregistrement},"x"),title:"ajout"===u.pagestate.action?"Nouvelle commune":"Mise \xe0 jour ",subheader:""}),c.a.createElement(q.a,{className:" px-6 pt-6 pb-6"}," ",c.a.createElement("form",{onSubmit:p.handleSubmit(d)},c.a.createElement(S.a,{container:!0,spacing:4,direction:"column"},c.a.createElement(S.a,{item:!0},c.a.createElement(N.a,{id:"nom",nom:"nom",label:"Nom",valeur:null===(t=u.commune)||void 0===t?void 0:t.nom,control:p.control,error:p.errors.nom})),c.a.createElement(S.a,{item:!0},c.a.createElement(N.a,{id:"description",nom:"description",label:"Description",valeur:null===(a=u.commune)||void 0===a?void 0:a.description,control:p.control,error:p.errors.description})),c.a.createElement(S.a,{item:!0},m.queryPrefectures.isLoading?c.a.createElement(C.a,{message:"chargement des roles"}):c.a.createElement(R.a,{id:"prefecture",name:"prefecture",label:"Prefecture",table:"prefecture",control:p.control,options:m.queryPrefectures.data.rows,error:p.errors.prefecture,defaultValue:null!==(r=null===(n=u.commune)||void 0===n||null===(o=n.prefecture)||void 0===o?void 0:o.id)&&void 0!==r?r:"1",valeur:null!==(i=null===(s=u.commune)||void 0===s?void 0:s.prefecture)&&void 0!==i?i:""}))))),c.a.createElement(D.a,null,c.a.createElement(S.a,{container:!0,alignItems:"center",justify:"space-between"},c.a.createElement(S.a,{item:!0},c.a.createElement(j.a,{color:"primary",variant:"contained",type:"submit",onClick:p.handleSubmit(d)},m.mutationMiseajour.isLoading||m.mutationAjout.isLoading?c.a.createElement(M.a,{color:"inherit"}):c.a.createElement(L.a,null),c.a.createElement("span",{className:"pl-2 capitalize"},"ajout"===u.pagestate.action?c.a.createElement(f.a,null,"Enregistrer"):c.a.createElement(f.a,null,"Mettre \xe0 jour")))),c.a.createElement(S.a,{item:!0},c.a.createElement(j.a,{variant:"outlined",color:"secondary",onClick:l.AnnulerEnregistrement},"Annuler")))))))))}var I=e=>{var t,a;const n=e.state,o=e.fonctions,i=e.collonnes,s=e.queries,u=e.useform,x=e.onSubmit;return c.a.createElement("div",{className:"m-sm-30"},c.a.createElement(p.a,{open:n.dialoguephoto.open,"aria-labelledby":"",maxWidth:"md",onClose:o.handleCloseDialoguephoto,objet:n.dialoguephoto.objet},c.a.createElement(d.a,{id:""},n.dialoguephoto.titre),c.a.createElement(b.a,null,c.a.createElement("img",{src:P.c+"/fichiers/"+n.dialoguephoto.fichier,alt:"{objet}",srcset:""}))),c.a.createElement(h.a,{message:n.alert.message,severity:n.alert.severity,open:n.alert.open,handleAlertClose:!0===n.alert.automaticClose?()=>o.handleFermetureAlerte():()=>o.fermerAlerte()}),c.a.createElement("div",{className:"mb-sm-30"},c.a.createElement(O.a,{routeSegments:[{name:n.titre}]})),c.a.createElement("div",{className:"mb-sm-30"},c.a.createElement(f.a,{variant:"h4"},n.titre)),"affichage"===n.pagestate.mode?c.a.createElement(g.a,{in:n.pagestate.affichageTable,direction:"right",unmountOnExit:!0},c.a.createElement("div",null,c.a.createElement(j.a,{className:"mb-4",variant:"contained",color:"primary",onClick:()=>o.handleClicksurNouveau()},"Nouvelle commune"),s.queryCommunes.isLoading?c.a.createElement(C.a,{message:"Chargement des donn\xe9es...",type:"info"}):s.queryCommunes.isError?c.a.createElement(C.a,{message:"Erreur lors du chargement des donn\xe9es::"+s.queryCommunes.error,type:"error"}):c.a.createElement(y.a,{tag:"div",blocking:!1},c.a.createElement(w.a,{theme:Object(P.a)()},c.a.createElement(l.a,{title:n.titre,data:s.queryCommunes.data.rows.map(e=>({commune:e})),columns:i,options:Object(r.a)(Object(r.a)({},m.a),{},{serverSide:!0,count:s.queryCommunes.data.count,rowsPerPageOptions:[20,30,50],rowsPerPage:n.tableconfig.rowsPerPage,textLabels:Object(r.a)(Object(r.a)({},m.a.textLabels),{},{toolbar:Object(r.a)(Object(r.a)({},m.a.textLabels.toolbar),{},{search:"Rechercher par id"})}),onChangePage:e=>o.handleChangePage(e),onChangeRowsPerPage:e=>o.handleChangeRowPerPage(e),onSearchChange:e=>o.handleSearchChange(e),onFilterChange:()=>o.handleFilterChange()})}))),c.a.createElement(v.a,{className:"w-full overflow-auto",elevation:8},c.a.createElement(E.a,{open:n.dialogueSuppressionOuvert,onConfirmDialogClose:o.fermerDialogueSuppression,onYesClick:o.confirmerSuppression,text:null!==(t="Confirmez la suppression de "+(null===(a=n.commune)||void 0===a?void 0:a.nom))&&void 0!==t?t:""})))):c.a.createElement(T,{state:n,fonctions:o,queries:s,useform:u,onSubmit:x}))},Q=a(24),B=a(124),F=a(1968),z=a(1969),W=a(1970),J=a(1972),V=a(86),Y=a(1937),G=a(442),H=a(1953);Object(V.a)(e=>{e.palette,Object(Q.a)(e,["palette"]);return{userMenu:{display:"flex",alignItems:"center",cursor:"pointer",borderRadius:24,padding:4,"& span":{margin:"0 8px"}},menuItem:{display:"flex",alignItems:"center",minWidth:185}}});function K(e){const t=Object(V.a)(e=>{e.palette,Object(Q.a)(e,["palette"]);return{userMenu:{display:"flex",alignItems:"center",cursor:"pointer",borderRadius:24,padding:4,"& span":{margin:"0 8px"}},menuItem:{display:"flex",alignItems:"center",minWidth:185}}}),a=(t,a)=>{e.handleClickSurAction(t,a)};return[{name:"commune",label:"",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var r,n;return null!==(r=null===(n=e.id)||void 0===n?void 0:n.toLocaleString("fr-FR"))&&void 0!==r?r:""}}},{name:"commune",label:"Nom",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var r;return null!==(r=null===e||void 0===e?void 0:e.nom)&&void 0!==r?r:""}}},{name:"commune",label:"Description",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var r;return null!==(r=null===e||void 0===e?void 0:e.description)&&void 0!==r?r:""}}},{name:"commune",label:"Prefecture",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var r,n;return null!==(r=null===(n=e.Prefecture)||void 0===n?void 0:n.nom)&&void 0!==r?r:""}}},{name:"commune",label:"Actions",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,r,n)=>c.a.createElement("div",null,c.a.createElement(B.j,{menuButton:c.a.createElement("div",{className:t.userMenu},c.a.createElement(Y.a,{xsDown:!0},c.a.createElement(j.a,{size:"small",variant:"outlined",color:"primary",endIcon:c.a.createElement(J.a,null)},"Actions")))},(e=>{switch(e.statut){case"Annul\xe9":return[{id:1,nom:"D\xe9tails",action:e=>a(e,"D\xe9tails"),icon:c.a.createElement(F.a,{color:"primary"})}];case"Nouveau":return[{id:1,nom:"D\xe9tails",action:e=>a(e,"D\xe9tails"),icon:c.a.createElement(F.a,{color:"primary"})},{id:2,nom:"Modifier",action:e=>a(e,"Modifier"),icon:c.a.createElement(z.a,{color:"primary"})},{id:3,nom:"Supprimer",action:e=>a(e,"Supprimer"),icon:c.a.createElement(W.a,{color:"error"})}];default:return[{id:2,nom:"Modifier",action:e=>a(e,"Modifier"),icon:c.a.createElement(z.a,{color:"primary"})}]}})(e).map(t=>c.a.createElement(c.a.Fragment,null,c.a.createElement(G.a,{onClick:()=>t.action(e),key:t.id,value:t.statut},t.icon,"   ",c.a.createElement("span",{className:"ml-5"},t.nom)),c.a.createElement(H.a,null)))))}}]}var U=a(79),X=(a(971),a(279)),Z=a(1983);t.default=()=>{const e={commune:{nom:"",description:"",prefecture:"1"},commune1:null,titre:"Communes",tableconfig:{page:0,rowsPerPage:30,recherche:"",filtre:""},pagestate:{mode:"affichage",action:"ajout",affichageTable:!0},alert:{severity:"severity",message:"",open:!1,automaticClose:!1},dialogueSuppressionOuvert:!1,dialoguephoto:{open:!1,fichier:"",titre:"",objet:""}},t=Object(o.useState)(e),a=Object(n.a)(t,2),u=a[0],l=a[1];let m=new i.a,p=new Z.a;const d=Object(s.useQueryClient)(),b={handleFermetureAlerte:()=>{l(Object(r.a)(Object(r.a)({},u),{},{titre:"Communes",alert:Object(r.a)(Object(r.a)({},u.alert),{},{open:!1}),pagestate:Object(r.a)(Object(r.a)({},u.pagestate),{},{mode:"affichage",affichageTable:!0})}))},handleClicksurNouveau:()=>{l(Object(r.a)(Object(r.a)({},u),{},{commune:null,titre:"Nouvelle commune ",pagestate:{mode:"edition",action:"ajout",affichageTable:!1}}))},fermerAlerte:()=>{l(Object(r.a)(Object(r.a)({},u),{},{alert:Object(r.a)(Object(r.a)({},u.alert),{},{open:!1})}))},AnnulerEnregistrement:()=>{console.log("Annulation de l'enregistrement"),l(Object(r.a)(Object(r.a)({},u),{},{titre:"Communes",pagestate:{mode:"affichage",action:"ajout",affichageTable:!0}}))},fermerDialogueSuppression:()=>{l(Object(r.a)(Object(r.a)({},u),{},{dialogueSuppressionOuvert:!1}))},confirmerSuppression:()=>{h.mutate(u.commune)},handleCloseDialoguephoto:()=>{l(Object(r.a)(Object(r.a)({},u),{},{dialoguephoto:Object(r.a)(Object(r.a)({},u.dialoguephoto),{},{open:!1})}))},handleChangeRowPerPage:e=>{l(Object(r.a)(Object(r.a)({},u),{},{tableconfig:Object(r.a)(Object(r.a)({},u.tableconfig),{},{rowsPerPage:e})}))},handleSearchChange:e=>{l(Object(r.a)(Object(r.a)({},u),{},{tableconfig:Object(r.a)(Object(r.a)({},u.tableconfig),{},{recherche:e})}))},handleChangePage:e=>{l(Object(r.a)(Object(r.a)({},u),{},{tableconfig:Object(r.a)(Object(r.a)({},u.tableconfig),{},{page:e})}))},handleClickSurAction:(e,t)=>{switch(console.log(t),t){case"D\xe9tails":console.log("action details");break;case"Modifier":l(Object(r.a)(Object(r.a)({},u),{},{titre:"Mise \xe0 jour ",commune:e,pagestate:{mode:"edition",action:"misajour",affichageTable:!1}}));break;case"Supprimer":l(Object(r.a)(Object(r.a)({},u),{},{commune:e,dialogueSuppressionOuvert:!0}))}}},f=Object(s.useQuery)(["Communes",u.tableconfig.page,u.tableconfig.rowsPerPage,u.tableconfig.recherche,u.tableconfig.filtre],()=>m.getTouslesCommunes(u.tableconfig.page,u.tableconfig.rowsPerPage,u.tableconfig.recherche,u.tableconfig.filtre),{keepPreviousData:!0}),g=Object(s.useQuery)(["Prefectures",u.tableconfig.page,u.tableconfig.rowsPerPage,u.tableconfig.recherche,u.tableconfig.filtre],()=>p.getTouslesPrefectures(0,1e3,u.tableconfig.recherche,u.tableconfig.filtre),{keepPreviousData:!0}),j=Object(s.useMutation)(m.ajoutCommune,{onSuccess:()=>{d.invalidateQueries("Communes"),l(Object(r.a)(Object(r.a)({},u),{},{alert:{message:"Enregistrement r\xe9ussi",open:!0,severity:"success",automaticClose:!0}}))},onError:()=>{d.invalidateQueries("Communes"),l(Object(r.a)(Object(r.a)({},u),{},{alert:{message:"Echec lors de l'enregistrement",open:!0,severity:"error",automaticClose:!0}}))}}),v=Object(s.useMutation)(m.miseajourCommune,{onSuccess:()=>{d.invalidateQueries("Communes"),l(Object(r.a)(Object(r.a)({},u),{},{alert:{message:"Mise \xe0 jour R\xe9ussie...",open:!0,severity:"success",automaticClose:!0}}))},onError:()=>{d.invalidateQueries("Communes"),l(Object(r.a)(Object(r.a)({},u),{},{alert:{message:"Echec lors de la mise \xe0 jour",open:!0,severity:"error",automaticClose:!0}}))}}),h=Object(s.useMutation)(m.suppressionCommune,{onSuccess:()=>{l(Object(r.a)(Object(r.a)({},u),{},{dialogueSuppressionOuvert:!1,alert:{message:"Supr\xe9ssion r\xe9ussie",open:!0,severity:"success"}}))},onError:()=>{l({alert:{message:"Echec lors de la supr\xe9ssion",open:!0,severity:"error"}})},onSettled:()=>{d.invalidateQueries("Communes")}}),O={queryCommunes:f,mutationMiseajour:v,mutationAjout:j,mutationSuppression:h,queryPrefectures:g},E=K(b),C=x.b().shape({nom:x.c().required("Le champs Nom est requis"),description:x.c().required("Le champs Description est requis"),prefecture:x.c().required("Le champs Prefecture est requis")}),y=Object(U.c)({resolver:Object(X.yupResolver)(C),defaultValues:{commune:u.commune}});return c.a.createElement(I,{state:u,fonctions:b,collonnes:E,queries:O,useform:y,onSubmit:e=>{var t;let a=Object(r.a)(Object(r.a)({},u.commune),e);void 0!==(null===(t=u.commune)||void 0===t?void 0:t.id)?O.mutationMiseajour.mutate(Object(r.a)({},a)):O.mutationAjout.mutate(Object(r.a)({},a))}})}}}]);