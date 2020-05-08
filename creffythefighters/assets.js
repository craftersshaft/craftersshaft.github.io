
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
 loadPackage({"files": [{"filename": "/assets/chars/creffy/creffy.ai", "start": 0, "end": 28020, "audio": 0}, {"filename": "/assets/chars/creffy/creffy.air", "start": 28020, "end": 46114, "audio": 0}, {"filename": "/assets/chars/creffy/creffy.cmd", "start": 46114, "end": 62865, "audio": 0}, {"filename": "/assets/chars/creffy/creffy.cns", "start": 62865, "end": 150617, "audio": 0}, {"filename": "/assets/chars/creffy/creffy.def", "start": 150617, "end": 152061, "audio": 0}, {"filename": "/assets/chars/creffy/creffy.sff", "start": 152061, "end": 368554, "audio": 0}, {"filename": "/assets/chars/creffy/creffy.snd", "start": 368554, "end": 2160919, "audio": 0}, {"filename": "/assets/chars/creffy/creffybootleg.cns", "start": 2160919, "end": 2254954, "audio": 0}, {"filename": "/assets/chars/creffy/green.act", "start": 2254954, "end": 2255722, "audio": 0}, {"filename": "/assets/chars/creffy/neilmaybe.act", "start": 2255722, "end": 2256490, "audio": 0}, {"filename": "/assets/chars/creffy/normal.act", "start": 2256490, "end": 2257258, "audio": 0}, {"filename": "/assets/chars/creffy/orange.act", "start": 2257258, "end": 2258026, "audio": 0}, {"filename": "/assets/chars/creffy/readme.txt", "start": 2258026, "end": 2258248, "audio": 0}, {"filename": "/assets/chars/creffy/temmie.act", "start": 2258248, "end": 2259016, "audio": 0}, {"filename": "/assets/chars/theguy/readme.txt", "start": 2259016, "end": 2259238, "audio": 0}, {"filename": "/assets/chars/theguy/theguy.ai", "start": 2259238, "end": 2287258, "audio": 0}, {"filename": "/assets/chars/theguy/theguy.air", "start": 2287258, "end": 2306187, "audio": 0}, {"filename": "/assets/chars/theguy/theguy.cmd", "start": 2306187, "end": 2322345, "audio": 0}, {"filename": "/assets/chars/theguy/theguy.cns", "start": 2322345, "end": 2413730, "audio": 0}, {"filename": "/assets/chars/theguy/theguy.def", "start": 2413730, "end": 2415075, "audio": 0}, {"filename": "/assets/chars/theguy/theguy.sff", "start": 2415075, "end": 2799103, "audio": 0}, {"filename": "/assets/chars/theguy/theguy.snd", "start": 2799103, "end": 10615426, "audio": 0}, {"filename": "/assets/data/common.snd", "start": 10615426, "end": 10688131, "audio": 0}, {"filename": "/assets/data/common1.cns", "start": 10688131, "end": 10731330, "audio": 0}, {"filename": "/assets/data/fight.def", "start": 10731330, "end": 10747788, "audio": 0}, {"filename": "/assets/data/fight.sff", "start": 10747788, "end": 10818450, "audio": 0}, {"filename": "/assets/data/fight.snd", "start": 10818450, "end": 10908029, "audio": 0}, {"filename": "/assets/data/fightfx.air", "start": 10908029, "end": 10911950, "audio": 0}, {"filename": "/assets/data/fightfx.sff", "start": 10911950, "end": 11060165, "audio": 0}, {"filename": "/assets/data/font.def", "start": 11060165, "end": 11060883, "audio": 0}, {"filename": "/assets/data/mugen.cfg", "start": 11060883, "end": 11076165, "audio": 0}, {"filename": "/assets/data/osu.air", "start": 11076165, "end": 11076525, "audio": 0}, {"filename": "/assets/data/osu.sff", "start": 11076525, "end": 11095622, "audio": 0}, {"filename": "/assets/data/osu.snd", "start": 11095622, "end": 11138772, "audio": 0}, {"filename": "/assets/data/select.def", "start": 11138772, "end": 11142486, "audio": 0}, {"filename": "/assets/data/system.def", "start": 11142486, "end": 11157724, "audio": 0}, {"filename": "/assets/data/system.sff", "start": 11157724, "end": 11264151, "audio": 0}, {"filename": "/assets/data/system.snd", "start": 11264151, "end": 11273127, "audio": 0}, {"filename": "/assets/data/thieving-mice.ttf", "start": 11273127, "end": 11308511, "audio": 0}, {"filename": "/assets/data/big/readme.txt", "start": 11308511, "end": 11309039, "audio": 0}, {"filename": "/assets/data/big/system.def", "start": 11309039, "end": 11329178, "audio": 0}, {"filename": "/assets/data/kfm/credits.def", "start": 11329178, "end": 11330757, "audio": 0}, {"filename": "/assets/data/kfm/credits.sff", "start": 11330757, "end": 11360088, "audio": 0}, {"filename": "/assets/data/kfm/gameover.def", "start": 11360088, "end": 11361165, "audio": 0}, {"filename": "/assets/data/kfm/gameover.sff", "start": 11361165, "end": 11366932, "audio": 0}, {"filename": "/assets/data/kfm/intro.def", "start": 11366932, "end": 11370215, "audio": 0}, {"filename": "/assets/data/kfm/intro.sff", "start": 11370215, "end": 11467798, "audio": 0}, {"filename": "/assets/data/kfm/kfmtitle.sff", "start": 11467798, "end": 11498692, "audio": 0}, {"filename": "/assets/data/kfm/logo.def", "start": 11498692, "end": 11499147, "audio": 0}, {"filename": "/assets/data/kfm/logo.sff", "start": 11499147, "end": 11507144, "audio": 0}, {"filename": "/assets/data/kfm/select.def", "start": 11507144, "end": 11510666, "audio": 0}, {"filename": "/assets/data/kfm/system.def", "start": 11510666, "end": 11524750, "audio": 0}, {"filename": "/assets/data/mugen1/fight.def", "start": 11524750, "end": 11542939, "audio": 0}, {"filename": "/assets/data/mugen1/fight.sff", "start": 11542939, "end": 11788646, "audio": 0}, {"filename": "/assets/data/mugen1/system.def", "start": 11788646, "end": 11809421, "audio": 0}, {"filename": "/assets/data/mugen1/system.sff", "start": 11809421, "end": 12777137, "audio": 0}, {"filename": "/assets/font/arcade.def", "start": 12777137, "end": 12777805, "audio": 0}, {"filename": "/assets/font/arcade.sff", "start": 12777805, "end": 12819889, "audio": 0}, {"filename": "/assets/font/enter48.def", "start": 12819889, "end": 12820521, "audio": 0}, {"filename": "/assets/font/enter48.sff", "start": 12820521, "end": 12864531, "audio": 0}, {"filename": "/assets/font/f-4x6.def", "start": 12864531, "end": 12865199, "audio": 0}, {"filename": "/assets/font/f-4x6.fnt", "start": 12865199, "end": 12868227, "audio": 0}, {"filename": "/assets/font/f-4x6.sff", "start": 12868227, "end": 12873858, "audio": 0}, {"filename": "/assets/font/f-6x8f.fnt", "start": 12873858, "end": 12878172, "audio": 0}, {"filename": "/assets/font/f-6x9.def", "start": 12878172, "end": 12878840, "audio": 0}, {"filename": "/assets/font/f-6x9.fnt", "start": 12878840, "end": 12883250, "audio": 0}, {"filename": "/assets/font/f-6x9.sff", "start": 12883250, "end": 12889869, "audio": 0}, {"filename": "/assets/font/f-6x9f.fnt", "start": 12889869, "end": 12894176, "audio": 0}, {"filename": "/assets/font/f4x6.fnt", "start": 12894176, "end": 12897204, "audio": 0}, {"filename": "/assets/font/f6x8f.fnt", "start": 12897204, "end": 12901518, "audio": 0}, {"filename": "/assets/font/f6x9.fnt", "start": 12901518, "end": 12905928, "audio": 0}, {"filename": "/assets/font/f6x9f.fnt", "start": 12905928, "end": 12910235, "audio": 0}, {"filename": "/assets/font/fpad.fnt", "start": 12910235, "end": 12911883, "audio": 0}, {"filename": "/assets/font/infofont.def", "start": 12911883, "end": 12912574, "audio": 0}, {"filename": "/assets/font/jg.fnt", "start": 12912574, "end": 12919603, "audio": 0}, {"filename": "/assets/font/msgothic-tt36.def", "start": 12919603, "end": 12920308, "audio": 0}, {"filename": "/assets/font/mssansserif-tt36.def", "start": 12920308, "end": 12921000, "audio": 0}, {"filename": "/assets/font/n4x6.fnt", "start": 12921000, "end": 12922329, "audio": 0}, {"filename": "/assets/font/name1.fnt", "start": 12922329, "end": 12926188, "audio": 0}, {"filename": "/assets/font/name14.def", "start": 12926188, "end": 12926847, "audio": 0}, {"filename": "/assets/font/name14.sff", "start": 12926847, "end": 12947410, "audio": 0}, {"filename": "/assets/font/num1.def", "start": 12947410, "end": 12948077, "audio": 0}, {"filename": "/assets/font/num1.fnt", "start": 12948077, "end": 12950554, "audio": 0}, {"filename": "/assets/font/num1.sff", "start": 12950554, "end": 12960657, "audio": 0}, {"filename": "/assets/font/num48.def", "start": 12960657, "end": 12961327, "audio": 0}, {"filename": "/assets/font/num48.sff", "start": 12961327, "end": 12977631, "audio": 0}, {"filename": "/assets/font/options.def", "start": 12977631, "end": 12978322, "audio": 0}, {"filename": "/assets/sound/fanboy.mp3", "start": 12978322, "end": 13218442, "audio": 1}, {"filename": "/assets/sound/select.mp3", "start": 13218442, "end": 13842852, "audio": 1}, {"filename": "/assets/stages/fanboy.def", "start": 13842852, "end": 13844580, "audio": 0}, {"filename": "/assets/stages/fanboy.mp3", "start": 13844580, "end": 14084700, "audio": 1}, {"filename": "/assets/stages/fanboy.sff", "start": 14084700, "end": 14601719, "audio": 0}, {"filename": "/assets/stages/kfm.def", "start": 14601719, "end": 14613098, "audio": 0}, {"filename": "/assets/stages/kfm.sff", "start": 14613098, "end": 14842857, "audio": 0}, {"filename": "/assets/stages/stage0.def", "start": 14842857, "end": 14854060, "audio": 0}, {"filename": "/assets/stages/stage0.sff", "start": 14854060, "end": 14858262, "audio": 0}], "remote_package_size": 14858262, "package_uuid": "eab3f641-1ed6-4592-9ac6-308e7a25c275"});

})();
