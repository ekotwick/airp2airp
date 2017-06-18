'use strict';

export class LatLon {
  constructor(coordinates) {
    this.latitude = coordinates.latitude;
    this.longitude = coordinates.longitude;
    this.point;
    this.distance; 
  }

  getDistance(metric='nautical miles', precision=2) {
    let distanceInMetric = this.convertTo(metric, this.distance);
    let roundedDistance = this.roundOrPadToAmount(distanceInMetric, precision);
    return `${roundedDistance} ${metric}`
  }

  toRadians(val) {
    return val * Math.PI / 180;
  }

  convertTo(type, distance) {
    let d = distance;
    switch(type) {
      case 'nautical miles': 
        d = d * 0.000539957;
        return d;

      case 'miles': 
        d = d * 0.000621371;
        return d;

      case 'kilometers':
        d = d / 1000;
        return d;
    }
  }

  roundOrPadToAmount(float, amount) {
    return float.toFixed(amount);
  }

  calculateDistance(point, radius=6371000) {
    this.point = point;
    const R = radius;
    const lat1 = this.latitude;
    const lon1 = this.longitude;
    const lat2 = point.latitude;
    const lon2 = point.longitude;

    const dLat = this.toRadians(lat1 - lat2);
    const dLon = this.toRadians(lon1 - lon2);

    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) 
              + Math.cos(this.toRadians(lat1)) * Math.cos(this.toRadians(lat2)) 
              * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    let distance = R * c;

    this.distance = distance;

    return this; // for chaining
  }
}