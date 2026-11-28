export function trackContact() {
  const pixel = (window as Window & { fbq?: (...args: string[]) => void }).fbq
  pixel?.('track', 'Contact')
}
