
var Module = typeof Module !== 'undefined' ? Module : {};

if (!Module.expectedDataFileDownloads) {
  Module.expectedDataFileDownloads = 0;
  Module.finishedDataFileDownloads = 0;
}
Module.expectedDataFileDownloads++;
(function() {
 var loadPackage = function(metadata) {

    var PACKAGE_PATH;
    if (typeof window === 'object') {
      PACKAGE_PATH = window['encodeURIComponent'](window.location.pathname.toString().substring(0, window.location.pathname.toString().lastIndexOf('/')) + '/');
    } else if (typeof location !== 'undefined') {
      // worker
      PACKAGE_PATH = encodeURIComponent(location.pathname.toString().substring(0, location.pathname.toString().lastIndexOf('/')) + '/');
    } else {
      throw 'using preloaded data can only be done on a web page or in a web worker';
    }
    var PACKAGE_NAME = 'build/assets.data';
    var REMOTE_PACKAGE_BASE = 'assets.data';
    if (typeof Module['locateFilePackage'] === 'function' && !Module['locateFile']) {
      Module['locateFile'] = Module['locateFilePackage'];
      err('warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)');
    }
    var REMOTE_PACKAGE_NAME = Module['locateFile'] ? Module['locateFile'](REMOTE_PACKAGE_BASE, '') : REMOTE_PACKAGE_BASE;
  
    var REMOTE_PACKAGE_SIZE = metadata.remote_package_size;
    var PACKAGE_UUID = metadata.package_uuid;
  
    function fetchRemotePackage(packageName, packageSize, callback, errback) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', packageName, true);
      xhr.responseType = 'arraybuffer';
      xhr.onprogress = function(event) {
        var url = packageName;
        var size = packageSize;
        if (event.total) size = event.total;
        if (event.loaded) {
          if (!xhr.addedTotal) {
            xhr.addedTotal = true;
            if (!Module.dataFileDownloads) Module.dataFileDownloads = {};
            Module.dataFileDownloads[url] = {
              loaded: event.loaded,
              total: size
            };
          } else {
            Module.dataFileDownloads[url].loaded = event.loaded;
          }
          var total = 0;
          var loaded = 0;
          var num = 0;
          for (var download in Module.dataFileDownloads) {
          var data = Module.dataFileDownloads[download];
            total += data.total;
            loaded += data.loaded;
            num++;
          }
          total = Math.ceil(total * Module.expectedDataFileDownloads/num);
          if (Module['setStatus']) Module['setStatus']('Downloading data... (' + loaded + '/' + total + ')');
        } else if (!Module.dataFileDownloads) {
          if (Module['setStatus']) Module['setStatus']('Downloading data...');
        }
      };
      xhr.onerror = function(event) {
        throw new Error("NetworkError for: " + packageName);
      }
      xhr.onload = function(event) {
        if (xhr.status == 200 || xhr.status == 304 || xhr.status == 206 || (xhr.status == 0 && xhr.response)) { // file URLs can return 0
          var packageData = xhr.response;
          callback(packageData);
        } else {
          throw new Error(xhr.statusText + " : " + xhr.responseURL);
        }
      };
      xhr.send(null);
    };

    function handleError(error) {
      console.error('package error:', error);
    };
  
      var fetchedCallback = null;
      var fetched = Module['getPreloadedPackage'] ? Module['getPreloadedPackage'](REMOTE_PACKAGE_NAME, REMOTE_PACKAGE_SIZE) : null;

      if (!fetched) fetchRemotePackage(REMOTE_PACKAGE_NAME, REMOTE_PACKAGE_SIZE, function(data) {
        if (fetchedCallback) {
          fetchedCallback(data);
          fetchedCallback = null;
        } else {
          fetched = data;
        }
      }, handleError);
    
  function runWithFS() {

    function assert(check, msg) {
      if (!check) throw msg + new Error().stack;
    }
Module['FS_createPath']('/', 'assets', true, true);
Module['FS_createPath']('/assets', 'chars', true, true);
Module['FS_createPath']('/assets/chars', 'creffy', true, true);
Module['FS_createPath']('/assets/chars', 'suave', true, true);
Module['FS_createPath']('/assets/chars', 'theguy', true, true);
Module['FS_createPath']('/assets', 'data', true, true);
Module['FS_createPath']('/assets/data', 'big', true, true);
Module['FS_createPath']('/assets/data', 'kfm', true, true);
Module['FS_createPath']('/assets/data', 'mugen1', true, true);
Module['FS_createPath']('/assets', 'font', true, true);
Module['FS_createPath']('/assets', 'sound', true, true);
Module['FS_createPath']('/assets', 'stages', true, true);

    function DataRequest(start, end, audio) {
      this.start = start;
      this.end = end;
      this.audio = audio;
    }
    DataRequest.prototype = {
      requests: {},
      open: function(mode, name) {
        this.name = name;
        this.requests[name] = this;
        Module['addRunDependency']('fp ' + this.name);
      },
      send: function() {},
      onload: function() {
        var byteArray = this.byteArray.subarray(this.start, this.end);
        this.finish(byteArray);
      },
      finish: function(byteArray) {
        var that = this;

        Module['FS_createDataFile'](this.name, null, byteArray, true, true, true); // canOwn this data in the filesystem, it is a slide into the heap that will never change
        Module['removeRunDependency']('fp ' + that.name);

        this.requests[this.name] = null;
      }
    };

        var files = metadata.files;
        for (var i = 0; i < files.length; ++i) {
          new DataRequest(files[i].start, files[i].end, files[i].audio).open('GET', files[i].filename);
        }

  
    function processPackageData(arrayBuffer) {
      Module.finishedDataFileDownloads++;
      assert(arrayBuffer, 'Loading data file failed.');
      assert(arrayBuffer instanceof ArrayBuffer, 'bad input to processPackageData');
      var byteArray = new Uint8Array(arrayBuffer);
      var curr;
      
        // copy the entire loaded file into a spot in the heap. Files will refer to slices in that. They cannot be freed though
        // (we may be allocating before malloc is ready, during startup).
        var ptr = Module['getMemory'](byteArray.length);
        Module['HEAPU8'].set(byteArray, ptr);
        DataRequest.prototype.byteArray = Module['HEAPU8'].subarray(ptr, ptr+byteArray.length);
  
          var files = metadata.files;
          for (var i = 0; i < files.length; ++i) {
            DataRequest.prototype.requests[files[i].filename].onload();
          }
              Module['removeRunDependency']('datafile_build/assets.data');

    };
    Module['addRunDependency']('datafile_build/assets.data');
  
    if (!Module.preloadResults) Module.preloadResults = {};
  
      Module.preloadResults[PACKAGE_NAME] = {fromCache: false};
      if (fetched) {
        processPackageData(fetched);
        fetched = null;
      } else {
        fetchedCallback = processPackageData;
      }
    
  }
  if (Module['calledRun']) {
    runWithFS();
  } else {
    if (!Module['preRun']) Module['preRun'] = [];
    Module["preRun"].push(runWithFS); // FS is not initialized yet, wait for it
  }

 }
 loadPackage({"files": [{"filename": "/assets/chars/creffy/creffy.ai", "start": 0, "end": 28020, "audio": 0}, {"filename": "/assets/chars/creffy/creffy.air", "start": 28020, "end": 45894, "audio": 0}, {"filename": "/assets/chars/creffy/creffy.cmd", "start": 45894, "end": 62220, "audio": 0}, {"filename": "/assets/chars/creffy/creffy.cns", "start": 62220, "end": 148381, "audio": 0}, {"filename": "/assets/chars/creffy/creffy.def", "start": 148381, "end": 149825, "audio": 0}, {"filename": "/assets/chars/creffy/creffy.sff", "start": 149825, "end": 365070, "audio": 0}, {"filename": "/assets/chars/creffy/creffy.snd", "start": 365070, "end": 1913627, "audio": 0}, {"filename": "/assets/chars/creffy/green.act", "start": 1913627, "end": 1914395, "audio": 0}, {"filename": "/assets/chars/creffy/neilmaybe.act", "start": 1914395, "end": 1915163, "audio": 0}, {"filename": "/assets/chars/creffy/normal.act", "start": 1915163, "end": 1915931, "audio": 0}, {"filename": "/assets/chars/creffy/orange.act", "start": 1915931, "end": 1916699, "audio": 0}, {"filename": "/assets/chars/creffy/readme.txt", "start": 1916699, "end": 1916921, "audio": 0}, {"filename": "/assets/chars/creffy/temmie.act", "start": 1916921, "end": 1917689, "audio": 0}, {"filename": "/assets/chars/suave/ending.def", "start": 1917689, "end": 1919736, "audio": 0}, {"filename": "/assets/chars/suave/ending.sff", "start": 1919736, "end": 1952703, "audio": 0}, {"filename": "/assets/chars/suave/intro.def", "start": 1952703, "end": 1955692, "audio": 0}, {"filename": "/assets/chars/suave/intro.sff", "start": 1955692, "end": 2015363, "audio": 0}, {"filename": "/assets/chars/suave/sd.air", "start": 2015363, "end": 2102207, "audio": 0}, {"filename": "/assets/chars/suave/sd.cmd", "start": 2102207, "end": 2114658, "audio": 0}, {"filename": "/assets/chars/suave/sd.cns", "start": 2114658, "end": 2184694, "audio": 0}, {"filename": "/assets/chars/suave/sd.sff", "start": 2184694, "end": 2749472, "audio": 0}, {"filename": "/assets/chars/suave/sd.snd", "start": 2749472, "end": 2826103, "audio": 0}, {"filename": "/assets/chars/suave/suave.act", "start": 2826103, "end": 2826871, "audio": 0}, {"filename": "/assets/chars/suave/suave.def", "start": 2826871, "end": 2827583, "audio": 0}, {"filename": "/assets/chars/suave/suave2.act", "start": 2827583, "end": 2828351, "audio": 0}, {"filename": "/assets/chars/suave/suave3.act", "start": 2828351, "end": 2829119, "audio": 0}, {"filename": "/assets/chars/suave/suave4.act", "start": 2829119, "end": 2829887, "audio": 0}, {"filename": "/assets/chars/suave/suave5.act", "start": 2829887, "end": 2830655, "audio": 0}, {"filename": "/assets/chars/suave/suave6.act", "start": 2830655, "end": 2831423, "audio": 0}, {"filename": "/assets/chars/suave/suaveblack.act", "start": 2831423, "end": 2832191, "audio": 0}, {"filename": "/assets/chars/theguy/readme.txt", "start": 2832191, "end": 2832413, "audio": 0}, {"filename": "/assets/chars/theguy/theguy.ai", "start": 2832413, "end": 2860433, "audio": 0}, {"filename": "/assets/chars/theguy/theguy.air", "start": 2860433, "end": 2878781, "audio": 0}, {"filename": "/assets/chars/theguy/theguy.cmd", "start": 2878781, "end": 2894265, "audio": 0}, {"filename": "/assets/chars/theguy/theguy.cns", "start": 2894265, "end": 2984917, "audio": 0}, {"filename": "/assets/chars/theguy/theguy.def", "start": 2984917, "end": 2986262, "audio": 0}, {"filename": "/assets/chars/theguy/theguy.sff", "start": 2986262, "end": 3326843, "audio": 0}, {"filename": "/assets/chars/theguy/theguy.snd", "start": 3326843, "end": 9211946, "audio": 0}, {"filename": "/assets/data/common.snd", "start": 9211946, "end": 9284651, "audio": 0}, {"filename": "/assets/data/common1.cns", "start": 9284651, "end": 9327850, "audio": 0}, {"filename": "/assets/data/fight.def", "start": 9327850, "end": 9344308, "audio": 0}, {"filename": "/assets/data/fight.sff", "start": 9344308, "end": 9414970, "audio": 0}, {"filename": "/assets/data/fight.snd", "start": 9414970, "end": 9504549, "audio": 0}, {"filename": "/assets/data/fightfx.air", "start": 9504549, "end": 9508470, "audio": 0}, {"filename": "/assets/data/fightfx.sff", "start": 9508470, "end": 9656685, "audio": 0}, {"filename": "/assets/data/font.def", "start": 9656685, "end": 9657403, "audio": 0}, {"filename": "/assets/data/mugen.cfg", "start": 9657403, "end": 9672685, "audio": 0}, {"filename": "/assets/data/osu.air", "start": 9672685, "end": 9673045, "audio": 0}, {"filename": "/assets/data/osu.sff", "start": 9673045, "end": 9692142, "audio": 0}, {"filename": "/assets/data/osu.snd", "start": 9692142, "end": 9735292, "audio": 0}, {"filename": "/assets/data/select.def", "start": 9735292, "end": 9738987, "audio": 0}, {"filename": "/assets/data/system.def", "start": 9738987, "end": 9754225, "audio": 0}, {"filename": "/assets/data/system.sff", "start": 9754225, "end": 9860652, "audio": 0}, {"filename": "/assets/data/system.snd", "start": 9860652, "end": 9869628, "audio": 0}, {"filename": "/assets/data/thieving-mice.ttf", "start": 9869628, "end": 9905012, "audio": 0}, {"filename": "/assets/data/big/readme.txt", "start": 9905012, "end": 9905540, "audio": 0}, {"filename": "/assets/data/big/system.def", "start": 9905540, "end": 9925679, "audio": 0}, {"filename": "/assets/data/kfm/credits.def", "start": 9925679, "end": 9927258, "audio": 0}, {"filename": "/assets/data/kfm/credits.sff", "start": 9927258, "end": 9956589, "audio": 0}, {"filename": "/assets/data/kfm/gameover.def", "start": 9956589, "end": 9957666, "audio": 0}, {"filename": "/assets/data/kfm/gameover.sff", "start": 9957666, "end": 9963433, "audio": 0}, {"filename": "/assets/data/kfm/intro.def", "start": 9963433, "end": 9966716, "audio": 0}, {"filename": "/assets/data/kfm/intro.sff", "start": 9966716, "end": 10064299, "audio": 0}, {"filename": "/assets/data/kfm/kfmtitle.sff", "start": 10064299, "end": 10095193, "audio": 0}, {"filename": "/assets/data/kfm/logo.def", "start": 10095193, "end": 10095648, "audio": 0}, {"filename": "/assets/data/kfm/logo.sff", "start": 10095648, "end": 10103645, "audio": 0}, {"filename": "/assets/data/kfm/select.def", "start": 10103645, "end": 10107167, "audio": 0}, {"filename": "/assets/data/kfm/system.def", "start": 10107167, "end": 10121251, "audio": 0}, {"filename": "/assets/data/mugen1/fight.def", "start": 10121251, "end": 10139440, "audio": 0}, {"filename": "/assets/data/mugen1/fight.sff", "start": 10139440, "end": 10385147, "audio": 0}, {"filename": "/assets/data/mugen1/system.def", "start": 10385147, "end": 10405922, "audio": 0}, {"filename": "/assets/data/mugen1/system.sff", "start": 10405922, "end": 11373638, "audio": 0}, {"filename": "/assets/font/arcade.def", "start": 11373638, "end": 11374306, "audio": 0}, {"filename": "/assets/font/arcade.sff", "start": 11374306, "end": 11416390, "audio": 0}, {"filename": "/assets/font/enter48.def", "start": 11416390, "end": 11417022, "audio": 0}, {"filename": "/assets/font/enter48.sff", "start": 11417022, "end": 11461032, "audio": 0}, {"filename": "/assets/font/f-4x6.def", "start": 11461032, "end": 11461700, "audio": 0}, {"filename": "/assets/font/f-4x6.fnt", "start": 11461700, "end": 11464728, "audio": 0}, {"filename": "/assets/font/f-4x6.sff", "start": 11464728, "end": 11470359, "audio": 0}, {"filename": "/assets/font/f-6x8f.fnt", "start": 11470359, "end": 11474673, "audio": 0}, {"filename": "/assets/font/f-6x9.def", "start": 11474673, "end": 11475341, "audio": 0}, {"filename": "/assets/font/f-6x9.fnt", "start": 11475341, "end": 11479751, "audio": 0}, {"filename": "/assets/font/f-6x9.sff", "start": 11479751, "end": 11486370, "audio": 0}, {"filename": "/assets/font/f-6x9f.fnt", "start": 11486370, "end": 11490677, "audio": 0}, {"filename": "/assets/font/f4x6.fnt", "start": 11490677, "end": 11493705, "audio": 0}, {"filename": "/assets/font/f6x8f.fnt", "start": 11493705, "end": 11498019, "audio": 0}, {"filename": "/assets/font/f6x9.fnt", "start": 11498019, "end": 11502429, "audio": 0}, {"filename": "/assets/font/f6x9f.fnt", "start": 11502429, "end": 11506736, "audio": 0}, {"filename": "/assets/font/fpad.fnt", "start": 11506736, "end": 11508384, "audio": 0}, {"filename": "/assets/font/infofont.def", "start": 11508384, "end": 11509075, "audio": 0}, {"filename": "/assets/font/jg.fnt", "start": 11509075, "end": 11516104, "audio": 0}, {"filename": "/assets/font/msgothic-tt36.def", "start": 11516104, "end": 11516809, "audio": 0}, {"filename": "/assets/font/mssansserif-tt36.def", "start": 11516809, "end": 11517501, "audio": 0}, {"filename": "/assets/font/n4x6.fnt", "start": 11517501, "end": 11518830, "audio": 0}, {"filename": "/assets/font/name1.fnt", "start": 11518830, "end": 11522689, "audio": 0}, {"filename": "/assets/font/name14.def", "start": 11522689, "end": 11523348, "audio": 0}, {"filename": "/assets/font/name14.sff", "start": 11523348, "end": 11543911, "audio": 0}, {"filename": "/assets/font/num1.def", "start": 11543911, "end": 11544578, "audio": 0}, {"filename": "/assets/font/num1.fnt", "start": 11544578, "end": 11547055, "audio": 0}, {"filename": "/assets/font/num1.sff", "start": 11547055, "end": 11557158, "audio": 0}, {"filename": "/assets/font/num48.def", "start": 11557158, "end": 11557828, "audio": 0}, {"filename": "/assets/font/num48.sff", "start": 11557828, "end": 11574132, "audio": 0}, {"filename": "/assets/font/options.def", "start": 11574132, "end": 11574823, "audio": 0}, {"filename": "/assets/sound/fanboy.mp3", "start": 11574823, "end": 11814943, "audio": 1}, {"filename": "/assets/sound/select.mp3", "start": 11814943, "end": 12439353, "audio": 1}, {"filename": "/assets/stages/kfm.def", "start": 12439353, "end": 12450732, "audio": 0}, {"filename": "/assets/stages/kfm.sff", "start": 12450732, "end": 12680491, "audio": 0}, {"filename": "/assets/stages/stage0.def", "start": 12680491, "end": 12691694, "audio": 0}, {"filename": "/assets/stages/stage0.sff", "start": 12691694, "end": 12695896, "audio": 0}], "remote_package_size": 12695896, "package_uuid": "99ff2efe-931b-40e4-bb75-cc7d6e498c02"});

})();
