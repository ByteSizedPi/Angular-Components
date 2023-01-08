import {
  Align,
  AlignOptions,
  dataFormats,
  fmt,
  FormatFunc,
  FormatOptions,
  Justify,
  JustifyOptions,
} from './Format';

type InputColumnDef<T> = {
  key: keyof T;
  title?: string;
  classList?: string[];
  formats?: FormatFunc[];
  justify?: JustifyOptions;
  align?: AlignOptions;
  formatOptions?: FormatOptions[];
};

type ExcludedKeys = 'justify' | 'align' | 'formatOptions';
type ColumnDef<T> = Omit<Required<InputColumnDef<T>>, ExcludedKeys>;

export class Table<T> {
  public columns: ColumnDef<T>[];

  constructor(public data: T[], columnDefs: InputColumnDef<T>[] = []) {
    this.columns = columnDefs.map(Table._defToCol);
  }

  private static _defToCol = <T>(defs: InputColumnDef<T>): ColumnDef<T> => {
    const { key, title, classList, justify, align, formatOptions, formats } =
      defs;

    // custom formatting functions
    let custFuncs: FormatFunc[] = formats ?? [];
    let custFmts: FormatFunc[] = formatOptions?.map(fmt) ?? [];

    // return object
    let newCol: ColumnDef<T> = {
      key: key,
      title: title ?? dataFormats.titleCase(String(key)),
      classList: classList ?? [],
      formats: [...custFuncs, ...custFmts],
    };

    // add formatting classes
    if (justify) newCol.classList.push(Justify[justify]);
    if (align) newCol.classList.push(Align[align]);

    return newCol;
  };

  // push = (item: T) => this.data.push(item);
  // remove = (index: number) => this.data.splice(index, 1);
}
