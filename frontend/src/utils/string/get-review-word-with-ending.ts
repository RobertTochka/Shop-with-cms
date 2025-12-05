export function getReviewWordWithEnding(reviewCount: number) {
  const n = Math.abs(reviewCount) % 100
  const last = n % 10

  if (n >= 11 && n <= 14) {
    return `${reviewCount} отзывов`
  }

  if (last === 1) {
    return `${reviewCount} отзыв`
  }

  if (last >= 2 && last <= 4) {
    return `${reviewCount} отзыва`
  }

  return `${reviewCount} отзывов`
}
