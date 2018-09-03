const Express = require('express');
const bodyParser = require('body-parser');
const tokenizer = require('wink-tokenizer');
const posTagger = require( 'wink-pos-tagger' );
 
const PORT = process.env.PORT || 3001;

const app = Express();
var cors = require('cors');
const tagger = posTagger();

app.use(bodyParser.json());

app.use(cors());

app.post('/api', (req, res) => {

  const text = req.body.text;

  const taggedText = tagger.tagSentence(text);

  res.json(taggedText);
})




app.listen(PORT, (err) => {
  if (err) throw err;

  console.log(`now listening on port ${PORT}`);
})