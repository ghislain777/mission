(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[11],{1381:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var r=a(3),n=a(0),i=a.n(n),o=a(354),c=a(1373);function s(e){const t=Object(r.a)({},e),a=t.message,n=t.type;return i.a.createElement(i.a.Fragment,null,i.a.createElement(o.a,{container:!0,spacing:0,alignContent:"center",justify:"center"},i.a.createElement(o.a,{item:!0}),i.a.createElement(c.a,{color:"error"===n?"secondary":"primary"})," ",i.a.createElement("span",null,a,".")))}},1389:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));const r={selectableRows:"none",textLabels:{body:{noMatch:"Auccun enregistrement trouv\xe9",toolTip:"tri",columnHeaderTooltip:e=>"tri pour ".concat(e.label)},pagination:{next:"Page suivante",previous:"Page pr\xe9c\xe9dente",rowsPerPage:"Lignes par page:",displayRows:"sur"},toolbar:{search:"Rechercher",downloadCsv:"T\xe9l\xe9charger en CSV",print:"Imprimer",viewColumns:"Afficher les collones",filterTable:"Fiiltrer la table"},filter:{all:"Tout",title:"FILTRES",reset:"RESET"},viewColumns:{title:"Afficher les collones",titleAria:"Afficher/Cacher les collones"},selectedRows:{text:"lignes(s) s\xe9lection\xe9es",delete:"Supprimer",deleteAria:"Supprimer les lignes s\xe9lectionn\xe9es"}}}},1390:function(e,t,a){"use strict";var r=a(0),n=a.n(r),i=a(623),o=a(450),c=a(1380);t.a=e=>{const t=e.id,a=e.nom,r=e.label,s=e.valeur,l=e.control,u=e.error;return n.a.createElement(n.a.Fragment,null,n.a.createElement(i.a,{fullWidth:!0},n.a.createElement(c.a,{name:a,as:n.a.createElement(o.a,Object.assign({},e,{id:t,type:"text",helperText:u?u.message:null,label:r,error:!!u})),control:l,defaultValue:s,rules:{required:"Required"}})))}},1391:function(e,t,a){"use strict";var r=a(0),n=a.n(r),i=a(1380),o=a(1657),c=a(623),s=a(626),l=a(624),u=a(1321);const m=e=>{const t=e.label,a=e.nom,r=e.table,i=e.options,m=(e.valeur,e.error);return n.a.createElement(c.a,{fullWidth:!0,error:m?"error":""},n.a.createElement(l.a,{htmlFor:a},t),n.a.createElement(s.a,Object.assign({id:a},e),i.map(e=>n.a.createElement(o.a,{key:e.id,value:e.id},e.nom,"vehicule"===r&&e.marque+" "+e.modele+"("+e.client.nom+" "+e.client.prenom+")","categoriederequete"===r&&" ("+e.typederequete.nom+")","utilisateur"===r&&" "+e.prenom,"tarif"===r&&"("+e.montant+")","contrat"===r&&e.client.nom+"("+e.produit.nom+")","offre"===r&&e.prospect.nom+"("+e.prospect.quartier.nom+")"))),n.a.createElement(u.a,null,m?m.message:null))};t.a=function(e){const t=e.nom,a=e.label,r=e.control,o=(e.table,e.valeur);return n.a.createElement(n.a.Fragment,null,n.a.createElement(i.a,Object.assign({name:t,as:m,control:r,nom:t,label:a,valeur:o,rules:{required:"Required"}},e)))}},1392:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var r=a(17),n=a(0),i=a.n(n),o=a(1380),c=a(1356),s=a(1355);function l(e){const t=e.nom,a=e.coche,l=e.control,u=e.changement,m=e.label,d=Object(n.useState)(a),p=Object(r.a)(d,2),g=p[0],b=p[1];return i.a.createElement(s.a,{control:i.a.createElement(o.a,{name:t,control:l,render:e=>i.a.createElement(c.a,Object.assign({},e,{checked:g,onChange:t=>{e.onChange(t.target.checked),b(!g),u(!g)}}))}),label:null==m?t:m})}},1393:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var r=a(0),n=a.n(r),i=a(1407),o=a(344),c=a(1708),s=(a(60),a(357)),l=a(354);function u(e){const t=e.onUpload,a=e.onSupprimer,r=e.titre,u=e.progress,m=Object(o.a)(e=>Object(c.a)({previewChip:{minWidth:160,maxWidth:210},height:"20%"}))();return n.a.createElement(n.a.Fragment,null,n.a.createElement(i.a,Object.assign({},e,{style:{width:"100%",height:"10%"},maxFileSize:2097152e4,showPreviews:!1,filesLimit:1,showFileNamesInPreview:!0,showFileNames:!0,dropzoneText:null!==r&&void 0!==r?r:"Faire glisser le fichier ou clickez ici pour charger",showPreviewsInDropzone:!0,getFileAddedMessage:e=>"Fichier "+e+" ajout\xe9 avec succ\xe8s",getFileRemovedMessage:e=>"Fichier "+e+" supprim\xe9 avec succ\xe8s",getDropRejectMessage:(e,t,a)=>{let r="le fichier ".concat(e.name," a \xe9t\xe9 rej\xe9t\xe9. ");return t.includes(e.type)||(r+="Type de fichier non support\xe9"),e.size>a&&(r+="Fichier trop volumineux."),r},previewGridProps:{container:{spacing:1,direction:"row"}},previewChipProps:{classes:{root:m.previewChip}},previewText:"Fichier s\xe9lectionn\xe9:",onChange:e=>{var a;return t(null!==(a=e[0])&&void 0!==a?a:null)},onDelete:a})),n.a.createElement(l.a,{className:"mt-3"},n.a.createElement(s.a,{value:u}),u,"%"))}},1394:function(e,t,a){"use strict";a(0),a(1380),a(1657),a(623),a(626),a(624),a(1321)},1395:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var r=a(17),n=a(0),i=a.n(n),o=a(623),c=a(1437),s=a(2086),l=a(1385),u=a(1386),m=a(1380);function d(e){const t=e.nom,a=e.label,d=e.control,p=(e.error,e.valeur),g=(e.id,e.handledatechange),b=Object(n.useState)(p),f=Object(r.a)(b,2),h=f[0],v=f[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement(o.a,{fullWidth:!0},i.a.createElement(m.a,Object.assign({name:t,as:i.a.createElement(c.a,{utils:l.a,locale:u.a},i.a.createElement(s.a,{id:t,label:a,format:"dd/MM/yyyy \xe0 hh:mm",minDate:new Date,ampm:!1,label:a,inputVariant:"outlined",value:h,onChange:e=>(e=>{v(e),g(e)})(e)})),control:d,rules:{required:"Required"}},e))))}},1396:function(e,t,a){"use strict";a(17),a(0),a(623),a(1437),a(2058),a(1385),a(1386),a(1380)},1397:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var r=a(20),n=a.n(r),i=a(39),o=a(75);function c(e){return s.apply(this,arguments)}function s(){return(s=Object(i.a)(n.a.mark((function e(t){var a,r,i,c,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.fichier,r=t.objet,i=t.handleprogress,c=new FormData,console.warn(a),c.append("objet",r),c.append("file",a),e.next=7,o.b.post("/fichier/upload",c,{herdears:{"Content-Type":"multipart/form-data"},onUploadProgress:i});case 7:return s=e.sent,console.log("fichier service::: response.data "+JSON.stringify(s)),e.abrupt("return",s.data);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},1420:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var r=a(20),n=a.n(r),i=a(39),o=a(75);class c{getTouslesQuartiers(e,t,a,r){return Object(i.a)(n.a.mark((function r(){var i;return n.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e+=1,r.next=3,o.b.get("/quartiers?itemsPerPage="+t+"&page="+e+"&id="+a);case 3:return i=r.sent,r.abrupt("return",i.data);case 5:case"end":return r.stop()}}),r)})))()}ajoutQuartier(e){return Object(i.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.post("/quartiers",e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}miseajourQuartier(e){return Object(i.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.put("/quartiers/"+e.id,e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}suppressionQuartier(e){return Object(i.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.delete("/quartiers/"+e.id,{method:"DELETE",herdears:{Accept:"application/json"},data:e.id});case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}}},1471:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var r=a(20),n=a.n(r),i=a(39),o=a(75);class c{getTouslesCommunes(e,t,a,r){return Object(i.a)(n.a.mark((function r(){var i;return n.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e+=1,r.next=3,o.b.get("/communes?itemsPerPage="+t+"&page="+e+"&id="+a);case 3:return i=r.sent,r.abrupt("return",i.data);case 5:case"end":return r.stop()}}),r)})))()}ajoutCommune(e){return Object(i.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.post("/communes",e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}miseajourCommune(e){return Object(i.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.put("/communes/"+e.id,e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}suppressionCommune(e){return Object(i.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.delete("/communes/"+e.id,{method:"DELETE",herdears:{Accept:"application/json"},data:e.id});case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}}},1501:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var r=a(1399),n=a(132),i={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},o=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,c=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,s=/^([+-])(\d{2})(?::?(\d{2}))?$/;function l(e,t){Object(n.a)(1,arguments);var a=t||{},i=null==a.additionalDigits?2:Object(r.a)(a.additionalDigits);if(2!==i&&1!==i&&0!==i)throw new RangeError("additionalDigits must be 0, 1 or 2");if("string"!==typeof e&&"[object String]"!==Object.prototype.toString.call(e))return new Date(NaN);var o,c=u(e);if(c.date){var s=m(c.date,i);o=d(s.restDateString,s.year)}if(isNaN(o)||!o)return new Date(NaN);var l,p=o.getTime(),b=0;if(c.time&&(b=g(c.time),isNaN(b)||null===b))return new Date(NaN);if(!c.timezone){var h=new Date(p+b),v=new Date(h.getUTCFullYear(),h.getUTCMonth(),h.getUTCDate(),h.getUTCHours(),h.getUTCMinutes(),h.getUTCSeconds(),h.getUTCMilliseconds());return v.setFullYear(h.getUTCFullYear()),v}return l=f(c.timezone),isNaN(l)?new Date(NaN):new Date(p+b+l)}function u(e){var t,a={},r=e.split(i.dateTimeDelimiter);if(r.length>2)return a;if(/:/.test(r[0])?(a.date=null,t=r[0]):(a.date=r[0],t=r[1],i.timeZoneDelimiter.test(a.date)&&(a.date=e.split(i.timeZoneDelimiter)[0],t=e.substr(a.date.length,e.length))),t){var n=i.timezone.exec(t);n?(a.time=t.replace(n[1],""),a.timezone=n[1]):a.time=t}return a}function m(e,t){var a=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+t)+"})|(\\d{2}|[+-]\\d{"+(2+t)+"})$)"),r=e.match(a);if(!r)return{year:null};var n=r[1]&&parseInt(r[1]),i=r[2]&&parseInt(r[2]);return{year:null==i?n:100*i,restDateString:e.slice((r[1]||r[2]).length)}}function d(e,t){if(null===t)return null;var a=e.match(o);if(!a)return null;var r=!!a[4],n=p(a[1]),i=p(a[2])-1,c=p(a[3]),s=p(a[4]),l=p(a[5])-1;if(r)return function(e,t,a){return t>=1&&t<=53&&a>=0&&a<=6}(0,s,l)?function(e,t,a){var r=new Date(0);r.setUTCFullYear(e,0,4);var n=r.getUTCDay()||7,i=7*(t-1)+a+1-n;return r.setUTCDate(r.getUTCDate()+i),r}(t,s,l):new Date(NaN);var u=new Date(0);return function(e,t,a){return t>=0&&t<=11&&a>=1&&a<=(h[t]||(v(e)?29:28))}(t,i,c)&&function(e,t){return t>=1&&t<=(v(e)?366:365)}(t,n)?(u.setUTCFullYear(t,i,Math.max(n,c)),u):new Date(NaN)}function p(e){return e?parseInt(e):1}function g(e){var t=e.match(c);if(!t)return null;var a=b(t[1]),r=b(t[2]),n=b(t[3]);return function(e,t,a){if(24===e)return 0===t&&0===a;return a>=0&&a<60&&t>=0&&t<60&&e>=0&&e<25}(a,r,n)?36e5*a+6e4*r+1e3*n:NaN}function b(e){return e&&parseFloat(e.replace(",","."))||0}function f(e){if("Z"===e)return 0;var t=e.match(s);if(!t)return 0;var a="+"===t[1]?-1:1,r=parseInt(t[2]),n=t[3]&&parseInt(t[3])||0;return function(e,t){return t>=0&&t<=59}(0,n)?a*(36e5*r+6e4*n):NaN}var h=[31,null,31,30,31,30,31,31,30,31,30,31];function v(e){return e%400===0||e%4===0&&e%100}},2081:function(e,t,a){"use strict";a.r(t);var r=a(3),n=a(17),i=a(0),o=a.n(i),c=a(1420),s=a(133),l=a(1403),u=a.n(l),m=a(1389),d=a(1326),p=a(2048),g=a(2047),b=a(448),f=a(2049),h=a(452),v=a(1376),j=a(358),E=a(355),O=a(356),w=a(1381),y=a(1405),C=(a(1406),a(75)),D=a(1370),q=a(1384),x=a(354),S=a(2045),N=a(622),P=a(2044),T=a(2043),A=a(1373),k=a(1390),F=a(1391),M=(a(1392),a(1393),a(1394),a(1395),a(1396),a(2059));function R(e){var t,a,r,n,i,c,s;const l=e.state,u=e.fonctions,m=e.queries,d=e.useform,p=e.onSubmit;return o.a.createElement("div",null,o.a.createElement(x.a,{container:!0,spacing:1,justify:"center"},o.a.createElement(x.a,{item:!0,lg:6,md:6,sm:12,xs:12},o.a.createElement(D.a,{theme:Object(C.a)()},o.a.createElement(v.a,null,o.a.createElement(S.a,{action:o.a.createElement(N.a,{"aria-label":"",onClick:u.AnnulerEnregistrement},"x"),title:"ajout"===l.pagestate.action?"Nouvau quartier":"Mise \xe0 jour ",subheader:""}),o.a.createElement(P.a,{className:" px-6 pt-6 pb-6"}," ",o.a.createElement("form",{onSubmit:d.handleSubmit(p)},o.a.createElement(x.a,{container:!0,spacing:4,direction:"column"},o.a.createElement(x.a,{item:!0},m.queryCommunes.isLoading?o.a.createElement(w.a,{message:"chargement des roles"}):o.a.createElement(F.a,{id:"commune",name:"commune",label:"Commune",table:"commune",control:d.control,options:m.queryCommunes.data.rows,error:d.errors.commune,defaultValue:null!==(t=null===(a=l.quartier)||void 0===a||null===(r=a.commune)||void 0===r?void 0:r.id)&&void 0!==t?t:"1",valeur:null!==(n=null===(i=l.quartier)||void 0===i?void 0:i.commune)&&void 0!==n?n:""})),o.a.createElement(x.a,{item:!0},o.a.createElement(k.a,{id:"nom",nom:"nom",label:"Nom",valeur:null===(c=l.quartier)||void 0===c?void 0:c.nom,control:d.control,error:d.errors.nom})),o.a.createElement(x.a,{item:!0},o.a.createElement(k.a,{id:"description",nom:"description",label:"Description",valeur:null===(s=l.quartier)||void 0===s?void 0:s.description,control:d.control,error:d.errors.description}))))),o.a.createElement(T.a,null,o.a.createElement(x.a,{container:!0,alignItems:"center",justify:"space-between"},o.a.createElement(x.a,{item:!0},o.a.createElement(h.a,{color:"primary",variant:"contained",type:"submit",onClick:d.handleSubmit(p)},m.mutationMiseajour.isLoading||m.mutationAjout.isLoading?o.a.createElement(A.a,{color:"inherit"}):o.a.createElement(M.a,null),o.a.createElement("span",{className:"pl-2 capitalize"},"ajout"===l.pagestate.action?o.a.createElement(b.a,null,"Enregistrer"):o.a.createElement(b.a,null,"Mettre \xe0 jour")))),o.a.createElement(x.a,{item:!0},o.a.createElement(h.a,{variant:"outlined",color:"secondary",onClick:u.AnnulerEnregistrement},"Annuler")))))))))}var Q=e=>{var t,a;const n=e.state,i=e.fonctions,c=e.collonnes,s=e.queries,l=e.useform,q=e.onSubmit;return o.a.createElement("div",{className:"m-sm-30"},o.a.createElement(d.a,{open:n.dialoguephoto.open,"aria-labelledby":"",maxWidth:"md",onClose:i.handleCloseDialoguephoto,objet:n.dialoguephoto.objet},o.a.createElement(p.a,{id:""},n.dialoguephoto.titre),o.a.createElement(g.a,null,o.a.createElement("img",{src:C.c+"/fichiers/"+n.dialoguephoto.fichier,alt:"{objet}",srcset:""}))),o.a.createElement(j.a,{message:n.alert.message,severity:n.alert.severity,open:n.alert.open,handleAlertClose:!0===n.alert.automaticClose?()=>i.handleFermetureAlerte():()=>i.fermerAlerte()}),o.a.createElement("div",{className:"mb-sm-30"},o.a.createElement(E.a,{routeSegments:[{name:n.titre}]})),o.a.createElement("div",{className:"mb-sm-30"},o.a.createElement(b.a,{variant:"h4"},n.titre)),"affichage"===n.pagestate.mode?o.a.createElement(f.a,{in:n.pagestate.affichageTable,direction:"right",unmountOnExit:!0},o.a.createElement("div",null,o.a.createElement(h.a,{className:"mb-4",variant:"contained",color:"primary",onClick:()=>i.handleClicksurNouveau()},"Nouvau quartier"),s.queryQuartiers.isLoading?o.a.createElement(w.a,{message:"Chargement des donn\xe9es...",type:"info"}):s.queryQuartiers.isError?o.a.createElement(w.a,{message:"Erreur lors du chargement des donn\xe9es::"+s.queryQuartiers.error,type:"error"}):o.a.createElement(y.a,{tag:"div",blocking:!1},o.a.createElement(D.a,{theme:Object(C.a)()},o.a.createElement(u.a,{title:n.titre,data:s.queryQuartiers.data.rows,columns:c,options:Object(r.a)(Object(r.a)({},m.a),{},{serverSide:!0,count:s.queryQuartiers.data.count,rowsPerPageOptions:[20,30,50],rowsPerPage:n.tableconfig.rowsPerPage,textLabels:Object(r.a)(Object(r.a)({},m.a.textLabels),{},{toolbar:Object(r.a)(Object(r.a)({},m.a.textLabels.toolbar),{},{search:"Rechercher par id"})}),onChangePage:e=>i.handleChangePage(e),onChangeRowsPerPage:e=>i.handleChangeRowPerPage(e),onSearchChange:e=>i.handleSearchChange(e),onFilterChange:()=>i.handleFilterChange()})}))),o.a.createElement(v.a,{className:"w-full overflow-auto",elevation:8},o.a.createElement(O.a,{open:n.dialogueSuppressionOuvert,onConfirmDialogClose:i.fermerDialogueSuppression,onYesClick:i.confirmerSuppression,text:null!==(t="Confirmez la suppression de "+(null===(a=n.quartier)||void 0===a?void 0:a.nom))&&void 0!==t?t:""})))):o.a.createElement(R,{state:n,fonctions:i,queries:s,useform:l,onSubmit:q}))},I=a(13),L=a(87),U=a(2060),z=a(2061),W=a(2062),B=a(2063),Y=a(344),Z=a(1330),V=a(1657),$=a(1374),G=a(2039),H=a(1501);Object(Y.a)(e=>{e.palette,Object(I.a)(e,["palette"]);return{userMenu:{display:"flex",alignItems:"center",cursor:"pointer",borderRadius:24,padding:4,"& span":{margin:"0 8px"}},menuItem:{display:"flex",alignItems:"center",minWidth:185}}});function J(e){const t=Object(Y.a)(e=>{e.palette,Object(I.a)(e,["palette"]);return{userMenu:{display:"flex",alignItems:"center",cursor:"pointer",borderRadius:24,padding:4,"& span":{margin:"0 8px"}},menuItem:{display:"flex",alignItems:"center",minWidth:185}}}),a=(t,a)=>{e.handleClickSurAction(t,a)};return[{name:"id",label:"ID",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var r;return null!==(r=null===e||void 0===e?void 0:e.toLocaleString("fr-FR"))&&void 0!==r?r:""}}},{name:"Commune",label:"Commune",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var r;return null!==(r=null===e||void 0===e?void 0:e.nom)&&void 0!==r?r:" "}}},{name:"nom",label:"Nom",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>e}},{name:"description",label:"Description",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>e}},{name:"createdAt",label:"",options:{filter:!1,sort:!1,display:!1,customBodyRender:(e,t,a)=>null==e?" ":Object(G.a)(Object(H.a)(e),"dd/MM/yyyy HH:mm")}},{name:"updatedAt",label:"",options:{filter:!1,sort:!1,display:!1,customBodyRender:(e,t,a)=>e}},{name:"action",label:"Actions",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,r,n)=>o.a.createElement("div",null,o.a.createElement(L.j,{menuButton:o.a.createElement("div",{className:t.userMenu},o.a.createElement(Z.a,{xsDown:!0},o.a.createElement(h.a,{size:"small",variant:"outlined",color:"primary",endIcon:o.a.createElement(B.a,null)},"Actions")))},(e=>{switch(e.statut){case"Annul\xe9":return[{id:1,nom:"D\xe9tails",action:e=>a(e,"D\xe9tails"),icon:o.a.createElement(U.a,{color:"primary"})}];case"Nouveau":return[{id:1,nom:"D\xe9tails",action:e=>a(e,"D\xe9tails"),icon:o.a.createElement(U.a,{color:"primary"})},{id:2,nom:"Modifier",action:e=>a(e,"Modifier"),icon:o.a.createElement(z.a,{color:"primary"})},{id:3,nom:"Supprimer",action:e=>a(e,"Supprimer"),icon:o.a.createElement(W.a,{color:"error"})}];default:return[{id:2,nom:"Modifier",action:e=>a(e,"Modifier"),icon:o.a.createElement(z.a,{color:"primary"})}]}})({id:r.rowData[0],commune:r.rowData[1],nom:r.rowData[2],description:r.rowData[3],createdAt:r.rowData[4],updatedAt:r.rowData[5]}).map(e=>o.a.createElement(o.a.Fragment,null,o.a.createElement(V.a,{onClick:()=>e.action({id:r.rowData[0],commune:r.rowData[1],nom:r.rowData[2],description:r.rowData[3],createdAt:r.rowData[4],updatedAt:r.rowData[5]}),key:e.id,value:e.statut},e.icon,"   ",o.a.createElement("span",{className:"ml-5"},e.nom)),o.a.createElement($.a,null)))))}}]}var K=a(1380),X=(a(1397),a(1383)),_=a(1471);t.default=()=>{const e={quartier:{commune:"1",nom:"",description:"",createdAt:"",updatedAt:""},quartier1:null,titre:"Gestion des quartiers",tableconfig:{page:0,rowsPerPage:30,recherche:"",filtre:""},pagestate:{mode:"affichage",action:"ajout",affichageTable:!0},alert:{severity:"severity",message:"",open:!1,automaticClose:!1},dialogueSuppressionOuvert:!1,dialoguephoto:{open:!1,fichier:"",titre:"",objet:""}},t=Object(i.useState)(e),a=Object(n.a)(t,2),l=a[0],u=a[1];let m=new c.a,d=new _.a;const p=Object(s.useQueryClient)(),g={handleFermetureAlerte:()=>{u(Object(r.a)(Object(r.a)({},l),{},{titre:"Gestion des quartiers",alert:Object(r.a)(Object(r.a)({},l.alert),{},{open:!1}),pagestate:Object(r.a)(Object(r.a)({},l.pagestate),{},{mode:"affichage",affichageTable:!0})}))},handleClicksurNouveau:()=>{u(Object(r.a)(Object(r.a)({},l),{},{quartier:null,titre:"Nouvau quartier ",pagestate:{mode:"edition",action:"ajout",affichageTable:!1}}))},fermerAlerte:()=>{u(Object(r.a)(Object(r.a)({},l),{},{alert:Object(r.a)(Object(r.a)({},l.alert),{},{open:!1})}))},AnnulerEnregistrement:()=>{console.log("Annulation de l'enregistrement"),u(Object(r.a)(Object(r.a)({},l),{},{titre:"Gestion des quartiers",pagestate:{mode:"affichage",action:"ajout",affichageTable:!0}}))},fermerDialogueSuppression:()=>{u(Object(r.a)(Object(r.a)({},l),{},{dialogueSuppressionOuvert:!1}))},confirmerSuppression:()=>{j.mutate(l.quartier)},handleCloseDialoguephoto:()=>{u(Object(r.a)(Object(r.a)({},l),{},{dialoguephoto:Object(r.a)(Object(r.a)({},l.dialoguephoto),{},{open:!1})}))},handleChangeRowPerPage:e=>{u(Object(r.a)(Object(r.a)({},l),{},{tableconfig:Object(r.a)(Object(r.a)({},l.tableconfig),{},{rowsPerPage:e})}))},handleSearchChange:e=>{u(Object(r.a)(Object(r.a)({},l),{},{tableconfig:Object(r.a)(Object(r.a)({},l.tableconfig),{},{recherche:e})}))},handleChangePage:e=>{u(Object(r.a)(Object(r.a)({},l),{},{tableconfig:Object(r.a)(Object(r.a)({},l.tableconfig),{},{page:e})}))},handleClickSurAction:(e,t)=>{switch(console.log(t),t){case"D\xe9tails":console.log("action details");break;case"Modifier":u(Object(r.a)(Object(r.a)({},l),{},{titre:"Mise \xe0 jour ",quartier:e,pagestate:{mode:"edition",action:"misajour",affichageTable:!1}}));break;case"Supprimer":u(Object(r.a)(Object(r.a)({},l),{},{quartier:e,dialogueSuppressionOuvert:!0}))}},handledatecreatedAtchange:e=>{u(Object(r.a)(Object(r.a)({},l),{},{quartier:Object(r.a)(Object(r.a)({},l.quartier),{},{createdAt:e})}))}},b=Object(s.useQuery)(["Quartiers",l.tableconfig.page,l.tableconfig.rowsPerPage,l.tableconfig.recherche,l.tableconfig.filtre],()=>m.getTouslesQuartiers(l.tableconfig.page,l.tableconfig.rowsPerPage,l.tableconfig.recherche,l.tableconfig.filtre),{keepPreviousData:!0}),f=Object(s.useQuery)(["Communes",l.tableconfig.page,l.tableconfig.rowsPerPage,l.tableconfig.recherche,l.tableconfig.filtre],()=>d.getTouslesCommunes(0,1e3,l.tableconfig.recherche,l.tableconfig.filtre),{keepPreviousData:!0}),h=Object(s.useMutation)(m.ajoutQuartier,{onSuccess:()=>{p.invalidateQueries("Quartiers"),u(Object(r.a)(Object(r.a)({},l),{},{alert:{message:"Enregistrement r\xe9ussi",open:!0,severity:"success",automaticClose:!0}}))},onError:()=>{p.invalidateQueries("Quartiers"),u(Object(r.a)(Object(r.a)({},l),{},{alert:{message:"Echec lors de l'enregistrement",open:!0,severity:"error",automaticClose:!0}}))}}),v=Object(s.useMutation)(m.miseajourQuartier,{onSuccess:()=>{p.invalidateQueries("Quartiers"),u(Object(r.a)(Object(r.a)({},l),{},{alert:{message:"Mise \xe0 jour R\xe9ussie...",open:!0,severity:"success",automaticClose:!0}}))},onError:()=>{p.invalidateQueries("Quartiers"),u(Object(r.a)(Object(r.a)({},l),{},{alert:{message:"Echec lors de la mise \xe0 jour",open:!0,severity:"error",automaticClose:!0}}))}}),j=Object(s.useMutation)(m.suppressionQuartier,{onSuccess:()=>{u(Object(r.a)(Object(r.a)({},l),{},{dialogueSuppressionOuvert:!1,alert:{message:"Supr\xe9ssion r\xe9ussie",open:!0,severity:"success"}}))},onError:()=>{u({alert:{message:"Echec lors de la supr\xe9ssion",open:!0,severity:"error"}})},onSettled:()=>{p.invalidateQueries("Quartiers")}}),E={queryQuartiers:b,mutationMiseajour:v,mutationAjout:h,mutationSuppression:j,queryCommunes:f},O=J(g),w=q.b().shape({commune:q.c().required("Le champs Commune est requis"),nom:q.c().required("Le champs Nom est requis"),description:q.c().required("Le champs Description est requis")}),y=Object(K.c)({resolver:Object(X.yupResolver)(w),defaultValues:{quartier:l.quartier}});return o.a.createElement(Q,{state:l,fonctions:g,collonnes:O,queries:E,useform:y,onSubmit:e=>{var t;let a=Object(r.a)(Object(r.a)({},l.quartier),e);void 0!==(null===(t=l.quartier)||void 0===t?void 0:t.id)?E.mutationMiseajour.mutate(Object(r.a)({},a)):E.mutationAjout.mutate(Object(r.a)({},a))}})}}}]);