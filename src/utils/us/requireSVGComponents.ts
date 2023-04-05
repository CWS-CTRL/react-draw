import type { ReactElement } from 'react';
import type { SVGProps } from '../../views/svg/loading/all/type';

export interface iconInfoType {
  path: string;
  name: string;
  type: string;
  Component: (props: SVGProps) => ReactElement;
}
export type iconsInfoType = iconInfoType[];

class RequireSVGComponents {
  public loadingComponents: iconsInfoType = [];
  public keyWords: string[] = [];
  private shape = ['c', 'l', 'm', 'p', 'r'];
  private state = ['d', 'm', 'o', 'r', 't'];
  private specia = ['all', 'new'];

  constructor() {
    this.batchImportLoading();
  }

  batchImportLoading() {
    this.loadingComponents = [];
    // require.context的参数不支持变量，只能写定值
    const res = require.context('@views/svg/loading/all', true, /\.tsx$/);
    res.keys().forEach((key) => {
      this.loadingComponents.push({
        path: key,
        name: key.match(/(\w+)\.tsx/)![1] || 'loading',
        type: key.match(/\/([A-z]+)\d+\.tsx/)![1] || 'loading',
        Component: res(key).default,
      });
    });
  }

  getSpecifyLoading(keyword: string): iconInfoType[] {
    if (!keyword) return [];
    this.keyWords = keyword.toLocaleLowerCase().split('+');

    if (this.keyWords.includes('all')) return this.loadingComponents;

    this.keyWords = this.filter();

    return this.loadingComponents.filter(({ type }) =>
      this.keyWords.includes(type)
    );
  }

  filter() {
    const transKeyWords = this.trans();
    const verifyKeyWord = transKeyWords.filter((keyWord) =>
      keyWord.length === 2
        ? this.shape.includes(keyWord[0]) && this.state.includes(keyWord[1])
        : this.specia.includes(keyWord)
    );

    return Array.from(new Set(verifyKeyWord));
  }

  trans() {
    const keyWordsLen = this.keyWords.length;
    const transKeyWords = [];
    for (let i = 0; i < keyWordsLen; i++) {
      const keyWord = this.keyWords[i];
      if (keyWord.length === 1) {
        this.state.forEach((s) => {
          transKeyWords.push(`${keyWord}${s}`);
        });
      } else {
        transKeyWords.push(keyWord);
      }
    }

    return transKeyWords;
  }
}

export default new RequireSVGComponents();
