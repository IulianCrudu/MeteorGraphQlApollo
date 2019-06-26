import {initAccounts} from "meteor/cultofcoders:apollo-accounts";
import {load} from "graphql-load";

const AccountsModule = initAccounts({
    loginWithFacebook: false,
    loginWithGoogle: false,
    loginWithLinkedIn: false,
    loginWithPassword: true,
});

load(AccountsModule);