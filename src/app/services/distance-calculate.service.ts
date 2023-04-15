import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DistanceCalculateService {
  getDistanceFromLatLonInKm(lat1: number, lon1: number, lat2: number, lon2: number) {
    let R = 6371; // Radius of the earth in km
    let dLat = this.deg2rad(lat2 - lat1);
    let dLon = this.deg2rad(lon2 - lon1);
    let a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2)
    ;
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c;
  }

  private deg2rad(deg: number) {
    return deg * (Math.PI / 180)
  }
}
