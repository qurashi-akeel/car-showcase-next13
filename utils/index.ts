import { CarType, FilterProps } from '@/types';

export async function fetchCars(filters: FilterProps) {
  const { fuel, limit, manufacturer, model, year } = filters;

  const headers = {
    'X-RapidAPI-Key': '8c2bca9beamshb239b22b696ee15p19d122jsn121e929bbf13',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
  };

  const res = await fetch(
    'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=' +
      manufacturer +
      '&year=' +
      year +
      '&model=' +
      model +
      '&limit=' +
      limit +
      '&fuel_type=' +
      fuel,
    {
      headers,
    }
  );

  const result = await res.json();
  return result;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50;
  const mileageFactor = 0.1;
  const ageFactor = 0.05;

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

export const generateCarImageUrl = (car: CarType, angle: string) => {
  const key = 'afoculala';
  const url = new URL('https://cdn.imagin.studio/getimage');
  url.searchParams.append('customer', key);
  url.searchParams.append('make', car.make);
  url.searchParams.append('modelFamily', car.model.split(' ')[0]);
  url.searchParams.append('zoomType', 'fullscreen');
  url.searchParams.append('modelYear', '' + car.model);
  url.searchParams.append('angle', '' + angle);

  return url + '';
};

export const updateSearchParams = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search);

  searchParams.set(type, value);

  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathname;
};
