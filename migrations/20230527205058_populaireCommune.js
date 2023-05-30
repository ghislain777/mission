const Sequelize = require("sequelize");

/**
 * Actions summary:
 *
 * addColumn(population) => "commune"
 * addColumn(activiteprincipale) => "commune"
 * addColumn(superficie) => "commune"
 *
 */

const info = {
  revision: 3,
  name: "populaireCommune",
  created: "2023-05-27T20:50:58.809Z",
  comment: "",
};

const migrationCommands = (transaction) => [
  {
    fn: "addColumn",
    params: [
      "commune",
      "population",
      {
        type: Sequelize.INTEGER,
        field: "population",
        comment: "Population",
        allowNull: true,
      },
      { transaction },
    ],
  },
  {
    fn: "addColumn",
    params: [
      "commune",
      "activiteprincipale",
      {
        type: Sequelize.STRING,
        field: "activiteprincipale",
        comment: "Activite principale",
        allowNull: true,
      },
      { transaction },
    ],
  },
  {
    fn: "addColumn",
    params: [
      "commune",
      "superficie",
      {
        type: Sequelize.INTEGER,
        field: "superficie",
        comment: "Superficie",
        allowNull: true,
      },
      { transaction },
    ],
  },
];

const rollbackCommands = (transaction) => [
  {
    fn: "removeColumn",
    params: ["commune", "population", { transaction }],
  },
  {
    fn: "removeColumn",
    params: ["commune", "activiteprincipale", { transaction }],
  },
  {
    fn: "removeColumn",
    params: ["commune", "superficie", { transaction }],
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
