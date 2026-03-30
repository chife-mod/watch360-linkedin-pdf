const fs = require('fs');
const https = require('https');
const b64 = (str) => Buffer.from(str).toString('base64');

const token = fs.readFileSync('cookies.txt', 'utf8').split('\t').pop().trim();

function tryDownload(remotePath, localDest) {
    return new Promise((resolve) => {
        const url = 'https://sa.minio-admin.semanticforce.ai/api/v1/buckets/sf-ai/objects/download?prefix=' + b64(remotePath);
        https.get(url, { headers: { 'Cookie': 'token='+token } }, (res) => {
            if (res.statusCode === 200) {
                console.log('✅ Found:', remotePath);
                const file = fs.createWriteStream(localDest);
                res.pipe(file);
                file.on('finish', () => { file.close(); resolve(true); });
            } else {
                res.resume(); // consume response body to free up memory
                resolve(false);
            }
        }).on('error', () => resolve(false));
    });
}

(async () => {
    const candidates = [
        { remote: 'objects-logos/ct_brand_junghans.svg', dest: 'public/assets/logos/junghans.svg' },
        { remote: 'objects-logos/ct_brand_longines.svg', dest: 'public/assets/logos/longines.svg' },
        { remote: 'objects-logos/ct_brand_cartier.svg', dest: 'public/assets/logos/cartier.svg' },
        { remote: 'objects-logos/ct_brand_junghans.png', dest: 'public/assets/logos/junghans.png' },
        { remote: 'objects-logos/ct_brand_longines.png', dest: 'public/assets/logos/longines.png' },
        { remote: 'objects-logos/ct_brand_cartier.png', dest: 'public/assets/logos/cartier.png' },
        { remote: 'objects-watches/ct_product_line_junghans_sport.png', dest: 'public/assets/watches/col_junghans_sport.png' },
        { remote: 'objects-watches/ct_product_line_longines_dolcevita.png', dest: 'public/assets/watches/col_longines_dolcevita.png' },
        { remote: 'objects-logos/ct_product_line_junghans_sport.png', dest: 'public/assets/watches/col_junghans_sport.png' },
        { remote: 'objects-logos/ct_product_line_longines_dolcevita.png', dest: 'public/assets/watches/col_longines_dolcevita.png' },
    ];

    for (const c of candidates) {
        await tryDownload(c.remote, c.dest);
    }
    console.log('Search complete.');
})();
