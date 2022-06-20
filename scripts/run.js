const { xGetBalance, xMyFunc, xWave,xListAllWaves,xWithdraw }= require("./action.js")
async function main() {
    
await xGetBalance()
//await xWave("Test Wave")
listCleanedWaves=await xListAllWaves()
console.log("List all waves")
for (const wave of listCleanedWaves) {
  console.log(wave)
}

//await xWithdraw()

// const sum_result=await xMyFunc([5,10,20])
// console.log(sum_result)


}

// main
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })