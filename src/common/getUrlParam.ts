export default function getUrlParam(sUrl: string, sKey: string) {
  let result: string
  const sParam: any = {}
  sUrl.replace(/[?&]?(\w+)=(\w+)/g, function(k0: string, k1: any, k2: any): any {
    sParam[k1] === 0 ? sParam[k1] = k2 : sParam[k1] = [].concat(sParam[k1], k2)
  })
  !sKey ? result = sParam : result = sParam[sKey] || ''
  return result
}
// let s = getUrlParam('http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe', 'key');
// console.log('getUrlParam: ', s);
