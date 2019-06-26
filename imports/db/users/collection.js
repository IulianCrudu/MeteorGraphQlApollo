import {Meteor} from "meteor/meteor";
import UserSchema from './schema';

const Users = Meteor.users;
// Users.attachschema(UserSchema);

export default Users;