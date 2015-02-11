
/**
 * TREP API
 */
module.exports.LiveRepo = function() {
	
	
    this.records = [ ];
    this.nextId = 1;
}

module.exports.LiveRepo.prototype = {
	find : function (id) {
    var record = this.records.filter(function(item) {
        return item.recID == id;
    })[0];
    if (null == record) {
        throw new Error('record not found');
    }
    return record;
},

findIndex : function (id) {
    var index = null;
    this.records.forEach(function(item, key) {
        if (item.recID == id) {
            index = key;
        }
    });
    if (null == index) {
        throw new Error('record not found');
    }
    return index;
},
/**
 * Retrieve all records
 * Returns: array of records
 */
findAll : function () {
    return this.records;
},
/**
 * Save a record (create or update)
 * Param: record the record to save
 */
save : function (record) {
    if (record.recID == null || record.recID == 0) {
        record.recID = this.nextId;
        this.records.push(record);
        this.nextId++;
    } else {
        var index = this.findIndex(record.recID);
        this.records[index] = record;
    }
 
},
/**
 * Remove a record
 * Param: id the of the record to remove
 */
remove : function (id) {
    var index = this.findIndex(id);
    this.records.splice(index, 1);
}
}