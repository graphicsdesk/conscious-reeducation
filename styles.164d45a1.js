// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"styles.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./../assets/Title Screen Illo.JPG":[["Title Screen Illo.5323e905.JPG","../assets/Title Screen Illo.JPG"],"../assets/Title Screen Illo.JPG"],"./../assets/Structural Racism Illo 1.JPG":[["Structural Racism Illo 1.faad85bc.JPG","../assets/Structural Racism Illo 1.JPG"],"../assets/Structural Racism Illo 1.JPG"],"./../assets/concept art.jpeg":[["concept art.3f599986.jpeg","../assets/concept art.jpeg"],"../assets/concept art.jpeg"],"./../assets/structural racism.jpg":[["structural racism.59622d22.jpg","../assets/structural racism.jpg"],"../assets/structural racism.jpg"],"./../assets/individualizedracism.jpg":[["individualizedracism.445baa71.jpg","../assets/individualizedracism.jpg"],"../assets/individualizedracism.jpg"],"./../assets/slave ship.jpg":[["slave ship.6d5fb196.jpg","../assets/slave ship.jpg"],"../assets/slave ship.jpg"],"./../assets/Structural Racism Illo 2.JPG":[["Structural Racism Illo 2.41a6189e.JPG","../assets/Structural Racism Illo 2.JPG"],"../assets/Structural Racism Illo 2.JPG"],"./../assets/blacklivesmatterfist.png":[["blacklivesmatterfist.88902eea.png","../assets/blacklivesmatterfist.png"],"../assets/blacklivesmatterfist.png"],"./../assets/Individual Racism Illo.JPG":[["Individual Racism Illo.97eb236a.JPG","../assets/Individual Racism Illo.JPG"],"../assets/Individual Racism Illo.JPG"],"./../assets/wall1/stamped_kendi_reynolds.jpg":[["stamped_kendi_reynolds.60aa6e34.jpg","../assets/wall1/stamped_kendi_reynolds.jpg"],"../assets/wall1/stamped_kendi_reynolds.jpg"],"./../assets/wall1/the1619Project_nyt.jpg":[["the1619Project_nyt.033bc388.jpg","../assets/wall1/the1619Project_nyt.jpg"],"../assets/wall1/the1619Project_nyt.jpg"],"./../assets/wall1/theNewJimCrow_alexander.jpg":[["theNewJimCrow_alexander.e607c00f.jpg","../assets/wall1/theNewJimCrow_alexander.jpg"],"../assets/wall1/theNewJimCrow_alexander.jpg"],"./../assets/wall1/whiteFragility_diangelo.jpg":[["whiteFragility_diangelo.aeaad86f.jpg","../assets/wall1/whiteFragility_diangelo.jpg"],"../assets/wall1/whiteFragility_diangelo.jpg"],"./../assets/wall1/whyAreAllTheBlackKidsSittingTogether_tatum.jpg":[["whyAreAllTheBlackKidsSittingTogether_tatum.e0871633.jpg","../assets/wall1/whyAreAllTheBlackKidsSittingTogether_tatum.jpg"],"../assets/wall1/whyAreAllTheBlackKidsSittingTogether_tatum.jpg"],"./../assets/wall1/racismWithoutRacists_bonilla-silva.jpg":[["racismWithoutRacists_bonilla-silva.3d47eac0.jpg","../assets/wall1/racismWithoutRacists_bonilla-silva.jpg"],"../assets/wall1/racismWithoutRacists_bonilla-silva.jpg"],"./../assets/wall1/13th_duvernay.jpg":[["13th_duvernay.bda2274f.jpg","../assets/wall1/13th_duvernay.jpg"],"../assets/wall1/13th_duvernay.jpg"],"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}]