import { WalletLinkConnector } from "@web3-react/walletlink-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { InjectedConnector } from "@web3-react/injected-connector";
import { useWeb3React } from '@web3-react/core'
import { Web3Provider } from "@ethersproject/providers";

// import { useToggleState } from "hooks/use-toggle-state";
import { useApi } from "hooks";

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
// <button onClick={() => { activate(WalletConnect) }}>Wallet Connect</button>
// <button onClick={() => { activate(Injected)}}>Injected Connect</button>
export function App() {
    const { activate, deactivate } = useWeb3React();
    const { active, chainId, account } = useWeb3React();
    return (
        <div>
                <button onClick={() => { activate(CoinbaseWallet) }}>Coinbase Wallet</button>
                

                <button onClick={deactivate}>Disconnect</button>
                <div>Connection Status: {active}</div>
                <div>Account: {account}</div>
                <div>Network ID: {chainId}</div>
        </div>
        
    )
}

const apiOpts = {};