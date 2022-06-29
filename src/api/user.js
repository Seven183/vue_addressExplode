import request from '@/utils/request'

export function searchAddress(address) {
  return request({
    url: '/address-explode/' + address,
    method: 'get',
    params: address
  })
}
