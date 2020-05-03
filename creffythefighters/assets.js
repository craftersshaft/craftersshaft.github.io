
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
 loadPackage({"files": [{"filename": "/assets/chars/creffy/creffy.ai", "start": 0, "end": 28020, "audio": 0}, {"filename": "/assets/chars/creffy/creffy.air", "start": 28020, "end": 45749, "audio": 0}, {"filename": "/assets/chars/creffy/creffy.cmd", "start": 45749, "end": 61676, "audio": 0}, {"filename": "/assets/chars/creffy/creffy.cns", "start": 61676, "end": 147412, "audio": 0}, {"filename": "/assets/chars/creffy/creffy.def", "start": 147412, "end": 148758, "audio": 0}, {"filename": "/assets/chars/creffy/creffy.sff", "start": 148758, "end": 374934, "audio": 0}, {"filename": "/assets/chars/creffy/creffy.snd", "start": 374934, "end": 1923491, "audio": 0}, {"filename": "/assets/chars/creffy/readme.txt", "start": 1923491, "end": 1923713, "audio": 0}, {"filename": "/assets/chars/suave/ending.def", "start": 1923713, "end": 1925760, "audio": 0}, {"filename": "/assets/chars/suave/ending.sff", "start": 1925760, "end": 1958727, "audio": 0}, {"filename": "/assets/chars/suave/intro.def", "start": 1958727, "end": 1961716, "audio": 0}, {"filename": "/assets/chars/suave/intro.sff", "start": 1961716, "end": 2021387, "audio": 0}, {"filename": "/assets/chars/suave/sd.air", "start": 2021387, "end": 2108231, "audio": 0}, {"filename": "/assets/chars/suave/sd.cmd", "start": 2108231, "end": 2120682, "audio": 0}, {"filename": "/assets/chars/suave/sd.cns", "start": 2120682, "end": 2190718, "audio": 0}, {"filename": "/assets/chars/suave/sd.sff", "start": 2190718, "end": 2755496, "audio": 0}, {"filename": "/assets/chars/suave/sd.snd", "start": 2755496, "end": 2832127, "audio": 0}, {"filename": "/assets/chars/suave/suave.act", "start": 2832127, "end": 2832895, "audio": 0}, {"filename": "/assets/chars/suave/suave.def", "start": 2832895, "end": 2833607, "audio": 0}, {"filename": "/assets/chars/suave/suave2.act", "start": 2833607, "end": 2834375, "audio": 0}, {"filename": "/assets/chars/suave/suave3.act", "start": 2834375, "end": 2835143, "audio": 0}, {"filename": "/assets/chars/suave/suave4.act", "start": 2835143, "end": 2835911, "audio": 0}, {"filename": "/assets/chars/suave/suave5.act", "start": 2835911, "end": 2836679, "audio": 0}, {"filename": "/assets/chars/suave/suave6.act", "start": 2836679, "end": 2837447, "audio": 0}, {"filename": "/assets/chars/suave/suaveblack.act", "start": 2837447, "end": 2838215, "audio": 0}, {"filename": "/assets/data/common.snd", "start": 2838215, "end": 2910920, "audio": 0}, {"filename": "/assets/data/common1.cns", "start": 2910920, "end": 2954119, "audio": 0}, {"filename": "/assets/data/fight.def", "start": 2954119, "end": 2970577, "audio": 0}, {"filename": "/assets/data/fight.sff", "start": 2970577, "end": 3041239, "audio": 0}, {"filename": "/assets/data/fight.snd", "start": 3041239, "end": 3130818, "audio": 0}, {"filename": "/assets/data/fightfx.air", "start": 3130818, "end": 3134739, "audio": 0}, {"filename": "/assets/data/fightfx.sff", "start": 3134739, "end": 3282954, "audio": 0}, {"filename": "/assets/data/font.def", "start": 3282954, "end": 3283672, "audio": 0}, {"filename": "/assets/data/mugen.cfg", "start": 3283672, "end": 3298954, "audio": 0}, {"filename": "/assets/data/osu.air", "start": 3298954, "end": 3299314, "audio": 0}, {"filename": "/assets/data/osu.sff", "start": 3299314, "end": 3318411, "audio": 0}, {"filename": "/assets/data/osu.snd", "start": 3318411, "end": 3361561, "audio": 0}, {"filename": "/assets/data/select.def", "start": 3361561, "end": 3365249, "audio": 0}, {"filename": "/assets/data/system.def", "start": 3365249, "end": 3380766, "audio": 0}, {"filename": "/assets/data/system.sff", "start": 3380766, "end": 3487193, "audio": 0}, {"filename": "/assets/data/system.snd", "start": 3487193, "end": 3496169, "audio": 0}, {"filename": "/assets/data/thieving-mice.ttf", "start": 3496169, "end": 3531553, "audio": 0}, {"filename": "/assets/data/big/readme.txt", "start": 3531553, "end": 3532081, "audio": 0}, {"filename": "/assets/data/big/system.def", "start": 3532081, "end": 3552220, "audio": 0}, {"filename": "/assets/data/kfm/credits.def", "start": 3552220, "end": 3553799, "audio": 0}, {"filename": "/assets/data/kfm/credits.sff", "start": 3553799, "end": 3583130, "audio": 0}, {"filename": "/assets/data/kfm/gameover.def", "start": 3583130, "end": 3584207, "audio": 0}, {"filename": "/assets/data/kfm/gameover.sff", "start": 3584207, "end": 3589974, "audio": 0}, {"filename": "/assets/data/kfm/intro.def", "start": 3589974, "end": 3593257, "audio": 0}, {"filename": "/assets/data/kfm/intro.sff", "start": 3593257, "end": 3690840, "audio": 0}, {"filename": "/assets/data/kfm/kfmtitle.sff", "start": 3690840, "end": 3721734, "audio": 0}, {"filename": "/assets/data/kfm/logo.def", "start": 3721734, "end": 3722189, "audio": 0}, {"filename": "/assets/data/kfm/logo.sff", "start": 3722189, "end": 3730186, "audio": 0}, {"filename": "/assets/data/kfm/select.def", "start": 3730186, "end": 3733708, "audio": 0}, {"filename": "/assets/data/kfm/system.def", "start": 3733708, "end": 3747792, "audio": 0}, {"filename": "/assets/data/mugen1/fight.def", "start": 3747792, "end": 3765981, "audio": 0}, {"filename": "/assets/data/mugen1/fight.sff", "start": 3765981, "end": 4011688, "audio": 0}, {"filename": "/assets/data/mugen1/system.def", "start": 4011688, "end": 4032463, "audio": 0}, {"filename": "/assets/data/mugen1/system.sff", "start": 4032463, "end": 5000179, "audio": 0}, {"filename": "/assets/font/arcade.def", "start": 5000179, "end": 5000847, "audio": 0}, {"filename": "/assets/font/arcade.sff", "start": 5000847, "end": 5042931, "audio": 0}, {"filename": "/assets/font/enter48.def", "start": 5042931, "end": 5043563, "audio": 0}, {"filename": "/assets/font/enter48.sff", "start": 5043563, "end": 5087573, "audio": 0}, {"filename": "/assets/font/f-4x6.def", "start": 5087573, "end": 5088241, "audio": 0}, {"filename": "/assets/font/f-4x6.fnt", "start": 5088241, "end": 5091269, "audio": 0}, {"filename": "/assets/font/f-4x6.sff", "start": 5091269, "end": 5096900, "audio": 0}, {"filename": "/assets/font/f-6x8f.fnt", "start": 5096900, "end": 5101214, "audio": 0}, {"filename": "/assets/font/f-6x9.def", "start": 5101214, "end": 5101882, "audio": 0}, {"filename": "/assets/font/f-6x9.fnt", "start": 5101882, "end": 5106292, "audio": 0}, {"filename": "/assets/font/f-6x9.sff", "start": 5106292, "end": 5112911, "audio": 0}, {"filename": "/assets/font/f-6x9f.fnt", "start": 5112911, "end": 5117218, "audio": 0}, {"filename": "/assets/font/f4x6.fnt", "start": 5117218, "end": 5120246, "audio": 0}, {"filename": "/assets/font/f6x8f.fnt", "start": 5120246, "end": 5124560, "audio": 0}, {"filename": "/assets/font/f6x9.fnt", "start": 5124560, "end": 5128970, "audio": 0}, {"filename": "/assets/font/f6x9f.fnt", "start": 5128970, "end": 5133277, "audio": 0}, {"filename": "/assets/font/fpad.fnt", "start": 5133277, "end": 5134925, "audio": 0}, {"filename": "/assets/font/infofont.def", "start": 5134925, "end": 5135616, "audio": 0}, {"filename": "/assets/font/jg.fnt", "start": 5135616, "end": 5142645, "audio": 0}, {"filename": "/assets/font/msgothic-tt36.def", "start": 5142645, "end": 5143350, "audio": 0}, {"filename": "/assets/font/mssansserif-tt36.def", "start": 5143350, "end": 5144042, "audio": 0}, {"filename": "/assets/font/n4x6.fnt", "start": 5144042, "end": 5145371, "audio": 0}, {"filename": "/assets/font/name1.fnt", "start": 5145371, "end": 5149230, "audio": 0}, {"filename": "/assets/font/name14.def", "start": 5149230, "end": 5149889, "audio": 0}, {"filename": "/assets/font/name14.sff", "start": 5149889, "end": 5170452, "audio": 0}, {"filename": "/assets/font/num1.def", "start": 5170452, "end": 5171119, "audio": 0}, {"filename": "/assets/font/num1.fnt", "start": 5171119, "end": 5173596, "audio": 0}, {"filename": "/assets/font/num1.sff", "start": 5173596, "end": 5183699, "audio": 0}, {"filename": "/assets/font/num48.def", "start": 5183699, "end": 5184369, "audio": 0}, {"filename": "/assets/font/num48.sff", "start": 5184369, "end": 5200673, "audio": 0}, {"filename": "/assets/font/options.def", "start": 5200673, "end": 5201364, "audio": 0}, {"filename": "/assets/sound/fanboy.mp3", "start": 5201364, "end": 5441484, "audio": 1}, {"filename": "/assets/sound/select.mp3", "start": 5441484, "end": 6065894, "audio": 1}, {"filename": "/assets/stages/kfm.def", "start": 6065894, "end": 6077273, "audio": 0}, {"filename": "/assets/stages/kfm.sff", "start": 6077273, "end": 6307032, "audio": 0}, {"filename": "/assets/stages/stage0.def", "start": 6307032, "end": 6318235, "audio": 0}, {"filename": "/assets/stages/stage0.sff", "start": 6318235, "end": 6322437, "audio": 0}], "remote_package_size": 6322437, "package_uuid": "285b1474-eb04-4d51-b520-569ef25665fb"});

})();
