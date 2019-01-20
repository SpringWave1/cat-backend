// 部署的方法
function deploy()
{
    var _name = "猫猫区块链" ;
    var nameContract = web3.eth.contract(abihere);
    var name = nameContract.new(
        _name,
        {
            from: web3.eth.accounts[0],
            data: '使用solc编译获得的code',
            gas: '288628',
            gasPrice: 4
        }, function (e, contract){
            console.log(e, contract);
            if (e !== 'undefined') {
                if (typeof contract.address !== 'undefined') {
                    console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
                } else {
                    console.log('Contract mined! transactionHash: ' + contract.transactionHash);
                }
            }
        });
}