import * as mongoose from 'mongoose'; 

const schema: any = {
    firstName: {
        type: String,
        required: 'Enter a first name'
    },
    lastName: {
        type: String,
        required: 'Enter a last name'
    },
    email: {
        type: String
    },
    company: {
        type: String
    },
    phone: {
        type: Number
    },
    created_date: {
       type: Date,
       default: Date.now 
    }
}

export const PersonSchema = new mongoose.Schema(schema);
