import { exec, execSync } from 'child_process';   

export class install_ipfs_datasets {
    constructor() {
        this.imports = {};
    }

    async init() {
        let init_results = {};
        return init_results;
    }

    async install_pnpm() {
        console.log("Running install for ipfs_datasets_js/install/install.js");s
        let install_pnpm_results = {}
        let install_pnpm_cmd = "curl -fsSL https://get.pnpm.io/install.sh | sh -"
        try{
            install_pnpm_results = execSync(install_pnpm_cmd, {stdio: 'inherit'});
        }
        catch (e) {
            install_pnpm_results = e
        }
        return install_pnpm_results
    }

    async install() {
        let install_results = {}
        // install_results.install_pnpm = await this.install_pnpm()
        return install_results
    }
    async test() {
        let test_results = {}
        console.log("Running tests for ipfs_datasets_js/install/install.js");
        return test_results
    }
}