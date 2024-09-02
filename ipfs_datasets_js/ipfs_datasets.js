import { PGlite } from "@electric-sql/pglite";

export class ipfsDatasetsJs {
    constructor(resources, metadata) {

    }

    async init(libp2p_kit_js, orbitdb_kit_js, ipfs_kit_js) {
        this.libp2pKitJs = libp2p_kit_js;
        this.orbitDbKitJs = orbitdb_kit_js;
        this.ipfsKitJs = ipfs_kit_js;
        this.newPGlite();
        return this;
    }
    
    async newPGlite() {
        this.pglite = new PGlite();
    }

    async loadPGlite(handle) {
        // "idb://my-pgdata"
        // "./path/to/pgdata"
        return this.pglite(handle);
    }

    async queryPGlite(handle, sql) {
        return this.pglite.query(sql);
    }

}
export default ipfsDatasetsJs;