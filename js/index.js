
let network;
let contract_address;
let connection;
let mainAccount;
let accounts;
let thisURL = window.location.origin.toString();


let Accounttype = "0";
let tokenAddress="0x13df457b58501F4fEdbD9Ed762b0473546f00eDe";
let tokenAbi=[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"_stakeholder","type":"address"}],"name":"addTokenHolder","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_BNBValue","type":"uint256"}],"name":"buyPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"buyPriceCalculation","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_BNBValue","type":"uint256"},{"internalType":"address payable","name":"_refferedBy","type":"address"}],"name":"buyToken","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"_newOwner","type":"address"}],"name":"changeOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"circulatingSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"isTokenHolder","outputs":[{"internalType":"bool","name":"","type":"bool"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"marketCap","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_stakeholder","type":"address"}],"name":"removeTokenHolder","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_numberOfTokens","type":"uint256"}],"name":"sellPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"sellPriceCalculation","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_numberOfTokens","type":"uint256"}],"name":"sellToken","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"tokenHolders","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalTokenMinted","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalTokenSold","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"users","outputs":[{"internalType":"uint256","name":"stakeHolderBonus","type":"uint256"},{"internalType":"uint256","name":"refferalBonus","type":"uint256"},{"internalType":"address payable","name":"upline","type":"address"}],"stateMutability":"view","type":"function"}]

