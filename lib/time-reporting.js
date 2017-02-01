var TimeReporting, _isUndefined = require('../mixin');

module.exports = TimeReporting = function (api) {
    this.api = api;
    this.client = api.client;
};

TimeReporting.prototype.listByProject = function (options, cb) {
    if (_isUndefined(options, 'project_id', 'from', 'to')) {
        return cb(new Error('getting all task assignments by project requires an id'));
    }
    var url = '/projects/' + options.project_id + 
              '/entries?from=' + options.from +
              '&to=' + options.to;
    this.client.get(url, {}, cb);
};