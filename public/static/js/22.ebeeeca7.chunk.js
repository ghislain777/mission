(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[22],{1381:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var r=a(3),n=a(0),o=a.n(n),i=a(354),l=a(1373);function c(e){const t=Object(r.a)({},e),a=t.message,n=t.type;return o.a.createElement(o.a.Fragment,null,o.a.createElement(i.a,{container:!0,spacing:0,alignContent:"center",justify:"center"},o.a.createElement(i.a,{item:!0}),o.a.createElement(l.a,{color:"error"===n?"secondary":"primary"})," ",o.a.createElement("span",null,a,".")))}},1389:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));const r={selectableRows:"none",textLabels:{body:{noMatch:"Auccun enregistrement trouv\xe9",toolTip:"tri",columnHeaderTooltip:e=>"tri pour ".concat(e.label)},pagination:{next:"Page suivante",previous:"Page pr\xe9c\xe9dente",rowsPerPage:"Lignes par page:",displayRows:"sur"},toolbar:{search:"Rechercher",downloadCsv:"T\xe9l\xe9charger en CSV",print:"Imprimer",viewColumns:"Afficher les collones",filterTable:"Fiiltrer la table"},filter:{all:"Tout",title:"FILTRES",reset:"RESET"},viewColumns:{title:"Afficher les collones",titleAria:"Afficher/Cacher les collones"},selectedRows:{text:"lignes(s) s\xe9lection\xe9es",delete:"Supprimer",deleteAria:"Supprimer les lignes s\xe9lectionn\xe9es"}}}},1390:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=a(623),i=a(450),l=a(1380);t.a=e=>{const t=e.id,a=e.nom,r=e.label,c=e.valeur,s=e.control,u=e.error;return n.a.createElement(n.a.Fragment,null,n.a.createElement(o.a,{fullWidth:!0},n.a.createElement(l.a,{name:a,as:n.a.createElement(i.a,Object.assign({},e,{id:t,type:"text",helperText:u?u.message:null,label:r,error:!!u})),control:s,defaultValue:c,rules:{required:"Required"}})))}},1391:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=a(1380),i=a(1657),l=a(623),c=a(626),s=a(624),u=a(1321);const m=e=>{const t=e.label,a=e.nom,r=e.table,o=e.options,m=(e.valeur,e.error);return n.a.createElement(l.a,{fullWidth:!0,error:m?"error":""},n.a.createElement(s.a,{htmlFor:a},t),n.a.createElement(c.a,Object.assign({id:a},e),o.map(e=>n.a.createElement(i.a,{key:e.id,value:e.id},e.nom,"vehicule"===r&&e.marque+" "+e.modele+"("+e.client.nom+" "+e.client.prenom+")","categoriederequete"===r&&" ("+e.typederequete.nom+")","utilisateur"===r&&" "+e.prenom,"tarif"===r&&"("+e.montant+")","contrat"===r&&e.client.nom+"("+e.produit.nom+")","offre"===r&&e.prospect.nom+"("+e.prospect.quartier.nom+")"))),n.a.createElement(u.a,null,m?m.message:null))};t.a=function(e){const t=e.nom,a=e.label,r=e.control,i=(e.table,e.valeur);return n.a.createElement(n.a.Fragment,null,n.a.createElement(o.a,Object.assign({name:t,as:m,control:r,nom:t,label:a,valeur:i,rules:{required:"Required"}},e)))}},1392:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var r=a(17),n=a(0),o=a.n(n),i=a(1380),l=a(1356),c=a(1355);function s(e){const t=e.nom,a=e.coche,s=e.control,u=e.changement,m=e.label,p=Object(n.useState)(a),d=Object(r.a)(p,2),b=d[0],g=d[1];return o.a.createElement(c.a,{control:o.a.createElement(i.a,{name:t,control:s,render:e=>o.a.createElement(l.a,Object.assign({},e,{checked:b,onChange:t=>{e.onChange(t.target.checked),g(!b),u(!b)}}))}),label:null==m?t:m})}},1393:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var r=a(0),n=a.n(r),o=a(1407),i=a(344),l=a(1708),c=(a(60),a(357)),s=a(354);function u(e){const t=e.onUpload,a=e.onSupprimer,r=e.titre,u=e.progress,m=Object(i.a)(e=>Object(l.a)({previewChip:{minWidth:160,maxWidth:210},height:"20%"}))();return n.a.createElement(n.a.Fragment,null,n.a.createElement(o.a,Object.assign({},e,{style:{width:"100%",height:"10%"},maxFileSize:2097152e4,showPreviews:!1,filesLimit:1,showFileNamesInPreview:!0,showFileNames:!0,dropzoneText:null!==r&&void 0!==r?r:"Faire glisser le fichier ou clickez ici pour charger",showPreviewsInDropzone:!0,getFileAddedMessage:e=>"Fichier "+e+" ajout\xe9 avec succ\xe8s",getFileRemovedMessage:e=>"Fichier "+e+" supprim\xe9 avec succ\xe8s",getDropRejectMessage:(e,t,a)=>{let r="le fichier ".concat(e.name," a \xe9t\xe9 rej\xe9t\xe9. ");return t.includes(e.type)||(r+="Type de fichier non support\xe9"),e.size>a&&(r+="Fichier trop volumineux."),r},previewGridProps:{container:{spacing:1,direction:"row"}},previewChipProps:{classes:{root:m.previewChip}},previewText:"Fichier s\xe9lectionn\xe9:",onChange:e=>{var a;return t(null!==(a=e[0])&&void 0!==a?a:null)},onDelete:a})),n.a.createElement(s.a,{className:"mt-3"},n.a.createElement(c.a,{value:u}),u,"%"))}},1394:function(e,t,a){"use strict";a(0),a(1380),a(1657),a(623),a(626),a(624),a(1321)},1395:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var r=a(17),n=a(0),o=a.n(n),i=a(623),l=a(1437),c=a(2086),s=a(1385),u=a(1386),m=a(1380);function p(e){const t=e.nom,a=e.label,p=e.control,d=(e.error,e.valeur),b=(e.id,e.handledatechange),g=Object(n.useState)(d),f=Object(r.a)(g,2),h=f[0],v=f[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(i.a,{fullWidth:!0},o.a.createElement(m.a,Object.assign({name:t,as:o.a.createElement(l.a,{utils:s.a,locale:u.a},o.a.createElement(c.a,{id:t,label:a,format:"dd/MM/yyyy \xe0 hh:mm",minDate:new Date,ampm:!1,label:a,inputVariant:"outlined",value:h,onChange:e=>(e=>{v(e),b(e)})(e)})),control:p,rules:{required:"Required"}},e))))}},1396:function(e,t,a){"use strict";a(17),a(0),a(623),a(1437),a(2058),a(1385),a(1386),a(1380)},1397:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var r=a(20),n=a.n(r),o=a(39),i=a(75);function l(e){return c.apply(this,arguments)}function c(){return(c=Object(o.a)(n.a.mark((function e(t){var a,r,o,l,c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.fichier,r=t.objet,o=t.handleprogress,l=new FormData,console.warn(a),l.append("objet",r),l.append("file",a),e.next=7,i.b.post("/fichier/upload",l,{herdears:{"Content-Type":"multipart/form-data"},onUploadProgress:o});case 7:return c=e.sent,console.log("fichier service::: response.data "+JSON.stringify(c)),e.abrupt("return",c.data);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},1550:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var r=a(20),n=a.n(r),o=a(39),i=a(75);class l{getTouslesVilles(e,t,a,r){return Object(o.a)(n.a.mark((function r(){var o;return n.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e+=1,r.next=3,i.b.get("/villes?itemsPerPage="+t+"&page="+e+"&id="+a);case 3:return o=r.sent,r.abrupt("return",o.data);case 5:case"end":return r.stop()}}),r)})))()}ajoutVille(e){return Object(o.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.post("/villes",e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}miseajourVille(e){return Object(o.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.put("/villes/"+e.id,e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}suppressionVille(e){return Object(o.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.delete("/villes/"+e.id,{method:"DELETE",herdears:{Accept:"application/json"},data:e.id});case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}}},2070:function(e,t,a){"use strict";a.r(t);var r=a(3),n=a(17),o=a(0),i=a.n(o),l=a(1550),c=a(133),s=a(1403),u=a.n(s),m=a(1389),p=a(1326),d=a(2048),b=a(2047),g=a(448),f=a(2049),h=a(452),v=a(1376),j=a(358),E=a(355),O=a(356),y=a(1381),w=a(1405),P=(a(1406),a(75)),C=a(1370),x=a(1384),S=a(354),D=a(2045),k=a(622),q=a(2044),A=a(2043),F=a(1373),R=a(1390),V=a(1391),M=(a(1392),a(1393),a(1394),a(1395),a(1396),a(2059));function T(e){var t,a,r,n,o,l,c;const s=e.state,u=e.fonctions,m=e.queries,p=e.useform,d=e.onSubmit;return i.a.createElement("div",null,i.a.createElement(S.a,{container:!0,spacing:1,justify:"center"},i.a.createElement(S.a,{item:!0,lg:6,md:6,sm:12,xs:12},i.a.createElement(C.a,{theme:Object(P.a)()},i.a.createElement(v.a,null,i.a.createElement(D.a,{action:i.a.createElement(k.a,{"aria-label":"",onClick:u.AnnulerEnregistrement},"x"),title:"ajout"===s.pagestate.action?"Nouvelle ville":"Mise \xe0 jour ",subheader:""}),i.a.createElement(q.a,{className:" px-6 pt-6 pb-6"}," ",i.a.createElement("form",{onSubmit:p.handleSubmit(d)},i.a.createElement(S.a,{container:!0,spacing:4,direction:"column"},i.a.createElement(S.a,{item:!0},i.a.createElement(R.a,{id:"nom",nom:"nom",label:"Nom",valeur:null===(t=s.ville)||void 0===t?void 0:t.nom,control:p.control,error:p.errors.nom})),i.a.createElement(S.a,{item:!0},i.a.createElement(R.a,{id:"description",nom:"description",label:"Description",valeur:null===(a=s.ville)||void 0===a?void 0:a.description,control:p.control,error:p.errors.description})),i.a.createElement(S.a,{item:!0},m.queryPays.isLoading?i.a.createElement(y.a,{message:"chargement des roles"}):i.a.createElement(V.a,{id:"pay",name:"pay",label:"Pays",table:"pay",control:p.control,options:m.queryPays.data.rows,error:p.errors.pay,defaultValue:null!==(r=null===(n=s.ville)||void 0===n||null===(o=n.pay)||void 0===o?void 0:o.id)&&void 0!==r?r:"1",valeur:null!==(l=null===(c=s.ville)||void 0===c?void 0:c.pay)&&void 0!==l?l:""}))))),i.a.createElement(A.a,null,i.a.createElement(S.a,{container:!0,alignItems:"center",justify:"space-between"},i.a.createElement(S.a,{item:!0},i.a.createElement(h.a,{color:"primary",variant:"contained",type:"submit",onClick:p.handleSubmit(d)},m.mutationMiseajour.isLoading||m.mutationAjout.isLoading?i.a.createElement(F.a,{color:"inherit"}):i.a.createElement(M.a,null),i.a.createElement("span",{className:"pl-2 capitalize"},"ajout"===s.pagestate.action?i.a.createElement(g.a,null,"Enregistrer"):i.a.createElement(g.a,null,"Mettre \xe0 jour")))),i.a.createElement(S.a,{item:!0},i.a.createElement(h.a,{variant:"outlined",color:"secondary",onClick:u.AnnulerEnregistrement},"Annuler")))))))))}var N=e=>{var t,a;const n=e.state,o=e.fonctions,l=e.collonnes,c=e.queries,s=e.useform,x=e.onSubmit;return i.a.createElement("div",{className:"m-sm-30"},i.a.createElement(p.a,{open:n.dialoguephoto.open,"aria-labelledby":"",maxWidth:"md",onClose:o.handleCloseDialoguephoto,objet:n.dialoguephoto.objet},i.a.createElement(d.a,{id:""},n.dialoguephoto.titre),i.a.createElement(b.a,null,i.a.createElement("img",{src:P.c+"/fichiers/"+n.dialoguephoto.objet+"/"+n.dialoguephoto.fichier,alt:"{objet}",srcset:""}))),i.a.createElement(j.a,{message:n.alert.message,severity:n.alert.severity,open:n.alert.open,handleAlertClose:!0===n.alert.automaticClose?()=>o.handleFermetureAlerte():()=>o.fermerAlerte()}),i.a.createElement("div",{className:"mb-sm-30"},i.a.createElement(E.a,{routeSegments:[{name:n.titre}]})),i.a.createElement("div",{className:"mb-sm-30"},i.a.createElement(g.a,{variant:"h4"},n.titre)),"affichage"===n.pagestate.mode?i.a.createElement(f.a,{in:n.pagestate.affichageTable,direction:"right",unmountOnExit:!0},i.a.createElement("div",null,i.a.createElement(h.a,{className:"mb-4",variant:"contained",color:"primary",onClick:()=>o.handleClicksurNouveau()},"Nouvelle ville"),c.queryVilles.isLoading?i.a.createElement(y.a,{message:"Chargement des donn\xe9es...",type:"info"}):c.queryVilles.isError?i.a.createElement(y.a,{message:"Erreur lors du chargement des donn\xe9es::"+c.queryVilles.error,type:"error"}):i.a.createElement(w.a,{tag:"div",blocking:!1},i.a.createElement(C.a,{theme:Object(P.a)()},i.a.createElement(u.a,{title:n.titre,data:c.queryVilles.data.rows,columns:l,options:Object(r.a)(Object(r.a)({},m.a),{},{serverSide:!0,count:c.queryVilles.data.count,rowsPerPageOptions:[20,30,50],rowsPerPage:n.tableconfig.rowsPerPage,textLabels:Object(r.a)(Object(r.a)({},m.a.textLabels),{},{toolbar:Object(r.a)(Object(r.a)({},m.a.textLabels.toolbar),{},{search:"Rechercher par id"})}),onChangePage:e=>o.handleChangePage(e),onChangeRowsPerPage:e=>o.handleChangeRowPerPage(e),onSearchChange:e=>o.handleSearchChange(e),onFilterChange:()=>o.handleFilterChange()})}))),i.a.createElement(v.a,{className:"w-full overflow-auto",elevation:8},i.a.createElement(O.a,{open:n.dialogueSuppressionOuvert,onConfirmDialogClose:o.fermerDialogueSuppression,onYesClick:o.confirmerSuppression,text:null!==(t="Confirmez la suppression de "+(null===(a=n.ville)||void 0===a?void 0:a.nom))&&void 0!==t?t:""})))):i.a.createElement(T,{state:n,fonctions:o,queries:c,useform:s,onSubmit:x}))},L=a(13),I=a(87),z=a(2060),Q=a(2061),W=a(2062),B=a(2063),G=a(344),J=a(1330),U=a(1657),H=a(1374);Object(G.a)(e=>{e.palette,Object(L.a)(e,["palette"]);return{userMenu:{display:"flex",alignItems:"center",cursor:"pointer",borderRadius:24,padding:4,"& span":{margin:"0 8px"}},menuItem:{display:"flex",alignItems:"center",minWidth:185}}});function Y(e){const t=Object(G.a)(e=>{e.palette,Object(L.a)(e,["palette"]);return{userMenu:{display:"flex",alignItems:"center",cursor:"pointer",borderRadius:24,padding:4,"& span":{margin:"0 8px"}},menuItem:{display:"flex",alignItems:"center",minWidth:185}}}),a=(t,a)=>{e.handleClickSurAction(t,a)};return[{name:"id",label:"",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var r;return null!==(r=null===e||void 0===e?void 0:e.toLocaleString("fr-FR"))&&void 0!==r?r:""}}},{name:"nom",label:"Nom",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>e}},{name:"description",label:"Description",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>e}},{name:"Pay",label:"Pays",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var r;return null!==(r=null===e||void 0===e?void 0:e.nom)&&void 0!==r?r:" "}}},{name:"action",label:"Actions",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,r,n)=>i.a.createElement("div",null,i.a.createElement(I.j,{menuButton:i.a.createElement("div",{className:t.userMenu},i.a.createElement(J.a,{xsDown:!0},i.a.createElement(h.a,{size:"small",variant:"outlined",color:"primary",endIcon:i.a.createElement(B.a,null)},"Actions")))},(e=>{switch(e.statut){case"Annul\xe9":return[{id:1,nom:"D\xe9tails",action:e=>a(e,"D\xe9tails"),icon:i.a.createElement(z.a,{color:"primary"})}];case"Nouveau":return[{id:1,nom:"D\xe9tails",action:e=>a(e,"D\xe9tails"),icon:i.a.createElement(z.a,{color:"primary"})},{id:2,nom:"Modifier",action:e=>a(e,"Modifier"),icon:i.a.createElement(Q.a,{color:"primary"})},{id:3,nom:"Supprimer",action:e=>a(e,"Supprimer"),icon:i.a.createElement(W.a,{color:"error"})}];default:return[{id:2,nom:"Modifier",action:e=>a(e,"Modifier"),icon:i.a.createElement(Q.a,{color:"primary"})}]}})({id:r.rowData[0],nom:r.rowData[1],description:r.rowData[2],pay:r.rowData[3]}).map(e=>i.a.createElement(i.a.Fragment,null,i.a.createElement(U.a,{onClick:()=>e.action({id:r.rowData[0],nom:r.rowData[1],description:r.rowData[2],pay:r.rowData[3]}),key:e.id,value:e.statut},e.icon,"   ",i.a.createElement("span",{className:"ml-5"},e.nom)),i.a.createElement(H.a,null)))))}}]}var K=a(1380),X=(a(1397),a(1383)),Z=a(20),$=a.n(Z),_=a(39);class ee{getTouslesPays(e,t,a,r){return Object(_.a)($.a.mark((function r(){var n;return $.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e+=1,r.next=3,P.b.get("/pays?itemsPerPage="+t+"&page="+e+"&id="+a);case 3:return n=r.sent,r.abrupt("return",n.data);case 5:case"end":return r.stop()}}),r)})))()}ajoutPay(e){return Object(_.a)($.a.mark((function t(){var a;return $.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P.b.post("/pays",e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}miseajourPay(e){return Object(_.a)($.a.mark((function t(){var a;return $.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P.b.put("/pays/"+e.id,e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}suppressionPay(e){return Object(_.a)($.a.mark((function t(){var a;return $.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P.b.delete("/pays/"+e.id,{method:"DELETE",herdears:{Accept:"application/json"},data:e.id});case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}}t.default=()=>{const e={ville:{nom:"",description:"",pay:"1"},ville1:null,titre:"Gestion des villes",tableconfig:{page:0,rowsPerPage:30,recherche:"",filtre:""},pagestate:{mode:"affichage",action:"ajout",affichageTable:!0},alert:{severity:"severity",message:"",open:!1,automaticClose:!1},dialogueSuppressionOuvert:!1,dialoguephoto:{open:!1,fichier:"",titre:"",objet:""}},t=Object(o.useState)(e),a=Object(n.a)(t,2),s=a[0],u=a[1];let m=new l.a,p=new ee;const d=Object(c.useQueryClient)(),b={handleFermetureAlerte:()=>{u(Object(r.a)(Object(r.a)({},s),{},{titre:"Gestion des villes",alert:Object(r.a)(Object(r.a)({},s.alert),{},{open:!1}),pagestate:Object(r.a)(Object(r.a)({},s.pagestate),{},{mode:"affichage",affichageTable:!0})}))},handleClicksurNouveau:()=>{u(Object(r.a)(Object(r.a)({},s),{},{ville:null,titre:"Nouvelle ville ",pagestate:{mode:"edition",action:"ajout",affichageTable:!1}}))},fermerAlerte:()=>{u(Object(r.a)(Object(r.a)({},s),{},{alert:Object(r.a)(Object(r.a)({},s.alert),{},{open:!1})}))},AnnulerEnregistrement:()=>{console.log("Annulation de l'enregistrement"),u(Object(r.a)(Object(r.a)({},s),{},{titre:"Gestion des villes",pagestate:{mode:"affichage",action:"ajout",affichageTable:!0}}))},fermerDialogueSuppression:()=>{u(Object(r.a)(Object(r.a)({},s),{},{dialogueSuppressionOuvert:!1}))},confirmerSuppression:()=>{j.mutate(s.ville)},handleCloseDialoguephoto:()=>{u(Object(r.a)(Object(r.a)({},s),{},{dialoguephoto:Object(r.a)(Object(r.a)({},s.dialoguephoto),{},{open:!1})}))},handleChangeRowPerPage:e=>{u(Object(r.a)(Object(r.a)({},s),{},{tableconfig:Object(r.a)(Object(r.a)({},s.tableconfig),{},{rowsPerPage:e})}))},handleSearchChange:e=>{u(Object(r.a)(Object(r.a)({},s),{},{tableconfig:Object(r.a)(Object(r.a)({},s.tableconfig),{},{recherche:e})}))},handleChangePage:e=>{u(Object(r.a)(Object(r.a)({},s),{},{tableconfig:Object(r.a)(Object(r.a)({},s.tableconfig),{},{page:e})}))},handleClickSurAction:(e,t)=>{switch(console.log(t),t){case"D\xe9tails":console.log("action details");break;case"Modifier":u(Object(r.a)(Object(r.a)({},s),{},{titre:"Mise \xe0 jour ",ville:e,pagestate:{mode:"edition",action:"misajour",affichageTable:!1}}));break;case"Supprimer":u(Object(r.a)(Object(r.a)({},s),{},{ville:e,dialogueSuppressionOuvert:!0}))}}},g=Object(c.useQuery)(["Villes",s.tableconfig.page,s.tableconfig.rowsPerPage,s.tableconfig.recherche,s.tableconfig.filtre],()=>m.getTouslesVilles(s.tableconfig.page,s.tableconfig.rowsPerPage,s.tableconfig.recherche,s.tableconfig.filtre),{keepPreviousData:!0}),f=Object(c.useQuery)(["Pays",s.tableconfig.page,s.tableconfig.rowsPerPage,s.tableconfig.recherche,s.tableconfig.filtre],()=>p.getTouslesPays(0,1e3,s.tableconfig.recherche,s.tableconfig.filtre),{keepPreviousData:!0}),h=Object(c.useMutation)(m.ajoutVille,{onSuccess:()=>{d.invalidateQueries("Villes"),u(Object(r.a)(Object(r.a)({},s),{},{alert:{message:"Enregistrement r\xe9ussi",open:!0,severity:"success",automaticClose:!0}}))},onError:()=>{d.invalidateQueries("Villes"),u(Object(r.a)(Object(r.a)({},s),{},{alert:{message:"Echec lors de l'enregistrement",open:!0,severity:"error",automaticClose:!0}}))}}),v=Object(c.useMutation)(m.miseajourVille,{onSuccess:()=>{d.invalidateQueries("Villes"),u(Object(r.a)(Object(r.a)({},s),{},{alert:{message:"Mise \xe0 jour R\xe9ussie...",open:!0,severity:"success",automaticClose:!0}}))},onError:()=>{d.invalidateQueries("Villes"),u(Object(r.a)(Object(r.a)({},s),{},{alert:{message:"Echec lors de la mise \xe0 jour",open:!0,severity:"error",automaticClose:!0}}))}}),j=Object(c.useMutation)(m.suppressionVille,{onSuccess:()=>{u(Object(r.a)(Object(r.a)({},s),{},{dialogueSuppressionOuvert:!1,alert:{message:"Supr\xe9ssion r\xe9ussie",open:!0,severity:"success"}}))},onError:()=>{u({alert:{message:"Echec lors de la supr\xe9ssion",open:!0,severity:"error"}})},onSettled:()=>{d.invalidateQueries("Villes")}}),E={queryVilles:g,mutationMiseajour:v,mutationAjout:h,mutationSuppression:j,queryPays:f},O=Y(b),y=x.b().shape({nom:x.c().required("Le champs Nom est requis"),description:x.c().required("Le champs Description est requis"),pay:x.c().required("Le champs Pay est requis")}),w=Object(K.c)({resolver:Object(X.yupResolver)(y),defaultValues:{ville:s.ville}});return i.a.createElement(N,{state:s,fonctions:b,collonnes:O,queries:E,useform:w,onSubmit:e=>{var t;let a=Object(r.a)(Object(r.a)({},s.ville),e);void 0!==(null===(t=s.ville)||void 0===t?void 0:t.id)?E.mutationMiseajour.mutate(Object(r.a)({},a)):E.mutationAjout.mutate(Object(r.a)({},a))}})}}}]);