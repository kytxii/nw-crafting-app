import { Model } from "sequelize";
import sequelize from "../db";

class Item extends Model {
  id!: number;
  name!: string;
  weightClass!: number;
  bindOnPickup!: boolean;
  ingots!: number;
  leather!: number;
  cloth!: number;
  planks!: number;
  matrixType!: string;
  matrixAmount!: number;
  scarab!: number;
  link!: string;
  imageURL!: string;
}

Item.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    weightClass: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    bindOnPickup: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    ingots: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    leather: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    cloth: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    planks: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    matrixType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    matrixAmount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    scarab: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    link: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imageURL: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Item",
  }
);

export default Item;
