// string formatting functions
export type FormatFunc = (val: any) => string;

export const dataFormats = {
  titleCase: (str: string) =>
    str.replace(
      /\w\S*/g,
      (txt) => txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase()
    ),

  currency: (val: number) =>
    new Intl.NumberFormat('en-ZA', {
      style: 'currency',
      currency: 'ZAR',
    }).format(val),
};

export const fmt = (option: FormatOptions) => dataFormats[option];

export type FormatOptions = keyof typeof dataFormats;

// placement of text in cell
export enum Justify {
  CENTER = 'table-justify-center',
  LEFT = 'table-justify-left',
  RIGHT = 'table-justify-right',
}

export enum Align {
  CENTER = 'table-align-center',
  LEFT = 'table-align-left',
  RIGHT = 'table-align-right',
}

export type JustifyOptions = keyof typeof Justify;
export type AlignOptions = keyof typeof Align;
