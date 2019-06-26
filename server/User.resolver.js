import {Meteor} from "meteor/meteor";
import {asyncIterator} from "apollo-live-server";

export default {
    Query: {
        users() {
            return Meteor.users.find().fetch();
        },
        me(_, args, context) {;
            return Meteor.users.findOne(context.userId);
        }
    },
    Subscription: {
        users: {
            resolve: payload => payload,
            subscribe(_, args, {db}) {
                const observer = db.users.find();

                return asyncIterator(observer);
            }
        }
    }
};