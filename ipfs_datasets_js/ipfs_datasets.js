export class ipfsDatasetsJs {
    constructor(resources, metadata) {
        // this._contract = new Contract("ipfs_accelerate", ipfs_accelerate_abi);
    }

    async init(libp2p_kit_js, orbitdb_kit_js, ipfs_kit_js) {
        this.libp2pKitJs = libp2p_kit_js;
        this.orbitDbKitJs = orbitdb_kit_js;
        this.ipfsKitJs = ipfs_kit_js;
        return this;
    }
    
    async getContract() {
        return this._contract;
    }

    async getIpfsHash() {
        return await this._contract.methods.getIpfsHash().call();
    }

    async setIpfsHash(ipfsHash) {
        return await this._contract.methods.setIpfsHash(ipfsHash).send();
    }

}
export default ipfsAccelerateJs;