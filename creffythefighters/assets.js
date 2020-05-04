
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
 loadPackage({"files": [{"filename": "/assets/chars/creffy/creffy.ai", "start": 0, "end": 28020, "audio": 0}, {"filename": "/assets/chars/creffy/creffy.air", "start": 28020, "end": 45894, "audio": 0}, {"filename": "/assets/chars/creffy/creffy.cmd", "start": 45894, "end": 62220, "audio": 0}, {"filename": "/assets/chars/creffy/creffy.cns", "start": 62220, "end": 148381, "audio": 0}, {"filename": "/assets/chars/creffy/creffy.def", "start": 148381, "end": 149825, "audio": 0}, {"filename": "/assets/chars/creffy/creffy.sff", "start": 149825, "end": 365070, "audio": 0}, {"filename": "/assets/chars/creffy/creffy.snd", "start": 365070, "end": 1913627, "audio": 0}, {"filename": "/assets/chars/creffy/green.act", "start": 1913627, "end": 1914395, "audio": 0}, {"filename": "/assets/chars/creffy/neilmaybe.act", "start": 1914395, "end": 1915163, "audio": 0}, {"filename": "/assets/chars/creffy/normal.act", "start": 1915163, "end": 1915931, "audio": 0}, {"filename": "/assets/chars/creffy/orange.act", "start": 1915931, "end": 1916699, "audio": 0}, {"filename": "/assets/chars/creffy/readme.txt", "start": 1916699, "end": 1916921, "audio": 0}, {"filename": "/assets/chars/creffy/temmie.act", "start": 1916921, "end": 1917689, "audio": 0}, {"filename": "/assets/chars/suave/ending.def", "start": 1917689, "end": 1919736, "audio": 0}, {"filename": "/assets/chars/suave/ending.sff", "start": 1919736, "end": 1952703, "audio": 0}, {"filename": "/assets/chars/suave/intro.def", "start": 1952703, "end": 1955692, "audio": 0}, {"filename": "/assets/chars/suave/intro.sff", "start": 1955692, "end": 2015363, "audio": 0}, {"filename": "/assets/chars/suave/sd.air", "start": 2015363, "end": 2102207, "audio": 0}, {"filename": "/assets/chars/suave/sd.cmd", "start": 2102207, "end": 2114658, "audio": 0}, {"filename": "/assets/chars/suave/sd.cns", "start": 2114658, "end": 2184694, "audio": 0}, {"filename": "/assets/chars/suave/sd.sff", "start": 2184694, "end": 2749472, "audio": 0}, {"filename": "/assets/chars/suave/sd.snd", "start": 2749472, "end": 2826103, "audio": 0}, {"filename": "/assets/chars/suave/suave.act", "start": 2826103, "end": 2826871, "audio": 0}, {"filename": "/assets/chars/suave/suave.def", "start": 2826871, "end": 2827583, "audio": 0}, {"filename": "/assets/chars/suave/suave2.act", "start": 2827583, "end": 2828351, "audio": 0}, {"filename": "/assets/chars/suave/suave3.act", "start": 2828351, "end": 2829119, "audio": 0}, {"filename": "/assets/chars/suave/suave4.act", "start": 2829119, "end": 2829887, "audio": 0}, {"filename": "/assets/chars/suave/suave5.act", "start": 2829887, "end": 2830655, "audio": 0}, {"filename": "/assets/chars/suave/suave6.act", "start": 2830655, "end": 2831423, "audio": 0}, {"filename": "/assets/chars/suave/suaveblack.act", "start": 2831423, "end": 2832191, "audio": 0}, {"filename": "/assets/chars/theguy/readme.txt", "start": 2832191, "end": 2832413, "audio": 0}, {"filename": "/assets/chars/theguy/theguy.ai", "start": 2832413, "end": 2860433, "audio": 0}, {"filename": "/assets/chars/theguy/theguy.air", "start": 2860433, "end": 2878170, "audio": 0}, {"filename": "/assets/chars/theguy/theguy.cmd", "start": 2878170, "end": 2893654, "audio": 0}, {"filename": "/assets/chars/theguy/theguy.cns", "start": 2893654, "end": 2983360, "audio": 0}, {"filename": "/assets/chars/theguy/theguy.def", "start": 2983360, "end": 2984705, "audio": 0}, {"filename": "/assets/chars/theguy/theguy.sff", "start": 2984705, "end": 3286791, "audio": 0}, {"filename": "/assets/chars/theguy/theguy.snd", "start": 3286791, "end": 9171894, "audio": 0}, {"filename": "/assets/data/common.snd", "start": 9171894, "end": 9244599, "audio": 0}, {"filename": "/assets/data/common1.cns", "start": 9244599, "end": 9287798, "audio": 0}, {"filename": "/assets/data/fight.def", "start": 9287798, "end": 9304256, "audio": 0}, {"filename": "/assets/data/fight.sff", "start": 9304256, "end": 9374918, "audio": 0}, {"filename": "/assets/data/fight.snd", "start": 9374918, "end": 9464497, "audio": 0}, {"filename": "/assets/data/fightfx.air", "start": 9464497, "end": 9468418, "audio": 0}, {"filename": "/assets/data/fightfx.sff", "start": 9468418, "end": 9616633, "audio": 0}, {"filename": "/assets/data/font.def", "start": 9616633, "end": 9617351, "audio": 0}, {"filename": "/assets/data/mugen.cfg", "start": 9617351, "end": 9632633, "audio": 0}, {"filename": "/assets/data/osu.air", "start": 9632633, "end": 9632993, "audio": 0}, {"filename": "/assets/data/osu.sff", "start": 9632993, "end": 9652090, "audio": 0}, {"filename": "/assets/data/osu.snd", "start": 9652090, "end": 9695240, "audio": 0}, {"filename": "/assets/data/select.def", "start": 9695240, "end": 9698935, "audio": 0}, {"filename": "/assets/data/system.def", "start": 9698935, "end": 9714173, "audio": 0}, {"filename": "/assets/data/system.sff", "start": 9714173, "end": 9820600, "audio": 0}, {"filename": "/assets/data/system.snd", "start": 9820600, "end": 9829576, "audio": 0}, {"filename": "/assets/data/thieving-mice.ttf", "start": 9829576, "end": 9864960, "audio": 0}, {"filename": "/assets/data/big/readme.txt", "start": 9864960, "end": 9865488, "audio": 0}, {"filename": "/assets/data/big/system.def", "start": 9865488, "end": 9885627, "audio": 0}, {"filename": "/assets/data/kfm/credits.def", "start": 9885627, "end": 9887206, "audio": 0}, {"filename": "/assets/data/kfm/credits.sff", "start": 9887206, "end": 9916537, "audio": 0}, {"filename": "/assets/data/kfm/gameover.def", "start": 9916537, "end": 9917614, "audio": 0}, {"filename": "/assets/data/kfm/gameover.sff", "start": 9917614, "end": 9923381, "audio": 0}, {"filename": "/assets/data/kfm/intro.def", "start": 9923381, "end": 9926664, "audio": 0}, {"filename": "/assets/data/kfm/intro.sff", "start": 9926664, "end": 10024247, "audio": 0}, {"filename": "/assets/data/kfm/kfmtitle.sff", "start": 10024247, "end": 10055141, "audio": 0}, {"filename": "/assets/data/kfm/logo.def", "start": 10055141, "end": 10055596, "audio": 0}, {"filename": "/assets/data/kfm/logo.sff", "start": 10055596, "end": 10063593, "audio": 0}, {"filename": "/assets/data/kfm/select.def", "start": 10063593, "end": 10067115, "audio": 0}, {"filename": "/assets/data/kfm/system.def", "start": 10067115, "end": 10081199, "audio": 0}, {"filename": "/assets/data/mugen1/fight.def", "start": 10081199, "end": 10099388, "audio": 0}, {"filename": "/assets/data/mugen1/fight.sff", "start": 10099388, "end": 10345095, "audio": 0}, {"filename": "/assets/data/mugen1/system.def", "start": 10345095, "end": 10365870, "audio": 0}, {"filename": "/assets/data/mugen1/system.sff", "start": 10365870, "end": 11333586, "audio": 0}, {"filename": "/assets/font/arcade.def", "start": 11333586, "end": 11334254, "audio": 0}, {"filename": "/assets/font/arcade.sff", "start": 11334254, "end": 11376338, "audio": 0}, {"filename": "/assets/font/enter48.def", "start": 11376338, "end": 11376970, "audio": 0}, {"filename": "/assets/font/enter48.sff", "start": 11376970, "end": 11420980, "audio": 0}, {"filename": "/assets/font/f-4x6.def", "start": 11420980, "end": 11421648, "audio": 0}, {"filename": "/assets/font/f-4x6.fnt", "start": 11421648, "end": 11424676, "audio": 0}, {"filename": "/assets/font/f-4x6.sff", "start": 11424676, "end": 11430307, "audio": 0}, {"filename": "/assets/font/f-6x8f.fnt", "start": 11430307, "end": 11434621, "audio": 0}, {"filename": "/assets/font/f-6x9.def", "start": 11434621, "end": 11435289, "audio": 0}, {"filename": "/assets/font/f-6x9.fnt", "start": 11435289, "end": 11439699, "audio": 0}, {"filename": "/assets/font/f-6x9.sff", "start": 11439699, "end": 11446318, "audio": 0}, {"filename": "/assets/font/f-6x9f.fnt", "start": 11446318, "end": 11450625, "audio": 0}, {"filename": "/assets/font/f4x6.fnt", "start": 11450625, "end": 11453653, "audio": 0}, {"filename": "/assets/font/f6x8f.fnt", "start": 11453653, "end": 11457967, "audio": 0}, {"filename": "/assets/font/f6x9.fnt", "start": 11457967, "end": 11462377, "audio": 0}, {"filename": "/assets/font/f6x9f.fnt", "start": 11462377, "end": 11466684, "audio": 0}, {"filename": "/assets/font/fpad.fnt", "start": 11466684, "end": 11468332, "audio": 0}, {"filename": "/assets/font/infofont.def", "start": 11468332, "end": 11469023, "audio": 0}, {"filename": "/assets/font/jg.fnt", "start": 11469023, "end": 11476052, "audio": 0}, {"filename": "/assets/font/msgothic-tt36.def", "start": 11476052, "end": 11476757, "audio": 0}, {"filename": "/assets/font/mssansserif-tt36.def", "start": 11476757, "end": 11477449, "audio": 0}, {"filename": "/assets/font/n4x6.fnt", "start": 11477449, "end": 11478778, "audio": 0}, {"filename": "/assets/font/name1.fnt", "start": 11478778, "end": 11482637, "audio": 0}, {"filename": "/assets/font/name14.def", "start": 11482637, "end": 11483296, "audio": 0}, {"filename": "/assets/font/name14.sff", "start": 11483296, "end": 11503859, "audio": 0}, {"filename": "/assets/font/num1.def", "start": 11503859, "end": 11504526, "audio": 0}, {"filename": "/assets/font/num1.fnt", "start": 11504526, "end": 11507003, "audio": 0}, {"filename": "/assets/font/num1.sff", "start": 11507003, "end": 11517106, "audio": 0}, {"filename": "/assets/font/num48.def", "start": 11517106, "end": 11517776, "audio": 0}, {"filename": "/assets/font/num48.sff", "start": 11517776, "end": 11534080, "audio": 0}, {"filename": "/assets/font/options.def", "start": 11534080, "end": 11534771, "audio": 0}, {"filename": "/assets/sound/fanboy.mp3", "start": 11534771, "end": 11774891, "audio": 1}, {"filename": "/assets/sound/select.mp3", "start": 11774891, "end": 12399301, "audio": 1}, {"filename": "/assets/stages/kfm.def", "start": 12399301, "end": 12410680, "audio": 0}, {"filename": "/assets/stages/kfm.sff", "start": 12410680, "end": 12640439, "audio": 0}, {"filename": "/assets/stages/stage0.def", "start": 12640439, "end": 12651642, "audio": 0}, {"filename": "/assets/stages/stage0.sff", "start": 12651642, "end": 12655844, "audio": 0}], "remote_package_size": 12655844, "package_uuid": "02e97638-c8f0-494e-8076-c6e699c008b3"});

})();