let contractAddress = "0xB3E1a40c71517b122418df92Bd50E7B5E37B3a7F";
let abi=[{"constant":true,"inputs":[],"name":"PERCENTS_DIVIDER","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"getUserDownlineCount","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"getUserDividends","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"getUserAvailable","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"TIME_STEP","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"getUserReferrer","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"getUserReferralTotalBonus","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"PROJECT_FEE","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"PERCENT_STEP","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"plan","type":"uint8"},{"name":"deposit","type":"uint256"}],"name":"getResult","outputs":[{"name":"percent","type":"uint256"},{"name":"profit","type":"uint256"},{"name":"finish","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"REFERRAL_PERCENTS","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalRefBonus","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"getUserReferralWithdrawn","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getContractBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"getUserTotalDeposits","outputs":[{"name":"amount","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalStaked","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"commissionWallet","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"plan","type":"uint8"}],"name":"getPercent","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"getUserAmountOfDeposits","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"plan","type":"uint8"}],"name":"getPlanInfo","outputs":[{"name":"time","type":"uint256"},{"name":"percent","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"userAddress","type":"address"},{"name":"index","type":"uint256"}],"name":"getUserDepositInfo","outputs":[{"name":"plan","type":"uint8"},{"name":"percent","type":"uint256"},{"name":"amount","type":"uint256"},{"name":"profit","type":"uint256"},{"name":"start","type":"uint256"},{"name":"finish","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"startUNIX","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"getUserCheckpoint","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"INVEST_MIN_AMOUNT","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"referrer","type":"address"},{"name":"plan","type":"uint8"},{"name":"_numberOfToken","type":"uint256"}],"name":"invest","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"getUserReferralBonus","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"token","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_token","type":"address"},{"name":"wallet","type":"address"},{"name":"startDate","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"user","type":"address"}],"name":"Newbie","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"user","type":"address"},{"indexed":false,"name":"plan","type":"uint8"},{"indexed":false,"name":"percent","type":"uint256"},{"indexed":false,"name":"amount","type":"uint256"},{"indexed":false,"name":"profit","type":"uint256"},{"indexed":false,"name":"start","type":"uint256"},{"indexed":false,"name":"finish","type":"uint256"}],"name":"NewDeposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"user","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"Withdrawn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"referrer","type":"address"},{"indexed":true,"name":"referral","type":"address"},{"indexed":true,"name":"level","type":"uint256"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"RefBonus","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"user","type":"address"},{"indexed":false,"name":"totalAmount","type":"uint256"}],"name":"FeePayed","type":"event"}]
let mainContract = undefined

let zeroAddress = '0x70DAcfC172eeC57553de491E92d9806e28ff69F2'
let bscScan = "https://bscscan.com/address/"+contractAddress;

let plan = {
	time:"time",
	percent:"percent"
}
let deposit = {
	plan: "plan",
	percent: "percent",
	amount: "amount",
	profit: "profit",
	start: "start",
	finish: "finish"
}

let user = {
	ref: undefined,
	deposits: 0,
	checkpoint: 0,
	address: '',
	levels: 0,
	bonus: "bonus",
	tBonus: "totalBonus"
};

$(function() {
	
	createCookie()
	beginLogins()
})

let attempts = 0
async function beginLogins(){
	window.ethereum.enable()
	await userLoginAttempt()
	setTimeout(() => {
		if(user.address == undefined && attempts < 3){
			setTimeout(() => {
				if(user.address == undefined && attempts < 3){
					attempts++
					beginLogins()
				}
			}, 1000)
		}
	}, 1000)
}

async function userLoginAttempt(){
	let isConnected = false;
	await window.addEventListener('load', async function () {
		
		if (window.ethereum){
			window.web3 = new Web3(ethereum);
			isConnected = true;
		}else if(window.web3){
			window.web3 = new Web3(web3.currentProvider);
		}
		try {
			await ethereum.enable() // Request access
			
			await web3.eth.getAccounts().then(function (result) {
				user.address = result[0]
				//console.log("User " + user.address + " connected.")
				
				initContract()
			})
			$("#contractAddress").effect("fade", 2500, function() {
				$("#contractAddress").fadeIn();
				$("#contractAddress").on('click',function() {
				window.open(bscScan);
				})
			});
		}catch(error){
			console.error(error)
		}
	})
}

async function initContract(){
	try{
		await (
			mainContract = new web3.eth.Contract(abi,contractAddress));
		if(mainContract != undefined){
			//console.log("Contract "+contractAddress+" loaded!")
			startUp()
		}else{
			//console.log('Error initiating contract.')
			setTimeout(() => {
				initContract()
			}, 2000)
		}
	}catch(e){
		//console.log(e)
		setTimeout(() => {
			initContract()
		}, 2000)
	}setInterval(function(){ 
		
			startUp();
	}, 5000);
}

async function startUp(){
	$('#reflink')[0].innerHTML = thisURL+"/?ref="+ user.address;
	contractBalances()
	planPercents()
	await getTotalNumberOfDeposits()
	getUserDepositInfo()
	getUserReferrer()
	getUserCheckpoint()
	getUserReferralTotalBonus()
	getUserDownlineCount()
	getUserTotalDeposits()
	getUserAvailable()
	getUserReferralWithdrawn()
	getUserReferralBonus()
	getBalanceOfAccount()
	
	 
	$('#contractAddress')[0].innerHTML = contractAddress + '\n Contract Address';

	let p2 = user.address.slice(42 - 5)
	
	$('#walletConnet')[0].innerHTML = user.address.slice(0, 4) + "..." + p2
	
	if (user.address != undefined) {
		connection="Metamask is unlocked";
		$("#metamaskConnection").text(connection);
		window.web3.eth.getChainId((err, netId) => {
		  //console.log("networkId==>",netId);
		  switch (netId?.toString()) {
			case "1":
			  //console.log("This is mainnet");
			  $("#network").text("This is mainnet");
			  Accounttype = "1";
			  network = "mainnet";
			  break;
			case "2":
			  //console.log("This is the deprecated Morden test network.");
			  $("#network").text(
				"This is the deprecated Morden test network."
			  );
			  break;
			case "3":
			  //console.log("This is the ropsten test network.");
			  $("#network").text("This is the ropsten test network.");
			  network = "ropsten";
			  break;
			case "4":
			  //console.log("This is the Rinkeby test network.");
			  $("#network").text("This is the Rinkeby test network.");
			  network = "Rinkeby";
			  break;
			case "42":
			  //console.log("This is the Kovan test network.");
			  $("#network").text("This is the Kovan test network.");
			  network = "Kovan";
			  break;
			  case "97":
			  //console.log("This is the BNB test network.");
			  $("#network").text("This is the BNB test network.");
			  network = "BNBTestnet";
			  break;
			  case "57":
				//console.log("This is the BNB main network.");
				$("#network").text("This is the BNB main network.");
				network = "BNBMain";
				break;
			default:
			  //console.log("This is an unknown network.");
			  $("#network").text("This is the unknown test network.");
			  }
			});

	}else{
		connection="Metamask is locked";
		$("#metamaskConnection").text(connection);
	}
}

function isLocked() {
  window.web3.eth.getAccounts(function (err, accounts) {
    if (err != null) {
      //console.log(err);
      $("#lock").text(err);
    } else if (accounts.length === 0) {
      //console.log("MetaMask is locked");
      $("#lock").text("MetaMask is locked.");
    } else {
      //console.log("MetaMask is unlocked");
      $("#lock").text("MetaMask is unlocked.");
    }
  });
}
function getBalanceOfAccount() {
  window.web3.eth.getBalance(user.address, (err, wei) => {
    myBalance = web3.utils.fromWei(wei, 'ether')
    //console.log("Balance===>",myBalance);
    $("#getBalance").text("Account Balance:"+myBalance+" "+"BNB");
})
}

 //Write functions
function toHexString(number){
	return '0x'+number.toString(16)
}
async function stake(planId){
  let ref
	if(validateErcAddress(user.ref))
		ref = user.ref
	else if(user.ref == user.address)
		ref = zeroAdddress
	else 
		ref = zeroAddress
	let	tokenContract = new web3.eth.Contract(tokenAbi, tokenAddress);
	let inputAmount = toHexString($('#plan'+(planId+1)+'amount')[0].value * 1e18)
  
	let res = await tokenContract.methods.approve(mainContract,inputAmount).send({
		from:accounts[0]}).on('receipt', async (receipt)=>{mainContract.methods.invest(ref, planId).send({
			from: user.address,
			value: inputAmount})
	
	}).then(res => {
		alert('TX Hash\n https://bscscan.com/tx/'+res.blockHash+'\nReferrer\n'+ref);
		//console.log(res)
		//$("#investId").text(res);
	})
}
  
$('#withdraw').on('click', function() {      
  return new Promise(async (resolve, reject) => {
	   mainContract.methods.withdraw().send({
		 from:user.address
	   }).on("transactionHash", async (hash) => {
		//console.log("transactionHash: ", hash);
		$("#withDrawId").text(hash);
		});;
  })
});
  //Read Function
  async function getUserDividends() {
    
    return new Promise(async (resolve, reject) => {
      let reward=await mainContract.methods.getUserDividends(user.address).call();
      $("#getUserDividends").text("Dividend:" +web3.utils.fromWei(reward),"ether"+"  "+ "BNB");
    })}
    async function getPercent() {
      let planId=$("#getPercentPlanId").val();
      
      return new Promise(async (resolve, reject) => {
        let percent=await mainContract.methods.getPercent(planId).call();
        $("#percentage").text("percentage:" +percent/100+"%");
      })
}

let totalUserDeposits
async function getTotalNumberOfDeposits() {
    totalUserDeposits = await mainContract.methods.getUserAmountOfDeposits(user.address).call();
    $("#TotalNumberOfDeposits").text("Total: "+totalUserDeposits);
}
async function getUserAvailable() {
  
  return new Promise(async (resolve, reject) => {
    let data=await mainContract.methods.getUserAvailable(user.address).call();
    dataTrunc = data / 1e18;
    //console.log("available",data);
    $("#getUserAvailable").text(abbreviate_number(dataTrunc, 4)+" "+"BNB");
  })
}
async function getUserReferralBonus() {
  
  return new Promise(async (resolve, reject) => {
    let data=await mainContract.methods.getUserReferralBonus(user.address).call();
	dataTrunc = data / 1e18;
    //console.log("data",data);
    $("#getUserReferralBonus").text(abbreviate_number(dataTrunc, 4)+" "+"BNB");
  })
}
async function getUserReferralWithdrawn() {
  
  return new Promise(async (resolve, reject) => {
    let data=await mainContract.methods.getUserReferralWithdrawn(user.address).call();
	dataTrunc = data / 1e18;
    //console.log("data",data);
    $("#getUserReferralWithdrawn").text(abbreviate_number(dataTrunc, 4)+" "+"BNB");
  })
}
async function getUserTotalDeposits() {
    let depositData = await mainContract.methods.getUserTotalDeposits(user.address).call();
	depositDataTrunc = depositData / 1e18;
    //console.log("depositTotal",depositData);
    $("#getUserTotalDeposits").text(abbreviate_number(depositDataTrunc, 4)+" "+"BNB");
}
async function getUserDownlineCount() {
  
  return new Promise(async (resolve, reject) => {
    let data=await mainContract.methods.getUserDownlineCount(user.address).call();
    //console.log("Downline",data);
    downline= $('#getUserDownlineCount')[0].innerHTML = parseInt(data[0]) + parseInt(data[1]) + parseInt(data[2]);
    
    $("#getUserDownlineCountIndex1").text("uint:" +data[0]);
    $("#getUserDownlineCountIndex2").text("uint:" +data[1]);
    $("#getUserDownlineCountIndex3").text("uint:" +data[2]);
  })
}
async function getUserDepositInfo() {
	
	$('.active-stakes')[0].innerHTML = `
	<tr class="container-fluid">
	<td colspan="3"id="getUserDepositInfo1" style="color:red;margin-left: 400px;" class="heading mbr-card-title mbr-fonts-style display-5">Plan</td>
	<td colspan="3"id="getUserDepositInfo2" style="color:red;margin-right: 400px;" class="heading mbr-card-title mbr-fonts-style display-5">Percent</td>
	<td colspan="3"id="getUserDepositInfo3" style="color:red;margin-right: 400px;" class="heading mbr-card-title mbr-fonts-style display-5">Amount</td>
	<td colspan="3"id="getUserDepositInfo4" style="color:red;margin-right: 400px;" class="heading mbr-card-title mbr-fonts-style display-5">Profit</td>
	<td colspan="3"id="getUserDepositInfo5" style="color:red;margin-right: 400px;" class="heading mbr-card-title mbr-fonts-style display-5">Start</td>
	<td colspan="3"id="getUserDepositInfo6" style="color:red;margin-right: 400px;" class="heading mbr-card-title mbr-fonts-style display-5">Finish</td>
	<td colspan="3"id="getUserDepositInfo6" style="color:white;margin-right: 400px;" class="heading mbr-card-title mbr-fonts-style display-5">Status</td>
	
</tr>
	`
	for(let i = 0; i < totalUserDeposits; i++){
		let data = await mainContract.methods.getUserDepositInfo(user.address, i).call();
		let now = new Date().getTime();
		let isFinished = false;
		let start = (new Date(data[4] * 1000).getMonth()+1) +'/'+ new Date(data[4] * 1000).getDate() 
		let end = (new Date(data[5] * 1000).getMonth()+1) +'/'+ new Date(data[5] * 1000).getDate() +" @ "+ new Date(data[5] * 1000).getHours() +":"+ new Date(data[5] * 1000 / 60 * 60).getMinutes()
		const stakeEnd = data[5] *1000;		
		let distance = parseInt(stakeEnd) - parseInt(now);
		
		if (distance <= 0 ) {
			isFinished = "Completed";
	   } else {
			isFinished ="Still Collecting";
	   }		
		
		try {
			let newRow = `
		<tr class="container-fluid">
				<td colspan="3"id="getUserDepositInfo1" style="margin-right: 400px;padding-right: 40px;" class="mbr-content-title mbr-light mbr-fonts-style display-7">${parseInt(data[0])+1}</td>
				<td colspan="3"id="getUserDepositInfo2" style="margin-right: 400px;padding-right: 40px;" class="mbr-content-title mbr-light mbr-fonts-style display-7">${data[1]/10+"%"}</td>
				<td colspan="3"id="getUserDepositInfo3" style="margin-right: 400px;padding-right: 40px;" class="mbr-content-title mbr-light mbr-fonts-style display-7">${web3.utils.fromWei(data[2], "ether")}</td>
				<td colspan="3"id="getUserDepositInfo4" style="margin-right: 400px;padding-right: 40px;" class="mbr-content-title mbr-light mbr-fonts-style display-7">${web3.utils.fromWei(data[3], "ether")}</td>
				<td colspan="3"id="getUserDepositInfo5" style="margin-right: 400px;padding-right: 40px;" class="mbr-content-title mbr-light mbr-fonts-style display-7">${start}</td>
				<td colspan="3"id="getUserDepositInfo6" style="margin-right: 400px;padding-right: 40px;"class="mbr-content-title mbr-light mbr-fonts-style display-7">${end}</td>
				<td colspan="3"id="isFinished" style="color:red;margin-right: 400px;padding-right: 40px;"class="mbr-content-title mbr-light mbr-fonts-style display-7">${isFinished}</td>
			</tr>
		`
		$('.active-stakes')[0].innerHTML += newRow;
			
		} catch (error) {
			alert(error);
		}
	}	
}

async function getUserReferrer() {
  
  return new Promise(async (resolve, reject) => {
    let data = await mainContract.methods.getUserReferrer(user.address).call();
    $("#getUserReferrerAddress").text("refferer:" +data);
  })
}
async function getUserCheckpoint() {
  return new Promise(async (resolve, reject) => {
    let data=await mainContract.methods.getUserCheckpoint(user.address).call();
    $("#getUserCheckpointdata").text("getUserCheckpoint:" +data);
    checkpoint = data;
  })
}
async function getUserReferralTotalBonus() {
  
  return new Promise(async (resolve, reject) => {
    let dataFull = (await mainContract.methods.getUserReferralTotalBonus(user.address).call() / 1e18);
	let data = abbreviate_number(dataFull, 4)
    $("#getUserReferralTotalBonus").text(data+" "+"BNB");
  })
}
 
function copyToClipboard(reflink) {
	var aux = document.createElement("input");
	aux.setAttribute("value", document.getElementById(reflink).innerHTML);
	document.body.appendChild(aux);
	aux.select();
	document.execCommand("copy");
	document.body.removeChild(aux);
	alert("Copied");
}

function clearSelection() {
    if (window.getSelection) {
        window.getSelection().removeAllRanges()
    } else if (document.selection) {
        document.selection.empty()
    }
}
async function contractBalances(){
	let contractBalanceFull = (await mainContract.methods.getContractBalance().call() / 1e18)
	let contractBalance = abbreviate_number(contractBalanceFull, 4)
	$('#balanceContract').text(contractBalance)
	let totalStakedFull = (await mainContract.methods.totalStaked().call() / 1e18)
	let totalStaked = abbreviate_number(totalStakedFull, 4)
	$('#totalStaked').text(totalStaked)
}
async function planPercents() {
	var plans = []
	for(let i = 0; i < 6; i++){
		plans[i] = {
			percent: 0,
			totalPercent: 0,
			day: 0,
			depositAmount: 0,
			total: 0
		}
		let percent = await mainContract.methods.getPercent(i).call()
		$('#plan'+(i+1)+'Percent')[0].innerHTML = parseFloat(percent/10)+ "%";
		plans[i].percent = percent/10;
		let c = await mainContract.methods.getPlanInfo(i).call()                   
		plans[i].totalPercent = $('#plan'+(i+1)+'TPercent')[0].innerHTML = (c.time * plans[i].percent).toFixed(2);
		plans[i].day = $('#plan'+(i+1)+'Day')[0].innerHTML = c.time;
		
		plans[i].depositAmount = $('#plan'+(i+1)+'amount').on('input', function(){
			amount = this.value * plans[i].totalPercent / 100
			$('#plan'+(i+1)+'Total')[0].innerHTML = (parseFloat(amount)).toFixed(3);
		});
	}
}
//COOKIE CREATION
function createCookie() {
    if (window.location.href.indexOf("ref=") < 0) {
        user.ref = zeroAddress
    }else{
        const index = window.location.href.indexOf("ref=") + 4
		let ref = window.location.href.slice(index, index + 42)
		if(window.localStorage) {
			localStorage.setItem('referrerAddress', ref);
		}

		let date = new Date();
		date.setTime(date.getTime() + (10000 * 24 * 60 * 60 * 1000))
		document.cookie = "ref=" + ref + "; expires=" + date.toGMTString()
	}
	accessCookie("ref")
}

//ACCESS COOKIE
function accessCookie(cookieName) {
    let name = cookieName + "=";
	let accessedCookie
    let allCookieArray = document.cookie.split(';');
    for (let i = 0; i < allCookieArray.length; i++) {
        let temp = allCookieArray[i].trim();
        if (temp.indexOf(name) == 0){
			accessedCookie = temp.substring(name.length, temp.length)
			if(validateErcAddress(accessedCookie))
				user.ref = accessedCookie
			//console.log("Referrer: " + user.ref)
		}
    }
}

function validateErcAddress(address) {
    if (typeof address !== 'string')
        return false;

    if (address[0] === "0" && address[1] === "x"&& address.length == 42)
        return true;

    return false;
}

function abbreviate_number(_num, fixed) {
    let num = parseFloat(_num)
    if (num === null) {
        return null;
    } // terminate early
    if (num === 0) {
        return '0';
    } // terminate early
    fixed = (!fixed || fixed < 0) ? 0 : fixed; // number of decimal places to show
    var b = (num).toPrecision(2).split("e"), // get power
        k = b.length === 1 ? 0 : Math.floor(Math.min(b[1].slice(1), 14) / 3), // floor at decimals, ceiling at trillions
        c = k > 0 ? num.toFixed(0 + fixed) : (num / Math.pow(10, k * 3)).toFixed(1 + fixed), // divide by power
        d = c < 0 ? c : Math.abs(c); // enforce -0 is 0
        e = d// + ['', 'K', 'M', 'B', 'T'][k]; // append power

    return e.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");;
}

//TIMER
// //function getLaunchtimer() {
	
// 	const stakeTimeEnd = 1617026400;
// 	const milliseconds = stakeTimeEnd * 1000
	
// 	var x = setInterval(function () {
// 	  var now = new Date().getTime();
// 	  var distance = milliseconds - now;
// 	  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
// 	  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
// 	  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
// 	  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
	
// 	  document.getElementById("timer").innerHTML = "Contract Starts in: "+days + " days " + hours + " hours " + minutes + " minutes " + seconds + " seconds ";
	
// 	  if (distance < 0) {
// 		clearInterval(x);
// 		document.getElementById("timer").innerHTML = "Contract is Live!";
// 	  }
	
// 	}, 1000);
// 	}