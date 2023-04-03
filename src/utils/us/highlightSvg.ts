class HighlightSvg {
  public str = '';
  public codeKey = ``;
  private tagReg = RegExp(`<.*?>`, 'g');
  private attrCountReg = RegExp(
    `.*?\\s([\\w-]+)\\s*(=)\\s*(['"][^'"]+['"])`,
    'g'
  );
  private attrReg = RegExp(`.*\\s([\\w-]+)\\s*(=)\\s*(['"][^'"]+['"])`);
  private analysisTagReg: RegExp = RegExp('');
  private deep = -1;
  public code = '';

  highlight(str: string) {
    if (!str) return ``;
    this.str = str;
    const allHighlightRes = this.str.replaceAll(this.tagReg, (tag) => {
      const self = this;
      //获取当前深度，便于前置空格，美观
      const flag = /<\//.test(tag);
      this.deep = flag ? this.deep - 1 : this.deep + 1;
      this.getAnalysisTag(tag);
      const outerTagRes = tag.replace(this.analysisTagReg, function () {
        const arg = [].slice.call(arguments);
        const argLen = arguments.length;
        const cutLen = argLen - 3;
        const innerTagRes = self.distinguishType(arg.splice(1, cutLen), cutLen);
        return `${self.addSpace(self.deep * 2)}${innerTagRes}<br/>`;
      });
      this.deep = flag ? this.deep - 1 : this.deep + 1;

      return outerTagRes;
    });

    this.code = `<span class="unify">${allHighlightRes}</span><br/>`;

    return this.code;
  }

  //获取解析标签详细信息内容的正则
  getAnalysisTag(tag: string) {
    const attrCount = this.getAttrCount(tag)!;
    this.analysisTagReg = RegExp(
      `(<\\/?)(\\w+)${this.attrReg.source.repeat(attrCount)}\\s*(>)`
    );
  }

  //获取属性数量
  getAttrCount(tag: string) {
    const res = tag.match(this.attrCountReg);
    return res && res.length;
  }

  //将标签拆分，细节化处理
  distinguishType(array: any[], len: number) {
    if (len === 0) return ``;
    let res = ``;
    //<
    res += `${this.transMean(array[0])}`;
    //tagName
    res += `${this.addClass({ str: array[1], type: `tag-name` })}`;

    const types = [`equal`, `attr-val`, `attr-key`];
    for (let i = 2; i < len - 1; i++) {
      const str = array[i];
      res += `${i % 3 === 2 ? this.addSpace() : ''}${this.addClass({
        str,
        type: types[i % 3],
      })}`;
    }

    //>
    res += `${this.transMean(array[len - 1])}`;

    return res;
  }

  //添加类名
  addClass(obj: { str: string; type: string }) {
    const { str, type } = obj;
    return `<span class=${type}>${str}</span>`;
  }

  //添加空格
  addSpace(count = 1) {
    return `&nbsp;`.repeat(count < 0 ? 1 : count);
  }

  //  <>转义
  transMean(str: string) {
    switch (str) {
      case `<`:
        return `&lt;`;
      case `</`:
        return `&lt;/`;
      case `>`:
        return `&gt;`;
      default:
        return ``;
    }
  }
}

export default HighlightSvg;
