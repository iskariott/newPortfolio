import fs from 'fs';
import path from 'path';
const publicDir = path.join(__dirname, '..', 'public', 'images');
const outputPath = path.join(__dirname, '..', 'entities', 'card', 'model', 'image-imports.ts');

const files: string[] = [];
const imports: string[] = [];
const groups: string[][] = [];

function generateImageName(folderName: string, file_idx: number) {
    return `img_${folderName.match(/\d+$/)}_${file_idx}`;
}

fs.readdirSync(publicDir).forEach((folderName) => {
    if (!folderName.startsWith('product')) return;

    const folderPath = path.join(publicDir, folderName);
    const imageFiles = fs
        .readdirSync(folderPath)
        .filter((f) => ['.webp', '.jpg', '.jpeg', '.png'].some((ext) => f.endsWith(ext)));
    // .sort(); // важливо для порядку: 1.webp, 2.webp...
    const group: string[] = [];
    imageFiles.forEach((file, idx) => {
        const relativePath = `@/public/images/${folderName}/${file}`;
        const importName = generateImageName(folderName, idx + 1);
        imports.push(`import ${importName} from '${relativePath}';`);
        group.push(importName);
    });
    groups.push(group);
});

const content = `import type { StaticImageData } from 'next/image';
${imports.join('\n')}

export const productImages: StaticImageData[][] = [
  ${groups.map((group) => `[${group.join(', ')}]`).join(',\n  ')}
];
`;
fs.writeFileSync(outputPath, content);
