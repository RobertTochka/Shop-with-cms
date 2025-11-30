import { axiosWithAuth } from '@/api/api.interceptors'

import { API_URL } from '@/config/api.config'

import {
  EnumOrderStatus,
  IPaymentResponse
} from '@/shared/types/order.interface'

type TypeItem = {
  quantity: number
  price: number
  productId: string
  storeId: string
}

type TypeData = {
  status?: EnumOrderStatus
  items: TypeItem[]
}

class OrderService {
  async place(data: TypeData) {
    const response = await axiosWithAuth<IPaymentResponse>({
      url: API_URL.orders('/place'),
      method: 'POST',
      data
    })

    return response
  }
}

export const orderService = new OrderService()
