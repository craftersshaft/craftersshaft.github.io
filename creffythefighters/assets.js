
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
 loadPackage({"files": [{"filename": "/assets/chars/creffy/creffy.ai", "start": 0, "end": 28020, "audio": 0}, {"filename": "/assets/chars/creffy/creffy.air", "start": 28020, "end": 45894, "audio": 0}, {"filename": "/assets/chars/creffy/creffy.cmd", "start": 45894, "end": 62220, "audio": 0}, {"filename": "/assets/chars/creffy/creffy.cns", "start": 62220, "end": 148524, "audio": 0}, {"filename": "/assets/chars/creffy/creffy.def", "start": 148524, "end": 149968, "audio": 0}, {"filename": "/assets/chars/creffy/creffy.sff", "start": 149968, "end": 363926, "audio": 0}, {"filename": "/assets/chars/creffy/creffy.snd", "start": 363926, "end": 1912483, "audio": 0}, {"filename": "/assets/chars/creffy/green.act", "start": 1912483, "end": 1913251, "audio": 0}, {"filename": "/assets/chars/creffy/neilmaybe.act", "start": 1913251, "end": 1914019, "audio": 0}, {"filename": "/assets/chars/creffy/normal.act", "start": 1914019, "end": 1914787, "audio": 0}, {"filename": "/assets/chars/creffy/orange.act", "start": 1914787, "end": 1915555, "audio": 0}, {"filename": "/assets/chars/creffy/readme.txt", "start": 1915555, "end": 1915777, "audio": 0}, {"filename": "/assets/chars/creffy/temmie.act", "start": 1915777, "end": 1916545, "audio": 0}, {"filename": "/assets/chars/suave/ending.def", "start": 1916545, "end": 1918592, "audio": 0}, {"filename": "/assets/chars/suave/ending.sff", "start": 1918592, "end": 1951559, "audio": 0}, {"filename": "/assets/chars/suave/intro.def", "start": 1951559, "end": 1954548, "audio": 0}, {"filename": "/assets/chars/suave/intro.sff", "start": 1954548, "end": 2014219, "audio": 0}, {"filename": "/assets/chars/suave/sd.air", "start": 2014219, "end": 2101063, "audio": 0}, {"filename": "/assets/chars/suave/sd.cmd", "start": 2101063, "end": 2113514, "audio": 0}, {"filename": "/assets/chars/suave/sd.cns", "start": 2113514, "end": 2183550, "audio": 0}, {"filename": "/assets/chars/suave/sd.sff", "start": 2183550, "end": 2748328, "audio": 0}, {"filename": "/assets/chars/suave/sd.snd", "start": 2748328, "end": 2824959, "audio": 0}, {"filename": "/assets/chars/suave/suave.act", "start": 2824959, "end": 2825727, "audio": 0}, {"filename": "/assets/chars/suave/suave.def", "start": 2825727, "end": 2826439, "audio": 0}, {"filename": "/assets/chars/suave/suave2.act", "start": 2826439, "end": 2827207, "audio": 0}, {"filename": "/assets/chars/suave/suave3.act", "start": 2827207, "end": 2827975, "audio": 0}, {"filename": "/assets/chars/suave/suave4.act", "start": 2827975, "end": 2828743, "audio": 0}, {"filename": "/assets/chars/suave/suave5.act", "start": 2828743, "end": 2829511, "audio": 0}, {"filename": "/assets/chars/suave/suave6.act", "start": 2829511, "end": 2830279, "audio": 0}, {"filename": "/assets/chars/suave/suaveblack.act", "start": 2830279, "end": 2831047, "audio": 0}, {"filename": "/assets/data/common.snd", "start": 2831047, "end": 2903752, "audio": 0}, {"filename": "/assets/data/common1.cns", "start": 2903752, "end": 2946951, "audio": 0}, {"filename": "/assets/data/fight.def", "start": 2946951, "end": 2963409, "audio": 0}, {"filename": "/assets/data/fight.sff", "start": 2963409, "end": 3034071, "audio": 0}, {"filename": "/assets/data/fight.snd", "start": 3034071, "end": 3123650, "audio": 0}, {"filename": "/assets/data/fightfx.air", "start": 3123650, "end": 3127571, "audio": 0}, {"filename": "/assets/data/fightfx.sff", "start": 3127571, "end": 3275786, "audio": 0}, {"filename": "/assets/data/font.def", "start": 3275786, "end": 3276504, "audio": 0}, {"filename": "/assets/data/mugen.cfg", "start": 3276504, "end": 3291786, "audio": 0}, {"filename": "/assets/data/osu.air", "start": 3291786, "end": 3292146, "audio": 0}, {"filename": "/assets/data/osu.sff", "start": 3292146, "end": 3311243, "audio": 0}, {"filename": "/assets/data/osu.snd", "start": 3311243, "end": 3354393, "audio": 0}, {"filename": "/assets/data/select.def", "start": 3354393, "end": 3358081, "audio": 0}, {"filename": "/assets/data/system.def", "start": 3358081, "end": 3373600, "audio": 0}, {"filename": "/assets/data/system.sff", "start": 3373600, "end": 3480027, "audio": 0}, {"filename": "/assets/data/system.snd", "start": 3480027, "end": 3489003, "audio": 0}, {"filename": "/assets/data/thieving-mice.ttf", "start": 3489003, "end": 3524387, "audio": 0}, {"filename": "/assets/data/big/readme.txt", "start": 3524387, "end": 3524915, "audio": 0}, {"filename": "/assets/data/big/system.def", "start": 3524915, "end": 3545054, "audio": 0}, {"filename": "/assets/data/kfm/credits.def", "start": 3545054, "end": 3546633, "audio": 0}, {"filename": "/assets/data/kfm/credits.sff", "start": 3546633, "end": 3575964, "audio": 0}, {"filename": "/assets/data/kfm/gameover.def", "start": 3575964, "end": 3577041, "audio": 0}, {"filename": "/assets/data/kfm/gameover.sff", "start": 3577041, "end": 3582808, "audio": 0}, {"filename": "/assets/data/kfm/intro.def", "start": 3582808, "end": 3586091, "audio": 0}, {"filename": "/assets/data/kfm/intro.sff", "start": 3586091, "end": 3683674, "audio": 0}, {"filename": "/assets/data/kfm/kfmtitle.sff", "start": 3683674, "end": 3714568, "audio": 0}, {"filename": "/assets/data/kfm/logo.def", "start": 3714568, "end": 3715023, "audio": 0}, {"filename": "/assets/data/kfm/logo.sff", "start": 3715023, "end": 3723020, "audio": 0}, {"filename": "/assets/data/kfm/select.def", "start": 3723020, "end": 3726542, "audio": 0}, {"filename": "/assets/data/kfm/system.def", "start": 3726542, "end": 3740626, "audio": 0}, {"filename": "/assets/data/mugen1/fight.def", "start": 3740626, "end": 3758815, "audio": 0}, {"filename": "/assets/data/mugen1/fight.sff", "start": 3758815, "end": 4004522, "audio": 0}, {"filename": "/assets/data/mugen1/system.def", "start": 4004522, "end": 4025297, "audio": 0}, {"filename": "/assets/data/mugen1/system.sff", "start": 4025297, "end": 4993013, "audio": 0}, {"filename": "/assets/font/arcade.def", "start": 4993013, "end": 4993681, "audio": 0}, {"filename": "/assets/font/arcade.sff", "start": 4993681, "end": 5035765, "audio": 0}, {"filename": "/assets/font/enter48.def", "start": 5035765, "end": 5036397, "audio": 0}, {"filename": "/assets/font/enter48.sff", "start": 5036397, "end": 5080407, "audio": 0}, {"filename": "/assets/font/f-4x6.def", "start": 5080407, "end": 5081075, "audio": 0}, {"filename": "/assets/font/f-4x6.fnt", "start": 5081075, "end": 5084103, "audio": 0}, {"filename": "/assets/font/f-4x6.sff", "start": 5084103, "end": 5089734, "audio": 0}, {"filename": "/assets/font/f-6x8f.fnt", "start": 5089734, "end": 5094048, "audio": 0}, {"filename": "/assets/font/f-6x9.def", "start": 5094048, "end": 5094716, "audio": 0}, {"filename": "/assets/font/f-6x9.fnt", "start": 5094716, "end": 5099126, "audio": 0}, {"filename": "/assets/font/f-6x9.sff", "start": 5099126, "end": 5105745, "audio": 0}, {"filename": "/assets/font/f-6x9f.fnt", "start": 5105745, "end": 5110052, "audio": 0}, {"filename": "/assets/font/f4x6.fnt", "start": 5110052, "end": 5113080, "audio": 0}, {"filename": "/assets/font/f6x8f.fnt", "start": 5113080, "end": 5117394, "audio": 0}, {"filename": "/assets/font/f6x9.fnt", "start": 5117394, "end": 5121804, "audio": 0}, {"filename": "/assets/font/f6x9f.fnt", "start": 5121804, "end": 5126111, "audio": 0}, {"filename": "/assets/font/fpad.fnt", "start": 5126111, "end": 5127759, "audio": 0}, {"filename": "/assets/font/infofont.def", "start": 5127759, "end": 5128450, "audio": 0}, {"filename": "/assets/font/jg.fnt", "start": 5128450, "end": 5135479, "audio": 0}, {"filename": "/assets/font/msgothic-tt36.def", "start": 5135479, "end": 5136184, "audio": 0}, {"filename": "/assets/font/mssansserif-tt36.def", "start": 5136184, "end": 5136876, "audio": 0}, {"filename": "/assets/font/n4x6.fnt", "start": 5136876, "end": 5138205, "audio": 0}, {"filename": "/assets/font/name1.fnt", "start": 5138205, "end": 5142064, "audio": 0}, {"filename": "/assets/font/name14.def", "start": 5142064, "end": 5142723, "audio": 0}, {"filename": "/assets/font/name14.sff", "start": 5142723, "end": 5163286, "audio": 0}, {"filename": "/assets/font/num1.def", "start": 5163286, "end": 5163953, "audio": 0}, {"filename": "/assets/font/num1.fnt", "start": 5163953, "end": 5166430, "audio": 0}, {"filename": "/assets/font/num1.sff", "start": 5166430, "end": 5176533, "audio": 0}, {"filename": "/assets/font/num48.def", "start": 5176533, "end": 5177203, "audio": 0}, {"filename": "/assets/font/num48.sff", "start": 5177203, "end": 5193507, "audio": 0}, {"filename": "/assets/font/options.def", "start": 5193507, "end": 5194198, "audio": 0}, {"filename": "/assets/sound/fanboy.mp3", "start": 5194198, "end": 5434318, "audio": 1}, {"filename": "/assets/sound/select.mp3", "start": 5434318, "end": 6058728, "audio": 1}, {"filename": "/assets/stages/kfm.def", "start": 6058728, "end": 6070107, "audio": 0}, {"filename": "/assets/stages/kfm.sff", "start": 6070107, "end": 6299866, "audio": 0}, {"filename": "/assets/stages/stage0.def", "start": 6299866, "end": 6311069, "audio": 0}, {"filename": "/assets/stages/stage0.sff", "start": 6311069, "end": 6315271, "audio": 0}], "remote_package_size": 6315271, "package_uuid": "80a55c11-a6d3-42df-86f9-077daf9bb8fa"});

})();
