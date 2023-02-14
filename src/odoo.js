import Odoo from 'odoo-react'
const odoo = new Odoo({
  host: 'YOUR_SERVER_ADDRESS',
  port: 8069, /* Defaults to 80 if not specified */
  database: 'YOUR_DATABASE_NAME',
  username: 'YOUR_USERNAME', /* Optional if using a stored session_id */
  password: 'YOUR_PASSWORD', /* Optional if using a stored session_id */
  session_id: 'YOUR_SESSION_ID', /* Optional if using username/password */
  context : 'Your_Context', /* Optional Like Change Language */
})

odoo.authenticate()
.then(response => { /* ... */ })
.catch(e => { /* ... */ })