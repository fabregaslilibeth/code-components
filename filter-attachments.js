// --- Filter attachments: keep only real images, skip logos/icons ---
const binary = $input.first().binary || {};
const json = $input.first().json || {};

const MIN_IMAGE_SIZE_KB = 50; // real photos are typically larger than 50kb

// Patterns that indicate injected email client logos/tracking pixels
const logoPatterns = [
  /^inky-injection/i,
  /^inky/i,
  /tracking/i,
  /spacer/i,
  /logo\d*/i,
  /signature/i,
  /^image\d+$/i,
];

function isLikelyLogo(val) {
  const name = val.fileName || val.name || '';
  return logoPatterns.some(p => p.test(name));
}

// Parse fileSize string like "1.2 kB", "36.7 kB", "1.98 MB" into kb
function parseFileSizeKb(fileSizeStr) {
  if (!fileSizeStr) return 0;
  const match = String(fileSizeStr).match(/([\d.]+)\s*(kb|mb|gb|b)/i);
  if (!match) return 0;
  const value = parseFloat(match[1]);
  const unit = match[2].toLowerCase();
  if (unit === 'b')  return value / 1024;
  if (unit === 'kb') return value;
  if (unit === 'mb') return value * 1024;
  if (unit === 'gb') return value * 1024 * 1024;
  return 0;
}

// Collect PDF attachments for text extraction
const pdfKeys = Object.entries(binary)
  .filter(([key, val]) => val.mimeType === 'application/pdf')
  .map(([key]) => key);

// Collect real image attachments (not logos)
const imageKeys = Object.entries(binary)
  .filter(([key, val]) => {
    const sizeKb = parseFileSizeKb(val.fileSize);
    const mimeOk = val.mimeType?.startsWith('image/');
    const sizeOk = sizeKb > MIN_IMAGE_SIZE_KB;
    const logoOk = !isLikelyLogo(val);
    console.log(`[${key}] file: ${val.fileName}, size: ${sizeKb}kb, mimeOk: ${mimeOk}, sizeOk: ${sizeOk}, logoOk: ${logoOk}, KEPT: ${mimeOk && sizeOk && logoOk}`);
    return mimeOk && sizeOk && logoOk;
  })
  .map(([key]) => key);

const hasImages = imageKeys.length > 0;
const hasPdfs = pdfKeys.length > 0;

// If no real images found, fall back to first available binary to avoid undefined errors in OpenAI node
const anyKey = Object.keys(binary)[0] || '';
const imageKey0 = imageKeys[0] || anyKey;
const imageKey1 = imageKeys[1] || imageKey0;
const imageKey2 = imageKeys[2] || imageKey0;

return [{
  json: { ...json, imageKeys, imageKey0, imageKey1, imageKey2, hasImages, pdfKeys, hasPdfs },
  binary
}];
