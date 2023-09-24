import { request } from "../hook/Api";

class LectureService {
  /**
   * summarising text contents.
   * @param {Object} summarytext - The data of the sumarry.
   * @returns {Promise<Object>} - The response data from the server.
   */

  static async createLectures(lectureData) {
    try {
      const response = await request(
        "/api/v1/lectures",
        "POST",
        lectureData,
        false,
        false
      );
      return response;
    } catch (error) {
      throw error;
    }
  }

  static async getAllLectures() {
    try {
      const response = await request("/api/v1/lectures", "GET", {}, false);
      return response; // No need to parse, as it's already JSON
    } catch (error) {
      throw error;
    }
  }

  static async getSingleLecture(id) {
    try {
      const response = await request(
        `/api/v1/lectures/${id}`,
        "GET",
        {},
        false,
        false
      );
      return response; // No need to parse, as it's already JSON
    } catch (error) {
      throw error;
    }
  }

  static async createReservation(id, ReservationData) {
    try {
      const response = await request(
        `/api/v1/users/${id}/reservations`,
        "POST",
        ReservationData,
        false,
        false
      );
      return response;
    } catch (error) {
      throw error;
    }
  }
}

// Export the Service class.
export default LectureService;
