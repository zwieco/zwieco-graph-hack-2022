import { ApolloClient, InMemoryCache, gql } from '@apollo/client'

const APIURL = 'https://api.thegraph.com/subgraphs/name/jonathanzwiebel/fifteen-minutes-of-fame'

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

export async function getHash() {
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
    console.log(tokenId);
    console.log(Number(tokenId[0]));

    const getContract = new ethers.Contract(nftContractAddress, nftMetadataAbi, signer);
    const res = await getContract.functions.tokenURI(Number(tokenId[0]));
    console.log(res);
    const response = await fetch("https://ipfs.io/ipfs/" + res[0].split("//")[1]);
    console.log(response);
    const json = await response.json();
    console.log(json);
    const caption = await deployedContract.functions.captions(Number(tokenId[0]));
    console.log(caption)
    return [json['properties']['video'].split('//')[1], caption[0]]
}

export async function getLeaderboard() {
    const randomQuery = `
    query {
        randomNumbers {
            id
            generatedTimestamp
            value
        }
    }
    `
    const nftsQuery = `
    query nftsQuery ($lowerBound:BigInt, $upperBound:BigInt) {
        nfts(where: {mintedTimestamp_gte: "0", mintedTimestamp_lt: "1654435440"}) {
          id
          collectionID
          nftID
        }
    }
    `

    const client = new ApolloClient({
        uri: APIURL,
        cache: new InMemoryCache(),
    })

    let timestamps = [];
    let randomNumbers = [];

    await client
        .query({
            query: gql(randomQuery),
        })
        .then(function(data) {
            const arr = data['data']['randomNumbers'];
            console.log('Subgraph data: ', arr);
            for (let i = 0; i < arr.length; i++) {
                timestamps.push(arr[i]['generatedTimestamp']);
                randomNumbers.push(arr[i]['value']);
            }
            console.log(timestamps);
            console.log(randomNumbers);
        })
        .catch((err) => {
            console.log('Error fetching data: ', err)
        })
    const selectedNfts = [];
    for (let i = 0; i < timestamps.length - 1; i++) {
        await client
            .query({
                query: gql(nftsQuery),
                variables: {
                    lowerBound: timestamps[0],
                    upperBound: timestamps[i+1]
                }
            })
            .then(function(data) {
                const arr = data['data']['nfts'];
                console.log('Subgraph data pt 2: ', arr);
                selectedNfts.push(arr[randomNumbers[i+1] % arr.length]);
            })
            .catch((err) => {
                console.log('Error fetching data: ', err)
            })
        
    }
    console.log(selectedNfts);
    const output = []

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

    for (let i = 0; i < selectedNfts.length; i++) {
        const nftID = selectedNfts[i]['nftID'];
        console.log(nftID)
        const getContract = new ethers.Contract(nftContractAddress, nftMetadataAbi, signer);
        const res = await getContract.functions.tokenURI(Number(nftID));
        console.log(res);
        const response = await fetch("https://ipfs.io/ipfs/" + res[0].split("//")[1]);
        console.log(response);
        const json = await response.json();
        console.log(json);
        const deployedContract = new ethers.Contract(deployedContractAddress, ourabi, signer);
        const caption = await deployedContract.functions.captions(Number(nftID));
        console.log(caption)
        output.push([json['properties']['video'].split('//')[1], caption[0]])
    }
    console.log(output);
    return output;
}
