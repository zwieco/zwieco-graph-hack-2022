const apiOpts = {};

async function mintNft() {
    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");

    // Prompt user for account connections
    await provider.send("eth_requestAccounts", []);
    let ethereum = window.ethereum;
    let chainId = window.ethereum.chainId;
    
    ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [{ chainId: '0x13881' }]
    }).then(response => console.log(response))


    const signer = provider.getSigner();
    console.log("Account:", await signer.getAddress());
    console.log(ethereum)
    console.log(chainId);
    await ethereum.enable();
    console.log(web3);
    //const web3 = new Web3(provider);
    let ourabi = [
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "vrfCoordinator",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "linkToken",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "requestId",
              "type": "uint256"
            }
          ],
          "name": "NumberGenerated",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "address",
              "name": "newNft",
              "type": "address"
            }
          ],
          "name": "nftUpdated",
          "type": "event"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "newAddress",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "nftAddress",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            }
          ],
          "name": "addNft",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "name": "arr",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "getBalance",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "output",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "getRandomNumber",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "requestId",
              "type": "bytes32"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "name": "ids",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "nftAmount",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "name": "nfts",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "porque",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "randomResult",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "requestId",
              "type": "bytes32"
            },
            {
              "internalType": "uint256",
              "name": "randomness",
              "type": "uint256"
            }
          ],
          "name": "rawFulfillRandomness",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "updateNft",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        }
    ];

    const minter = new videonft.minter.FullMinter(apiOpts, { ethereum, chainId });
    const mintBtn = document.getElementById('mint-btn');

    console.log(minter);
    // let file = document.getElementById('file').files[0];
    let file = window.livepeer.files[0];
    // console.log('file object', document.getElementById('file'));
    let title = document.getElementById("title").value || "My NFT";
    console.log(title)
    console.log(file)
    console.log('create asset', minter.api.createAsset);
    let progressBar = document.getElementById('progress-bar')
    mintBtn.innerText = "Creating Mintable Video Asset..."

    let asset = await minter.api.createAsset(title, file, (progress) => {
        console.log('progress: ', progress)
        progressBar.style.width = `${progress * 100 }%`;
    });

    mintBtn.innerText = 'Minting....'
    console.log("asset", asset);
    // // optional, optimizes the video for the NFT
    asset = await minter.api.nftNormalize(asset);
    console.log(asset)
    const nftMetadata = {
        description: 'My NFT description',
        traits: { 'my-custom-trait': 'my-custom-value' }
    };
    console.log("metadata", nftMetadata)

    const nftInfo = await minter.createNft({
        name: title,
        file,
        nftMetadata
    });

    mintBtn.innerText = `Minted Video with ID ${nftInfo.tokenId}`;
    console.log(`minted NFT on contract ${nftInfo.contractAddress} with ID ${nftInfo.tokenId}`);
    
    const getContract = new ethers.Contract("0x0D84911f397Ae040eB6fB91604094b7704a073c3", ourabi, signer);
    const res = await getContract.functions.addNft(signer.getAddress(), nftInfo.contractAddress, nftInfo.tokenId);
    console.log(res);

    return nftInfo;
}