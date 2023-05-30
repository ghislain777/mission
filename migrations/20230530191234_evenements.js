const Sequelize = require("sequelize");

/**
 * Actions summary:
 *
 * changeColumn(date) => "evenement"
 * changeColumn(typedevenement) => "evenement"
 *
 */

const info = {
  revision: 6,
  name: "evenements",
  created: "2023-05-30T19:12:34.731Z",
  comment: "",
};

const migrationCommands = (transaction) => [
  {
    fn: "changeColumn",
    params: [
      "evenement",
      "date",
      { type: Sequelize.DATE, field: "date", comment: "Date", allowNull: true },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "evenement",
      "typedevenement",
      {
        type: Sequelize.STRING,
        field: "typedevenement",
        comment: "type de levenement",
        allowNull: true,
      },
      { transaction },
    ],
  },
];

const rollbackCommands = (transaction) => [
  {
    fn: "changeColumn",
    params: [
      "evenement",
      "date",
      {
        type: Sequelize.STRING,
        field: "date",
        comment: "Fonction",
        allowNull: true,
      },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "evenement",
      "typedevenement",
      {
        type: Sequelize.DATE,
        field: "typedevenement",
        comment: "Date de levenement",
        allowNull: true,
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
