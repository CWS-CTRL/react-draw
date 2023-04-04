interface keyString {
  [key: string]: any;
}

export interface styleTypes extends keyString {
  size?: number;
  color?: string;
  stroke?: number;
  dur?: number;
}

export type styleTypesKeys = keyof styleTypes;

export type svgRefType = React.RefObject<SVGSVGElement> &
  Partial<{ defaultProps: styleTypes }>;

export interface optionsType extends styleTypes {
  svgRef?: svgRefType;
}

export interface SVGProps {
  options?: optionsType;
}
