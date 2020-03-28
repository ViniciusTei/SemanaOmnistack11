const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const {errors} = require('celebrate')

const app = express();

app.use(cors())
app.use(express.json());
app.use(routes);
app.use(errors())

module.exports = app;

/* Meteodso HTTP
 * GET: buscar informacoe do back-end
 * POST: criar informacoes no back-end
 * PUT: alterar informacoes do back-end
 * DELETE: deletar informacoes do bakc-end 
 */

 /**
  * Tipo de parametros
  * 
  * Query params: parametros nomeados eviados nas rotas apos '?' (filtros, paginacao)
  * Route params: parametros usados para identificar recursos
  * Request body: 
  */