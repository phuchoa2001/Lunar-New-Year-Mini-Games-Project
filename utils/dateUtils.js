export function getHoursFromCreatedAt(createdAt) {
  if (!createdAt) {
    // Nếu createdAt không hợp lệ hoặc undefined, trả về 0
    return 0;
  }

  const createTime = new Date(createdAt);
  if (isNaN(createTime)) {
    // Kiểm tra lại xem thời gian tạo có hợp lệ không, nếu không trả về 0
    return 0;
  }
  
  const currentTime = new Date();
  const timeDiff = (currentTime - createTime) / (1000 * 60 * 60);
  return timeDiff;
}