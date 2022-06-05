import { WalletLinkConnector } from "@web3-react/walletlink-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { InjectedConnector } from "@web3-react/injected-connector";
import { useWeb3React } from '@web3-react/core'
import { Web3Provider } from "@ethersproject/providers";
import { getHash } from "./helper";
import React from 'react';

const CoinbaseWallet = new WalletLinkConnector({
 url: `https://ethereum-mainnet--rpc.datahub.figment.io/apikey/1b5e74e28f1e5c4342cee7917c40ebaf`,
 appName: "Web3-react Demo",
 supportedChainIds: [1, 3, 4, 5, 42],
});

const WalletConnect = new WalletConnectConnector({
 rpcUrl: `https://ethereum-mainnet--rpc.datahub.figment.io/apikey/1b5e74e28f1e5c4342cee7917c40ebaf`,
 bridge: "https://bridge.walletconnect.org",
 qrcode: true,
});

const Injected = new InjectedConnector({
 supportedChainIds: [1, 3, 4, 5, 42]
});

function getLibrary(provider) {
    return new Web3Provider(provider);
}

export function App() {
    const { activate, deactivate } = useWeb3React();
    const { active, chainId, account } = useWeb3React();
    return (
        <div class="grid place-items-center">
                <button class="bg-transparent hover:bg-[#00eb88] text-[#00eb88]  font-semibold hover:text-white py-2 px-4 border border-[#00eb88] hover:border-transparent rounded"
                        onClick={() => { activate(CoinbaseWallet) }}>Coinbase Wallet</button>
                <button class="bg-transparent hover:bg-[#00eb88] text-[#00eb88]  font-semibold hover:text-white py-2 px-4 border border-[#00eb88] hover:border-transparent rounded" 
                        onClick={deactivate}>Disconnect</button>
        </div>
        
    )
}


export class Video extends React.Component {
    constructor () {
        super();
        this.state = {
            data: null
        } 
      }

    async componentDidMount() {
        const hash = await getHash();
        const link = "https://ipfs.io/ipfs/" + hash;
        console.log(link);
        this.setState({data: link});
    }
    
    render() {
        return (
        <div class="grid place-items-center inline-block align-bottom">
            {this.state.data === null ? 
                <div>Loading</div>
            :
            <iframe src={this.state.data} width="560" height="315" frameBorder="0" allowFullScreen=""></iframe>
            }
        </div>
        );
    }
}

const apiOpts = {};