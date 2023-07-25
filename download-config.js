const axios = require('axios');
const fs = require('fs');
const path = require('path');

async function downloadFile(url, directory, filename) {
  try {
    const response = await axios.get(url, { responseType: 'arraybuffer' });

    const filePath = path.join(directory, filename);

    fs.writeFileSync(filePath, response.data);

    console.log(`File downloaded successfully to ${filePath}`);
  } catch (error) {
    console.error('Error downloading the file:', error.message);
  }
}

const fileUrl = 'https://storage.cloud.google.com/group-dots-ui-config/environment.ts';
const downloadDirectory = './src/environments';
const fileName = 'environment.ts';

downloadFile(fileUrl, downloadDirectory, fileName);
