import fs from 'fs';
import path from 'path';
import axios from 'axios';
import markdownLinkExtractor from 'markdown-link-extractor';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

// 设置命令行参数
const argv = yargs(hideBin(process.argv)).options({
  root: {
    type: 'string',
    describe: 'Markdown 文件所在的根目录',
    default: process.cwd(),
  },
  output: {
    type: 'string',
    describe: '图片文件输出目录和修改后的Markdown输出目录',
    default: process.cwd(),
  },
}).argv;

const rootMarkdownFolder = path.resolve(argv.root);
const outputFolder = path.resolve(argv.output);


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

        let imageLinks = links.filter(link => link.startsWith('http') && link.match(/\.(jpeg|jpg|png|gif|svg)$/));

        // 计算在 outputFolder 中的相对路径
        const relativeFolder = path.relative(rootMarkdownFolder, path.dirname(filePath));
        const imageFolder = path.join(outputFolder, relativeFolder, 'images');
        const outputMarkdownPath = path.join(outputFolder, relativeFolder, path.basename(filePath));

        if (!fs.existsSync(imageFolder)) {
          fs.mkdirSync(imageFolder, { recursive: true });
        }

        if (imageLinks.length > 0) {
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
              const relativeImagePath = path.relative(path.dirname(outputMarkdownPath), imagePath).replace(/\\/g, '/');
              markdownContent = markdownContent.replace(imageUrl, relativeImagePath);

              // 保存修改后的Markdown文件到 output 目录
              fs.writeFileSync(outputMarkdownPath, markdownContent, 'utf8');
              console.log(`处理完毕: ${outputMarkdownPath}`);
            });

            writer.on('error', err => {
              console.error(`图片下载失败: ${imageUrl}`, err);
            });
          });
        } else {
          // 如果没有图片链接，直接将原内容写入output目录
          fs.writeFileSync(outputMarkdownPath, markdownContent, 'utf8');
          console.log(`没有图片替换，文件已复制: ${outputMarkdownPath}`);
        }
      }
    });
  });
}

// 开始处理根目录
processMarkdownFiles(rootMarkdownFolder);
