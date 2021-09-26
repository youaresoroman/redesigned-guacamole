import { Router } from 'worktop';
import * as Cache from 'worktop/cache';
import * as CORS from 'worktop/cors';

declare global {
  const xapikey: string
}

const API = new Router();

API.prepare = CORS.preflight({
  origin: '*',
  headers: ['Cache-Control', 'Content-Type', 'X-Count'],
  methods: ['GET'],
});

API.add('GET', '/accounts', async (req, res) => {
  await fetch("https://recruitmentdb-508d.restdb.io/rest/accounts", {
    headers: {
      "x-apikey": xapikey
  }})
  .then((res) => res.json())
  .then((data) => res.send(200, data))
  .catch((error) => res.send(500, error.message))
});

API.add('GET', '/accounttypes', async (req, res) => {
  await fetch("https://recruitmentdb-508d.restdb.io/rest/accounttypes", {
    headers: {
      "x-apikey": xapikey
  }})
  .then((res) => res.json())
  .then((data) => res.send(200, data))
  .catch((error) => res.send(500, error.message))
});

Cache.listen(API.run);