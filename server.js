import express from 'express';
const app = express();
const port = 3000;

// Built in body parser
app.use(express.json({ limit: '1mb' }));

app.use('/', (req, res) => {
  console.info(`${req.method} ${req.url} :\n${JSON.stringify(req.body, null, 2)}`);

  res.json({
    date: new Date().toISOString(),
  })
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
}).on('error', (ex) => {
  console.error(`Server exited abnormally with error : ${ex.message}`);
});
