import fs from 'fs';
import path from 'path';
import axios from 'axios';
import markdownLinkExtractor from 'markdown-link-extractor';

// 要处理的根目录路径
const rootMarkdownFolder = './src/posts/';

// 确保图片文件夹存在
function ensureDirectoryExistence(filePath) {
  const dirname = path.dirname(filePath);
  if (fs.existsSync(dirname)) {
    return true;
  }
  fs.mkdirSync(dirname, { recursive: true });
}

// 递归处理文件夹中的Markdown文件
function processMarkdownFiles(folderPath) {
  fs.readdir(folderPath, (err, files) => {
    if (err) throw err;

    files.forEach(file => {
      const filePath = path.join(folderPath, file);

      // 检查是否是目录
      if (fs.lstatSync(filePath).isDirectory()) {
        processMarkdownFiles(filePath); // 递归处理子目录
      } else if (path.extname(file) === '.md') {
        // 处理Markdown文件
        let markdownContent = fs.readFileSync(filePath, 'utf8');
        let links = markdownLinkExtractor(markdownContent, true);
        console.log('Processing:', filePath);

        let imageLinks = links.filter(link => link.startsWith('http') && link.match(/\.(jpeg|jpg|png|gif|bmp|webp|svg)$/));

        if (imageLinks.length > 0) {
          // 为当前 Markdown 文件创建 images 文件夹
          const imageFolder = path.join(path.dirname(filePath),'images', path.basename(file, '.md'));
          if (!fs.existsSync(imageFolder)) {
            fs.mkdirSync(imageFolder, { recursive: true });
          }
          // const imageFolder = path.join(path.dirname(filePath), 'images');
          // ensureDirectoryExistence(imageFolder);

          imageLinks.forEach(async (imageLink) => {
            const imageUrl = imageLink;
            const imageName = path.basename(imageUrl);
            const imagePath = path.join(imageFolder, imageName);

            // 下载图片并保存到本地
            const writer = fs.createWriteStream(imagePath);
            const response = await axios({
              url: imageUrl,
              method: 'GET',
              responseType: 'stream'
            });

            response.data.pipe(writer);

            writer.on('finish', () => {
              // 替换Markdown中的图片路径
              const relativeImagePath = path.relative(folderPath, imagePath).replace(/\\/g, '/');
              markdownContent = markdownContent.replace(imageUrl, relativeImagePath);

              // 保存修改后的Markdown文件
              fs.writeFileSync(filePath, markdownContent, 'utf8');
              console.log(`处理完毕: ${filePath}`);
            });

            writer.on('error', err => {
              console.error(`图片下载失败: ${imageUrl}`, err);
            });
          });
        }
      }
    });
  });
}

// 开始处理根目录
processMarkdownFiles(rootMarkdownFolder);
