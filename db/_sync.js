const db = require('./index');

async function sync()
{
    await db.Downloads.sync({force:true});
    await db.Logs.sync({force:true});
    await db.Actions.sync({force:true});
}
sync();