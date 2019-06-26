import {Meteor} from "meteor/meteor";

export default {
    Query: {
        posts(_,args,context) {
            console.log(context);
            return context.db.posts.find().fetch();
        }
    },
    Mutation: {
        addPost(_,{user_id, title, description},{db}) {
            const Post = {
                user_id,
                title,
                description
            };

            db.posts.insert(Post);
            return Post;
        }
    }
}