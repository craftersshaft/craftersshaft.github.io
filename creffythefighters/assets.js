
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
 loadPackage({"files": [{"filename": "/assets/chars/creffy/creffy.ai", "start": 0, "end": 28020, "audio": 0}, {"filename": "/assets/chars/creffy/creffy.air", "start": 28020, "end": 45894, "audio": 0}, {"filename": "/assets/chars/creffy/creffy.cmd", "start": 45894, "end": 62220, "audio": 0}, {"filename": "/assets/chars/creffy/creffy.cns", "start": 62220, "end": 148381, "audio": 0}, {"filename": "/assets/chars/creffy/creffy.def", "start": 148381, "end": 149825, "audio": 0}, {"filename": "/assets/chars/creffy/creffy.sff", "start": 149825, "end": 365070, "audio": 0}, {"filename": "/assets/chars/creffy/creffy.snd", "start": 365070, "end": 1913627, "audio": 0}, {"filename": "/assets/chars/creffy/green.act", "start": 1913627, "end": 1914395, "audio": 0}, {"filename": "/assets/chars/creffy/neilmaybe.act", "start": 1914395, "end": 1915163, "audio": 0}, {"filename": "/assets/chars/creffy/normal.act", "start": 1915163, "end": 1915931, "audio": 0}, {"filename": "/assets/chars/creffy/orange.act", "start": 1915931, "end": 1916699, "audio": 0}, {"filename": "/assets/chars/creffy/readme.txt", "start": 1916699, "end": 1916921, "audio": 0}, {"filename": "/assets/chars/creffy/temmie.act", "start": 1916921, "end": 1917689, "audio": 0}, {"filename": "/assets/chars/suave/ending.def", "start": 1917689, "end": 1919736, "audio": 0}, {"filename": "/assets/chars/suave/ending.sff", "start": 1919736, "end": 1952703, "audio": 0}, {"filename": "/assets/chars/suave/intro.def", "start": 1952703, "end": 1955692, "audio": 0}, {"filename": "/assets/chars/suave/intro.sff", "start": 1955692, "end": 2015363, "audio": 0}, {"filename": "/assets/chars/suave/sd.air", "start": 2015363, "end": 2102207, "audio": 0}, {"filename": "/assets/chars/suave/sd.cmd", "start": 2102207, "end": 2114658, "audio": 0}, {"filename": "/assets/chars/suave/sd.cns", "start": 2114658, "end": 2184694, "audio": 0}, {"filename": "/assets/chars/suave/sd.sff", "start": 2184694, "end": 2749472, "audio": 0}, {"filename": "/assets/chars/suave/sd.snd", "start": 2749472, "end": 2826103, "audio": 0}, {"filename": "/assets/chars/suave/suave.act", "start": 2826103, "end": 2826871, "audio": 0}, {"filename": "/assets/chars/suave/suave.def", "start": 2826871, "end": 2827583, "audio": 0}, {"filename": "/assets/chars/suave/suave2.act", "start": 2827583, "end": 2828351, "audio": 0}, {"filename": "/assets/chars/suave/suave3.act", "start": 2828351, "end": 2829119, "audio": 0}, {"filename": "/assets/chars/suave/suave4.act", "start": 2829119, "end": 2829887, "audio": 0}, {"filename": "/assets/chars/suave/suave5.act", "start": 2829887, "end": 2830655, "audio": 0}, {"filename": "/assets/chars/suave/suave6.act", "start": 2830655, "end": 2831423, "audio": 0}, {"filename": "/assets/chars/suave/suaveblack.act", "start": 2831423, "end": 2832191, "audio": 0}, {"filename": "/assets/chars/theguy/readme.txt", "start": 2832191, "end": 2832413, "audio": 0}, {"filename": "/assets/chars/theguy/theguy.ai", "start": 2832413, "end": 2860433, "audio": 0}, {"filename": "/assets/chars/theguy/theguy.air", "start": 2860433, "end": 2878782, "audio": 0}, {"filename": "/assets/chars/theguy/theguy.cmd", "start": 2878782, "end": 2894266, "audio": 0}, {"filename": "/assets/chars/theguy/theguy.cns", "start": 2894266, "end": 2984874, "audio": 0}, {"filename": "/assets/chars/theguy/theguy.def", "start": 2984874, "end": 2986219, "audio": 0}, {"filename": "/assets/chars/theguy/theguy.sff", "start": 2986219, "end": 3326800, "audio": 0}, {"filename": "/assets/chars/theguy/theguy.snd", "start": 3326800, "end": 9211903, "audio": 0}, {"filename": "/assets/data/common.snd", "start": 9211903, "end": 9284608, "audio": 0}, {"filename": "/assets/data/common1.cns", "start": 9284608, "end": 9327807, "audio": 0}, {"filename": "/assets/data/fight.def", "start": 9327807, "end": 9344265, "audio": 0}, {"filename": "/assets/data/fight.sff", "start": 9344265, "end": 9414927, "audio": 0}, {"filename": "/assets/data/fight.snd", "start": 9414927, "end": 9504506, "audio": 0}, {"filename": "/assets/data/fightfx.air", "start": 9504506, "end": 9508427, "audio": 0}, {"filename": "/assets/data/fightfx.sff", "start": 9508427, "end": 9656642, "audio": 0}, {"filename": "/assets/data/font.def", "start": 9656642, "end": 9657360, "audio": 0}, {"filename": "/assets/data/mugen.cfg", "start": 9657360, "end": 9672642, "audio": 0}, {"filename": "/assets/data/osu.air", "start": 9672642, "end": 9673002, "audio": 0}, {"filename": "/assets/data/osu.sff", "start": 9673002, "end": 9692099, "audio": 0}, {"filename": "/assets/data/osu.snd", "start": 9692099, "end": 9735249, "audio": 0}, {"filename": "/assets/data/select.def", "start": 9735249, "end": 9738944, "audio": 0}, {"filename": "/assets/data/system.def", "start": 9738944, "end": 9754182, "audio": 0}, {"filename": "/assets/data/system.sff", "start": 9754182, "end": 9860609, "audio": 0}, {"filename": "/assets/data/system.snd", "start": 9860609, "end": 9869585, "audio": 0}, {"filename": "/assets/data/thieving-mice.ttf", "start": 9869585, "end": 9904969, "audio": 0}, {"filename": "/assets/data/big/readme.txt", "start": 9904969, "end": 9905497, "audio": 0}, {"filename": "/assets/data/big/system.def", "start": 9905497, "end": 9925636, "audio": 0}, {"filename": "/assets/data/kfm/credits.def", "start": 9925636, "end": 9927215, "audio": 0}, {"filename": "/assets/data/kfm/credits.sff", "start": 9927215, "end": 9956546, "audio": 0}, {"filename": "/assets/data/kfm/gameover.def", "start": 9956546, "end": 9957623, "audio": 0}, {"filename": "/assets/data/kfm/gameover.sff", "start": 9957623, "end": 9963390, "audio": 0}, {"filename": "/assets/data/kfm/intro.def", "start": 9963390, "end": 9966673, "audio": 0}, {"filename": "/assets/data/kfm/intro.sff", "start": 9966673, "end": 10064256, "audio": 0}, {"filename": "/assets/data/kfm/kfmtitle.sff", "start": 10064256, "end": 10095150, "audio": 0}, {"filename": "/assets/data/kfm/logo.def", "start": 10095150, "end": 10095605, "audio": 0}, {"filename": "/assets/data/kfm/logo.sff", "start": 10095605, "end": 10103602, "audio": 0}, {"filename": "/assets/data/kfm/select.def", "start": 10103602, "end": 10107124, "audio": 0}, {"filename": "/assets/data/kfm/system.def", "start": 10107124, "end": 10121208, "audio": 0}, {"filename": "/assets/data/mugen1/fight.def", "start": 10121208, "end": 10139397, "audio": 0}, {"filename": "/assets/data/mugen1/fight.sff", "start": 10139397, "end": 10385104, "audio": 0}, {"filename": "/assets/data/mugen1/system.def", "start": 10385104, "end": 10405879, "audio": 0}, {"filename": "/assets/data/mugen1/system.sff", "start": 10405879, "end": 11373595, "audio": 0}, {"filename": "/assets/font/arcade.def", "start": 11373595, "end": 11374263, "audio": 0}, {"filename": "/assets/font/arcade.sff", "start": 11374263, "end": 11416347, "audio": 0}, {"filename": "/assets/font/enter48.def", "start": 11416347, "end": 11416979, "audio": 0}, {"filename": "/assets/font/enter48.sff", "start": 11416979, "end": 11460989, "audio": 0}, {"filename": "/assets/font/f-4x6.def", "start": 11460989, "end": 11461657, "audio": 0}, {"filename": "/assets/font/f-4x6.fnt", "start": 11461657, "end": 11464685, "audio": 0}, {"filename": "/assets/font/f-4x6.sff", "start": 11464685, "end": 11470316, "audio": 0}, {"filename": "/assets/font/f-6x8f.fnt", "start": 11470316, "end": 11474630, "audio": 0}, {"filename": "/assets/font/f-6x9.def", "start": 11474630, "end": 11475298, "audio": 0}, {"filename": "/assets/font/f-6x9.fnt", "start": 11475298, "end": 11479708, "audio": 0}, {"filename": "/assets/font/f-6x9.sff", "start": 11479708, "end": 11486327, "audio": 0}, {"filename": "/assets/font/f-6x9f.fnt", "start": 11486327, "end": 11490634, "audio": 0}, {"filename": "/assets/font/f4x6.fnt", "start": 11490634, "end": 11493662, "audio": 0}, {"filename": "/assets/font/f6x8f.fnt", "start": 11493662, "end": 11497976, "audio": 0}, {"filename": "/assets/font/f6x9.fnt", "start": 11497976, "end": 11502386, "audio": 0}, {"filename": "/assets/font/f6x9f.fnt", "start": 11502386, "end": 11506693, "audio": 0}, {"filename": "/assets/font/fpad.fnt", "start": 11506693, "end": 11508341, "audio": 0}, {"filename": "/assets/font/infofont.def", "start": 11508341, "end": 11509032, "audio": 0}, {"filename": "/assets/font/jg.fnt", "start": 11509032, "end": 11516061, "audio": 0}, {"filename": "/assets/font/msgothic-tt36.def", "start": 11516061, "end": 11516766, "audio": 0}, {"filename": "/assets/font/mssansserif-tt36.def", "start": 11516766, "end": 11517458, "audio": 0}, {"filename": "/assets/font/n4x6.fnt", "start": 11517458, "end": 11518787, "audio": 0}, {"filename": "/assets/font/name1.fnt", "start": 11518787, "end": 11522646, "audio": 0}, {"filename": "/assets/font/name14.def", "start": 11522646, "end": 11523305, "audio": 0}, {"filename": "/assets/font/name14.sff", "start": 11523305, "end": 11543868, "audio": 0}, {"filename": "/assets/font/num1.def", "start": 11543868, "end": 11544535, "audio": 0}, {"filename": "/assets/font/num1.fnt", "start": 11544535, "end": 11547012, "audio": 0}, {"filename": "/assets/font/num1.sff", "start": 11547012, "end": 11557115, "audio": 0}, {"filename": "/assets/font/num48.def", "start": 11557115, "end": 11557785, "audio": 0}, {"filename": "/assets/font/num48.sff", "start": 11557785, "end": 11574089, "audio": 0}, {"filename": "/assets/font/options.def", "start": 11574089, "end": 11574780, "audio": 0}, {"filename": "/assets/sound/fanboy.mp3", "start": 11574780, "end": 11814900, "audio": 1}, {"filename": "/assets/sound/select.mp3", "start": 11814900, "end": 12439310, "audio": 1}, {"filename": "/assets/stages/fanboy.def", "start": 12439310, "end": 12441038, "audio": 0}, {"filename": "/assets/stages/fanboy.mp3", "start": 12441038, "end": 12681158, "audio": 1}, {"filename": "/assets/stages/fanboy.sff", "start": 12681158, "end": 13198177, "audio": 0}, {"filename": "/assets/stages/kfm.def", "start": 13198177, "end": 13209556, "audio": 0}, {"filename": "/assets/stages/kfm.sff", "start": 13209556, "end": 13439315, "audio": 0}, {"filename": "/assets/stages/stage0.def", "start": 13439315, "end": 13450518, "audio": 0}, {"filename": "/assets/stages/stage0.sff", "start": 13450518, "end": 13454720, "audio": 0}], "remote_package_size": 13454720, "package_uuid": "579845bc-9dd3-4ee3-9c87-dd1b715a5268"});

})();
