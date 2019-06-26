import {initialize} from "meteor/cultofcoders:apollo"
import {load} from 'graphql-load';
import UserType from './User.gql';
import UserResolver from './User.resolver';
import PostType from './Post.gql';
import PostResolver from './Post.resolver';
import Users from '../imports/db/users/collection';
import Posts from '../imports/db/posts/collection';

load({
    typeDefs: [UserType,PostType],
    resolvers: [UserResolver,PostResolver]
});

initialize();