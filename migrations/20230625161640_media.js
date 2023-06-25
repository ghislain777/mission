const Sequelize = require("sequelize");

/**
 * Actions summary:
 *
 * removeColumn(description) => "media"
 * removeColumn(idmodel) => "media"
 * removeColumn(lien) => "media"
 * removeColumn(model) => "media"
 * addColumn(contact) => "media"
 * addColumn(fichier) => "media"
 * addColumn(type) => "media"
 * addColumn(champ) => "media"
 * addColumn(modele) => "media"
 * changeColumn(nom) => "media"
 *
 */

const info = {
  revision: 7,
  name: "media",
  created: "2023-06-25T16:16:40.090Z",
  comment: "",
};

const migrationCommands = (transaction) => [
  {
    fn: "removeColumn",
    params: ["media", "description", { transaction }],
  },
  {
    fn: "removeColumn",
    params: ["media", "idmodel", { transaction }],
  },
  {
    fn: "removeColumn",
    params: ["media", "lien", { transaction }],
  },
  {
    fn: "removeColumn",
    params: ["media", "model", { transaction }],
  },
  {
    fn: "addColumn",
    params: [
      "media",
      "contact",
      {
        type: Sequelize.INTEGER,
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
        references: { model: "contact", key: "id" },
        field: "contact",
        name: "contact",
        allowNull: true,
      },
      { transaction },
    ],
  },
  {
    fn: "addColumn",
    params: [
      "media",
      "fichier",
      {
        type: Sequelize.STRING,
        field: "fichier",
        comment: "fichier",
        defaultValue: "",
        allowNull: false,
      },
      { transaction },
    ],
  },
  {
    fn: "addColumn",
    params: [
      "media",
      "type",
      {
        type: Sequelize.STRING,
        field: "type",
        comment: "type de media",
        defaultValue: "image",
        allowNull: true,
      },
      { transaction },
    ],
  },
  {
    fn: "addColumn",
    params: [
      "media",
      "champ",
      {
        type: Sequelize.STRING,
        field: "champ",
        comment: "Collone",
        defaultValue: "photo",
        allowNull: true,
      },
      { transaction },
    ],
  },
  {
    fn: "addColumn",
    params: [
      "media",
      "modele",
      {
        type: Sequelize.STRING,
        field: "modele",
        comment: "Modele",
        defaultValue: "produit",
        allowNull: true,
      },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "media",
      "nom",
      {
        type: Sequelize.STRING,
        field: "nom",
        defaultValue: "",
        comment: "Nom",
        allowNull: false,
      },
      { transaction },
    ],
  },
];

const rollbackCommands = (transaction) => [
  {
    fn: "removeColumn",
    params: ["media", "contact", { transaction }],
  },
  {
    fn: "removeColumn",
    params: ["media", "fichier", { transaction }],
  },
  {
    fn: "removeColumn",
    params: ["media", "type", { transaction }],
  },
  {
    fn: "removeColumn",
    params: ["media", "champ", { transaction }],
  },
  {
    fn: "removeColumn",
    params: ["media", "modele", { transaction }],
  },
  {
    fn: "addColumn",
    params: [
      "media",
      "description",
      {
        type: Sequelize.STRING,
        field: "description",
        comment: "Description",
        allowNull: true,
      },
      { transaction },
    ],
  },
  {
    fn: "addColumn",
    params: [
      "media",
      "idmodel",
      {
        type: Sequelize.INTEGER,
        field: "idmodel",
        comment: "ID model",
        allowNull: false,
      },
      { transaction },
    ],
  },
  {
    fn: "addColumn",
    params: [
      "media",
      "lien",
      {
        type: Sequelize.STRING,
        field: "lien",
        comment: "Lien",
        allowNull: false,
      },
      { transaction },
    ],
  },
  {
    fn: "addColumn",
    params: [
      "media",
      "model",
      {
        type: Sequelize.STRING,
        field: "model",
        comment: "Model",
        allowNull: false,
      },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "media",
      "nom",
      {
        type: Sequelize.STRING,
        field: "nom",
        comment: "Nom",
        allowNull: false,
      },
      { transaction },
    ],
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
