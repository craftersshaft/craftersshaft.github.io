
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
 loadPackage({"files": [{"filename": "/assets/chars/creffy/creffy.ai", "start": 0, "end": 28020, "audio": 0}, {"filename": "/assets/chars/creffy/creffy.air", "start": 28020, "end": 45894, "audio": 0}, {"filename": "/assets/chars/creffy/creffy.cmd", "start": 45894, "end": 62220, "audio": 0}, {"filename": "/assets/chars/creffy/creffy.cns", "start": 62220, "end": 148381, "audio": 0}, {"filename": "/assets/chars/creffy/creffy.def", "start": 148381, "end": 149825, "audio": 0}, {"filename": "/assets/chars/creffy/creffy.sff", "start": 149825, "end": 365070, "audio": 0}, {"filename": "/assets/chars/creffy/creffy.snd", "start": 365070, "end": 1913627, "audio": 0}, {"filename": "/assets/chars/creffy/green.act", "start": 1913627, "end": 1914395, "audio": 0}, {"filename": "/assets/chars/creffy/neilmaybe.act", "start": 1914395, "end": 1915163, "audio": 0}, {"filename": "/assets/chars/creffy/normal.act", "start": 1915163, "end": 1915931, "audio": 0}, {"filename": "/assets/chars/creffy/orange.act", "start": 1915931, "end": 1916699, "audio": 0}, {"filename": "/assets/chars/creffy/readme.txt", "start": 1916699, "end": 1916921, "audio": 0}, {"filename": "/assets/chars/creffy/temmie.act", "start": 1916921, "end": 1917689, "audio": 0}, {"filename": "/assets/chars/suave/ending.def", "start": 1917689, "end": 1919736, "audio": 0}, {"filename": "/assets/chars/suave/ending.sff", "start": 1919736, "end": 1952703, "audio": 0}, {"filename": "/assets/chars/suave/intro.def", "start": 1952703, "end": 1955692, "audio": 0}, {"filename": "/assets/chars/suave/intro.sff", "start": 1955692, "end": 2015363, "audio": 0}, {"filename": "/assets/chars/suave/sd.air", "start": 2015363, "end": 2102207, "audio": 0}, {"filename": "/assets/chars/suave/sd.cmd", "start": 2102207, "end": 2114658, "audio": 0}, {"filename": "/assets/chars/suave/sd.cns", "start": 2114658, "end": 2184694, "audio": 0}, {"filename": "/assets/chars/suave/sd.sff", "start": 2184694, "end": 2749472, "audio": 0}, {"filename": "/assets/chars/suave/sd.snd", "start": 2749472, "end": 2826103, "audio": 0}, {"filename": "/assets/chars/suave/suave.act", "start": 2826103, "end": 2826871, "audio": 0}, {"filename": "/assets/chars/suave/suave.def", "start": 2826871, "end": 2827583, "audio": 0}, {"filename": "/assets/chars/suave/suave2.act", "start": 2827583, "end": 2828351, "audio": 0}, {"filename": "/assets/chars/suave/suave3.act", "start": 2828351, "end": 2829119, "audio": 0}, {"filename": "/assets/chars/suave/suave4.act", "start": 2829119, "end": 2829887, "audio": 0}, {"filename": "/assets/chars/suave/suave5.act", "start": 2829887, "end": 2830655, "audio": 0}, {"filename": "/assets/chars/suave/suave6.act", "start": 2830655, "end": 2831423, "audio": 0}, {"filename": "/assets/chars/suave/suaveblack.act", "start": 2831423, "end": 2832191, "audio": 0}, {"filename": "/assets/chars/theguy/readme.txt", "start": 2832191, "end": 2832413, "audio": 0}, {"filename": "/assets/chars/theguy/theguy.ai", "start": 2832413, "end": 2860433, "audio": 0}, {"filename": "/assets/chars/theguy/theguy.air", "start": 2860433, "end": 2879064, "audio": 0}, {"filename": "/assets/chars/theguy/theguy.cmd", "start": 2879064, "end": 2894768, "audio": 0}, {"filename": "/assets/chars/theguy/theguy.cns", "start": 2894768, "end": 2985383, "audio": 0}, {"filename": "/assets/chars/theguy/theguy.def", "start": 2985383, "end": 2986728, "audio": 0}, {"filename": "/assets/chars/theguy/theguy.sff", "start": 2986728, "end": 3344233, "audio": 0}, {"filename": "/assets/chars/theguy/theguy.snd", "start": 3344233, "end": 9229336, "audio": 0}, {"filename": "/assets/data/common.snd", "start": 9229336, "end": 9302041, "audio": 0}, {"filename": "/assets/data/common1.cns", "start": 9302041, "end": 9345240, "audio": 0}, {"filename": "/assets/data/fight.def", "start": 9345240, "end": 9361698, "audio": 0}, {"filename": "/assets/data/fight.sff", "start": 9361698, "end": 9432360, "audio": 0}, {"filename": "/assets/data/fight.snd", "start": 9432360, "end": 9521939, "audio": 0}, {"filename": "/assets/data/fightfx.air", "start": 9521939, "end": 9525860, "audio": 0}, {"filename": "/assets/data/fightfx.sff", "start": 9525860, "end": 9674075, "audio": 0}, {"filename": "/assets/data/font.def", "start": 9674075, "end": 9674793, "audio": 0}, {"filename": "/assets/data/mugen.cfg", "start": 9674793, "end": 9690075, "audio": 0}, {"filename": "/assets/data/osu.air", "start": 9690075, "end": 9690435, "audio": 0}, {"filename": "/assets/data/osu.sff", "start": 9690435, "end": 9709532, "audio": 0}, {"filename": "/assets/data/osu.snd", "start": 9709532, "end": 9752682, "audio": 0}, {"filename": "/assets/data/select.def", "start": 9752682, "end": 9756396, "audio": 0}, {"filename": "/assets/data/system.def", "start": 9756396, "end": 9771634, "audio": 0}, {"filename": "/assets/data/system.sff", "start": 9771634, "end": 9878061, "audio": 0}, {"filename": "/assets/data/system.snd", "start": 9878061, "end": 9887037, "audio": 0}, {"filename": "/assets/data/thieving-mice.ttf", "start": 9887037, "end": 9922421, "audio": 0}, {"filename": "/assets/data/big/readme.txt", "start": 9922421, "end": 9922949, "audio": 0}, {"filename": "/assets/data/big/system.def", "start": 9922949, "end": 9943088, "audio": 0}, {"filename": "/assets/data/kfm/credits.def", "start": 9943088, "end": 9944667, "audio": 0}, {"filename": "/assets/data/kfm/credits.sff", "start": 9944667, "end": 9973998, "audio": 0}, {"filename": "/assets/data/kfm/gameover.def", "start": 9973998, "end": 9975075, "audio": 0}, {"filename": "/assets/data/kfm/gameover.sff", "start": 9975075, "end": 9980842, "audio": 0}, {"filename": "/assets/data/kfm/intro.def", "start": 9980842, "end": 9984125, "audio": 0}, {"filename": "/assets/data/kfm/intro.sff", "start": 9984125, "end": 10081708, "audio": 0}, {"filename": "/assets/data/kfm/kfmtitle.sff", "start": 10081708, "end": 10112602, "audio": 0}, {"filename": "/assets/data/kfm/logo.def", "start": 10112602, "end": 10113057, "audio": 0}, {"filename": "/assets/data/kfm/logo.sff", "start": 10113057, "end": 10121054, "audio": 0}, {"filename": "/assets/data/kfm/select.def", "start": 10121054, "end": 10124576, "audio": 0}, {"filename": "/assets/data/kfm/system.def", "start": 10124576, "end": 10138660, "audio": 0}, {"filename": "/assets/data/mugen1/fight.def", "start": 10138660, "end": 10156849, "audio": 0}, {"filename": "/assets/data/mugen1/fight.sff", "start": 10156849, "end": 10402556, "audio": 0}, {"filename": "/assets/data/mugen1/system.def", "start": 10402556, "end": 10423331, "audio": 0}, {"filename": "/assets/data/mugen1/system.sff", "start": 10423331, "end": 11391047, "audio": 0}, {"filename": "/assets/font/arcade.def", "start": 11391047, "end": 11391715, "audio": 0}, {"filename": "/assets/font/arcade.sff", "start": 11391715, "end": 11433799, "audio": 0}, {"filename": "/assets/font/enter48.def", "start": 11433799, "end": 11434431, "audio": 0}, {"filename": "/assets/font/enter48.sff", "start": 11434431, "end": 11478441, "audio": 0}, {"filename": "/assets/font/f-4x6.def", "start": 11478441, "end": 11479109, "audio": 0}, {"filename": "/assets/font/f-4x6.fnt", "start": 11479109, "end": 11482137, "audio": 0}, {"filename": "/assets/font/f-4x6.sff", "start": 11482137, "end": 11487768, "audio": 0}, {"filename": "/assets/font/f-6x8f.fnt", "start": 11487768, "end": 11492082, "audio": 0}, {"filename": "/assets/font/f-6x9.def", "start": 11492082, "end": 11492750, "audio": 0}, {"filename": "/assets/font/f-6x9.fnt", "start": 11492750, "end": 11497160, "audio": 0}, {"filename": "/assets/font/f-6x9.sff", "start": 11497160, "end": 11503779, "audio": 0}, {"filename": "/assets/font/f-6x9f.fnt", "start": 11503779, "end": 11508086, "audio": 0}, {"filename": "/assets/font/f4x6.fnt", "start": 11508086, "end": 11511114, "audio": 0}, {"filename": "/assets/font/f6x8f.fnt", "start": 11511114, "end": 11515428, "audio": 0}, {"filename": "/assets/font/f6x9.fnt", "start": 11515428, "end": 11519838, "audio": 0}, {"filename": "/assets/font/f6x9f.fnt", "start": 11519838, "end": 11524145, "audio": 0}, {"filename": "/assets/font/fpad.fnt", "start": 11524145, "end": 11525793, "audio": 0}, {"filename": "/assets/font/infofont.def", "start": 11525793, "end": 11526484, "audio": 0}, {"filename": "/assets/font/jg.fnt", "start": 11526484, "end": 11533513, "audio": 0}, {"filename": "/assets/font/msgothic-tt36.def", "start": 11533513, "end": 11534218, "audio": 0}, {"filename": "/assets/font/mssansserif-tt36.def", "start": 11534218, "end": 11534910, "audio": 0}, {"filename": "/assets/font/n4x6.fnt", "start": 11534910, "end": 11536239, "audio": 0}, {"filename": "/assets/font/name1.fnt", "start": 11536239, "end": 11540098, "audio": 0}, {"filename": "/assets/font/name14.def", "start": 11540098, "end": 11540757, "audio": 0}, {"filename": "/assets/font/name14.sff", "start": 11540757, "end": 11561320, "audio": 0}, {"filename": "/assets/font/num1.def", "start": 11561320, "end": 11561987, "audio": 0}, {"filename": "/assets/font/num1.fnt", "start": 11561987, "end": 11564464, "audio": 0}, {"filename": "/assets/font/num1.sff", "start": 11564464, "end": 11574567, "audio": 0}, {"filename": "/assets/font/num48.def", "start": 11574567, "end": 11575237, "audio": 0}, {"filename": "/assets/font/num48.sff", "start": 11575237, "end": 11591541, "audio": 0}, {"filename": "/assets/font/options.def", "start": 11591541, "end": 11592232, "audio": 0}, {"filename": "/assets/sound/fanboy.mp3", "start": 11592232, "end": 11832352, "audio": 1}, {"filename": "/assets/sound/select.mp3", "start": 11832352, "end": 12456762, "audio": 1}, {"filename": "/assets/stages/fanboy.def", "start": 12456762, "end": 12458490, "audio": 0}, {"filename": "/assets/stages/fanboy.mp3", "start": 12458490, "end": 12698610, "audio": 1}, {"filename": "/assets/stages/fanboy.sff", "start": 12698610, "end": 13215629, "audio": 0}, {"filename": "/assets/stages/kfm.def", "start": 13215629, "end": 13227008, "audio": 0}, {"filename": "/assets/stages/kfm.sff", "start": 13227008, "end": 13456767, "audio": 0}, {"filename": "/assets/stages/stage0.def", "start": 13456767, "end": 13467970, "audio": 0}, {"filename": "/assets/stages/stage0.sff", "start": 13467970, "end": 13472172, "audio": 0}], "remote_package_size": 13472172, "package_uuid": "e1947d9c-6562-4b06-a17b-82c3ee487894"});

})();
