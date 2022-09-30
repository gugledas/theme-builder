class StanExport {
  constructor(options = {}) {
    this.options = options || {
      sizeLimit: 3
    };
  }
  apply(compiler) {
    compiler.hooks.emit.tapAsync("Stan_export", (compilation, myCallBack) => {
      // Now we can tap into various hooks available through compilation

      console.log("Stan_export", compilation.hooks);
      // myCallBack();
    });
  }
  myCallBack() {
    console.log("compillation End  ");
  }
}

module.exports = StanExport;
