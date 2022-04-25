class manager {
  constructor() {
    this.resources = [];
    //this.contents = [];
    this.templatesHtml = {};
  }

  addUpdate(resource, content) {
    this.templatesHtml[resource] = content;
    // var index = this.resources.indexOf(resource);
    // if (index !== -1) {
    //   // this.contents[index] = content;
    //   this.templatesHtml[index] = content;
    // } else {
    //   //this.contents.push(content);
    //   this.resources.push(resource);
    //   this.templatesHtml[index] = content;
    // }
  }

  getContents() {
    var html = "";
    return new Promise((resolv) => {
      for (const i in this.templatesHtml) {
        console.log("resource : ", i);
        html += this.templatesHtml[i];
      }
      resolv(html);
    });
  }
}
module.exports = manager;
