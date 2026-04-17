const { PeerServer } = require('peer');

const peerServer = PeerServer({
  port: process.env.PORT || 9000,
  path: '/',
  allow_discovery: true,
  proxied: true,
  cors: {
    origin: true,
    credentials: true
  }
});

console.log('✅ PeerJS Server running on port:', process.env.PORT || 9000);
