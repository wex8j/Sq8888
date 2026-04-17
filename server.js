const express = require('express');
const { ExpressPeerServer } = require('peer');
const cors = require('cors');

const app = express();

// السماح بـ CORS (مهم جداً)
app.use(cors({
  origin: '*',
  credentials: true
}));

// إنشاء سيرفر HTTP
const server = app.listen(process.env.PORT || 9000, () => {
  console.log('✅ Server running on port:', process.env.PORT || 9000);
});

// إعداد PeerJS Server
const peerServer = ExpressPeerServer(server, {
  path: '/',
  allow_discovery: true,
  proxied: true
});

app.use('/peerjs', peerServer);

// صفحة اختبار
app.get('/', (req, res) => {
  res.send('✅ PeerJS Server is running! Use /peerjs for WebSocket connections.');
});

// اختبار ID
app.get('/peerjs/id', (req, res) => {
  res.send('✅ PeerJS is ready! Connect using WebSocket.');
});

console.log('🎬 PeerJS Server configured');
