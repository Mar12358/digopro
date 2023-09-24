import { request } from '../hook/Api';

class LectureService {
  static async createLectures(lectureData) {
    const response = await request(
      '/api/v1/lectures',
      'POST',
      lectureData,
      false,
      false,
    );
    return response;
  }

  static async getAllLectures() {
    const response = await request('/api/v1/lectures', 'GET', {}, false);
    return response;
  }

  static async getSingleLecture(id) {
    const response = await request(
      `/api/v1/lectures/${id}`,
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
}

export default LectureService;
