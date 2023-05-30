(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[7],{1988:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var r=a(9),n=a.n(r),o=a(18),c=a(25);class i{getTouslesRegions(e,t,a,r){return Object(o.a)(n.a.mark((function r(){var o;return n.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e+=1,r.next=3,c.b.get("/regions?itemsPerPage="+t+"&page="+e+"&id="+a);case 3:return o=r.sent,r.abrupt("return",o.data);case 5:case"end":return r.stop()}}),r)})))()}ajoutRegion(e){return Object(o.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.b.post("/regions",e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}miseajourRegion(e){return Object(o.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.b.put("/regions/"+e.id,e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}suppressionRegion(e){return Object(o.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.b.delete("/regions/"+e.id,{method:"DELETE",herdears:{Accept:"application/json"},data:e.id});case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}}},1989:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var r=a(9),n=a.n(r),o=a(18),c=a(25);class i{getTouslesPrefectures(e,t,a,r){return Object(o.a)(n.a.mark((function r(){var o;return n.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e+=1,r.next=3,c.b.get("/prefectures?itemsPerPage="+t+"&page="+e+"&id="+a);case 3:return o=r.sent,r.abrupt("return",o.data);case 5:case"end":return r.stop()}}),r)})))()}ajoutPrefecture(e){return Object(o.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.b.post("/prefectures",e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}miseajourPrefecture(e){return Object(o.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.b.put("/prefectures/"+e.id,e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}suppressionPrefecture(e){return Object(o.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.b.delete("/prefectures/"+e.id,{method:"DELETE",herdears:{Accept:"application/json"},data:e.id});case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}}},2004:function(e,t,a){"use strict";a.r(t);var r=a(7),n=a(22),o=a(0),c=a.n(o),i=a(1989),s=a(83),l=a(469),u=a.n(l),m=a(282),p=a(973),d=a(1968),g=a(1940),b=a(62),f=a(1941),j=a(136),h=a(1935),v=a(234),O=a(233),E=a(281),P=a(138),y=a(470),w=(a(608),a(25)),C=a(1923),x=a(101),S=a(87),k=a(1938),R=a(277),D=a(1937),A=a(1936),M=a(971),N=a(163),q=a(235),L=(a(609),a(610),a(611),a(612),a(613),a(1946));function T(e){var t,a,r,n,o,i;const s=e.state,l=e.fonctions,u=e.queries,m=e.useform,p=e.onSubmit;return c.a.createElement("div",null,c.a.createElement(S.a,{container:!0,spacing:1,justify:"center"},c.a.createElement(S.a,{item:!0,lg:6,md:6,sm:12,xs:12},c.a.createElement(C.a,{theme:Object(w.a)()},c.a.createElement(h.a,null,c.a.createElement(k.a,{action:c.a.createElement(R.a,{"aria-label":"",onClick:l.AnnulerEnregistrement},"x"),title:"ajout"===s.pagestate.action?"Nouvelle pr\xe9fecture":"Mise \xe0 jour ",subheader:""}),c.a.createElement(D.a,{className:" px-6 pt-6 pb-6"}," ",c.a.createElement("form",{onSubmit:m.handleSubmit(p)},c.a.createElement(S.a,{container:!0,spacing:4,direction:"column"},c.a.createElement(S.a,{item:!0},c.a.createElement(N.a,{id:"nom",nom:"nom",label:"Nom",valeur:null===(t=s.prefecture)||void 0===t?void 0:t.nom,control:m.control,error:m.errors.nom})),c.a.createElement(S.a,{item:!0},u.queryRegions.isLoading?c.a.createElement(P.a,{message:"chargement des roles"}):c.a.createElement(q.a,{id:"region",name:"region",label:"region",table:"region",control:m.control,options:u.queryRegions.data.rows,error:m.errors.region,defaultValue:null!==(a=null===(r=s.prefecture)||void 0===r||null===(n=r.region)||void 0===n?void 0:n.id)&&void 0!==a?a:"1",valeur:null!==(o=null===(i=s.prefecture)||void 0===i?void 0:i.region)&&void 0!==o?o:""}))))),c.a.createElement(A.a,null,c.a.createElement(S.a,{container:!0,alignItems:"center",justify:"space-between"},c.a.createElement(S.a,{item:!0},c.a.createElement(j.a,{color:"primary",variant:"contained",type:"submit",onClick:m.handleSubmit(p)},u.mutationMiseajour.isLoading||u.mutationAjout.isLoading?c.a.createElement(M.a,{color:"inherit"}):c.a.createElement(L.a,null),c.a.createElement("span",{className:"pl-2 capitalize"},"ajout"===s.pagestate.action?c.a.createElement(b.a,null,"Enregistrer"):c.a.createElement(b.a,null,"Mettre \xe0 jour")))),c.a.createElement(S.a,{item:!0},c.a.createElement(j.a,{variant:"outlined",color:"secondary",onClick:l.AnnulerEnregistrement},"Annuler")))))))))}var I=e=>{var t,a;const n=e.state,o=e.fonctions,i=e.collonnes,s=e.queries,l=e.useform,x=e.onSubmit;return c.a.createElement("div",{className:"m-sm-30"},c.a.createElement(p.a,{open:n.dialoguephoto.open,"aria-labelledby":"",maxWidth:"md",onClose:o.handleCloseDialoguephoto,objet:n.dialoguephoto.objet},c.a.createElement(d.a,{id:""},n.dialoguephoto.titre),c.a.createElement(g.a,null,c.a.createElement("img",{src:w.c+"/fichiers/"+n.dialoguephoto.fichier,alt:"{objet}",srcset:""}))),c.a.createElement(v.a,{message:n.alert.message,severity:n.alert.severity,open:n.alert.open,handleAlertClose:!0===n.alert.automaticClose?()=>o.handleFermetureAlerte():()=>o.fermerAlerte()}),c.a.createElement("div",{className:"mb-sm-30"},c.a.createElement(O.a,{routeSegments:[{name:n.titre}]})),c.a.createElement("div",{className:"mb-sm-30"},c.a.createElement(b.a,{variant:"h4"},n.titre)),"affichage"===n.pagestate.mode?c.a.createElement(f.a,{in:n.pagestate.affichageTable,direction:"right",unmountOnExit:!0},c.a.createElement("div",null,c.a.createElement(j.a,{className:"mb-4",variant:"contained",color:"primary",onClick:()=>o.handleClicksurNouveau()},"Nouvelle pr\xe9fecture"),s.queryPrefectures.isLoading?c.a.createElement(P.a,{message:"Chargement des donn\xe9es...",type:"info"}):s.queryPrefectures.isError?c.a.createElement(P.a,{message:"Erreur lors du chargement des donn\xe9es::"+s.queryPrefectures.error,type:"error"}):c.a.createElement(y.a,{tag:"div",blocking:!1},c.a.createElement(C.a,{theme:Object(w.a)()},c.a.createElement(u.a,{title:n.titre,data:s.queryPrefectures.data.rows,columns:i,options:Object(r.a)(Object(r.a)({},m.a),{},{serverSide:!0,count:s.queryPrefectures.data.count,rowsPerPageOptions:[20,30,50],rowsPerPage:n.tableconfig.rowsPerPage,textLabels:Object(r.a)(Object(r.a)({},m.a.textLabels),{},{toolbar:Object(r.a)(Object(r.a)({},m.a.textLabels.toolbar),{},{search:"Rechercher par id"})}),onChangePage:e=>o.handleChangePage(e),onChangeRowsPerPage:e=>o.handleChangeRowPerPage(e),onSearchChange:e=>o.handleSearchChange(e),onFilterChange:()=>o.handleFilterChange()})}))),c.a.createElement(h.a,{className:"w-full overflow-auto",elevation:8},c.a.createElement(E.a,{open:n.dialogueSuppressionOuvert,onConfirmDialogClose:o.fermerDialogueSuppression,onYesClick:o.confirmerSuppression,text:null!==(t="Confirmez la suppression de "+(null===(a=n.prefecture)||void 0===a?void 0:a.nom))&&void 0!==t?t:""})))):c.a.createElement(T,{state:n,fonctions:o,queries:s,useform:l,onSubmit:x}))},Q=a(24),F=a(125),B=a(1974),z=a(1975),W=a(1976),J=a(1978),V=a(86),Y=a(1949),G=a(442),H=a(1964);Object(V.a)(e=>{e.palette,Object(Q.a)(e,["palette"]);return{userMenu:{display:"flex",alignItems:"center",cursor:"pointer",borderRadius:24,padding:4,"& span":{margin:"0 8px"}},menuItem:{display:"flex",alignItems:"center",minWidth:185}}});function K(e){const t=Object(V.a)(e=>{e.palette,Object(Q.a)(e,["palette"]);return{userMenu:{display:"flex",alignItems:"center",cursor:"pointer",borderRadius:24,padding:4,"& span":{margin:"0 8px"}},menuItem:{display:"flex",alignItems:"center",minWidth:185}}}),a=(t,a)=>{e.handleClickSurAction(t,a)};return[{name:"id",label:"ID",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var r;return null!==(r=null===e||void 0===e?void 0:e.toLocaleString("fr-FR"))&&void 0!==r?r:""}}},{name:"nom",label:"Nom",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>e}},{name:"Region",label:"region",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var r;return null!==(r=null===e||void 0===e?void 0:e.nom)&&void 0!==r?r:" "}}},{name:"action",label:"Actions",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,r,n)=>c.a.createElement("div",null,c.a.createElement(F.j,{menuButton:c.a.createElement("div",{className:t.userMenu},c.a.createElement(Y.a,{xsDown:!0},c.a.createElement(j.a,{size:"small",variant:"outlined",color:"primary",endIcon:c.a.createElement(J.a,null)},"Actions")))},(e=>{switch(e.statut){case"Annul\xe9":return[{id:1,nom:"D\xe9tails",action:e=>a(e,"D\xe9tails"),icon:c.a.createElement(B.a,{color:"primary"})}];case"Nouveau":return[{id:1,nom:"D\xe9tails",action:e=>a(e,"D\xe9tails"),icon:c.a.createElement(B.a,{color:"primary"})},{id:2,nom:"Modifier",action:e=>a(e,"Modifier"),icon:c.a.createElement(z.a,{color:"primary"})},{id:3,nom:"Supprimer",action:e=>a(e,"Supprimer"),icon:c.a.createElement(W.a,{color:"error"})}];default:return[{id:2,nom:"Modifier",action:e=>a(e,"Modifier"),icon:c.a.createElement(z.a,{color:"primary"})}]}})({id:r.rowData[0],nom:r.rowData[1],region:r.rowData[2]}).map(e=>c.a.createElement(c.a.Fragment,null,c.a.createElement(G.a,{onClick:()=>e.action({id:r.rowData[0],nom:r.rowData[1],region:r.rowData[2]}),key:e.id,value:e.statut},e.icon,"   ",c.a.createElement("span",{className:"ml-5"},e.nom)),c.a.createElement(H.a,null)))))}}]}var U=a(79),X=(a(978),a(280)),Z=a(1988);t.default=()=>{const e={prefecture:{nom:"",region:"1"},prefecture1:null,titre:"Liste des pr\xe9fectures",tableconfig:{page:0,rowsPerPage:30,recherche:"",filtre:""},pagestate:{mode:"affichage",action:"ajout",affichageTable:!0},alert:{severity:"severity",message:"",open:!1,automaticClose:!1},dialogueSuppressionOuvert:!1,dialoguephoto:{open:!1,fichier:"",titre:"",objet:""}},t=Object(o.useState)(e),a=Object(n.a)(t,2),l=a[0],u=a[1];let m=new i.a,p=new Z.a;const d=Object(s.useQueryClient)(),g={handleFermetureAlerte:()=>{u(Object(r.a)(Object(r.a)({},l),{},{titre:"Liste des pr\xe9fectures",alert:Object(r.a)(Object(r.a)({},l.alert),{},{open:!1}),pagestate:Object(r.a)(Object(r.a)({},l.pagestate),{},{mode:"affichage",affichageTable:!0})}))},handleClicksurNouveau:()=>{u(Object(r.a)(Object(r.a)({},l),{},{prefecture:null,titre:"Nouvelle pr\xe9fecture ",pagestate:{mode:"edition",action:"ajout",affichageTable:!1}}))},fermerAlerte:()=>{u(Object(r.a)(Object(r.a)({},l),{},{alert:Object(r.a)(Object(r.a)({},l.alert),{},{open:!1})}))},AnnulerEnregistrement:()=>{console.log("Annulation de l'enregistrement"),u(Object(r.a)(Object(r.a)({},l),{},{titre:"Liste des pr\xe9fectures",pagestate:{mode:"affichage",action:"ajout",affichageTable:!0}}))},fermerDialogueSuppression:()=>{u(Object(r.a)(Object(r.a)({},l),{},{dialogueSuppressionOuvert:!1}))},confirmerSuppression:()=>{v.mutate(l.prefecture)},handleCloseDialoguephoto:()=>{u(Object(r.a)(Object(r.a)({},l),{},{dialoguephoto:Object(r.a)(Object(r.a)({},l.dialoguephoto),{},{open:!1})}))},handleChangeRowPerPage:e=>{u(Object(r.a)(Object(r.a)({},l),{},{tableconfig:Object(r.a)(Object(r.a)({},l.tableconfig),{},{rowsPerPage:e})}))},handleSearchChange:e=>{u(Object(r.a)(Object(r.a)({},l),{},{tableconfig:Object(r.a)(Object(r.a)({},l.tableconfig),{},{recherche:e})}))},handleChangePage:e=>{u(Object(r.a)(Object(r.a)({},l),{},{tableconfig:Object(r.a)(Object(r.a)({},l.tableconfig),{},{page:e})}))},handleClickSurAction:(e,t)=>{switch(console.log(t),t){case"D\xe9tails":console.log("action details");break;case"Modifier":u(Object(r.a)(Object(r.a)({},l),{},{titre:"Mise \xe0 jour ",prefecture:e,pagestate:{mode:"edition",action:"misajour",affichageTable:!1}}));break;case"Supprimer":u(Object(r.a)(Object(r.a)({},l),{},{prefecture:e,dialogueSuppressionOuvert:!0}))}}},b=Object(s.useQuery)(["Prefectures",l.tableconfig.page,l.tableconfig.rowsPerPage,l.tableconfig.recherche,l.tableconfig.filtre],()=>m.getTouslesPrefectures(l.tableconfig.page,l.tableconfig.rowsPerPage,l.tableconfig.recherche,l.tableconfig.filtre),{keepPreviousData:!0}),f=Object(s.useQuery)(["Regions",l.tableconfig.page,l.tableconfig.rowsPerPage,l.tableconfig.recherche,l.tableconfig.filtre],()=>p.getTouslesRegions(0,1e3,l.tableconfig.recherche,l.tableconfig.filtre),{keepPreviousData:!0}),j=Object(s.useMutation)(m.ajoutPrefecture,{onSuccess:()=>{d.invalidateQueries("Prefectures"),u(Object(r.a)(Object(r.a)({},l),{},{alert:{message:"Enregistrement r\xe9ussi",open:!0,severity:"success",automaticClose:!0}}))},onError:()=>{d.invalidateQueries("Prefectures"),u(Object(r.a)(Object(r.a)({},l),{},{alert:{message:"Echec lors de l'enregistrement",open:!0,severity:"error",automaticClose:!0}}))}}),h=Object(s.useMutation)(m.miseajourPrefecture,{onSuccess:()=>{d.invalidateQueries("Prefectures"),u(Object(r.a)(Object(r.a)({},l),{},{alert:{message:"Mise \xe0 jour R\xe9ussie...",open:!0,severity:"success",automaticClose:!0}}))},onError:()=>{d.invalidateQueries("Prefectures"),u(Object(r.a)(Object(r.a)({},l),{},{alert:{message:"Echec lors de la mise \xe0 jour",open:!0,severity:"error",automaticClose:!0}}))}}),v=Object(s.useMutation)(m.suppressionPrefecture,{onSuccess:()=>{u(Object(r.a)(Object(r.a)({},l),{},{dialogueSuppressionOuvert:!1,alert:{message:"Supr\xe9ssion r\xe9ussie",open:!0,severity:"success"}}))},onError:()=>{u({alert:{message:"Echec lors de la supr\xe9ssion",open:!0,severity:"error"}})},onSettled:()=>{d.invalidateQueries("Prefectures")}}),O={queryPrefectures:b,mutationMiseajour:h,mutationAjout:j,mutationSuppression:v,queryRegions:f},E=K(g),P=x.b().shape({nom:x.c().required("Le champs Nom est requis"),region:x.c().required("Le champs Region est requis")}),y=Object(U.c)({resolver:Object(X.yupResolver)(P),defaultValues:{prefecture:l.prefecture}});return c.a.createElement(I,{state:l,fonctions:g,collonnes:E,queries:O,useform:y,onSubmit:e=>{var t;let a=Object(r.a)(Object(r.a)({},l.prefecture),e);void 0!==(null===(t=l.prefecture)||void 0===t?void 0:t.id)?O.mutationMiseajour.mutate(Object(r.a)({},a)):O.mutationAjout.mutate(Object(r.a)({},a))}})}}}]);