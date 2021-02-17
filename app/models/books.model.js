module.exports = (sequelize, Sequelize) => {
  
  const Books = sequelize.define("books", {
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    published: {
      type: Sequelize.BOOLEAN
    }
  });

  return Books;
};
