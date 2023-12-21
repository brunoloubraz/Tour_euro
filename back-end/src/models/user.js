module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    tableName: 'users',
    timestamps: false,
    // underscored: true,
  });

  User.associate = (models) => {
    User.hasMany(models.Image, {
      foreignKey: 'userId',
      as: 'images',
    });

    User.hasMany(models.Post, {
      foreignKey: 'userId',
      as: 'posts',
    });
  };

  return User;
};
