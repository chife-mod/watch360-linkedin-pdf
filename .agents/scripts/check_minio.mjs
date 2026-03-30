import * as Minio from 'minio'

const minioClient = new Minio.Client({
    endPoint: 'minio.semanticforce.ai',
    port: 443,
    useSSL: true,
    accessKey: 'i.bataliuk',
    secretKey: 'cX3dBDetEHIE' 
});

async function testList() {
    console.log('Testing S3 endpoint minio.semanticforce.ai...')
    try {
        let stream = minioClient.listObjectsV2('sf-ai', `objects-logos/ct_brand_`, false)
        stream.on('data', obj => console.log('Found object:', obj.name))
        stream.on('error', err => console.log('Error:', err))
    } catch (e) {
        console.error(e)
    }
}

testList()
