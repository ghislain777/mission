const Sequelize = require("sequelize");

/**
 * Actions summary:
 *
 * removeColumn(chemain) => "media"
 * addColumn(lien) => "media"
 *
 */

const info = {
  revision: 4,
  name: "media",
  created: "2023-05-29T19:32:28.567Z",
  comment: "",
};

const migrationCommands = (transaction) => [
  {
    fn: "removeColumn",
    params: ["media", "chemain", { transaction }],
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
];

const rollbackCommands = (transaction) => [
  {
    fn: "removeColumn",
    params: ["media", "lien", { transaction }],
  },
  {
    fn: "addColumn",
    params: [
      "media",
      "chemain",
      {
        type: Sequelize.STRING,
        field: "chemain",
        comment: "Chemain",
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
