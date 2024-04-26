const router = require('express').Router();
const {google} = require('googleapis');

 
const GOGGLE_CLIENT_ID = '433784948390-lp2v21b6svlilevtq6ek19pr55oq45bo.apps.googleusercontent.com'
const GOOGLE_CLIENT_SECRET = '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'
const REFRESH_TOKEN = '1//06duBmepBLm93CgYIARAAGAYSNwF-L9Irk6oUMPPpRLQFu5fTV9rDrWQ3JkS0p7-fmzfOz8nAE_zRLmrIiUYifP8i_XSiv2wLbZs'

const SCOPES = ['https://www.googleapis.com/auth/calendar.readonly','https://www.googleapis.com/auth/calendar' ]


const oauth2Client = new google.auth.OAuth2(
    GOGGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET,
    'http://localhost:5173',
   SCOPES
)


router.get('/',async(req,res,next) =>{
    res.status({message:'ok api is working'})
})

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