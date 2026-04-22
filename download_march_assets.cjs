const fs = require('fs');
const https = require('https');
const path = require('path');
const b64 = (str) => Buffer.from(str).toString('base64');

const token = fs.readFileSync('cookies.txt', 'utf8').split('\t').pop().trim();

function tryDownload(remotePath, localDest) {
    return new Promise((resolve) => {
        const dir = path.dirname(localDest);
        if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
        
        const url = 'https://sa.minio-admin.semanticforce.ai/api/v1/buckets/sf-ai/objects/download?prefix=' + b64(remotePath);
        https.get(url, { headers: { 'Cookie': 'token='+token } }, (res) => {
            if (res.statusCode === 200) {
                console.log('✅ Downloaded:', remotePath, '→', localDest);
                const file = fs.createWriteStream(localDest);
                res.pipe(file);
                file.on('finish', () => { file.close(); resolve(true); });
            } else {
                console.log('❌ Not found ('+res.statusCode+'):', remotePath);
                res.resume();
                resolve(false);
            }
        }).on('error', (e) => { console.log('⚠️ Error:', remotePath, e.message); resolve(false); });
    });
}

(async () => {
    console.log('=== March 2026 Asset Download ===\n');
    
    // ─── BRAND LOGOS (for Brands slide 04 + Collections + Refs) ───
    const brandLogos = [
        // Brands slide: Delma, DOXA, Omega, Nomos Glashütte, Breguet
        // (Longines and Breitling already exist)
        { snake: 'delma',           local: 'delma' },
        { snake: 'doxa',            local: 'doxa' },
        { snake: 'omega',           local: 'omega' },
        { snake: 'nomos_glashutte', local: 'nomos_glashutte' },
        { snake: 'breguet',         local: 'breguet' },
        // Collections slide extras:
        { snake: 'tissot',          local: 'tissot' },
        { snake: 'citizen',         local: 'citizen' },
        { snake: 'mido',            local: 'mido' },
        // Refs in Media extras:
        { snake: 'h_moser_cie',     local: 'h_moser_cie' },
        { snake: 'h_moser___cie',   local: 'h_moser_cie_alt' },
        { snake: 'artya',           local: 'artya' },
        { snake: 'armin_strom',     local: 'armin_strom' },
    ];
    
    console.log('--- Brand Logos ---');
    const logoResults = {};
    for (const b of brandLogos) {
        // Try SVG first, then PNG
        let ok = await tryDownload(`objects-logos/ct_brand_${b.snake}.svg`, `public/assets/logos/${b.local}.svg`);
        if (!ok) {
            ok = await tryDownload(`objects-logos/ct_brand_${b.snake}.png`, `public/assets/logos/${b.local}.png`);
        }
        logoResults[b.local] = ok;
    }
    
    // ─── COLLECTION WATCH PHOTOS (for Collections slides 15, 15b) ───
    console.log('\n--- Collection Watch Photos ---');
    const collections = [
        { guid: 'delma_diver',            local: 'col_delma_diver' },
        { guid: 'doxa_sub_200_ii',        local: 'col_doxa_sub_200_ii' },
        { guid: 'longines_conquest',      local: 'col_longines_conquest' },
        { guid: 'omega_constellation',    local: 'col_omega_constellation' },
        { guid: 'nomos_glashutte_club',   local: 'col_nomos_glashutte_club' },
        { guid: 'breguet_tradition',      local: 'col_breguet_tradition' },
        { guid: 'tissot_gentleman',       local: 'col_tissot_gentleman' },
        { guid: 'breitling_navitimer',    local: 'col_breitling_navitimer' },
        { guid: 'citizen_series_8',       local: 'col_citizen_series_8' },
        { guid: 'mido_commander',         local: 'col_mido_commander' },
    ];
    
    const colResults = {};
    for (const c of collections) {
        let ok = await tryDownload(`objects-watches/ct_product_line_${c.guid}.png`, `public/assets/watches/${c.local}.png`);
        if (!ok) {
            // Try alternative path in objects-logos
            ok = await tryDownload(`objects-logos/ct_product_line_${c.guid}.png`, `public/assets/watches/${c.local}.png`);
        }
        colResults[c.local] = ok;
    }
    
    // ─── REF WATCH PHOTOS (for Refs in Media slides 10, 10b) ───
    console.log('\n--- Ref Watch Photos ---');
    const refs = [
        { guid: 'h_moser_cie_streamliner_alpine_drivers_and_mechanics_pink_editions_6700_1201', local: 'ref_moser_6700_1201' },
        { guid: 'breguet_tradition_seconde_r_trograde_7037_7037bb_yb_5v6', local: 'ref_breguet_7037' },
        { guid: 'artya_purity_moissanite_curvy_tourbillon_purity_moissanite_curvy_tourbillon', local: 'ref_artya_purity' },
        { guid: 'citizen_nb6086_54e_nb6086_54e', local: 'ref_citizen_nb6086' },
        { guid: 'breguet_tradition_seconde_r_trograde_7038_7038bb_n9_7v6_d0', local: 'ref_breguet_7038' },
        { guid: 'breguet_tradition_gmt_7067_7067pt_nm_5w6', local: 'ref_breguet_7067' },
        { guid: 'breitling_navitimer_b19_chronograph_43_perpetual_calendar_lb19211a1c1p1', local: 'ref_breitling_b19' },
        { guid: 'citizen_nb6085_57w_nb6085_57w', local: 'ref_citizen_nb6085' },
        { guid: 'citizen_nb6084_50a_nb6084_50a', local: 'ref_citizen_nb6084' },
        { guid: 'citizen_nb6080_51w_nb6080_51w', local: 'ref_citizen_nb6080' },
    ];
    
    const refResults = {};
    for (const r of refs) {
        let ok = await tryDownload(`objects-watches/ct_model_${r.guid}.png`, `public/assets/watches/${r.local}.png`);
        if (!ok) {
            ok = await tryDownload(`objects-logos/ct_model_${r.guid}.png`, `public/assets/watches/${r.local}.png`);
        }
        refResults[r.local] = ok;
    }
    
    // ─── SUMMARY ───
    console.log('\n=== DOWNLOAD SUMMARY ===');
    console.log('\nLogos:');
    for (const [k, v] of Object.entries(logoResults)) {
        console.log(`  ${v ? '✅' : '❌'} ${k}`);
    }
    console.log('\nCollection Photos:');
    for (const [k, v] of Object.entries(colResults)) {
        console.log(`  ${v ? '✅' : '❌'} ${k}`);
    }
    console.log('\nRef Photos:');
    for (const [k, v] of Object.entries(refResults)) {
        console.log(`  ${v ? '✅' : '❌'} ${k}`);
    }
    
    console.log('\nDone!');
})();
