import { request } from '../hook/Api';

class ProductService {
  static async createProducts(productData) {
    const response = await request(
      '/api/v1/products',
      'POST',
      productData,
      false,
      false,
    );
    return response;
  }

  static async getAllProducts() {
    const response = await request('/api/v1/products', 'GET', {}, false);
    return response;
  }

  static async getSingleProduct(id) {
    const response = await request(
      `/api/v1/products/${id}`,
      'GET',
      {},
      false,
      false,
    );
    return response;
  }

  static async createReservation(id, ReservationData) {
    const response = await request(
      `/api/v1/users/${id}/reservations`,
      'POST',
      ReservationData,
      false,
      false,
    );
    return response;
  }

  static async getCurrentUser() {
    const response = await request(
      '/api/v1/users',
      'GET',
      {},
      false,
      false,
    );
    return response;
  }

  static async getReservation(id) {
    const response = await request(
      `/api/v1/users/${id}/reservations`,
      'GET',
      {},
      false,
      false,
    );
    return response;
  }

  static async removeReservation(userId, reservationId) {
    const response = await request(
      `/api/v1/users/${userId}/reservations/${reservationId}`,
      'PATCH',
      {},
      false,
      false,
    );
    return response;
  }

  static async removeProduct(productId) {
    const response = await request(
      `/api/v1/products/${productId}`,
      'PATCH',
      {},
      false,
      false,
    );
    return response;
  }
}

export default ProductService;
