shadow$provide.module$vendor$jsrand = function(global, require, module, exports) {
  function _arrayLikeToArray(arr, len) {
    if (null == len || len > arr.length) {
      len = arr.length;
    }
    for (var i = 0, arr2 = Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }
  function _typeof(obj) {
    "@babel/helpers - typeof";
    _typeof = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(obj) {
      return typeof obj;
    } : function(obj) {
      return obj && "function" === typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj);
  }
  function Srand(seed) {
    null != seed ? this.seed(seed) : this.randomize();
  }
  Srand.prototype = {};
  Srand.seed = Srand.prototype.seed = function(seed) {
    if (null == seed) {
      return this._seed;
    }
    this._mz = 123456789;
    return this._mw = this._seed = seed;
  };
  Srand.randomize = Srand.prototype.randomize = function() {
    return this.seed(1 + Math.floor(4294967295 * Math.random()));
  };
  Srand.getState = Srand.prototype.getState = function() {
    return {seed:this._seed, mz:this._mz, mw:this._mw};
  };
  Srand.setState = Srand.prototype.setState = function(state) {
    if (null == state || "object" !== _typeof(state) || "number" !== typeof state.seed || "number" !== typeof state.mz || "number" !== typeof state.mw) {
      throw Error("Invalid state.");
    }
    this._seed = state.seed;
    this._mz = state.mz;
    this._mw = state.mw;
  };
  Srand.random = Srand.prototype.random = function() {
    null == this._seed && this.randomize();
    var mz = this._mz, mw = this._mw;
    mz = 36969 * (mz & 65535) + (mz >> 16) & 4294967295;
    mw = 18000 * (mw & 65535) + (mw >> 16) & 4294967295;
    this._mz = mz;
    this._mw = mw;
    return 0.5 + ((mz << 16) + mw & 4294967295) / 4294967296;
  };
  Srand.inRange = Srand.prototype.inRange = function(a, b) {
    return a + this.random() * (b - a);
  };
  Srand.intInRange = Srand.prototype.intInRange = function(min, max) {
    return min + Math.floor(this.random() * (max - min + 1));
  };
  Srand.choice = Srand.prototype.choice = function(arr) {
    if (0 === arr.length) {
      throw Error("Cannot choose random element from empty array.");
    }
    var randomIndex = this.intInRange(0, arr.length - 1);
    return arr[randomIndex];
  };
  Srand.choices = Srand.prototype.choices = function(arr, k) {
    for (var sample = Array(k), i = 0; i < k; i++) {
      sample[i] = this.choice(arr);
    }
    return sample;
  };
  Srand.sample = Srand.prototype.sample = function(arr, k) {
    if (k > arr.length) {
      throw Error("Sample size cannot exceed population size.");
    }
    if (k === arr.length) {
      k = Array.isArray(arr) ? _arrayLikeToArray(arr) : void 0;
      k || (k = "undefined" !== typeof Symbol && Symbol.iterator in Object(arr) ? Array.from(arr) : void 0);
      if (!k) {
        a: {
          if (arr) {
            if ("string" === typeof arr) {
              k = _arrayLikeToArray(arr, void 0);
              break a;
            }
            k = Object.prototype.toString.call(arr).slice(8, -1);
            "Object" === k && arr.constructor && (k = arr.constructor.name);
            if ("Map" === k || "Set" === k) {
              k = Array.from(arr);
              break a;
            }
            if ("Arguments" === k || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(k)) {
              k = _arrayLikeToArray(arr, void 0);
              break a;
            }
          }
          k = void 0;
        }
      }
      if (!(arr = k)) {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      return arr;
    }
    for (var maxIndex = arr.length - 1, sample = Array(k), selected = {}, i = 0, j; i < k; i++) {
      do {
        j = this.intInRange(0, maxIndex);
      } while (selected[j]);
      sample[i] = arr[j];
      selected[j] = !0;
    }
    return sample;
  };
  Srand.shuffle = Srand.prototype.shuffle = function(arr) {
    for (var i = arr.length - 1; 0 < i; i--) {
      var j = this.intInRange(0, i - 1), temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    return arr;
  };
  Srand._oldSrand = void 0;
  Srand.noConflict = function() {
    return Srand;
  };
  module.exports = Srand;
};

//# sourceMappingURL=module$vendor$jsrand.js.map
