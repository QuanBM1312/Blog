/**
 * Chuyển đổi nội dung từ CMS (plain text markdown-like HOẶC TipTap HTML)
 * thành HTML để render trên website.
 *
 * TipTap outputs: <h2>, <p>, <strong>, <em>, <ul>, <ol>, <blockquote>, <span style>
 * Plain text: # heading, 1. heading, - bullet, > blockquote
 *
 * Strategy:
 * - HTML content (TipTap): pass-through, chỉ clean để tránh double-wrapping
 * - Plain text (legacy): chạy regex để wrap thành HTML
 */
export function formatPostContent(content: string): string {
  if (!content) return "";

  // ─── TipTap HTML detection ────────────────────────────────────────────────
  // If content clearly starts with an HTML tag, treat as TipTap output
  const trimmed = content.trim();
  if (/^<(p|h[1-6]|ul|ol|blockquote|div|strong|em|u|s|span|a|img)/i.test(trimmed)) {
    return cleanTipTapHTML(trimmed);
  }

  // ─── Legacy plain text pipeline ──────────────────────────────────────────
  const lines = content.split(/\r?\n/);

  const formattedLines = lines.map(line => {
    const trimmedLine = line.trim();
    if (!trimmedLine) return "";

    // Markdown heading: # → <h1>, ## → <h2>, ### → <h3>
    const mdHeadingMatch = trimmedLine.match(/^(#{1,3})\s+(.+)$/);
    if (mdHeadingMatch) {
      const level = mdHeadingMatch[1].length;
      const text = mdHeadingMatch[2];
      const tag = `h${level}`;
      const id = slugify(`section-${text}`);
      const sizeClass = level === 1 ? 'text-3xl' : level === 2 ? 'text-2xl' : 'text-xl';
      return `<${tag} id="${id}" class="font-playfair ${sizeClass} text-primary mt-12 mb-6 scroll-mt-32 font-bold">${text}</${tag}>`;
    }

    // Numbered heading: "1." → <h2>, "1.1." → <h3>
    const headingRegex = /^(\d+(\.\d+)*)\.\s+(.+)$/;

    // Plain text with numbering
    const plainTextMatch = trimmedLine.match(headingRegex);
    if (plainTextMatch) {
      const num = plainTextMatch[1];
      const isSubHeading = num.includes('.');
      const tag = isSubHeading ? 'h3' : 'h2';
      const sizeClass = isSubHeading ? 'text-xl' : 'text-2xl';
      const id = slugify(`section-${num}`);
      return `<${tag} id="${id}" class="font-playfair ${sizeClass} text-primary mt-12 mb-6 scroll-mt-32 font-bold">${trimmedLine}</${tag}>`;
    }

    // HTML-wrapped numbered heading: <p>1. Text</p>
    const htmlRegex = /^<p>\s*(\d+(\.\d+)*)\.\s+(.*)<\/p>$/;
    const htmlMatch = trimmedLine.match(htmlRegex);
    if (htmlMatch) {
      const num = htmlMatch[1];
      const isSubHeading = num.includes('.');
      const tag = isSubHeading ? 'h3' : 'h2';
      const sizeClass = isSubHeading ? 'text-xl' : 'text-2xl';
      const id = slugify(`section-${num}`);
      const text = `${num}. ${htmlMatch[3]}`;
      return `<${tag} id="${id}" class="font-playfair ${sizeClass} text-primary mt-12 mb-6 scroll-mt-32 font-bold">${text}</${tag}>`;
    }

    // Blockquote: > text
    if (trimmedLine.startsWith('> ')) {
      const text = trimmedLine.slice(2);
      return `<blockquote class="border-l-4 border-primary/30 pl-6 my-6 italic text-foreground/70">${text}</blockquote>`;
    }

    // Bullet point: - text
    if (trimmedLine.startsWith('- ')) {
      const text = trimmedLine.slice(2);
      return `<li class="ml-6 mb-2 text-foreground/80 leading-loose list-disc">${text}</li>`;
    }

    // Plain text → wrap in <p>
    if (!trimmedLine.startsWith('<')) {
      return `<p class="mb-4 text-foreground/80 leading-loose">${trimmedLine}</p>`;
    }

    return line;
  });

  return formattedLines.filter(l => l !== null).join('\n');
}

/**
 * Clean TipTap HTML for proper rendering:
 * - Remove text-align from outer <p> wrappers (prose handles alignment)
 * - Preserve inline styles (color, etc.)
 * - Ensure proper heading hierarchy
 */
function cleanTipTapHTML(html: string): string {
  // TipTap HTML is already well-formed. We only strip empty paragraphs
  // to avoid visual gaps. All inline styles (color, text-align) are preserved.
  return html
    .replace(/<p[^>]*>\s*<\/p>/gi, '')
    .replace(/<p[^>]*>\s*&nbsp;\s*<\/p>/gi, '');
}

/**
 * Hàm tạo Slug đơn giản cho ID
 */
function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .trim();
}
