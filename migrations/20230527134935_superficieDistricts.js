const Sequelize = require("sequelize");

/**
 * Actions summary:
 *
 * createTable() => "configuration", deps: []
 * createTable() => "menu", deps: []
 * createTable() => "prefecture", deps: []
 * createTable() => "role", deps: []
 * createTable() => "typedelocalite", deps: []
 * createTable() => "activite", deps: [menu]
 * createTable() => "commune", deps: [prefecture]
 * createTable() => "localite", deps: [typedelocalite]
 * createTable() => "district", deps: [commune]
 * createTable() => "contact", deps: [localite]
 * createTable() => "evenement", deps: [localite]
 * createTable() => "voyage", deps: [localite, localite]
 * createTable() => "privilege", deps: [activite, role]
 * createTable() => "utilisateur", deps: [role]
 * createTable() => "media", deps: [voyage, evenement]
 *
 */

const info = {
  revision: 1,
  name: "superficieDistricts",
  created: "2023-05-27T13:49:35.269Z",
  comment: "",
};

const migrationCommands = (transaction) => [
  {
    fn: "createTable",
    params: [
      "configuration",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        parametre: {
          type: Sequelize.STRING,
          field: "parametre",
          comment: "Paramètre",
          allowNull: false,
        },
        valeur: {
          type: Sequelize.STRING,
          field: "valeur",
          comment: "Valeur",
          allowNull: false,
        },
        description: {
          type: Sequelize.STRING,
          field: "description",
          comment: "Description",
          allowNull: true,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "menu",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          primaryKey: true,
          autoIncrement: true,
        },
        nom: {
          type: Sequelize.STRING,
          field: "nom",
          comment: "Nom",
          defaultValue: "",
          allowNull: false,
        },
        description: {
          type: Sequelize.STRING,
          field: "description",
          comment: "Description",
          defaultValue: "",
          allowNull: true,
        },
        icone: {
          type: Sequelize.STRING,
          field: "icone",
          comment: "Icone",
          defaultValue: "",
          allowNull: false,
        },
        position: {
          type: Sequelize.INTEGER,
          field: "position",
          comment: "Position",
          defaultValue: 1,
          allowNull: false,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "prefecture",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          comment: "ID",
          primaryKey: true,
          autoIncrement: true,
        },
        nom: {
          type: Sequelize.STRING,
          field: "nom",
          comment: "Nom",
          defaultValue: "",
          allowNull: false,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "role",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          comment: "ID",
          primaryKey: true,
          autoIncrement: true,
        },
        nom: {
          type: Sequelize.STRING,
          field: "nom",
          comment: "Nom",
          allowNull: false,
        },
        description: {
          type: Sequelize.STRING,
          field: "description",
          comment: "Description",
          allowNull: false,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "typedelocalite",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          comment: "ID",
          primaryKey: true,
          autoIncrement: true,
        },
        nom: {
          type: Sequelize.STRING,
          field: "nom",
          comment: "Nom",
          allowNull: false,
        },
        description: {
          type: Sequelize.STRING,
          field: "description",
          comment: "Description",
          allowNull: true,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "activite",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          primaryKey: true,
          autoIncrement: true,
        },
        nom: {
          type: Sequelize.STRING,
          field: "nom",
          comment: "Nom",
          defaultValue: "",
          allowNull: false,
        },
        description: {
          type: Sequelize.STRING,
          field: "description",
          comment: "Description",
          defaultValue: "",
          allowNull: true,
        },
        chemain: {
          type: Sequelize.STRING,
          field: "chemain",
          comment: "Chemain",
          defaultValue: "",
          allowNull: false,
        },
        icone: {
          type: Sequelize.STRING,
          field: "icone",
          comment: "Icone",
          defaultValue: "",
          allowNull: true,
        },
        position: {
          type: Sequelize.INTEGER,
          field: "position",
          comment: "Position",
          defaultValue: 1,
          allowNull: true,
        },
        menu: {
          type: Sequelize.INTEGER,
          onUpdate: "CASCADE",
          onDelete: "NO ACTION",
          references: { model: "menu", key: "id" },
          field: "menu",
          name: "menu",
          allowNull: false,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "commune",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        nom: {
          type: Sequelize.STRING,
          field: "nom",
          comment: "Nom",
          allowNull: false,
        },
        description: {
          type: Sequelize.STRING,
          field: "description",
          comment: "Description",
          allowNull: true,
        },
        prefecture: {
          type: Sequelize.INTEGER,
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
          references: { model: "prefecture", key: "id" },
          field: "prefecture",
          name: "prefecture",
          allowNull: true,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "localite",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          comment: "ID",
          primaryKey: true,
          autoIncrement: true,
        },
        nom: {
          type: Sequelize.STRING,
          field: "nom",
          comment: "Nom",
          allowNull: false,
        },
        description: {
          type: Sequelize.STRING,
          field: "description",
          comment: "Description",
          allowNull: false,
        },
        typedelocalite: {
          type: Sequelize.INTEGER,
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
          references: { model: "typedelocalite", key: "id" },
          field: "typedelocalite",
          name: "typedelocalite",
          allowNull: true,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "district",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          comment: "ID",
          primaryKey: true,
          autoIncrement: true,
        },
        nom: {
          type: Sequelize.STRING,
          field: "nom",
          comment: "Nom",
          allowNull: false,
        },
        description: {
          type: Sequelize.STRING,
          field: "description",
          comment: "Description",
          allowNull: true,
        },
        population: {
          type: Sequelize.INTEGER,
          field: "population",
          comment: "Population",
          allowNull: true,
        },
        activiteprincipale: {
          type: Sequelize.STRING,
          field: "activiteprincipale",
          comment: "Activite principale",
          allowNull: true,
        },
        superficie: {
          type: Sequelize.INTEGER,
          field: "superficie",
          comment: "Superficie",
          allowNull: true,
        },
        commune: {
          type: Sequelize.INTEGER,
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
          references: { model: "commune", key: "id" },
          field: "commune",
          name: "commune",
          allowNull: true,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "contact",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          comment: "ID",
          primaryKey: true,
          autoIncrement: true,
        },
        nom: {
          type: Sequelize.STRING,
          field: "nom",
          comment: "Nom",
          allowNull: false,
        },
        prenom: {
          type: Sequelize.STRING,
          field: "prenom",
          comment: "Prénom",
          allowNull: true,
        },
        telephone: {
          type: Sequelize.STRING,
          field: "telephone",
          comment: "Téléphone",
          allowNull: true,
        },
        typedecontact: {
          type: Sequelize.STRING,
          field: "typedecontact",
          comment: "Type de contact",
          allowNull: true,
        },
        fonction: {
          type: Sequelize.STRING,
          field: "fonction",
          comment: "Fonction",
          allowNull: true,
        },
        photo: {
          type: Sequelize.STRING,
          field: "photo",
          comment: "Photo",
          allowNull: true,
        },
        commentaire: {
          type: Sequelize.STRING,
          field: "commentaire",
          comment: "Commentaire",
          allowNull: true,
        },
        createdAt: {
          type: Sequelize.DATE,
          field: "createdAt",
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          field: "updatedAt",
          allowNull: false,
        },
        localite: {
          type: Sequelize.INTEGER,
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
          references: { model: "localite", key: "id" },
          field: "localite",
          name: "localite",
          allowNull: true,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "evenement",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          comment: "ID",
          primaryKey: true,
          autoIncrement: true,
        },
        nom: {
          type: Sequelize.STRING,
          field: "nom",
          comment: "Nom",
          allowNull: false,
        },
        description: {
          type: Sequelize.STRING,
          field: "description",
          comment: "Description",
          allowNull: true,
        },
        rapport: {
          type: Sequelize.STRING,
          field: "rapport",
          comment: "Rapport",
          allowNull: true,
        },
        typedevenement: {
          type: Sequelize.DATE,
          field: "typedevenement",
          comment: "Date de levenement",
          allowNull: true,
        },
        date: {
          type: Sequelize.STRING,
          field: "date",
          comment: "Fonction",
          allowNull: true,
        },
        photo: {
          type: Sequelize.STRING,
          field: "photo",
          comment: "Photo",
          allowNull: true,
        },
        commentaire: {
          type: Sequelize.STRING,
          field: "commentaire",
          comment: "Commentaire",
          allowNull: true,
        },
        createdAt: {
          type: Sequelize.DATE,
          field: "createdAt",
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          field: "updatedAt",
          allowNull: false,
        },
        localite: {
          type: Sequelize.INTEGER,
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
          references: { model: "localite", key: "id" },
          field: "localite",
          name: "localite",
          allowNull: true,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "voyage",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          comment: "ID",
          primaryKey: true,
          autoIncrement: true,
        },
        distance: {
          type: Sequelize.FLOAT,
          field: "distance",
          comment: "Distance en km",
          allowNull: true,
        },
        datedepart: {
          type: Sequelize.DATE,
          field: "datedepart",
          comment: "Date de départ",
          allowNull: true,
        },
        datearrivee: {
          type: Sequelize.DATE,
          field: "datearrivee",
          comment: "Date d'arrivée",
          allowNull: true,
        },
        description: {
          type: Sequelize.STRING,
          field: "description",
          comment: "Description",
          allowNull: true,
        },
        consommationcarburant: {
          type: Sequelize.FLOAT,
          field: "consommationcarburant",
          comment: "Consommation de carburant",
          allowNull: true,
        },
        origine: {
          type: Sequelize.INTEGER,
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
          references: { model: "localite", key: "id" },
          field: "origine",
          name: "origine",
          allowNull: true,
        },
        destination: {
          type: Sequelize.INTEGER,
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
          references: { model: "localite", key: "id" },
          field: "destination",
          name: "destination",
          allowNull: true,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "privilege",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          primaryKey: true,
          autoIncrement: true,
        },
        description: {
          type: Sequelize.STRING,
          field: "description",
          comment: "Description",
          defaultValue: "",
          allowNull: false,
        },
        actif: {
          type: Sequelize.BOOLEAN,
          field: "actif",
          comment: "Actif?",
          defaultValue: true,
          allowNull: false,
        },
        activite: {
          type: Sequelize.INTEGER,
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
          references: { model: "activite", key: "id" },
          field: "activite",
          name: "activite",
          allowNull: true,
        },
        role: {
          type: Sequelize.INTEGER,
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
          references: { model: "role", key: "id" },
          field: "role",
          name: "role",
          allowNull: true,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "utilisateur",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          comment: "ID",
          primaryKey: true,
          autoIncrement: true,
        },
        nom: {
          type: Sequelize.STRING,
          field: "nom",
          comment: "Nom",
          allowNull: false,
        },
        prenom: {
          type: Sequelize.STRING,
          field: "prenom",
          comment: "Prénom",
          allowNull: false,
        },
        telephone: {
          type: Sequelize.STRING,
          field: "telephone",
          comment: "Téléphone",
          allowNull: false,
        },
        email: {
          type: Sequelize.STRING,
          field: "email",
          comment: "Email",
          allowNull: false,
        },
        motdepasse: {
          type: Sequelize.STRING,
          field: "motdepasse",
          allowNull: false,
        },
        actif: {
          type: Sequelize.BOOLEAN,
          field: "actif",
          defaultValue: false,
          allowNull: false,
        },
        photo: {
          type: Sequelize.STRING,
          field: "photo",
          defaultValue: "fichiers/photoutilisateur/avatar_utilisateur.png",
          allowNull: true,
        },
        token: {
          type: Sequelize.STRING,
          field: "token",
          defaultValue: "",
          allowNull: true,
        },
        role: {
          type: Sequelize.INTEGER,
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
          references: { model: "role", key: "id" },
          field: "role",
          name: "role",
          allowNull: true,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "media",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          comment: "ID",
          primaryKey: true,
          autoIncrement: true,
        },
        nom: {
          type: Sequelize.STRING,
          field: "nom",
          comment: "Nom",
          allowNull: false,
        },
        model: {
          type: Sequelize.STRING,
          field: "model",
          comment: "Model",
          allowNull: false,
        },
        chemain: {
          type: Sequelize.STRING,
          field: "chemain",
          comment: "Chemain",
          allowNull: false,
        },
        idmodel: {
          type: Sequelize.INTEGER,
          field: "idmodel",
          comment: "ID model",
          allowNull: false,
        },
        description: {
          type: Sequelize.STRING,
          field: "description",
          comment: "Description",
          allowNull: true,
        },
        voyage: {
          type: Sequelize.INTEGER,
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
          references: { model: "voyage", key: "id" },
          field: "voyage",
          name: "voyage",
          allowNull: true,
        },
        evenement: {
          type: Sequelize.INTEGER,
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
          references: { model: "evenement", key: "id" },
          field: "evenement",
          name: "evenement",
          allowNull: true,
        },
      },
      { transaction },
    ],
  },
];

const rollbackCommands = (transaction) => [
  {
    fn: "dropTable",
    params: ["activite", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["commune", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["configuration", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["contact", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["district", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["evenement", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["localite", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["media", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["menu", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["prefecture", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["privilege", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["role", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["typedelocalite", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["utilisateur", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["voyage", { transaction }],
  },
];

const pos = 0;
const useTransaction = true;

const execute = (queryInterface, sequelize, _commands) => {
  let index = pos;
  const run = (transaction) => {
    const commands = _commands(transaction);
    return new Promise((resolve, reject) => {
      const next = () => {
        if (index < commands.length) {
          const command = commands[index];
          console.log(`[#${index}] execute: ${command.fn}`);
          index++;
          queryInterface[command.fn](...command.params).then(next, reject);
        } else resolve();
      };
      next();
    });
  };
  if (useTransaction) return queryInterface.sequelize.transaction(run);
  return run(null);
};

module.exports = {
  pos,
  useTransaction,
  up: (queryInterface, sequelize) =>
    execute(queryInterface, sequelize, migrationCommands),
  down: (queryInterface, sequelize) =>
    execute(queryInterface, sequelize, rollbackCommands),
  info,
};
