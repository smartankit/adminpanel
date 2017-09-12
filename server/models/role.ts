import * as mongoose from 'mongoose';

const rolSchema = new mongoose.Schema({
  name: String,
 
});

const Role = mongoose.model('rolelist', rolSchema);

export default Role;
