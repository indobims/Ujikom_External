import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Users = db.define("users",{
    uuidd:{
      type: DataTypes.STRING,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      validate:{
          notEmpty: true
      }
  },
  name:{
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
          notEmpty: true,
          len: [3, 100]
      }
  },
  email:{
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
          notEmpty: true,
          isEmail: true
      }
  },
  Nomer:{
    type: DataTypes.STRING,
    allowNull: false,
    validate:{
        notEmpty: true,
    }
},
  password:{
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
          notEmpty: true
      }
  },
  role:{
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
          notEmpty: true
      }
  }
  },
  {
    freezeTableName: true,
  }
);

export default Users;