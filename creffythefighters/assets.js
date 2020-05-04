
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
 loadPackage({"files": [{"filename": "/assets/chars/creffy/creffy.ai", "start": 0, "end": 28020, "audio": 0}, {"filename": "/assets/chars/creffy/creffy.air", "start": 28020, "end": 45894, "audio": 0}, {"filename": "/assets/chars/creffy/creffy.cmd", "start": 45894, "end": 62220, "audio": 0}, {"filename": "/assets/chars/creffy/creffy.cns", "start": 62220, "end": 148381, "audio": 0}, {"filename": "/assets/chars/creffy/creffy.def", "start": 148381, "end": 149825, "audio": 0}, {"filename": "/assets/chars/creffy/creffy.sff", "start": 149825, "end": 365070, "audio": 0}, {"filename": "/assets/chars/creffy/creffy.snd", "start": 365070, "end": 1913627, "audio": 0}, {"filename": "/assets/chars/creffy/green.act", "start": 1913627, "end": 1914395, "audio": 0}, {"filename": "/assets/chars/creffy/neilmaybe.act", "start": 1914395, "end": 1915163, "audio": 0}, {"filename": "/assets/chars/creffy/normal.act", "start": 1915163, "end": 1915931, "audio": 0}, {"filename": "/assets/chars/creffy/orange.act", "start": 1915931, "end": 1916699, "audio": 0}, {"filename": "/assets/chars/creffy/readme.txt", "start": 1916699, "end": 1916921, "audio": 0}, {"filename": "/assets/chars/creffy/temmie.act", "start": 1916921, "end": 1917689, "audio": 0}, {"filename": "/assets/chars/suave/ending.def", "start": 1917689, "end": 1919736, "audio": 0}, {"filename": "/assets/chars/suave/ending.sff", "start": 1919736, "end": 1952703, "audio": 0}, {"filename": "/assets/chars/suave/intro.def", "start": 1952703, "end": 1955692, "audio": 0}, {"filename": "/assets/chars/suave/intro.sff", "start": 1955692, "end": 2015363, "audio": 0}, {"filename": "/assets/chars/suave/sd.air", "start": 2015363, "end": 2102207, "audio": 0}, {"filename": "/assets/chars/suave/sd.cmd", "start": 2102207, "end": 2114658, "audio": 0}, {"filename": "/assets/chars/suave/sd.cns", "start": 2114658, "end": 2184694, "audio": 0}, {"filename": "/assets/chars/suave/sd.sff", "start": 2184694, "end": 2749472, "audio": 0}, {"filename": "/assets/chars/suave/sd.snd", "start": 2749472, "end": 2826103, "audio": 0}, {"filename": "/assets/chars/suave/suave.act", "start": 2826103, "end": 2826871, "audio": 0}, {"filename": "/assets/chars/suave/suave.def", "start": 2826871, "end": 2827583, "audio": 0}, {"filename": "/assets/chars/suave/suave2.act", "start": 2827583, "end": 2828351, "audio": 0}, {"filename": "/assets/chars/suave/suave3.act", "start": 2828351, "end": 2829119, "audio": 0}, {"filename": "/assets/chars/suave/suave4.act", "start": 2829119, "end": 2829887, "audio": 0}, {"filename": "/assets/chars/suave/suave5.act", "start": 2829887, "end": 2830655, "audio": 0}, {"filename": "/assets/chars/suave/suave6.act", "start": 2830655, "end": 2831423, "audio": 0}, {"filename": "/assets/chars/suave/suaveblack.act", "start": 2831423, "end": 2832191, "audio": 0}, {"filename": "/assets/chars/theguy/readme.txt", "start": 2832191, "end": 2832413, "audio": 0}, {"filename": "/assets/chars/theguy/theguy.ai", "start": 2832413, "end": 2860433, "audio": 0}, {"filename": "/assets/chars/theguy/theguy.air", "start": 2860433, "end": 2878680, "audio": 0}, {"filename": "/assets/chars/theguy/theguy.cmd", "start": 2878680, "end": 2894164, "audio": 0}, {"filename": "/assets/chars/theguy/theguy.cns", "start": 2894164, "end": 2983873, "audio": 0}, {"filename": "/assets/chars/theguy/theguy.def", "start": 2983873, "end": 2985218, "audio": 0}, {"filename": "/assets/chars/theguy/theguy.sff", "start": 2985218, "end": 3313852, "audio": 0}, {"filename": "/assets/chars/theguy/theguy.snd", "start": 3313852, "end": 9198955, "audio": 0}, {"filename": "/assets/data/common.snd", "start": 9198955, "end": 9271660, "audio": 0}, {"filename": "/assets/data/common1.cns", "start": 9271660, "end": 9314859, "audio": 0}, {"filename": "/assets/data/fight.def", "start": 9314859, "end": 9331317, "audio": 0}, {"filename": "/assets/data/fight.sff", "start": 9331317, "end": 9401979, "audio": 0}, {"filename": "/assets/data/fight.snd", "start": 9401979, "end": 9491558, "audio": 0}, {"filename": "/assets/data/fightfx.air", "start": 9491558, "end": 9495479, "audio": 0}, {"filename": "/assets/data/fightfx.sff", "start": 9495479, "end": 9643694, "audio": 0}, {"filename": "/assets/data/font.def", "start": 9643694, "end": 9644412, "audio": 0}, {"filename": "/assets/data/mugen.cfg", "start": 9644412, "end": 9659694, "audio": 0}, {"filename": "/assets/data/osu.air", "start": 9659694, "end": 9660054, "audio": 0}, {"filename": "/assets/data/osu.sff", "start": 9660054, "end": 9679151, "audio": 0}, {"filename": "/assets/data/osu.snd", "start": 9679151, "end": 9722301, "audio": 0}, {"filename": "/assets/data/select.def", "start": 9722301, "end": 9725996, "audio": 0}, {"filename": "/assets/data/system.def", "start": 9725996, "end": 9741234, "audio": 0}, {"filename": "/assets/data/system.sff", "start": 9741234, "end": 9847661, "audio": 0}, {"filename": "/assets/data/system.snd", "start": 9847661, "end": 9856637, "audio": 0}, {"filename": "/assets/data/thieving-mice.ttf", "start": 9856637, "end": 9892021, "audio": 0}, {"filename": "/assets/data/big/readme.txt", "start": 9892021, "end": 9892549, "audio": 0}, {"filename": "/assets/data/big/system.def", "start": 9892549, "end": 9912688, "audio": 0}, {"filename": "/assets/data/kfm/credits.def", "start": 9912688, "end": 9914267, "audio": 0}, {"filename": "/assets/data/kfm/credits.sff", "start": 9914267, "end": 9943598, "audio": 0}, {"filename": "/assets/data/kfm/gameover.def", "start": 9943598, "end": 9944675, "audio": 0}, {"filename": "/assets/data/kfm/gameover.sff", "start": 9944675, "end": 9950442, "audio": 0}, {"filename": "/assets/data/kfm/intro.def", "start": 9950442, "end": 9953725, "audio": 0}, {"filename": "/assets/data/kfm/intro.sff", "start": 9953725, "end": 10051308, "audio": 0}, {"filename": "/assets/data/kfm/kfmtitle.sff", "start": 10051308, "end": 10082202, "audio": 0}, {"filename": "/assets/data/kfm/logo.def", "start": 10082202, "end": 10082657, "audio": 0}, {"filename": "/assets/data/kfm/logo.sff", "start": 10082657, "end": 10090654, "audio": 0}, {"filename": "/assets/data/kfm/select.def", "start": 10090654, "end": 10094176, "audio": 0}, {"filename": "/assets/data/kfm/system.def", "start": 10094176, "end": 10108260, "audio": 0}, {"filename": "/assets/data/mugen1/fight.def", "start": 10108260, "end": 10126449, "audio": 0}, {"filename": "/assets/data/mugen1/fight.sff", "start": 10126449, "end": 10372156, "audio": 0}, {"filename": "/assets/data/mugen1/system.def", "start": 10372156, "end": 10392931, "audio": 0}, {"filename": "/assets/data/mugen1/system.sff", "start": 10392931, "end": 11360647, "audio": 0}, {"filename": "/assets/font/arcade.def", "start": 11360647, "end": 11361315, "audio": 0}, {"filename": "/assets/font/arcade.sff", "start": 11361315, "end": 11403399, "audio": 0}, {"filename": "/assets/font/enter48.def", "start": 11403399, "end": 11404031, "audio": 0}, {"filename": "/assets/font/enter48.sff", "start": 11404031, "end": 11448041, "audio": 0}, {"filename": "/assets/font/f-4x6.def", "start": 11448041, "end": 11448709, "audio": 0}, {"filename": "/assets/font/f-4x6.fnt", "start": 11448709, "end": 11451737, "audio": 0}, {"filename": "/assets/font/f-4x6.sff", "start": 11451737, "end": 11457368, "audio": 0}, {"filename": "/assets/font/f-6x8f.fnt", "start": 11457368, "end": 11461682, "audio": 0}, {"filename": "/assets/font/f-6x9.def", "start": 11461682, "end": 11462350, "audio": 0}, {"filename": "/assets/font/f-6x9.fnt", "start": 11462350, "end": 11466760, "audio": 0}, {"filename": "/assets/font/f-6x9.sff", "start": 11466760, "end": 11473379, "audio": 0}, {"filename": "/assets/font/f-6x9f.fnt", "start": 11473379, "end": 11477686, "audio": 0}, {"filename": "/assets/font/f4x6.fnt", "start": 11477686, "end": 11480714, "audio": 0}, {"filename": "/assets/font/f6x8f.fnt", "start": 11480714, "end": 11485028, "audio": 0}, {"filename": "/assets/font/f6x9.fnt", "start": 11485028, "end": 11489438, "audio": 0}, {"filename": "/assets/font/f6x9f.fnt", "start": 11489438, "end": 11493745, "audio": 0}, {"filename": "/assets/font/fpad.fnt", "start": 11493745, "end": 11495393, "audio": 0}, {"filename": "/assets/font/infofont.def", "start": 11495393, "end": 11496084, "audio": 0}, {"filename": "/assets/font/jg.fnt", "start": 11496084, "end": 11503113, "audio": 0}, {"filename": "/assets/font/msgothic-tt36.def", "start": 11503113, "end": 11503818, "audio": 0}, {"filename": "/assets/font/mssansserif-tt36.def", "start": 11503818, "end": 11504510, "audio": 0}, {"filename": "/assets/font/n4x6.fnt", "start": 11504510, "end": 11505839, "audio": 0}, {"filename": "/assets/font/name1.fnt", "start": 11505839, "end": 11509698, "audio": 0}, {"filename": "/assets/font/name14.def", "start": 11509698, "end": 11510357, "audio": 0}, {"filename": "/assets/font/name14.sff", "start": 11510357, "end": 11530920, "audio": 0}, {"filename": "/assets/font/num1.def", "start": 11530920, "end": 11531587, "audio": 0}, {"filename": "/assets/font/num1.fnt", "start": 11531587, "end": 11534064, "audio": 0}, {"filename": "/assets/font/num1.sff", "start": 11534064, "end": 11544167, "audio": 0}, {"filename": "/assets/font/num48.def", "start": 11544167, "end": 11544837, "audio": 0}, {"filename": "/assets/font/num48.sff", "start": 11544837, "end": 11561141, "audio": 0}, {"filename": "/assets/font/options.def", "start": 11561141, "end": 11561832, "audio": 0}, {"filename": "/assets/sound/fanboy.mp3", "start": 11561832, "end": 11801952, "audio": 1}, {"filename": "/assets/sound/select.mp3", "start": 11801952, "end": 12426362, "audio": 1}, {"filename": "/assets/stages/kfm.def", "start": 12426362, "end": 12437741, "audio": 0}, {"filename": "/assets/stages/kfm.sff", "start": 12437741, "end": 12667500, "audio": 0}, {"filename": "/assets/stages/stage0.def", "start": 12667500, "end": 12678703, "audio": 0}, {"filename": "/assets/stages/stage0.sff", "start": 12678703, "end": 12682905, "audio": 0}], "remote_package_size": 12682905, "package_uuid": "502549b8-5f06-4ff5-a310-81e80a580eaf"});

})();
