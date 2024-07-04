
//
(function($0) {
  'use strict';
  var CHOICE = 'Check_box'; // field code of checkbox field
  var BOM = 'attach_bom'; // field code of text field to display/hide
  var Device = 'attach_device_prog'; // field code of table field to display/hide
  var PPL = 'prepared_partlist'; // field code of group field to display/hide
  var CPL = 'checked_partlist';
  var APL = 'approved_partlist';
  var IPL = 'issue_partlist';
  var CFC = 'confirm_code';
  var LNK = 'file_link';
  //var Status = 'Status';
  

  var events =['app.record.create.show', 'app.record.edit.show','app.record.detail.show'];
  //var events = ['app.record.create.change.' + CHOICE, 'app.record.edit.change.' + CHOICE];

  kintone.events.on('app.record.detail.show', function(event) {
    var record = event.record;
    var choiceVal = record[CHOICE].value;
    //var StatusVal = record[Status].value;
    console.log('Onload on '+ events + 'Check box :' + choiceVal);

    // State which checkbox labels will display/hide fields
    if (choiceVal.indexOf('File Link') = 1) {
      kintone.app.record.setFieldShown(LNK, true);
    } else {
      kintone.app.record.setFieldShown(LNK, false);
    }
    if (choiceVal.indexOf('Prepared partlist') >= 0) {      
      kintone.app.record.setFieldShown(PPL, true);
      kintone.app.record.setFieldShown(CPL, true);
      kintone.app.record.setFieldShown(APL, true);
      kintone.app.record.setFieldShown(LNK, false);
    } else {
      kintone.app.record.setFieldShown(PPL, false);
      kintone.app.record.setFieldShown(CPL, false);
      kintone.app.record.setFieldShown(APL, false);
    }
    if (choiceVal.indexOf('Issue partlist') >= 0) {
      kintone.app.record.setFieldShown(IPL, true);
      kintone.app.record.setFieldShown(PPL, false);
      kintone.app.record.setFieldShown(CPL, false);
      kintone.app.record.setFieldShown(APL, false);
    } else {
      kintone.app.record.setFieldShown(IPL, false);
    }

  return event;
  });
})();
