const Entry = require('../models/entry')

exports.getEntries = (req, res, next) => {
  Entry.findAll().then(entries => {
    console.log(`entries==> ${entries}`)
    res.render('vw-entries', {
      title: `vw-entries`,
      entries: entries,
    })
  })
}

exports.addEntries = (req, res, next) => {
  const topic = req.body.topicPost
  const title = req.body.titlePost
  const blurb = req.body.blurbPost
  const url = req.body.urlPost
  const keywords = req.body.keywordsPost
  const date_happened = req.body.date_happenedPost
  const cross_refs = req.body.cross_refsPost
  const attachments = req.body.attachmentsPost
  const note = req.body.notePost
  Entry.create({
      topic: topic,
      title: title,
      blurb: blurb,
      url: url,
      keywords: keywords,
      date_happened: date_happened,
      cross_refs: cross_refs,
      attachments: attachments,
      note: note
    })
    .then(result => {
      // console.log(result);
      console.log(`
      result==> ${result}
        `)
      res.render('vw-editEntry', { //render searchResults to vw-MySqlTableHub page
        title: `vw-editEntry`,
        // entries: entries,
      })
    })
    .catch(err => {
      console.log(err);
    })
}