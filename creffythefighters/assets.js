
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
Module['FS_createPath']('/assets/chars', 'suave', true, true);
Module['FS_createPath']('/assets', 'data', true, true);
Module['FS_createPath']('/assets', 'font', true, true);
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

        Module['FS_createPreloadedFile'](this.name, null, byteArray, true, true, function() {
          Module['removeRunDependency']('fp ' + that.name);
        }, function() {
          if (that.audio) {
            Module['removeRunDependency']('fp ' + that.name); // workaround for chromium bug 124926 (still no audio with this, but at least we don't hang)
          } else {
            err('Preloading file ' + that.name + ' failed');
          }
        }, false, true); // canOwn this data in the filesystem, it is a slide into the heap that will never change

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
 loadPackage({"files": [{"filename": "/assets/chars/suave/ending.def", "start": 0, "end": 2047, "audio": 0}, {"filename": "/assets/chars/suave/ending.sff", "start": 2047, "end": 35014, "audio": 0}, {"filename": "/assets/chars/suave/intro.def", "start": 35014, "end": 38003, "audio": 0}, {"filename": "/assets/chars/suave/intro.sff", "start": 38003, "end": 97674, "audio": 0}, {"filename": "/assets/chars/suave/sd.air", "start": 97674, "end": 184518, "audio": 0}, {"filename": "/assets/chars/suave/sd.cmd", "start": 184518, "end": 196969, "audio": 0}, {"filename": "/assets/chars/suave/sd.cns", "start": 196969, "end": 267005, "audio": 0}, {"filename": "/assets/chars/suave/sd.sff", "start": 267005, "end": 831783, "audio": 0}, {"filename": "/assets/chars/suave/sd.snd", "start": 831783, "end": 908414, "audio": 0}, {"filename": "/assets/chars/suave/suave.act", "start": 908414, "end": 909182, "audio": 0}, {"filename": "/assets/chars/suave/suave.def", "start": 909182, "end": 909894, "audio": 0}, {"filename": "/assets/chars/suave/suave2.act", "start": 909894, "end": 910662, "audio": 0}, {"filename": "/assets/chars/suave/suave3.act", "start": 910662, "end": 911430, "audio": 0}, {"filename": "/assets/chars/suave/suave4.act", "start": 911430, "end": 912198, "audio": 0}, {"filename": "/assets/chars/suave/suave5.act", "start": 912198, "end": 912966, "audio": 0}, {"filename": "/assets/chars/suave/suave6.act", "start": 912966, "end": 913734, "audio": 0}, {"filename": "/assets/chars/suave/suaveblack.act", "start": 913734, "end": 914502, "audio": 0}, {"filename": "/assets/data/common.snd", "start": 914502, "end": 987207, "audio": 0}, {"filename": "/assets/data/common1.cns", "start": 987207, "end": 1030570, "audio": 0}, {"filename": "/assets/data/fight.def", "start": 1030570, "end": 1047097, "audio": 0}, {"filename": "/assets/data/fight.sff", "start": 1047097, "end": 1117222, "audio": 0}, {"filename": "/assets/data/fight.snd", "start": 1117222, "end": 1206801, "audio": 0}, {"filename": "/assets/data/fightfx.air", "start": 1206801, "end": 1210722, "audio": 0}, {"filename": "/assets/data/fightfx.sff", "start": 1210722, "end": 1358937, "audio": 0}, {"filename": "/assets/data/mugen.cfg", "start": 1358937, "end": 1375776, "audio": 0}, {"filename": "/assets/data/osu.air", "start": 1375776, "end": 1376136, "audio": 0}, {"filename": "/assets/data/osu.sff", "start": 1376136, "end": 1395233, "audio": 0}, {"filename": "/assets/data/osu.snd", "start": 1395233, "end": 1438383, "audio": 0}, {"filename": "/assets/data/select.def", "start": 1438383, "end": 1441988, "audio": 0}, {"filename": "/assets/data/system.def", "start": 1441988, "end": 1455371, "audio": 0}, {"filename": "/assets/data/system.sff", "start": 1455371, "end": 1586300, "audio": 0}, {"filename": "/assets/data/system.snd", "start": 1586300, "end": 1595276, "audio": 0}, {"filename": "/assets/font/f4x6.fnt", "start": 1595276, "end": 1598304, "audio": 0}, {"filename": "/assets/font/f6x8f.fnt", "start": 1598304, "end": 1602618, "audio": 0}, {"filename": "/assets/font/f6x9.fnt", "start": 1602618, "end": 1607028, "audio": 0}, {"filename": "/assets/font/f6x9f.fnt", "start": 1607028, "end": 1611335, "audio": 0}, {"filename": "/assets/font/fpad.fnt", "start": 1611335, "end": 1612983, "audio": 0}, {"filename": "/assets/font/jg.fnt", "start": 1612983, "end": 1620012, "audio": 0}, {"filename": "/assets/font/n4x6.fnt", "start": 1620012, "end": 1621341, "audio": 0}, {"filename": "/assets/font/name1.fnt", "start": 1621341, "end": 1625200, "audio": 0}, {"filename": "/assets/font/num1.fnt", "start": 1625200, "end": 1627677, "audio": 0}, {"filename": "/assets/stages/kfm.def", "start": 1627677, "end": 1639056, "audio": 0}, {"filename": "/assets/stages/kfm.sff", "start": 1639056, "end": 1868815, "audio": 0}, {"filename": "/assets/stages/stage0.def", "start": 1868815, "end": 1878931, "audio": 0}, {"filename": "/assets/stages/stage0.sff", "start": 1878931, "end": 1883461, "audio": 0}], "remote_package_size": 1883461, "package_uuid": "aa48d481-f0da-4e44-9623-bb9e55abc0d5"});

})();
