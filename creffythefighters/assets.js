
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
 loadPackage({"files": [{"filename": "/assets/chars/creffy/creffy.ai", "start": 0, "end": 28020, "audio": 0}, {"filename": "/assets/chars/creffy/creffy.air", "start": 28020, "end": 45760, "audio": 0}, {"filename": "/assets/chars/creffy/creffy.cmd", "start": 45760, "end": 61770, "audio": 0}, {"filename": "/assets/chars/creffy/creffy.cns", "start": 61770, "end": 147488, "audio": 0}, {"filename": "/assets/chars/creffy/creffy.def", "start": 147488, "end": 148834, "audio": 0}, {"filename": "/assets/chars/creffy/creffy.sff", "start": 148834, "end": 375437, "audio": 0}, {"filename": "/assets/chars/creffy/creffy.snd", "start": 375437, "end": 1923994, "audio": 0}, {"filename": "/assets/chars/creffy/readme.txt", "start": 1923994, "end": 1924216, "audio": 0}, {"filename": "/assets/chars/suave/ending.def", "start": 1924216, "end": 1926263, "audio": 0}, {"filename": "/assets/chars/suave/ending.sff", "start": 1926263, "end": 1959230, "audio": 0}, {"filename": "/assets/chars/suave/intro.def", "start": 1959230, "end": 1962219, "audio": 0}, {"filename": "/assets/chars/suave/intro.sff", "start": 1962219, "end": 2021890, "audio": 0}, {"filename": "/assets/chars/suave/sd.air", "start": 2021890, "end": 2108734, "audio": 0}, {"filename": "/assets/chars/suave/sd.cmd", "start": 2108734, "end": 2121185, "audio": 0}, {"filename": "/assets/chars/suave/sd.cns", "start": 2121185, "end": 2191221, "audio": 0}, {"filename": "/assets/chars/suave/sd.sff", "start": 2191221, "end": 2755999, "audio": 0}, {"filename": "/assets/chars/suave/sd.snd", "start": 2755999, "end": 2832630, "audio": 0}, {"filename": "/assets/chars/suave/suave.act", "start": 2832630, "end": 2833398, "audio": 0}, {"filename": "/assets/chars/suave/suave.def", "start": 2833398, "end": 2834110, "audio": 0}, {"filename": "/assets/chars/suave/suave2.act", "start": 2834110, "end": 2834878, "audio": 0}, {"filename": "/assets/chars/suave/suave3.act", "start": 2834878, "end": 2835646, "audio": 0}, {"filename": "/assets/chars/suave/suave4.act", "start": 2835646, "end": 2836414, "audio": 0}, {"filename": "/assets/chars/suave/suave5.act", "start": 2836414, "end": 2837182, "audio": 0}, {"filename": "/assets/chars/suave/suave6.act", "start": 2837182, "end": 2837950, "audio": 0}, {"filename": "/assets/chars/suave/suaveblack.act", "start": 2837950, "end": 2838718, "audio": 0}, {"filename": "/assets/data/common.snd", "start": 2838718, "end": 2911423, "audio": 0}, {"filename": "/assets/data/common1.cns", "start": 2911423, "end": 2954622, "audio": 0}, {"filename": "/assets/data/fight.def", "start": 2954622, "end": 2971080, "audio": 0}, {"filename": "/assets/data/fight.sff", "start": 2971080, "end": 3041742, "audio": 0}, {"filename": "/assets/data/fight.snd", "start": 3041742, "end": 3131321, "audio": 0}, {"filename": "/assets/data/fightfx.air", "start": 3131321, "end": 3135242, "audio": 0}, {"filename": "/assets/data/fightfx.sff", "start": 3135242, "end": 3283457, "audio": 0}, {"filename": "/assets/data/font.def", "start": 3283457, "end": 3284175, "audio": 0}, {"filename": "/assets/data/mugen.cfg", "start": 3284175, "end": 3299461, "audio": 0}, {"filename": "/assets/data/osu.air", "start": 3299461, "end": 3299821, "audio": 0}, {"filename": "/assets/data/osu.sff", "start": 3299821, "end": 3318918, "audio": 0}, {"filename": "/assets/data/osu.snd", "start": 3318918, "end": 3362068, "audio": 0}, {"filename": "/assets/data/select.def", "start": 3362068, "end": 3365753, "audio": 0}, {"filename": "/assets/data/system.def", "start": 3365753, "end": 3381321, "audio": 0}, {"filename": "/assets/data/system.sff", "start": 3381321, "end": 3487748, "audio": 0}, {"filename": "/assets/data/system.snd", "start": 3487748, "end": 3496724, "audio": 0}, {"filename": "/assets/data/thieving-mice.ttf", "start": 3496724, "end": 3532108, "audio": 0}, {"filename": "/assets/data/big/readme.txt", "start": 3532108, "end": 3532636, "audio": 0}, {"filename": "/assets/data/big/system.def", "start": 3532636, "end": 3552775, "audio": 0}, {"filename": "/assets/data/kfm/credits.def", "start": 3552775, "end": 3554354, "audio": 0}, {"filename": "/assets/data/kfm/credits.sff", "start": 3554354, "end": 3583685, "audio": 0}, {"filename": "/assets/data/kfm/gameover.def", "start": 3583685, "end": 3584762, "audio": 0}, {"filename": "/assets/data/kfm/gameover.sff", "start": 3584762, "end": 3590529, "audio": 0}, {"filename": "/assets/data/kfm/intro.def", "start": 3590529, "end": 3593812, "audio": 0}, {"filename": "/assets/data/kfm/intro.sff", "start": 3593812, "end": 3691395, "audio": 0}, {"filename": "/assets/data/kfm/kfmtitle.sff", "start": 3691395, "end": 3722289, "audio": 0}, {"filename": "/assets/data/kfm/logo.def", "start": 3722289, "end": 3722744, "audio": 0}, {"filename": "/assets/data/kfm/logo.sff", "start": 3722744, "end": 3730741, "audio": 0}, {"filename": "/assets/data/kfm/select.def", "start": 3730741, "end": 3734263, "audio": 0}, {"filename": "/assets/data/kfm/system.def", "start": 3734263, "end": 3748347, "audio": 0}, {"filename": "/assets/data/mugen1/fight.def", "start": 3748347, "end": 3766536, "audio": 0}, {"filename": "/assets/data/mugen1/fight.sff", "start": 3766536, "end": 4012243, "audio": 0}, {"filename": "/assets/data/mugen1/system.def", "start": 4012243, "end": 4033018, "audio": 0}, {"filename": "/assets/data/mugen1/system.sff", "start": 4033018, "end": 5000734, "audio": 0}, {"filename": "/assets/font/arcade.def", "start": 5000734, "end": 5001402, "audio": 0}, {"filename": "/assets/font/arcade.sff", "start": 5001402, "end": 5043486, "audio": 0}, {"filename": "/assets/font/enter48.def", "start": 5043486, "end": 5044118, "audio": 0}, {"filename": "/assets/font/enter48.sff", "start": 5044118, "end": 5088128, "audio": 0}, {"filename": "/assets/font/f-4x6.def", "start": 5088128, "end": 5088796, "audio": 0}, {"filename": "/assets/font/f-4x6.fnt", "start": 5088796, "end": 5091824, "audio": 0}, {"filename": "/assets/font/f-4x6.sff", "start": 5091824, "end": 5097455, "audio": 0}, {"filename": "/assets/font/f-6x8f.fnt", "start": 5097455, "end": 5101769, "audio": 0}, {"filename": "/assets/font/f-6x9.def", "start": 5101769, "end": 5102437, "audio": 0}, {"filename": "/assets/font/f-6x9.fnt", "start": 5102437, "end": 5106847, "audio": 0}, {"filename": "/assets/font/f-6x9.sff", "start": 5106847, "end": 5113466, "audio": 0}, {"filename": "/assets/font/f-6x9f.fnt", "start": 5113466, "end": 5117773, "audio": 0}, {"filename": "/assets/font/f4x6.fnt", "start": 5117773, "end": 5120801, "audio": 0}, {"filename": "/assets/font/f6x8f.fnt", "start": 5120801, "end": 5125115, "audio": 0}, {"filename": "/assets/font/f6x9.fnt", "start": 5125115, "end": 5129525, "audio": 0}, {"filename": "/assets/font/f6x9f.fnt", "start": 5129525, "end": 5133832, "audio": 0}, {"filename": "/assets/font/fpad.fnt", "start": 5133832, "end": 5135480, "audio": 0}, {"filename": "/assets/font/infofont.def", "start": 5135480, "end": 5136171, "audio": 0}, {"filename": "/assets/font/jg.fnt", "start": 5136171, "end": 5143200, "audio": 0}, {"filename": "/assets/font/msgothic-tt36.def", "start": 5143200, "end": 5143905, "audio": 0}, {"filename": "/assets/font/mssansserif-tt36.def", "start": 5143905, "end": 5144597, "audio": 0}, {"filename": "/assets/font/n4x6.fnt", "start": 5144597, "end": 5145926, "audio": 0}, {"filename": "/assets/font/name1.fnt", "start": 5145926, "end": 5149785, "audio": 0}, {"filename": "/assets/font/name14.def", "start": 5149785, "end": 5150444, "audio": 0}, {"filename": "/assets/font/name14.sff", "start": 5150444, "end": 5171007, "audio": 0}, {"filename": "/assets/font/num1.def", "start": 5171007, "end": 5171674, "audio": 0}, {"filename": "/assets/font/num1.fnt", "start": 5171674, "end": 5174151, "audio": 0}, {"filename": "/assets/font/num1.sff", "start": 5174151, "end": 5184254, "audio": 0}, {"filename": "/assets/font/num48.def", "start": 5184254, "end": 5184924, "audio": 0}, {"filename": "/assets/font/num48.sff", "start": 5184924, "end": 5201228, "audio": 0}, {"filename": "/assets/font/options.def", "start": 5201228, "end": 5201919, "audio": 0}, {"filename": "/assets/stages/kfm.def", "start": 5201919, "end": 5213298, "audio": 0}, {"filename": "/assets/stages/kfm.sff", "start": 5213298, "end": 5443057, "audio": 0}, {"filename": "/assets/stages/stage0.def", "start": 5443057, "end": 5454260, "audio": 0}, {"filename": "/assets/stages/stage0.sff", "start": 5454260, "end": 5458462, "audio": 0}], "remote_package_size": 5458462, "package_uuid": "5633f5a9-a828-4ab7-b635-d96f09225934"});

})();
