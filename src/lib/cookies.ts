export function saveToCookie(key: string, value: unknown): void {
  const encoded = encodeURIComponent(JSON.stringify(value))
  const expires = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toUTCString()
  document.cookie = `${key}=${encoded}; expires=${expires}; path=/; SameSite=Lax`
}

export function loadFromCookie<T>(key: string): T | null {
  const cookies = document.cookie.split('; ')
  const match = cookies.find((c) => c.startsWith(`${key}=`))
  if (!match) return null

  try {
    const value = decodeURIComponent(match.slice(key.length + 1))
    return JSON.parse(value) as T
  } catch {
    return null
  }
}
