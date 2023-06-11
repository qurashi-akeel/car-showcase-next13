import { MouseEventHandler } from 'react';

interface CustomButtonProps {
  title: string;
  btnType?: 'button' | 'submit';
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
}

interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer) => void;
}

interface CarType {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

interface FilterProps {
  manufacturer: string;
  year: number;
  fuel: string;
  limit: number;
  model: string;
}

interface CustomFilterProps {
  title: string;
  options: {
    title: string;
    value: string;
  }[];
}

interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
}
