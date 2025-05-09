import AdminJS from "adminjs";
import AdminJSExpress from "@adminjs/express";
import AdminJSSequelize from "@adminjs/sequelize";
import { DataTypes, Model } from "sequelize";
import sequelize from "../db";

// Register the Sequelize adapter with AdminJS
AdminJS.registerAdapter(AdminJSSequelize);

class Item extends Model {
  public id!: number;
  public name!: string;
  public weightClass!: number;
  public bindOnPickup!: boolean;
  public ingots!: number;
  public leather!: number;
  public cloth!: number;
  public planks!: number;
  public matrixType!: string;
  public matrixAmount!: number;
  public scarab!: number;
  public link!: string;
  public imageURL!: string;
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
