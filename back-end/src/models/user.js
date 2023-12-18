module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    firstNname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastNname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    tableName: 'users',
    timestamps: false,
    underscored: true,
  });

  User.associate = (models) => {
    User.hasMany(models.Image, {
      foreignKey: 'user_id',
      as: 'images',
    });

    User.hasMany(models.Post, {
      foreignKey: 'user_id',
      as: 'posts',
    });
  };

  return User;
};
