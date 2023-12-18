module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    imageTitle: {
      type: DataTypes.STRING,
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    image_data: {
      type: DataTypes.BLOB('long'),
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'User',
        key: 'id',
      },
      field: 'user_id'
    },
  },
  {
    tableName: 'images',
    timestamps: false,
    underscored: true,
  });

  Image.associate = (models) => {
    Image.belongsTo(
      models.User,
      { foreignKey: 'user_id', as: 'user' }
    )
  };
  return Image;
}