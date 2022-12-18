//note this is not working if you get the assetid of a gamepass
const noblox = require('noblox.js')

//config
const cookie = "add your cookie here"
const idasset = 'the assetid here'

async function buyasset(assetid) {
  console.log(`made by Dhirk#3469`)
  console.log("Github: https://github.com/Dhirk07")
  try {
    const UserCurrent = await noblox.setCookie(cookie) 
    console.log(`Logged in as ${UserCurrent.UserName} ID: [${UserCurrent.UserID}]`)
    await noblox.buy(assetid)
    console.log(`Success Buying: ${assetid}`)
  }catch (err) {
     console.log(`failed buying: ${assetid}`)
     console.log(`error: ${err}`)
    }
}

buyasset(idasset);
