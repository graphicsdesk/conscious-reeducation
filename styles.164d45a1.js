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
},{"./../assets/TitleScreenIllo.JPG":[["TitleScreenIllo.062be650.JPG","../assets/TitleScreenIllo.JPG"],"../assets/TitleScreenIllo.JPG"],"./../assets/StructuralRacismIllo1.JPG":[["StructuralRacismIllo1.7ef45e36.JPG","../assets/StructuralRacismIllo1.JPG"],"../assets/StructuralRacismIllo1.JPG"],"./../assets/conceptart.jpeg":[["conceptart.7ecd6211.jpeg","../assets/conceptart.jpeg"],"../assets/conceptart.jpeg"],"./../assets/structuralracism.jpg":[["structuralracism.af3b11bd.jpg","../assets/structuralracism.jpg"],"../assets/structuralracism.jpg"],"./../assets/individualizedracism.jpg":[["individualizedracism.445baa71.jpg","../assets/individualizedracism.jpg"],"../assets/individualizedracism.jpg"],"./../assets/wall2/courageousConversationsAboutRace.jpg":[["courageousConversationsAboutRace.5ccfcacc.jpg","../assets/wall2/courageousConversationsAboutRace.jpg"],"../assets/wall2/courageousConversationsAboutRace.jpg"],"./../assets/slaveship.jpg":[["slaveship.80288efd.jpg","../assets/slaveship.jpg"],"../assets/slaveship.jpg"],"./../assets/StructuralRacismIllo2.JPG":[["StructuralRacismIllo2.e77ba0b3.JPG","../assets/StructuralRacismIllo2.JPG"],"../assets/StructuralRacismIllo2.JPG"],"./../assets/blacklivesmatterfist.png":[["blacklivesmatterfist.88902eea.png","../assets/blacklivesmatterfist.png"],"../assets/blacklivesmatterfist.png"],"./../assets/IndividualRacismIllo.JPG":[["IndividualRacismIllo.9b80bfd8.JPG","../assets/IndividualRacismIllo.JPG"],"../assets/IndividualRacismIllo.JPG"],"./../assets/wall1/stamped_kendi_reynolds.jpg":[["stamped_kendi_reynolds.60aa6e34.jpg","../assets/wall1/stamped_kendi_reynolds.jpg"],"../assets/wall1/stamped_kendi_reynolds.jpg"],"./../assets/wall1/the1619Project_nyt.jpg":[["the1619Project_nyt.033bc388.jpg","../assets/wall1/the1619Project_nyt.jpg"],"../assets/wall1/the1619Project_nyt.jpg"],"./../assets/wall1/theNewJimCrow_alexander.jpg":[["theNewJimCrow_alexander.e607c00f.jpg","../assets/wall1/theNewJimCrow_alexander.jpg"],"../assets/wall1/theNewJimCrow_alexander.jpg"],"./../assets/wall1/whiteFragility_diangelo.jpg":[["whiteFragility_diangelo.aeaad86f.jpg","../assets/wall1/whiteFragility_diangelo.jpg"],"../assets/wall1/whiteFragility_diangelo.jpg"],"./../assets/wall1/whyAreAllTheBlackKidsSittingTogether_tatum.jpg":[["whyAreAllTheBlackKidsSittingTogether_tatum.e0871633.jpg","../assets/wall1/whyAreAllTheBlackKidsSittingTogether_tatum.jpg"],"../assets/wall1/whyAreAllTheBlackKidsSittingTogether_tatum.jpg"],"./../assets/wall1/racismWithoutRacists_bonilla-silva.jpg":[["racismWithoutRacists_bonilla-silva.3d47eac0.jpg","../assets/wall1/racismWithoutRacists_bonilla-silva.jpg"],"../assets/wall1/racismWithoutRacists_bonilla-silva.jpg"],"./../assets/wall1/13th_duvernay.jpg":[["13th_duvernay.bda2274f.jpg","../assets/wall1/13th_duvernay.jpg"],"../assets/wall1/13th_duvernay.jpg"],"./../assets/wall2/heavy_laymon.jpg":[["heavy_laymon.b2299185.jpg","../assets/wall2/heavy_laymon.jpg"],"../assets/wall2/heavy_laymon.jpg"],"./../assets/wall2/pushout.jpeg":[["pushout.873f96f2.jpeg","../assets/wall2/pushout.jpeg"],"../assets/wall2/pushout.jpeg"],"./../assets/wall2/justMercy_stevenson.jpg":[["justMercy_stevenson.ac56e46f.jpg","../assets/wall2/justMercy_stevenson.jpg"],"../assets/wall2/justMercy_stevenson.jpg"],"./../assets/wall2/theFireThisTime_ward.jpg":[["theFireThisTime_ward.7ad69c7f.jpg","../assets/wall2/theFireThisTime_ward.jpg"],"../assets/wall2/theFireThisTime_ward.jpg"],"./../assets/wall2/theFireNextTime_baldwin.jpg":[["theFireNextTime_baldwin.1d20faa4.jpg","../assets/wall2/theFireNextTime_baldwin.jpg"],"../assets/wall2/theFireNextTime_baldwin.jpg"],"./../assets/wall2/betweenTheWorldAndMe_coates.jpeg":[["betweenTheWorldAndMe_coates.a14ccbbc.jpeg","../assets/wall2/betweenTheWorldAndMe_coates.jpeg"],"../assets/wall2/betweenTheWorldAndMe_coates.jpeg"],"./../assets/wall2/imStillHere_brown.jpeg":[["imStillHere_brown.9440c207.jpeg","../assets/wall2/imStillHere_brown.jpeg"],"../assets/wall2/imStillHere_brown.jpeg"],"./../assets/wall2/noAshesInTheFire_moore.jpg":[["noAshesInTheFire_moore.f97f6a9b.jpg","../assets/wall2/noAshesInTheFire_moore.jpg"],"../assets/wall2/noAshesInTheFire_moore.jpg"],"./../assets/wall2/citizen_rankine.jpg":[["citizen_rankine.7b7b8ae7.jpg","../assets/wall2/citizen_rankine.jpg"],"../assets/wall2/citizen_rankine.jpg"],"./../assets/wall2/whenTheyCallYouATerrorist_khan-cullers_bandele.jpg":[["whenTheyCallYouATerrorist_khan-cullers_bandele.d577ce77.jpg","../assets/wall2/whenTheyCallYouATerrorist_khan-cullers_bandele.jpg"],"../assets/wall2/whenTheyCallYouATerrorist_khan-cullers_bandele.jpg"],"./../assets/wall2/intersectionaliyMatters_crenshaw.jpg":[["intersectionaliyMatters_crenshaw.c3643cb2.jpg","../assets/wall2/intersectionaliyMatters_crenshaw.jpg"],"../assets/wall2/intersectionaliyMatters_crenshaw.jpg"],"./../assets/wall2/biased_eberhardt.jpg":[["biased_eberhardt.6bc5b976.jpg","../assets/wall2/biased_eberhardt.jpg"],"../assets/wall2/biased_eberhardt.jpg"],"./../assets/wall2/timeTheKaliefBrowderStory.jpg":[["timeTheKaliefBrowderStory.199e12e4.jpg","../assets/wall2/timeTheKaliefBrowderStory.jpg"],"../assets/wall2/timeTheKaliefBrowderStory.jpg"],"./../assets/wall2/americanSon.jpeg":[["americanSon.2fe338e3.jpeg","../assets/wall2/americanSon.jpeg"],"../assets/wall2/americanSon.jpeg"],"./../assets/wall2/justMercy.jpg":[["justMercy.c3e2476d.jpg","../assets/wall2/justMercy.jpg"],"../assets/wall2/justMercy.jpg"],"./../assets/wall2/fruitvaleStation.jpg":[["fruitvaleStation.d66b4f78.jpg","../assets/wall2/fruitvaleStation.jpg"],"../assets/wall2/fruitvaleStation.jpg"],"./../assets/wall2/dearWhitePeople.jpg":[["dearWhitePeople.dea98c9d.jpg","../assets/wall2/dearWhitePeople.jpg"],"../assets/wall2/dearWhitePeople.jpg"],"./../assets/wall2/whenTheySeeUs.jpg":[["whenTheySeeUs.03f7bb68.jpg","../assets/wall2/whenTheySeeUs.jpg"],"../assets/wall2/whenTheySeeUs.jpg"],"./../assets/wall2/iAmNotYourNegro.jpg":[["iAmNotYourNegro.a397219e.jpg","../assets/wall2/iAmNotYourNegro.jpg"],"../assets/wall2/iAmNotYourNegro.jpg"],"./../assets/wall2/selma.jpg":[["selma.ace49bb7.jpg","../assets/wall2/selma.jpg"],"../assets/wall2/selma.jpg"],"./../assets/wall2/sayHerName.jpg":[["sayHerName.f787f3cb.jpg","../assets/wall2/sayHerName.jpg"],"../assets/wall2/sayHerName.jpg"],"./../assets/wall2/ifBealeStreetCouldTalk.jpeg":[["ifBealeStreetCouldTalk.7571216e.jpeg","../assets/wall2/ifBealeStreetCouldTalk.jpeg"],"../assets/wall2/ifBealeStreetCouldTalk.jpeg"],"./../assets/wall2/theBirthOfANation.png":[["theBirthOfANation.77e2d094.png","../assets/wall2/theBirthOfANation.png"],"../assets/wall2/theBirthOfANation.png"],"./../assets/wall3/blackFeministThough_collins.jpg":[["blackFeministThough_collins.16cfe05f.jpg","../assets/wall3/blackFeministThough_collins.jpg"],"../assets/wall3/blackFeministThough_collins.jpg"],"./../assets/wall3/sisterOutsider_lorde.jpg":[["sisterOutsider_lorde.332e807c.jpg","../assets/wall3/sisterOutsider_lorde.jpg"],"../assets/wall3/sisterOutsider_lorde.jpg"],"./../assets/wall3/soYouWantToTalkAboutRace_oluo.jpg":[["soYouWantToTalkAboutRace_oluo.7933f5dc.jpg","../assets/wall3/soYouWantToTalkAboutRace_oluo.jpg"],"../assets/wall3/soYouWantToTalkAboutRace_oluo.jpg"],"./../assets/wall3/hoodFeminism_kendall.jpg":[["hoodFeminism_kendall.a3331cdc.jpg","../assets/wall3/hoodFeminism_kendall.jpg"],"../assets/wall3/hoodFeminism_kendall.jpg"],"./../assets/wall3/eloquentRage_cooper.jpg":[["eloquentRage_cooper.9e4062c5.jpg","../assets/wall3/eloquentRage_cooper.jpg"],"../assets/wall3/eloquentRage_cooper.jpg"],"./../assets/wall3/thisBridgeCalledMyBack_moraga_anzaldua.jpg":[["thisBridgeCalledMyBack_moraga_anzaldua.05f1d0b2.jpg","../assets/wall3/thisBridgeCalledMyBack_moraga_anzaldua.jpg"],"../assets/wall3/thisBridgeCalledMyBack_moraga_anzaldua.jpg"],"./../assets/wall3/theBlackPanthers.jpg":[["theBlackPanthers.9921e231.jpg","../assets/wall3/theBlackPanthers.jpg"],"../assets/wall3/theBlackPanthers.jpg"],"./../assets/wall3/hoodratToHeadwrap.jpg":[["hoodratToHeadwrap.91dc91b0.jpg","../assets/wall3/hoodratToHeadwrap.jpg"],"../assets/wall3/hoodratToHeadwrap.jpg"],"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "62010" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}],"../node_modules/parcel-bundler/src/builtins/bundle-loader.js":[function(require,module,exports) {
var getBundleURL = require('./bundle-url').getBundleURL;

function loadBundlesLazy(bundles) {
  if (!Array.isArray(bundles)) {
    bundles = [bundles];
  }

  var id = bundles[bundles.length - 1];

  try {
    return Promise.resolve(require(id));
  } catch (err) {
    if (err.code === 'MODULE_NOT_FOUND') {
      return new LazyPromise(function (resolve, reject) {
        loadBundles(bundles.slice(0, -1)).then(function () {
          return require(id);
        }).then(resolve, reject);
      });
    }

    throw err;
  }
}

function loadBundles(bundles) {
  return Promise.all(bundles.map(loadBundle));
}

var bundleLoaders = {};

function registerBundleLoader(type, loader) {
  bundleLoaders[type] = loader;
}

module.exports = exports = loadBundlesLazy;
exports.load = loadBundles;
exports.register = registerBundleLoader;
var bundles = {};

function loadBundle(bundle) {
  var id;

  if (Array.isArray(bundle)) {
    id = bundle[1];
    bundle = bundle[0];
  }

  if (bundles[bundle]) {
    return bundles[bundle];
  }

  var type = (bundle.substring(bundle.lastIndexOf('.') + 1, bundle.length) || bundle).toLowerCase();
  var bundleLoader = bundleLoaders[type];

  if (bundleLoader) {
    return bundles[bundle] = bundleLoader(getBundleURL() + bundle).then(function (resolved) {
      if (resolved) {
        module.bundle.register(id, resolved);
      }

      return resolved;
    }).catch(function (e) {
      delete bundles[bundle];
      throw e;
    });
  }
}

function LazyPromise(executor) {
  this.executor = executor;
  this.promise = null;
}

LazyPromise.prototype.then = function (onSuccess, onError) {
  if (this.promise === null) this.promise = new Promise(this.executor);
  return this.promise.then(onSuccess, onError);
};

LazyPromise.prototype.catch = function (onError) {
  if (this.promise === null) this.promise = new Promise(this.executor);
  return this.promise.catch(onError);
};
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],0:[function(require,module,exports) {
var b=require("../node_modules/parcel-bundler/src/builtins/bundle-loader.js");
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js",0], "script")
//# sourceMappingURL=/styles.164d45a1.js.map