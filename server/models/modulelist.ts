import * as mongoose from 'mongoose';

const modulelistSchema = new mongoose.Schema({
  modulename: String,
  link: String,
  alias: String
});

const Modulelist = mongoose.model('Modulelist', modulelistSchema);

export default Modulelist;
