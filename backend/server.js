const express = require('express');
const createError = require('http-errors');
require('dotenv').config();
const app = express();
const cors = require('cors');
const {google} = require('googleapis');

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());

const GOGGLE_CLIENT_ID = '433784948390-lp2v21b6svlilevtq6ek19pr55oq45bo.apps.googleusercontent.com'
const GOOGLE_CLIENT_SECRET = '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'
const REFRESH_TOKEN = '1//0ghNyfEuEGzjaCgYIARAAGBASNwF-L9IrgNA-5bhUzxGHlYkfTyL1gTUBFKEpjSibwwTFmShYlzI3X4v81COxp7zJVhMSZvogEQI'

const oauth2Client = new google.auth.OAuth2(
    GOGGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET,
    'http://localhost:5173',
   
)
  

app.get('/',async(req,res,next) =>{
  res.send({message:'awesome'})
})

app.post('/create-token', async (req, res) => {
  
});

app.post('/create-event', async (req, res,next) => {
  try {
      const {summary,startDateTime,endDateTime} = req.body;
      oauth2Client.setCredentials({refresh_token:REFRESH_TOKEN},)
      const calendar = google.calendar({ version: 'v3', auth: oauth2Client });
      const response = await calendar.events.insert({
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
      res.send(response.data)
    } catch (error) {
      next(error)
    }
});

app.get('/events', async (req, res) => {
  try {
    oauth2Client.setCredentials({refresh_token:REFRESH_TOKEN},)
    const calendar = google.calendar({version: 'v3', auth:oauth2Client});
    const response = await calendar.events.list({
      calendarId: 'primary', 
      timeMin: new Date().toISOString(),
      maxResults: 10,
      singleEvents: true,
      orderBy: 'startTime',
    });
    const events = response.data.items;
    res.json({events})
  } catch (error) {
    console.error('Error retrieving events:', error);
    res.status(500).json({ error: 'Error retrieving events' });
  }
});


const PORT =process.env.PORT || 3000;
app.listen(PORT, () => console.log(`running in port${PORT}`))