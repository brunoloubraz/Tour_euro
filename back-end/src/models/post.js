module.exports = (sequelize, Datatypes) => {
  const Post = sequelize.define('Post', {
    id: {
      type: Datatypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    title: {
      type: Datatypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: Datatypes.DATE,
      allowNull: false,
    },
    userId: {
      type: Datatypes.INTEGER,
      allowNull: false,
      references: {
        model: 'User',
        key: 'id',
      },
      field: 'user_id'
    }
  }, 
  {
    tableName: 'posts',
    timestamps: false,
    underscored: true
  });
  Post.associate = (models) => {
    Post.belongsTo(
      models.User,
      {foreignKey: 'user_id', as: 'user'}
    )
  };
  return Post;
};