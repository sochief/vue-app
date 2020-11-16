"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  data: function data() {
    return {
      searchName: '',
      names: ["you", "are", "such", "good"]
    };
  },
  computed: {
    filteredNames: function filteredNames() {
      var _this = this;

      return this.names.filter(function (name) {
        return name.toLowerCase().indexOf(_this.searchName.toLowerCase()) !== -1;
      });
    }
  }
}; //mixins can be initialized globallyin the main file as well

exports["default"] = _default;