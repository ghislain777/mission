(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[13],{1381:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var r=a(3),n=a(0),i=a.n(n),o=a(354),c=a(1373);function l(e){const t=Object(r.a)({},e),a=t.message,n=t.type;return i.a.createElement(i.a.Fragment,null,i.a.createElement(o.a,{container:!0,spacing:0,alignContent:"center",justify:"center"},i.a.createElement(o.a,{item:!0}),i.a.createElement(c.a,{color:"error"===n?"secondary":"primary"})," ",i.a.createElement("span",null,a,".")))}},1389:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));const r={selectableRows:"none",textLabels:{body:{noMatch:"Auccun enregistrement trouv\xe9",toolTip:"tri",columnHeaderTooltip:e=>"tri pour ".concat(e.label)},pagination:{next:"Page suivante",previous:"Page pr\xe9c\xe9dente",rowsPerPage:"Lignes par page:",displayRows:"sur"},toolbar:{search:"Rechercher",downloadCsv:"T\xe9l\xe9charger en CSV",print:"Imprimer",viewColumns:"Afficher les collones",filterTable:"Fiiltrer la table"},filter:{all:"Tout",title:"FILTRES",reset:"RESET"},viewColumns:{title:"Afficher les collones",titleAria:"Afficher/Cacher les collones"},selectedRows:{text:"lignes(s) s\xe9lection\xe9es",delete:"Supprimer",deleteAria:"Supprimer les lignes s\xe9lectionn\xe9es"}}}},1390:function(e,t,a){"use strict";var r=a(0),n=a.n(r),i=a(623),o=a(450),c=a(1380);t.a=e=>{const t=e.id,a=e.nom,r=e.label,l=e.valeur,s=e.control,u=e.error;return n.a.createElement(n.a.Fragment,null,n.a.createElement(i.a,{fullWidth:!0},n.a.createElement(c.a,{name:a,as:n.a.createElement(o.a,Object.assign({},e,{id:t,type:"text",helperText:u?u.message:null,label:r,error:!!u})),control:s,defaultValue:l,rules:{required:"Required"}})))}},1391:function(e,t,a){"use strict";var r=a(0),n=a.n(r),i=a(1380),o=a(1657),c=a(623),l=a(626),s=a(624),u=a(1321);const m=e=>{const t=e.label,a=e.nom,r=e.table,i=e.options,m=(e.valeur,e.error);return n.a.createElement(c.a,{fullWidth:!0,error:m?"error":""},n.a.createElement(s.a,{htmlFor:a},t),n.a.createElement(l.a,Object.assign({id:a},e),i.map(e=>n.a.createElement(o.a,{key:e.id,value:e.id},e.nom,"vehicule"===r&&e.marque+" "+e.modele+"("+e.client.nom+" "+e.client.prenom+")","categoriederequete"===r&&" ("+e.typederequete.nom+")","utilisateur"===r&&" "+e.prenom,"tarif"===r&&"("+e.montant+")","contrat"===r&&e.client.nom+"("+e.produit.nom+")","offre"===r&&e.prospect.nom+"("+e.prospect.quartier.nom+")"))),n.a.createElement(u.a,null,m?m.message:null))};t.a=function(e){const t=e.nom,a=e.label,r=e.control,o=(e.table,e.valeur);return n.a.createElement(n.a.Fragment,null,n.a.createElement(i.a,Object.assign({name:t,as:m,control:r,nom:t,label:a,valeur:o,rules:{required:"Required"}},e)))}},1392:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var r=a(17),n=a(0),i=a.n(n),o=a(1380),c=a(1356),l=a(1355);function s(e){const t=e.nom,a=e.coche,s=e.control,u=e.changement,m=e.label,d=Object(n.useState)(a),p=Object(r.a)(d,2),g=p[0],v=p[1];return i.a.createElement(l.a,{control:i.a.createElement(o.a,{name:t,control:s,render:e=>i.a.createElement(c.a,Object.assign({},e,{checked:g,onChange:t=>{e.onChange(t.target.checked),v(!g),u(!g)}}))}),label:null==m?t:m})}},1393:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var r=a(0),n=a.n(r),i=a(1407),o=a(344),c=a(1708),l=(a(60),a(357)),s=a(354);function u(e){const t=e.onUpload,a=e.onSupprimer,r=e.titre,u=e.progress,m=Object(o.a)(e=>Object(c.a)({previewChip:{minWidth:160,maxWidth:210},height:"20%"}))();return n.a.createElement(n.a.Fragment,null,n.a.createElement(i.a,Object.assign({},e,{style:{width:"100%",height:"10%"},maxFileSize:2097152e4,showPreviews:!1,filesLimit:1,showFileNamesInPreview:!0,showFileNames:!0,dropzoneText:null!==r&&void 0!==r?r:"Faire glisser le fichier ou clickez ici pour charger",showPreviewsInDropzone:!0,getFileAddedMessage:e=>"Fichier "+e+" ajout\xe9 avec succ\xe8s",getFileRemovedMessage:e=>"Fichier "+e+" supprim\xe9 avec succ\xe8s",getDropRejectMessage:(e,t,a)=>{let r="le fichier ".concat(e.name," a \xe9t\xe9 rej\xe9t\xe9. ");return t.includes(e.type)||(r+="Type de fichier non support\xe9"),e.size>a&&(r+="Fichier trop volumineux."),r},previewGridProps:{container:{spacing:1,direction:"row"}},previewChipProps:{classes:{root:m.previewChip}},previewText:"Fichier s\xe9lectionn\xe9:",onChange:e=>{var a;return t(null!==(a=e[0])&&void 0!==a?a:null)},onDelete:a})),n.a.createElement(s.a,{className:"mt-3"},n.a.createElement(l.a,{value:u}),u,"%"))}},1394:function(e,t,a){"use strict";a(0),a(1380),a(1657),a(623),a(626),a(624),a(1321)},1395:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var r=a(17),n=a(0),i=a.n(n),o=a(623),c=a(1437),l=a(2086),s=a(1385),u=a(1386),m=a(1380);function d(e){const t=e.nom,a=e.label,d=e.control,p=(e.error,e.valeur),g=(e.id,e.handledatechange),v=Object(n.useState)(p),b=Object(r.a)(v,2),f=b[0],h=b[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement(o.a,{fullWidth:!0},i.a.createElement(m.a,Object.assign({name:t,as:i.a.createElement(c.a,{utils:s.a,locale:u.a},i.a.createElement(l.a,{id:t,label:a,format:"dd/MM/yyyy \xe0 hh:mm",minDate:new Date,ampm:!1,label:a,inputVariant:"outlined",value:f,onChange:e=>(e=>{h(e),g(e)})(e)})),control:d,rules:{required:"Required"}},e))))}},1396:function(e,t,a){"use strict";a(17),a(0),a(623),a(1437),a(2058),a(1385),a(1386),a(1380)},1397:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var r=a(20),n=a.n(r),i=a(39),o=a(75);function c(e){return l.apply(this,arguments)}function l(){return(l=Object(i.a)(n.a.mark((function e(t){var a,r,i,c,l;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.fichier,r=t.objet,i=t.handleprogress,c=new FormData,console.warn(a),c.append("objet",r),c.append("file",a),e.next=7,o.b.post("/fichier/upload",c,{herdears:{"Content-Type":"multipart/form-data"},onUploadProgress:i});case 7:return l=e.sent,console.log("fichier service::: response.data "+JSON.stringify(l)),e.abrupt("return",l.data);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},1520:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var r=a(20),n=a.n(r),i=a(39),o=a(75);class c{getTouslesRoles(e,t,a,r){return Object(i.a)(n.a.mark((function r(){var i;return n.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e+=1,r.next=3,o.b.get("/roles?itemsPerPage="+t+"&page="+e+"&id="+a);case 3:return i=r.sent,r.abrupt("return",i.data);case 5:case"end":return r.stop()}}),r)})))()}ajoutRole(e){return Object(i.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.post("/roles",e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}miseajourRole(e){return Object(i.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.put("/roles/"+e.id,e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}suppressionRole(e){return Object(i.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.delete("/roles/"+e.id,{method:"DELETE",herdears:{Accept:"application/json"},data:e.id});case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}}},1548:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var r=a(20),n=a.n(r),i=a(39),o=a(75);class c{getTouslesActivites(e,t,a,r){return Object(i.a)(n.a.mark((function r(){var i;return n.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e+=1,r.next=3,o.b.get("/activites?itemsPerPage="+t+"&page="+e+"&id="+a);case 3:return i=r.sent,r.abrupt("return",i.data);case 5:case"end":return r.stop()}}),r)})))()}ajoutActivite(e){return Object(i.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.post("/activites",e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}miseajourActivite(e){return Object(i.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.put("/activites/"+e.id,e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}suppressionActivite(e){return Object(i.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.delete("/activites/"+e.id,{method:"DELETE",herdears:{Accept:"application/json"},data:e.id});case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}}},2067:function(e,t,a){"use strict";a.r(t);var r=a(3),n=a(17),i=a(0),o=a.n(i),c=a(20),l=a.n(c),s=a(39),u=a(75);class m{getTouslesPrivileges(e,t,a,r){return Object(s.a)(l.a.mark((function n(){var i;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e+=1,n.next=3,u.b.get("/privileges?itemsPerPage="+t+"&page="+e+"&id="+a+"&role="+r.role.id+"&activite="+r.activite.id);case 3:return i=n.sent,n.abrupt("return",i.data);case 5:case"end":return n.stop()}}),n)})))()}ajoutPrivilege(e){return Object(s.a)(l.a.mark((function t(){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.post("/privileges",e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}miseajourPrivilege(e){return Object(s.a)(l.a.mark((function t(){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.put("/privileges/"+e.id,e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}suppressionPrivilege(e){return Object(s.a)(l.a.mark((function t(){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.delete("/privileges/"+e.id,{method:"DELETE",herdears:{Accept:"application/json"},data:e.id});case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}togleactifPrivilege(e){return Object(s.a)(l.a.mark((function t(){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.put("/privileges/"+e.id,{actif:!e.actif});case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}}var d=a(133),p=a(1403),g=a.n(p),v=a(1389),b=a(1326),f=a(2048),h=a(2047),j=a(448),E=a(2049),O=a(452),w=a(1376),y=a(354),P=a(623),C=a(624),x=a(626),A=a(1657),S=a(1321),R=a(358),k=a(355),D=a(356),q=a(1381),T=a(1405),F=(a(1406),a(1384)),M=a(2045),L=a(622),N=a(2044),I=a(2043),Q=a(1373),W=a(1390),z=a(1391),B=a(1392),V=(a(1393),a(1394),a(1395),a(1396),a(1370)),G=a(2059);function J(e){var t,a,r,n,i,c,l,s,m,d,p,g,v;const b=e.state,f=e.fonctions,h=e.queries,E=e.useform,P=e.onSubmit;return o.a.createElement("div",null,o.a.createElement(y.a,{container:!0,spacing:1,justify:"center"},o.a.createElement(y.a,{item:!0,lg:6,md:6,sm:12,xs:12},o.a.createElement(V.a,{theme:Object(u.a)()},o.a.createElement(w.a,null,o.a.createElement(M.a,{action:o.a.createElement(L.a,{"aria-label":"",onClick:f.AnnulerEnregistrement},"x"),title:"ajout"===b.pagestate.action?"Nouveau privil\xe8ge":"Mise \xe0 jour ",subheader:""}),o.a.createElement(N.a,{className:" px-6 pt-6 pb-6"}," ",o.a.createElement("form",{onSubmit:E.handleSubmit(P)},o.a.createElement(y.a,{container:!0,spacing:4,direction:"column"},o.a.createElement(y.a,{item:!0},o.a.createElement(W.a,{id:"description",nom:"description",label:"Description",valeur:null===(t=b.privilege)||void 0===t?void 0:t.description,control:E.control,error:E.errors.description})),o.a.createElement(y.a,{item:!0},o.a.createElement(B.a,{id:"actif",nom:"actif",control:E.control,coche:Boolean(null!==(a=null===(r=b.privilege)||void 0===r?void 0:r.actif)&&void 0!==a?a:""),onChange:e=>f.handleChangementactif(e),changement:f.handleChangementactif})),o.a.createElement(y.a,{item:!0},h.queryActivites.isLoading?o.a.createElement(q.a,{message:"chargement des roles"}):o.a.createElement(z.a,{id:"activite",name:"activite",label:"Activit\xe9",table:"activite",control:E.control,options:h.queryActivites.data.rows,error:E.errors.activite,defaultValue:null!==(n=null===(i=b.privilege)||void 0===i||null===(c=i.activite)||void 0===c?void 0:c.id)&&void 0!==n?n:"1",valeur:null!==(l=null===(s=b.utilisateur)||void 0===s?void 0:s.activite)&&void 0!==l?l:""})),o.a.createElement(y.a,{item:!0},h.queryRoles.isLoading?o.a.createElement(q.a,{message:"chargement des roles"}):o.a.createElement(z.a,{id:"role",name:"role",label:"Role",table:"role",control:E.control,options:h.queryRoles.data.rows,error:E.errors.role,defaultValue:null!==(m=null===(d=b.privilege)||void 0===d||null===(p=d.role)||void 0===p?void 0:p.id)&&void 0!==m?m:"1",valeur:null!==(g=null===(v=b.utilisateur)||void 0===v?void 0:v.role)&&void 0!==g?g:""}))))),o.a.createElement(I.a,null,o.a.createElement(y.a,{container:!0,alignItems:"center",justify:"space-between"},o.a.createElement(y.a,{item:!0},o.a.createElement(O.a,{color:"primary",variant:"contained",type:"submit",onClick:E.handleSubmit(P)},h.mutationMiseajour.isLoading||h.mutationAjout.isLoading?o.a.createElement(Q.a,{color:"inherit"}):o.a.createElement(G.a,null),o.a.createElement("span",{className:"pl-2 capitalize"},"ajout"===b.pagestate.action?o.a.createElement(j.a,null,"Enregistrer"):o.a.createElement(j.a,null,"Mettre \xe0 jour")))),o.a.createElement(y.a,{item:!0},o.a.createElement(O.a,{variant:"outlined",color:"secondary",onClick:f.AnnulerEnregistrement},"Annuler")))))))))}var U=e=>{var t,a;const n=e.state,i=e.fonctions,c=e.collonnes,l=e.queries,s=e.useform,m=e.onSubmit;return o.a.createElement("div",{className:"m-sm-30"},o.a.createElement(b.a,{open:n.dialoguephoto.open,"aria-labelledby":"",maxWidth:"md",onClose:i.handleCloseDialoguephoto,objet:n.dialoguephoto.objet},o.a.createElement(f.a,{id:""},n.dialoguephoto.titre),o.a.createElement(h.a,null,o.a.createElement("img",{src:u.c+"/fichiers/"+n.dialoguephoto.objet+"/"+n.dialoguephoto.fichier,alt:"{objet}",srcset:""}))),o.a.createElement(R.a,{message:n.alert.message,severity:n.alert.severity,open:n.alert.open,handleAlertClose:!0===n.alert.automaticClose?()=>i.handleFermetureAlerte():()=>i.fermerAlerte()}),o.a.createElement("div",{className:"mb-sm-30"},o.a.createElement(k.a,{routeSegments:[{name:n.titre}]})),o.a.createElement("div",{className:"mb-sm-30"},o.a.createElement(j.a,{variant:"h4"},n.titre)),"affichage"===n.pagestate.mode?o.a.createElement(E.a,{in:n.pagestate.affichageTable,direction:"right",unmountOnExit:!0},o.a.createElement("div",null,o.a.createElement(O.a,{className:"mb-4",variant:"contained",color:"primary",onClick:()=>i.handleClicksurNouveau()},"Nouveau privil\xe8ge"),o.a.createElement("div",{className:"mb-sm-30"},o.a.createElement(w.a,{className:"mb-sm-30"},o.a.createElement("form",null,o.a.createElement(y.a,{container:!0,spacing:2,direction:"column"},o.a.createElement(y.a,{item:!0},o.a.createElement(y.a,{container:!0,spacing:10,direction:"row"})),o.a.createElement(y.a,{item:!0},o.a.createElement(y.a,{container:!0,spacing:5,direction:"row"},o.a.createElement(y.a,{item:!0,sm:1}),o.a.createElement(y.a,{item:!0,sm:3,p:5},l.queryRoles.isLoading?o.a.createElement(q.a,{message:"chargement des roles"}):o.a.createElement(P.a,{fullWidth:!0},o.a.createElement(C.a,{htmlFor:"Role"},"Choisir un role"),o.a.createElement(x.a,{id:"Role",variant:"outlined",onChange:i.handleChangeRole},o.a.createElement(A.a,{key:"0",value:null},"Tous les roles"),l.queryRoles.data.rows.map(e=>o.a.createElement(A.a,{key:e.id,value:e.id},e.nom))),o.a.createElement(S.a,null))),o.a.createElement(y.a,{item:!0,sm:3},l.queryActivites.isLoading?o.a.createElement(q.a,{message:"chargement des activit\xe9s"}):o.a.createElement(P.a,{fullWidth:!0},o.a.createElement(C.a,{htmlFor:"Activite"},"Choisir une activit\xe9"),o.a.createElement(x.a,{id:"activite",variant:"outlined",onChange:i.handleChangeActivite},o.a.createElement(A.a,{key:"0",value:null},"Toutes les activit\xe9s"),l.queryActivites.data.rows.map(e=>o.a.createElement(A.a,{key:e.id,value:e.id},e.nom))),o.a.createElement(S.a,null))),o.a.createElement(y.a,{item:!0,sm:3}))))))),l.queryPrivileges.isLoading?o.a.createElement(q.a,{message:"Chargement des donn\xe9es...",type:"info"}):l.queryPrivileges.isError?o.a.createElement(q.a,{message:"Erreur lors du chargement des donn\xe9es::"+l.queryPrivileges.error,type:"error"}):o.a.createElement(T.a,{tag:"div",blocking:!1},o.a.createElement(g.a,{title:n.titre,data:l.queryPrivileges.data.rows,columns:c,options:Object(r.a)(Object(r.a)({},v.a),{},{serverSide:!0,count:l.queryPrivileges.data.count,rowsPerPageOptions:[20,30,50],rowsPerPage:n.tableconfig.rowsPerPage,textLabels:Object(r.a)(Object(r.a)({},v.a.textLabels),{},{toolbar:Object(r.a)(Object(r.a)({},v.a.textLabels.toolbar),{},{search:"Rechercher par id"})}),onChangePage:e=>i.handleChangePage(e),onChangeRowsPerPage:e=>i.handleChangeRowPerPage(e),onSearchChange:e=>i.handleSearchChange(e),onFilterChange:()=>i.handleFilterChange()})})),o.a.createElement(w.a,{className:"w-full overflow-auto",elevation:8},o.a.createElement(D.a,{open:n.dialogueSuppressionOuvert,onConfirmDialogClose:i.fermerDialogueSuppression,onYesClick:i.confirmerSuppression,text:null!==(t="Confirmez la suppression de "+(null===(a=n.privilege)||void 0===a?void 0:a.nom))&&void 0!==t?t:""})))):o.a.createElement(J,{state:n,fonctions:i,queries:l,useform:s,onSubmit:m}))},H=a(13),Y=a(87),K=a(2060),X=a(2061),Z=a(2062),$=a(2063),_=a(344),ee=a(1356),te=a(1330),ae=a(1374);Object(_.a)(e=>{e.palette,Object(H.a)(e,["palette"]);return{userMenu:{display:"flex",alignItems:"center",cursor:"pointer",borderRadius:24,padding:4,"& span":{margin:"0 8px"}},menuItem:{display:"flex",alignItems:"center",minWidth:185}}});function re(e){const t=Object(_.a)(e=>{e.palette,Object(H.a)(e,["palette"]);return{userMenu:{display:"flex",alignItems:"center",cursor:"pointer",borderRadius:24,padding:4,"& span":{margin:"0 8px"}},menuItem:{display:"flex",alignItems:"center",minWidth:185}}}),a=(t,a)=>{e.handleClickSurAction(t,a)};return[{name:"id",label:"",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var r;return null!==(r=null===e||void 0===e?void 0:e.toLocaleString("fr-FR"))&&void 0!==r?r:""}}},{name:"description",label:"Description",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>e}},{name:"actif",label:"Actif?",options:{filter:!1,sort:!1,display:!0,customBodyRender:(t,a,r)=>o.a.createElement(ee.a,{checked:t,onChange:()=>e.handleTogleactif({id:a.rowData[0],actif:t})})}},{name:"Activite",label:"Activit\xe9",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var r;return null!==(r=null===e||void 0===e?void 0:e.nom)&&void 0!==r?r:" "}}},{name:"Role",label:"Role",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var r;return null!==(r=null===e||void 0===e?void 0:e.nom)&&void 0!==r?r:" "}}},{name:"action",label:"Actions",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,r,n)=>o.a.createElement("div",null,o.a.createElement(Y.j,{menuButton:o.a.createElement("div",{className:t.userMenu},o.a.createElement(te.a,{xsDown:!0},o.a.createElement(O.a,{size:"small",variant:"outlined",color:"primary",endIcon:o.a.createElement($.a,null)},"Actions")))},(e=>{switch(e.statut){case"Annul\xe9":return[{id:1,nom:"D\xe9tails",action:e=>a(e,"D\xe9tails"),icon:o.a.createElement(K.a,{color:"primary"})}];case"Nouveau":return[{id:1,nom:"D\xe9tails",action:e=>a(e,"D\xe9tails"),icon:o.a.createElement(K.a,{color:"primary"})},{id:2,nom:"Modifier",action:e=>a(e,"Modifier"),icon:o.a.createElement(X.a,{color:"primary"})},{id:3,nom:"Supprimer",action:e=>a(e,"Supprimer"),icon:o.a.createElement(Z.a,{color:"error"})}];default:return[{id:2,nom:"Modifier",action:e=>a(e,"Modifier"),icon:o.a.createElement(X.a,{color:"primary"})}]}})({id:r.rowData[0],description:r.rowData[1],actif:r.rowData[2],activite:r.rowData[3],role:r.rowData[4]}).map(e=>o.a.createElement(o.a.Fragment,null,o.a.createElement(A.a,{onClick:()=>e.action({id:r.rowData[0],description:r.rowData[1],actif:r.rowData[2],activite:r.rowData[3],role:r.rowData[4]}),key:e.id,value:e.statut},e.icon,"   ",o.a.createElement("span",{className:"ml-5"},e.nom)),o.a.createElement(ae.a,null)))))}}]}var ne=a(1380),ie=(a(1397),a(1383)),oe=a(1548),ce=a(1520);t.default=()=>{const e={privilege:{description:"",actif:"",activite:"1",role:"1"},privilege1:null,titre:"Gestion des privil\xe8ges",tableconfig:{page:0,rowsPerPage:30,recherche:"",filtre:{activite:{id:null},role:{id:null}}},pagestate:{mode:"affichage",action:"ajout",affichageTable:!0},alert:{severity:"severity",message:"",open:!1,automaticClose:!1},dialogueSuppressionOuvert:!1,dialoguephoto:{open:!1,fichier:"",titre:"",objet:""}},t=Object(i.useState)(e),a=Object(n.a)(t,2),c=a[0],l=a[1];let s=new m,u=new oe.a,p=new ce.a;const g=Object(d.useQueryClient)(),v={handleFermetureAlerte:()=>{l(Object(r.a)(Object(r.a)({},c),{},{titre:"Gestion des privil\xe8ges",alert:Object(r.a)(Object(r.a)({},c.alert),{},{open:!1}),pagestate:Object(r.a)(Object(r.a)({},c.pagestate),{},{mode:"affichage",affichageTable:!0})}))},handleClicksurNouveau:()=>{l(Object(r.a)(Object(r.a)({},c),{},{privilege:null,titre:"Nouveau privil\xe8ge ",pagestate:{mode:"edition",action:"ajout",affichageTable:!1}}))},fermerAlerte:()=>{l(Object(r.a)(Object(r.a)({},c),{},{alert:Object(r.a)(Object(r.a)({},c.alert),{},{open:!1})}))},AnnulerEnregistrement:()=>{console.log("Annulation de l'enregistrement"),l(Object(r.a)(Object(r.a)({},c),{},{titre:"Gestion des privil\xe8ges",pagestate:{mode:"affichage",action:"ajout",affichageTable:!0}}))},fermerDialogueSuppression:()=>{l(Object(r.a)(Object(r.a)({},c),{},{dialogueSuppressionOuvert:!1}))},confirmerSuppression:()=>{w.mutate(c.privilege)},handleCloseDialoguephoto:()=>{l(Object(r.a)(Object(r.a)({},c),{},{dialoguephoto:Object(r.a)(Object(r.a)({},c.dialoguephoto),{},{open:!1})}))},handleChangeRowPerPage:e=>{l(Object(r.a)(Object(r.a)({},c),{},{tableconfig:Object(r.a)(Object(r.a)({},c.tableconfig),{},{rowsPerPage:e})}))},handleSearchChange:e=>{l(Object(r.a)(Object(r.a)({},c),{},{tableconfig:Object(r.a)(Object(r.a)({},c.tableconfig),{},{recherche:e})}))},handleChangePage:e=>{l(Object(r.a)(Object(r.a)({},c),{},{tableconfig:Object(r.a)(Object(r.a)({},c.tableconfig),{},{page:e})}))},handleClickSurAction:(e,t)=>{switch(console.log(t),t){case"D\xe9tails":console.log("action details");break;case"Modifier":l(Object(r.a)(Object(r.a)({},c),{},{titre:"Mise \xe0 jour ",privilege:e,pagestate:{mode:"edition",action:"misajour",affichageTable:!1}}));break;case"Supprimer":l(Object(r.a)(Object(r.a)({},c),{},{privilege:e,dialogueSuppressionOuvert:!0}))}},handleTogleactif:e=>{O.mutate(e)},handleChangeActivite:e=>{l(Object(r.a)(Object(r.a)({},c),{},{tableconfig:Object(r.a)(Object(r.a)({},c.tableconfig),{},{filtre:Object(r.a)(Object(r.a)({},c.tableconfig.filtre),{},{activite:{id:e.target.value}})})}))},handleChangeRole:e=>{l(Object(r.a)(Object(r.a)({},c),{},{tableconfig:Object(r.a)(Object(r.a)({},c.tableconfig),{},{filtre:Object(r.a)(Object(r.a)({},c.tableconfig.filtre),{},{role:{id:e.target.value}})})}))}},b=Object(d.useQuery)(["Privileges",c.tableconfig.page,c.tableconfig.rowsPerPage,c.tableconfig.recherche,c.tableconfig.filtre],()=>s.getTouslesPrivileges(c.tableconfig.page,c.tableconfig.rowsPerPage,c.tableconfig.recherche,c.tableconfig.filtre),{keepPreviousData:!0}),f=Object(d.useQuery)(["Activites",c.tableconfig.page,c.tableconfig.rowsPerPage,c.tableconfig.recherche,c.tableconfig.filtre],()=>u.getTouslesActivites(c.tableconfig.page,c.tableconfig.rowsPerPage,c.tableconfig.recherche,c.tableconfig.filtre),{keepPreviousData:!0}),h=Object(d.useQuery)(["Roles",c.tableconfig.page,c.tableconfig.rowsPerPage,c.tableconfig.recherche,c.tableconfig.filtre],()=>p.getTouslesRoles(c.tableconfig.page,c.tableconfig.rowsPerPage,c.tableconfig.recherche,c.tableconfig.filtre),{keepPreviousData:!0}),j=Object(d.useMutation)(s.ajoutPrivilege,{onSuccess:()=>{g.invalidateQueries("Privileges"),l(Object(r.a)(Object(r.a)({},c),{},{alert:{message:"Enregistrement r\xe9ussi",open:!0,severity:"success",automaticClose:!0}}))},onError:()=>{g.invalidateQueries("Privileges"),l(Object(r.a)(Object(r.a)({},c),{},{alert:{message:"Echec lors de l'enregistrement",open:!0,severity:"error",automaticClose:!0}}))}}),E=Object(d.useMutation)(s.miseajourPrivilege,{onSuccess:()=>{g.invalidateQueries("Privileges"),l(Object(r.a)(Object(r.a)({},c),{},{alert:{message:"Mise \xe0 jour R\xe9ussie...",open:!0,severity:"success",automaticClose:!0}}))},onError:()=>{g.invalidateQueries("Privileges"),l(Object(r.a)(Object(r.a)({},c),{},{alert:{message:"Echec lors de la mise \xe0 jour",open:!0,severity:"error",automaticClose:!0}}))}}),O=Object(d.useMutation)(s.togleactifPrivilege,{onSuccess:()=>{l(Object(r.a)(Object(r.a)({},c),{},{alert:{message:"op\xe9ration r\xe9ussie",open:!0,severity:"success"}}))},onError:()=>{l({alert:{message:"Echec lors de l op\xe9ration",open:!0,severity:"error"}})},onSettled:()=>{g.invalidateQueries("Privileges")}}),w=Object(d.useMutation)(s.suppressionPrivilege,{onSuccess:()=>{l(Object(r.a)(Object(r.a)({},c),{},{dialogueSuppressionOuvert:!1,alert:{message:"Supr\xe9ssion r\xe9ussie",open:!0,severity:"success"}}))},onError:()=>{l({alert:{message:"Echec lors de la supr\xe9ssion",open:!0,severity:"error"}})},onSettled:()=>{g.invalidateQueries("Privileges")}}),y={queryPrivileges:b,mutationMiseajour:E,mutationAjout:j,mutationSuppression:w,queryActivites:f,queryRoles:h},P=re(v),C=F.b().shape({description:F.c().required("Le champs Description est requis"),activite:F.c().required("Le champs Activite est requis"),role:F.c().required("Le champs Role est requis")}),x=Object(ne.c)({resolver:Object(ie.yupResolver)(C),defaultValues:{privilege:c.privilege}});return o.a.createElement(U,{state:c,fonctions:v,collonnes:P,queries:y,useform:x,onSubmit:e=>{var t;let a=Object(r.a)(Object(r.a)({},c.privilege),e);void 0!==(null===(t=c.privilege)||void 0===t?void 0:t.id)?y.mutationMiseajour.mutate(Object(r.a)({},a)):y.mutationAjout.mutate(Object(r.a)({},a))}})}}}]);