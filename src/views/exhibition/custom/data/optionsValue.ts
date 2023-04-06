export interface optionValueType {
  type: 'size' | 'stroke' | 'dur';
  value: number;
  min: number;
  max: number;
  step: number;
}

const optionsValue: optionValueType[] = [
  {
    type: 'size',
    value: 200,
    min: 1,
    max: 250,
    step: 1,
  },
  {
    type: 'stroke',
    value: 1,
    min: 0.1,
    max: 5,
    step: 0.1,
  },
  {
    type: 'dur',
    value: 1,
    min: 0.1,
    max: 5,
    step: 0.1,
  },
];

export default optionsValue;
