export const EntrySchema = {
    name: 'entry',
    properties: {
        _id: 'objectId',
        _partition: 'string',
        calories: 'int?',
        desc: 'string',
        entry_partition: 'string',
    },
    primaryKey: '_id',
};



export default EntrySchema;


