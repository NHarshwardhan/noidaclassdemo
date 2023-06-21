const concat = require("concat");
(async function build(){
    const files = [
     "./dist/angularadvancefeature/runtime.js",
     "./dist/angularadvancefeature/polyfills.js",
     "./dist/angularadvancefeature/main.js",
    ];
  await concat(files,"./dist/angularadvancefeature/demo.js")
})();


