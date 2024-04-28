const router = require('express').Router();
const {google} = require('googleapis');
const { appengine } = require('googleapis/build/src/apis/appengine');

 
const GOGGLE_CLIENT_ID = '21633126117-m0adi0dqmienhgrd9eierabhklpoi1b3.apps.googleusercontent.com'
const GOOGLE_CLIENT_SECRET = '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'
const REFRESH_TOKEN = '1//06duBmepBLm93CgYIARAAGAYSNwF-L9Irk6oUMPPpRLQFu5fTV9rDrWQ3JkS0p7-fmzfOz8nAE_zRLmrIiUYifP8i_XSiv2wLbZs'

const SCOPES = ['https://www.googleapis.com/auth/calendar.readonly','https://www.googleapis.com/auth/calendar' ]


const oauth2Client = new google.auth.OAuth2(
    GOGGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET,
    'http://localhost:5173',
   
)

router.get('/',(req,res) =>{
  const url = oauth2Client.generateAuthUrl({
    access_type:'offline',
    scope:SCOPES
  })
  res.redirect(url)
})

//router.get('/',async(req,res,next) =>{
    //res.status({message:'ok api is working'})
//})

router.post('/create-token',async(req,res,next) =>{
    try {
      const {code} = req.body
      const response = await oauth2Client.getToken(code)
      res.send(response)
    } catch (error) {
      next(error)
    }
  })
  
  router.post('/create-event',async(req,res,next) =>{
  try {
    const {summary,startDateTime,endDateTime} = req.body;
    oauth2Client.setCredentials({refresh_token:REFRESH_TOKEN},)
    const calendar = google.calendar.apply('v3')
    const response = await calendar.events.insert({
      auth:oauth2Client,
      calendarId:'primary',
      requestBody:{
        start:{
          dateTime: new Date(startDateTime)
      },
      end:{
          dateTime: new Date(endDateTime)
      },
      summary:summary
      }
    })
    res.send(response)
  } catch (error) {
    next(error)
  }
  })
  
  

module.exports = router