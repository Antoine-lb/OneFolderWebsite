import type { PageServerLoad } from '$types';


export const load: PageServerLoad = async () => {
    const BACKUP_VERSION_IF_FETCH_FAILS = '1.0.11';
    let windows = `https://github.com/OneFolderApp/OneFolder/releases/download/v${BACKUP_VERSION_IF_FETCH_FAILS}/OneFolder-Setup-${BACKUP_VERSION_IF_FETCH_FAILS}.exe`;
    let mac = `https://github.com/OneFolderApp/OneFolder/releases/download/v${BACKUP_VERSION_IF_FETCH_FAILS}/OneFolder-${BACKUP_VERSION_IF_FETCH_FAILS}-arm64.dmg`;
    let linux = `https://github.com/OneFolderApp/OneFolder/releases/download/v${BACKUP_VERSION_IF_FETCH_FAILS}/OneFolder-${BACKUP_VERSION_IF_FETCH_FAILS}.AppImage`;

    
    try {
        const response = await fetch('https://api.github.com/repos/OneFolderApp/OneFolder/releases/latest', {
            method: 'GET',
            headers: {
                'Accept': 'application/vnd.github.v3+json'
            },
        });
    
        const json = await response.json();
        const assets = json.assets;
    
         windows = assets.find(asset => asset.name.endsWith('.exe'))?.browser_download_url;
         mac = assets.find(asset => asset.name.endsWith('.dmg'))?.browser_download_url;
         linux = assets.find(asset => asset.name.endsWith('.AppImage'))?.browser_download_url;
    } catch (error) {
        console.error(error);
    }
 
	return { windows, mac, linux}
};