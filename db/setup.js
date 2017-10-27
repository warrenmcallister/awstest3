const query = require('./query')
const qs = `CREATE TABLE IF NOT EXISTS candidates (
  id varchar(250) NOT NULL,   
  completed tinyint(1) NOT NULL default '0',    
  PRIMARY KEY (id)
)`
const setup = () => Promise.all([
  query(qs)
])

module.exports = setup