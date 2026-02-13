/**
 * Chuyển đổi nội dung văn bản thô hoặc HTML có đánh số đầu dòng thành các Heading <h2>
 * phục vụ cho việc tạo Mục lục tự động.
 */
export function formatPostContent(content: string): string {
  if (!content) return "";

  // 1. Tách nội dung thành từng dòng
  // Chúng ta xử lý theo dòng để dễ nhận diện "Đầu đoạn"
  const lines = content.split(/\r?\n/);
  
  const formattedLines = lines.map(line => {
    const trimmedLine = line.trim();
    if (!trimmedLine) return "";
    
    // REGEX nhận diện: Số + Dấu chấm + Khoảng trắng ở đầu dòng
    // Nhóm 1: Con số (ví dụ 1 hoặc 1.1)
    // Nhóm 3: Phần nội dung còn lại
    const headingRegex = /^(\d+(\.\d+)*)\.\s+(.+)$/;
    
    // Trường hợp 1: Text thô có đánh số
    const plainTextMatch = trimmedLine.match(headingRegex);
    if (plainTextMatch) {
      const id = slugify(`section-${plainTextMatch[1]}`);
      return `<h2 id="${id}" class="font-playfair text-2xl text-primary mt-12 mb-6 scroll-mt-32 font-bold">${trimmedLine}</h2>`;
    }

    // Trường hợp 2: Đã bọc trong thẻ <p> nhưng có đánh số bên trong
    // Ví dụ: <p>1. Khởi nguồn</p>
    const htmlRegex = /^<p>\s*(\d+(\.\d+)*)\.\s+(.*)<\/p>$/;
    const htmlMatch = trimmedLine.match(htmlRegex);
    if (htmlMatch) {
      const id = slugify(`section-${htmlMatch[1]}`);
      const text = `${htmlMatch[1]}. ${htmlMatch[3]}`;
      return `<h2 id="${id}" class="font-playfair text-2xl text-primary mt-12 mb-6 scroll-mt-32 font-bold">${text}</h2>`;
    }

    // Nếu là text thô (không có thẻ HTML bao quanh) thì bọc vào thẻ <p> để hiển thị đúng
    if (!trimmedLine.startsWith('<')) {
      return `<p class="mb-4 text-foreground/80 leading-loose">${trimmedLine}</p>`;
    }
    
    return line;
  });

  return formattedLines.filter(l => l !== null).join('\n');
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
