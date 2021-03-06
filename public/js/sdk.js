const apiOpts = {};

const deployedContractAddress = "0xd5CF5aDA56328E05f527928C5A31eE668db35771";

const ourabi = [
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
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        }
      ],
      "name": "nftUpdated",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "caption",
          "type": "string"
        }
      ],
      "name": "addCaption",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
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
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "captions",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
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
      "inputs": [
        {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "getId",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "output",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
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
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
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

const nftMetadataAbi = [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"balance","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"operator","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"owner","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"_approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"}];
const nftContractAddress = "0xa4e1d8fe768d471b048f9d73ff90ed8fccc03643";

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

    const minter = new videonft.minter.FullMinter(apiOpts, { ethereum, chainId });
    const mintBtn = document.getElementById('mint-btn');

    console.log(minter);
    let file = window.livepeer.files[0];
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
    // optional, optimizes the video for the NFT
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
    
    const getContract = new ethers.Contract(deployedContractAddress, ourabi, signer);
    const res = await getContract.functions.addNft(signer.getAddress(), nftInfo.contractAddress, nftInfo.tokenId);
    console.log(res);

    return nftInfo;
}


async function updateNft() {
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

    const getContract = new ethers.Contract(deployedContractAddress, ourabi, signer);
    const res = await getContract.functions.updateNft();
    console.log(res);
}

async function addCaption() {
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

    const deployedContract = new ethers.Contract(deployedContractAddress, ourabi, signer);
    const randomResult = await deployedContract.functions.randomResult();
    console.log(Number(randomResult[0]));
    const rand = Number(randomResult[0]);
    const tokenId = await deployedContract.functions.getId(rand);

    const nftContract = new ethers.Contract(nftContractAddress, nftMetadataAbi, signer);
    const tokenOwner = await nftContract.functions.ownerOf(Number(tokenId[0]));
    console.log(tokenOwner);
    console.log(Number(tokenId[0]));
    console.log(document.getElementById('caption').value);
    console.log(signer.getAddress());
    console.log(tokenOwner[0]);

    if (await signer.getAddress() == tokenOwner[0]) {
        const res = await deployedContract.functions.addCaption(Number(tokenId[0]), document.getElementById('caption').value);
        console.log(res);
    }

    
}