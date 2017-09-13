import * as mongoose from 'mongoose';

const moduleroleSchema = new mongoose.Schema({
  usertype: String,
  namemodule: []
 
});

const Modulename = mongoose.model('Modulerole', moduleroleSchema);

export default Modulename;
