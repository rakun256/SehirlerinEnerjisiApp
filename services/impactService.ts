// import api from "./api";

export type Reactor = {
  id: number;
  name: string;
  country: string;
  latitude: number;
  longitude: number;
  type: string;
  thermalPower: number;
  active: boolean;
};

export type Impact = {
  reactor: Reactor;
  distanceKm: number;
  impactScore: number;
  impactLevel: string;
};

export type ImpactRequestDto = {
    latitude: number;
    longitude: number;
}

{/*export const getAllImpacts = async (): Promise<Impact[]> => {
  const response = await api.get("/api/impacts");
  return response.data;
};*/}

export const getAllImpacts = async (_location: ImpactRequestDto): Promise<Impact[]> => {
  return Promise.resolve([
    {
      reactor: {
        id: 1,
        name: 'Akkuyu 1',
        country: 'Turkey',
        latitude: 36.167,
        longitude: 33.501,
        type: 'PWR',
        thermalPower: 1114,
        active: false,
      },
      distanceKm: 425.6,
      impactScore: 0.15,
      impactLevel: 'LOW',
    },
    {
      reactor: {
        id: 2,
        name: 'Beaver Valley 1',
        country: 'USA',
        latitude: 40.65,
        longitude: -79.753,
        type: 'PWR',
        thermalPower: 913,
        active: true,
      },
      distanceKm: 8415.3,
      impactScore: 0.29,
      impactLevel: 'LOW',
    },
    {
      reactor: {
        id: 3,
        name: 'Fukushima Daiichi',
        country: 'Japan',
        latitude: 37.421,
        longitude: 141.032,
        type: 'BWR',
        thermalPower: 1380,
        active: false,
      },
      distanceKm: 8954.7,
      impactScore: 0.72,
      impactLevel: 'HIGH',
    },
    {
      reactor: {
        id: 4,
        name: 'Chernobyl',
        country: 'Ukraine',
        latitude: 51.389,
        longitude: 30.099,
        type: 'RBMK',
        thermalPower: 3200,
        active: false,
      },
      distanceKm: 2114.2,
      impactScore: 0.95,
      impactLevel: 'HIGH',
    },
    {
      reactor: {
        id: 5,
        name: 'Sizewell B',
        country: 'United Kingdom',
        latitude: 52.21,
        longitude: 1.62,
        type: 'PWR',
        thermalPower: 1188,
        active: true,
      },
      distanceKm: 2890.8,
      impactScore: 0.45,
      impactLevel: 'MEDIUM',
    },
    {
      reactor: {
        id: 6,
        name: 'Brokdorf',
        country: 'Germany',
        latitude: 53.851,
        longitude: 9.324,
        type: 'PWR',
        thermalPower: 1410,
        active: false,
      },
      distanceKm: 2345.0,
      impactScore: 0.39,
      impactLevel: 'MEDIUM',
    },
  ]);
};
