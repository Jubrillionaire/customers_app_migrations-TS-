import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '.';

interface CustomerAttributes {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  age: number;
  phone: string;
};

/*
  We have to declare the CustomerCreationAttributes to
  tell Sequelize and TypeScript that the property id,
  in this case, is optional to be passed at creation time
*/
interface CustomerCreationAttributes
  extends Optional<CustomerAttributes, 'id'> { }

interface CustomerInstance
  extends Model<CustomerAttributes, CustomerCreationAttributes>,
  CustomerAttributes {
  createdAt?: Date;
  updatedAt?: Date;
}


// ... instances code

const Customer = sequelize.define<CustomerInstance>(
  'Customer',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    age: DataTypes.INTEGER,
    email: DataTypes.STRING,
    phone: {
      type: DataTypes.STRING,
      validate: {
        isNumeric: true
      }
    }
  }
);

export default Customer;

