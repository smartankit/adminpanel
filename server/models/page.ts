import * as mongoose from 'mongoose';

const pageSchema = new mongoose.Schema({
  pagename: String,
  desc: String,
 
});

const Page = mongoose.model('staticpage', pageSchema);

export default Page;
