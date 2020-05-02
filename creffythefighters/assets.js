
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
 loadPackage({"files": [{"filename": "/assets/chars/creffy/creffy.ai", "start": 0, "end": 28020, "audio": 0}, {"filename": "/assets/chars/creffy/creffy.air", "start": 28020, "end": 45760, "audio": 0}, {"filename": "/assets/chars/creffy/creffy.cmd", "start": 45760, "end": 61770, "audio": 0}, {"filename": "/assets/chars/creffy/creffy.cns", "start": 61770, "end": 147488, "audio": 0}, {"filename": "/assets/chars/creffy/creffy.def", "start": 147488, "end": 148772, "audio": 0}, {"filename": "/assets/chars/creffy/creffy.sff", "start": 148772, "end": 375375, "audio": 0}, {"filename": "/assets/chars/creffy/creffy.snd", "start": 375375, "end": 1923932, "audio": 0}, {"filename": "/assets/chars/creffy/readme.txt", "start": 1923932, "end": 1924154, "audio": 0}, {"filename": "/assets/chars/suave/ending.def", "start": 1924154, "end": 1926201, "audio": 0}, {"filename": "/assets/chars/suave/ending.sff", "start": 1926201, "end": 1959168, "audio": 0}, {"filename": "/assets/chars/suave/intro.def", "start": 1959168, "end": 1962157, "audio": 0}, {"filename": "/assets/chars/suave/intro.sff", "start": 1962157, "end": 2021828, "audio": 0}, {"filename": "/assets/chars/suave/sd.air", "start": 2021828, "end": 2108672, "audio": 0}, {"filename": "/assets/chars/suave/sd.cmd", "start": 2108672, "end": 2121123, "audio": 0}, {"filename": "/assets/chars/suave/sd.cns", "start": 2121123, "end": 2191159, "audio": 0}, {"filename": "/assets/chars/suave/sd.sff", "start": 2191159, "end": 2755937, "audio": 0}, {"filename": "/assets/chars/suave/sd.snd", "start": 2755937, "end": 2832568, "audio": 0}, {"filename": "/assets/chars/suave/suave.act", "start": 2832568, "end": 2833336, "audio": 0}, {"filename": "/assets/chars/suave/suave.def", "start": 2833336, "end": 2834048, "audio": 0}, {"filename": "/assets/chars/suave/suave2.act", "start": 2834048, "end": 2834816, "audio": 0}, {"filename": "/assets/chars/suave/suave3.act", "start": 2834816, "end": 2835584, "audio": 0}, {"filename": "/assets/chars/suave/suave4.act", "start": 2835584, "end": 2836352, "audio": 0}, {"filename": "/assets/chars/suave/suave5.act", "start": 2836352, "end": 2837120, "audio": 0}, {"filename": "/assets/chars/suave/suave6.act", "start": 2837120, "end": 2837888, "audio": 0}, {"filename": "/assets/chars/suave/suaveblack.act", "start": 2837888, "end": 2838656, "audio": 0}, {"filename": "/assets/data/common.snd", "start": 2838656, "end": 2911361, "audio": 0}, {"filename": "/assets/data/common1.cns", "start": 2911361, "end": 2954560, "audio": 0}, {"filename": "/assets/data/fight.def", "start": 2954560, "end": 2971018, "audio": 0}, {"filename": "/assets/data/fight.sff", "start": 2971018, "end": 3041680, "audio": 0}, {"filename": "/assets/data/fight.snd", "start": 3041680, "end": 3131259, "audio": 0}, {"filename": "/assets/data/fightfx.air", "start": 3131259, "end": 3135180, "audio": 0}, {"filename": "/assets/data/fightfx.sff", "start": 3135180, "end": 3283395, "audio": 0}, {"filename": "/assets/data/font.def", "start": 3283395, "end": 3284113, "audio": 0}, {"filename": "/assets/data/mugen.cfg", "start": 3284113, "end": 3299395, "audio": 0}, {"filename": "/assets/data/osu.air", "start": 3299395, "end": 3299755, "audio": 0}, {"filename": "/assets/data/osu.sff", "start": 3299755, "end": 3318852, "audio": 0}, {"filename": "/assets/data/osu.snd", "start": 3318852, "end": 3362002, "audio": 0}, {"filename": "/assets/data/select.def", "start": 3362002, "end": 3365690, "audio": 0}, {"filename": "/assets/data/system.def", "start": 3365690, "end": 3381258, "audio": 0}, {"filename": "/assets/data/system.sff", "start": 3381258, "end": 3487685, "audio": 0}, {"filename": "/assets/data/system.snd", "start": 3487685, "end": 3496661, "audio": 0}, {"filename": "/assets/data/thieving-mice.ttf", "start": 3496661, "end": 3532045, "audio": 0}, {"filename": "/assets/data/big/readme.txt", "start": 3532045, "end": 3532573, "audio": 0}, {"filename": "/assets/data/big/system.def", "start": 3532573, "end": 3552712, "audio": 0}, {"filename": "/assets/data/kfm/credits.def", "start": 3552712, "end": 3554291, "audio": 0}, {"filename": "/assets/data/kfm/credits.sff", "start": 3554291, "end": 3583622, "audio": 0}, {"filename": "/assets/data/kfm/gameover.def", "start": 3583622, "end": 3584699, "audio": 0}, {"filename": "/assets/data/kfm/gameover.sff", "start": 3584699, "end": 3590466, "audio": 0}, {"filename": "/assets/data/kfm/intro.def", "start": 3590466, "end": 3593749, "audio": 0}, {"filename": "/assets/data/kfm/intro.sff", "start": 3593749, "end": 3691332, "audio": 0}, {"filename": "/assets/data/kfm/kfmtitle.sff", "start": 3691332, "end": 3722226, "audio": 0}, {"filename": "/assets/data/kfm/logo.def", "start": 3722226, "end": 3722681, "audio": 0}, {"filename": "/assets/data/kfm/logo.sff", "start": 3722681, "end": 3730678, "audio": 0}, {"filename": "/assets/data/kfm/select.def", "start": 3730678, "end": 3734200, "audio": 0}, {"filename": "/assets/data/kfm/system.def", "start": 3734200, "end": 3748284, "audio": 0}, {"filename": "/assets/data/mugen1/fight.def", "start": 3748284, "end": 3766473, "audio": 0}, {"filename": "/assets/data/mugen1/fight.sff", "start": 3766473, "end": 4012180, "audio": 0}, {"filename": "/assets/data/mugen1/system.def", "start": 4012180, "end": 4032955, "audio": 0}, {"filename": "/assets/data/mugen1/system.sff", "start": 4032955, "end": 5000671, "audio": 0}, {"filename": "/assets/font/arcade.def", "start": 5000671, "end": 5001339, "audio": 0}, {"filename": "/assets/font/arcade.sff", "start": 5001339, "end": 5043423, "audio": 0}, {"filename": "/assets/font/enter48.def", "start": 5043423, "end": 5044055, "audio": 0}, {"filename": "/assets/font/enter48.sff", "start": 5044055, "end": 5088065, "audio": 0}, {"filename": "/assets/font/f-4x6.def", "start": 5088065, "end": 5088733, "audio": 0}, {"filename": "/assets/font/f-4x6.fnt", "start": 5088733, "end": 5091761, "audio": 0}, {"filename": "/assets/font/f-4x6.sff", "start": 5091761, "end": 5097392, "audio": 0}, {"filename": "/assets/font/f-6x8f.fnt", "start": 5097392, "end": 5101706, "audio": 0}, {"filename": "/assets/font/f-6x9.def", "start": 5101706, "end": 5102374, "audio": 0}, {"filename": "/assets/font/f-6x9.fnt", "start": 5102374, "end": 5106784, "audio": 0}, {"filename": "/assets/font/f-6x9.sff", "start": 5106784, "end": 5113403, "audio": 0}, {"filename": "/assets/font/f-6x9f.fnt", "start": 5113403, "end": 5117710, "audio": 0}, {"filename": "/assets/font/f4x6.fnt", "start": 5117710, "end": 5120738, "audio": 0}, {"filename": "/assets/font/f6x8f.fnt", "start": 5120738, "end": 5125052, "audio": 0}, {"filename": "/assets/font/f6x9.fnt", "start": 5125052, "end": 5129462, "audio": 0}, {"filename": "/assets/font/f6x9f.fnt", "start": 5129462, "end": 5133769, "audio": 0}, {"filename": "/assets/font/fpad.fnt", "start": 5133769, "end": 5135417, "audio": 0}, {"filename": "/assets/font/infofont.def", "start": 5135417, "end": 5136108, "audio": 0}, {"filename": "/assets/font/jg.fnt", "start": 5136108, "end": 5143137, "audio": 0}, {"filename": "/assets/font/msgothic-tt36.def", "start": 5143137, "end": 5143842, "audio": 0}, {"filename": "/assets/font/mssansserif-tt36.def", "start": 5143842, "end": 5144534, "audio": 0}, {"filename": "/assets/font/n4x6.fnt", "start": 5144534, "end": 5145863, "audio": 0}, {"filename": "/assets/font/name1.fnt", "start": 5145863, "end": 5149722, "audio": 0}, {"filename": "/assets/font/name14.def", "start": 5149722, "end": 5150381, "audio": 0}, {"filename": "/assets/font/name14.sff", "start": 5150381, "end": 5170944, "audio": 0}, {"filename": "/assets/font/num1.def", "start": 5170944, "end": 5171611, "audio": 0}, {"filename": "/assets/font/num1.fnt", "start": 5171611, "end": 5174088, "audio": 0}, {"filename": "/assets/font/num1.sff", "start": 5174088, "end": 5184191, "audio": 0}, {"filename": "/assets/font/num48.def", "start": 5184191, "end": 5184861, "audio": 0}, {"filename": "/assets/font/num48.sff", "start": 5184861, "end": 5201165, "audio": 0}, {"filename": "/assets/font/options.def", "start": 5201165, "end": 5201856, "audio": 0}, {"filename": "/assets/sound/fanboy.mp3", "start": 5201856, "end": 5441976, "audio": 1}, {"filename": "/assets/sound/select.mp3", "start": 5441976, "end": 6066386, "audio": 1}, {"filename": "/assets/stages/kfm.def", "start": 6066386, "end": 6077765, "audio": 0}, {"filename": "/assets/stages/kfm.sff", "start": 6077765, "end": 6307524, "audio": 0}, {"filename": "/assets/stages/stage0.def", "start": 6307524, "end": 6318727, "audio": 0}, {"filename": "/assets/stages/stage0.sff", "start": 6318727, "end": 6322929, "audio": 0}], "remote_package_size": 6322929, "package_uuid": "cb36749e-472e-43c9-9e54-fc45cb9801af"});

})();
