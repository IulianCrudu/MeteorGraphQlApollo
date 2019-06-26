import SimpleSchema from 'simpl-schema';

export default new SimpleSchema({
    user_id: {
        type: String,
        required: true
    },
    title: String,
    description: String,
    tag: {
        type: Array,
        optional: true
    },
    "tag.$" : String
});