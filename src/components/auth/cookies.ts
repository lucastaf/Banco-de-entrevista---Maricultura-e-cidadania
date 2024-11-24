export interface Cookie {
  name: string
  value: string
}

export function getCookie(name: string): Cookie | null {
  const cArray = decodeURIComponent(document.cookie)
    .split('; ')
    .map(item => {
      const [name, value] = item.split('=')

      return {
        name: name,
        value: value,
      }
    })

  const returnValue = cArray.find(item => item.name == name)

  return returnValue || null
}

export function setCookie(name: string, value: string, secondsToLive: number): void {
  const date = new Date()
  date.setTime(date.getTime() + (secondsToLive * 1000))
  const expires = 'expires=' + date.toUTCString()
  document.cookie = `${name}=${value};${expires};path=/`
}

export function deleteCookie(name: string) {
  setCookie(name, "", 0)
}
