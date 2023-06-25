const express = require('express')
const cors = require('cors');
const logger = require("./services/logger")
const roleRoutes = require('./routes/role_routes');
const utilisateurRoutes = require('./routes/utilisateur_routes');
const bodyParser = require('body-parser');
const menuRoutes = require('./routes/menu_route');
const activiteRoutes = require('./routes/activite_routes');
const privilegeRoutes = require('./routes/privilege_routes');
const prefectureRoutes = require('./routes/prefecture_routes.js')
 const communeRoutes = require('./routes/commune_routes.js')
 const districtRoutes = require('./routes/district_routes.js')
 const configurationRoutes = require('./routes/configuration_routes.js')
 const contactRoutes = require('./routes/contact_routes.js')
 const voyageRoutes = require('./routes/voyage_routes.js')
 const localiteRoutes = require('./routes/localite_routes.js')
 const evenementRoutes = require('./routes/evenement_routes.js')
const mediaRoutes = require('./routes/media_routes');

const appRoutes = require('./routes/app_routes');





const PORT = process.env.PORT || 8000
const app = express()
const path = require('path');
app.use(express.static('public')); // servir les fichiers du repertoire public comme statiques
app.use(express.static('.well-known'));
//app.use(express.static(path.join(__dirname, 'public')));
// app.use((req, res, next) => {
//   logger.info(`${req.method} ${req.url}`);
//   next();
// });

app.use(bodyParser.json())
app.use(cors({
  origin: '*'
}));

app.use('/api/roles', roleRoutes);
app.use('/api/utilisateurs', utilisateurRoutes);
app.use('/api/menus', menuRoutes);
app.use('/api/activites', activiteRoutes);
app.use('/api/privileges', privilegeRoutes);
app.use('/api/prefectures', prefectureRoutes); 
app.use('/api/communes', communeRoutes); 
app.use('/api/districts', districtRoutes); 
app.use('/api/configurations', configurationRoutes); 
app.use('/api/contacts', contactRoutes); 
app.use('/api/voyages', voyageRoutes); 
app.use('/api/localites', localiteRoutes); 
app.use('/api/evenements', evenementRoutes); 
app.use('/api/medias', mediaRoutes)
app.use('/api/app', appRoutes); 





app.get("/test", (req, res) => {
try {
  res.send({res:"ok"})
} catch (error) {
  
  res.status(500).send({result:"ok"})
}
}
  )

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


const multer = require('multer');
const fonctions = require('./fonctions');

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log(req.body);
    const objet = req.body.objet  // objet de l'upload
    const ext = file.mimetype.split("/")[0];
     cb(null, `public/fichiers/`)
  },
  filename: (req, file, cb) => {
    const extension = file.originalname.slice(
      ((file.originalname.lastIndexOf('.') - 1) >>> 0) + 2
    );
    const nouveauNom = fonctions.uniqid()
    const nouveauFichier = `${nouveauNom}.${extension}`
    cb(null, `${req.body.objet}/${nouveauFichier}`)
  },
});
  const upload = multer({ storage: multerStorage,limits : {fileSize : 4000000}  }); // 4 Mégas

  app.post("/api/fichier/upload", upload.single("file"), (req, res) => {
    console.log(req.file.filename)
    res.json(`${req.file.filename}`);
  });


app.listen(PORT, '0.0.0.0', () => {
logger.info(`Application en cours d'execution au port ${PORT}`)
});
